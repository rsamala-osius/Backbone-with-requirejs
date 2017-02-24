define([
    'jquery',
    'underscore',
    'backbone',
    'myTemplates/contact-us-template',
    'models/signupModel',
    'collections/registerCollection'
], function ($, _, Backbone, contactTemplate, signupModel, regCollection) {
    'use strict';
    var contactView = Backbone.View.extend({
        template: contactTemplate,
        collection: new regCollection(),
        events: {
            'submit #signupform': 'singupAction'
        },
        initialize: function () {
            console.log('contactView initialized');
            this.data = this.data || {};
            console.log(this);
            this.render();
        },
        singupAction: function (event) {
            if (event) {
                event.preventDefault();
            }
            var formData = $(event.currentTarget).serializeObject();
            var regModel = new signupModel();
            console.log(formData);
            regModel.on('invalid',  this.saveErrorCallback);

            regModel.save(formData, {
                //attrs: $.extend(true, {}, formData),
                success: _.bind(this.saveSuccessCallback,this),
                error: _.bind(this.saveErrorCallback,this)
            });
            this.render();

        },
        saveSuccessCallback: function (model, reponse) {
            this.collection.add(model);
            console.log(this.collection);
        },
        saveErrorCallback: function (model, response) {
            console.log(model);
            console.log(response);
            // this.data = this.data || {};
            // this.data.errorMessage = "Errors";
        },

        render: function () {
            // var abTemplate = _.template($('#contact-us-template').html(), {});
            // this.$el.html(abTemplate());
            this.data.message = "Hello";
            console.log(this.data);
            this.$el.html(this.template(this.data));
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