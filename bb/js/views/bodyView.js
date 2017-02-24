define([
    'jquery',
    'backbone',
    'myTemplates/main-body-template',
    'myTemplates/adv_partial',
    'handlebars'
], function ($, Backbone, bodyTemplate, advTemplate, Handlebars) {
    'use strict';
    var bodyView = Backbone.View.extend({
        template: bodyTemplate,
        initialize: function () {
            console.log('BodyView initialized');
            this.render();
        },
        render: function () {
            Handlebars.registerPartial('carousel_partial', advTemplate);
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return bodyView;
});