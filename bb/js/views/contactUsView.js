define([
    'jquery',
    'backbone',
    'myTemplates/contact-us-template'
], function ($, Backbone, contactTemplate) {
    'use strict';
    var contactView = Backbone.View.extend({
        template: contactTemplate,
        events: {
            'submit #signupform': 'singupAction'
        },
        initialize: function () {
            console.log('AboutView initialized');
            this.render();
        },
        singupAction: function (event) {
            if (event) {
                event.preventDefault();
            }
            var data = $(event.currentTarget).serializeObject();
            console.log(data);
        },

        render: function () {
            // var abTemplate = _.template($('#contact-us-template').html(), {});
            // this.$el.html(abTemplate());
            this.$el.html(this.template());
        }
    });
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    return contactView;
});