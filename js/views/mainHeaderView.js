define([
    'backbone',
    'jquery',
    'bootstrap',
    'myTemplates/header-template'
],
    function (Backbone, $, BS, headerTemplate) {
        var mainView = Backbone.View.extend({
            template: headerTemplate,
            //el: '#header-template',
            initialize: function () {
                console.log('View initialized');
                this.render();
            },
            render: function () {
                // var hTemplate = _.template($('#header-template').html(), {});

                this.$el.html(this.template());
            }
        });
        return mainView;
    });