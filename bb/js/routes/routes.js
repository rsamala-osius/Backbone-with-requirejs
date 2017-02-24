define(['backbone'], function (Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'viewHome',
            '/': 'viewHome',
            'home': 'viewHome',
            'home/': 'viewHome',
            'about': 'viewAbout',
            'about/': 'viewAbout',
            'contact': 'viewContact',
            'contact/': 'viewContact',
            'signUp': 'viewSignUP',
            'signUp/': 'viewSignUP',
            'edit/:userid': 'editUser',
            'edit/:userid/': 'editUser',
            '*other': 'viewHome'
        },

        initialize: function () {
            console.log("Init....");
            require(['views/mainHeaderView'], function (headerView) {
                new headerView({ el: '#header' });
                console.log("header");
            });
            require(['views/footerView'], function (footerView) {
                new footerView({ el: '#footer' });
                console.log("footer");
            });

        },

        viewHome: function () {
            require(['views/bodyView', 'models/bodyModel'], function (bodyView, bodyModel) {
                new bodyView({ el: '#body', model: new bodyModel() });
                console.log("body");
            });

        },
        viewAbout: function () {
            require(['views/aboutUsView'], function (AboutView) {
                var aboutView = new AboutView({ el: '#body' });
                console.log("viewing About");
            });

        },
        viewContact: function () {
            require(['views/ContactUsView'], function (ContactView) {
                var contactView = new ContactView({ el: '#body' });
                console.log("viewing Contact");
            });
        },
        viewSignUP: function () {
            require(['views/signUpView'], function (signUpView) {
                var contactView = new signUpView({ el: '#body' });
                contactView.$el.find('#loginbox').hide();
                contactView.$el.find('#signupbox').show();
                console.log("viewing SignUP");
            });
        },
        editUser: function (userid) {
            require(['views/EditView'], function (EditView) {
                var editView = new EditView({ el: '.main-container' });
                console.log("editUser............");
                console.log(userid);
            });
        },

        defaultRoute: function () {

        }
    });
    return AppRouter;

});
