define([
    'backbone',
    'jquery',
    'bootstrap',
    'myTemplates/aboutus-body-template',
    'myTemplates/contact-us-template',
    'myTemplates/header-template',
    'myTemplates/main-body-template',
    'myTemplates/footer'
],
    function (Backbone, $, BS, abtTemplate, contactTemplate, headerTemplate, bodyTemplate, footerTemplate) {
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

        var mainView = Backbone.View.extend({
            template: headerTemplate,
            //el: '#header-template',
            initialize: function () {
                console.log('View initialized');
                this.data = this.data || {};
                this.render();
            },
            render: function () {
                // var hTemplate = _.template($('#header-template').html(), {});
                t
                this.data.message = "hellow";
                this.$el.html(this.template(this.data));
            }
        });
       
    });