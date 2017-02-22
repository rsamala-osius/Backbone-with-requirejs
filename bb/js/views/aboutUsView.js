define([
    'backbone',
    'myTemplates/aboutus-body-template'
], function (Backbone, abtTemplate) {
    'use strict';
    var aboutView = Backbone.View.extend({
        template: abtTemplate,
        initialize: function () {
            console.log('AboutView initialized');
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });

    return aboutView;
});