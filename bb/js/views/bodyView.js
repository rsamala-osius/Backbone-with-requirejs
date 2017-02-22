define([
    'jquery',
    'backbone',
    'myTemplates/main-body-template'

], function ($, Backbone, bodyTemplate) {
    'use strict';
    var bodyView = Backbone.View.extend({
        template: bodyTemplate,
        initialize: function () {
            console.log('BodyView initialized');
            this.render();
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return bodyView;
});