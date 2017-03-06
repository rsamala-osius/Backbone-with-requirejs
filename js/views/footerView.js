define([
    'backbone',
    'jquery',
    'bootstrap',
    'myTemplates/footer'
],
    function (Backbone, $, BS, footerTemplate) {

        return footerView = Backbone.View.extend({
            template: footerTemplate,
            initialize: function () {
                this.render();
            },
            render: function () {
                this.$el.html(this.template());
            }
        });
        

    });