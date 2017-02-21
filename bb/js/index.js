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
        var bodyView = Backbone.View.extend({
            template: bodyTemplate,
            initialize: function () {
                console.log('BodyView initialized');
                this.render();
            },
            render: function () {
                //var bTemplate = _.template($('#main-body-template').html(), {});
                var model = (this.model.toJSON());
                //this.$el.html(bTemplate(model));
                this.$el.html(this.template(model));

            }
        });
        var aboutView = Backbone.View.extend({
            template: abtTemplate,
            initialize: function () {
                console.log('AboutView initialized');
                this.render();
            },
            render: function () {
                // var abTemplate = _.template($('#aboutus-body-template').html(), {});
                // this.$el.html(abTemplate());
                this.$el.html(this.template());
            }
        });

        var contactView = Backbone.View.extend({
            template: contactTemplate,
            initialize: function () {
                console.log('AboutView initialized');
                this.render();
            },
            render: function () {
                // var abTemplate = _.template($('#contact-us-template').html(), {});
                // this.$el.html(abTemplate());
                this.$el.html(this.template());
            }
        });

        var footerView = Backbone.View.extend({
            template: footerTemplate,
            initialize: function () {
                this.render();
            },
            render: function () {
                this.$el.html(this.template());
            }
        });

        var mainModel = Backbone.Model.extend({
            defaults: {
                name: 'Raju',
            }
        });
        var main_model = new mainModel();

        var main_view = new mainView({ el: $('#header') });
        var fotoer_view = new footerView({ el: $('#footer') });
        //var body_view = new bodyView({ el: $('#body'), model: main_model });


        var appRouter = Backbone.Router.extend({
            routes: {
                '*actions': 'defaultRoute'
                // matches http://example.com/#anything-here
            }
        });

        var app_router = new appRouter;

        app_router.on('route:defaultRoute', function (actions) {
            console.log(actions);
            if (actions == 'about') {
                new aboutView({ el: $('#body') });
            } else if (actions == 'contact') {
                new contactView({ el: $('#body') });
            } else {
                new bodyView({ el: $('#body'), model: main_model });
            }
        });
        Backbone.history.start();

    });