define([
    'backbone',
    'jquery',
    'bootstrap'
], function (Backbone, $, BS) {

    var mainView = Backbone.View.extend({
        initialize: function () {
            console.log('View initialized');
            this.render();
        },
        render: function () {
            var hTemplate = _.template($('#header-template').html(), {});
            this.$el.html(hTemplate());
        }
    });
    var bodyView = Backbone.View.extend({
        initialize: function () {
            console.log('BodyView initialized');
            this.render();
        },
        render: function () {
            var bTemplate = _.template($('#main-body-template').html(), {});
            var model = (this.model.toJSON());
            this.$el.html(bTemplate(model));
        }
    });
    var aboutView = Backbone.View.extend({
        initialize: function () {
            console.log('AboutView initialized');
            this.render();
        },
        render: function () {
            var abTemplate = _.template($('#aboutus-body-template').html(), {});
            this.$el.html(abTemplate());
        }
    });

    var contactView = Backbone.View.extend({
        initialize: function () {
            console.log('AboutView initialized');
            this.render();
        },
        render: function () {
            var abTemplate = _.template($('#contact-us-template').html(), {});
            this.$el.html(abTemplate());
        }
    });

    var mainModel = Backbone.Model.extend({
        defaults: {
            name: 'Raju',
        }
    });
    var main_model = new mainModel();

    var main_view = new mainView({ el: $('#header') });
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