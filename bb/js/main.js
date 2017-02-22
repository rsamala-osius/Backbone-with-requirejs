requirejs.config({
    baseUrl: '../bb/node_modules/',
    paths: {
        jquery: 'jquery/dist/jquery',
        backbone: 'backbone/backbone-min',
        underscore: 'underscore/underscore-min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        handlebars: 'handlebars/dist/handlebars',
        index:'../js/index',
        myTemplates: '../templates/build',
        views:'../js/views',
        models:'../js/models',
        collections:'../js/collection',
        AppRouter:'../js/routes/routes',
        app:'../js/app',
        headerView : '../js/views/mainHeaderView',
        aboutUsView : '../js/views/aboutUsView',
        bodyView : '../js/views/bodyView',
        footerView : '../js/views/footerView',
        signUpView : '../js/views/signUpView'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'backbone'
        },
        'handlebars':{
            exports: 'Handlebars'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
           exports: 'Bootstrap'
        }
    }
});
require(['app'],function(app){
    app.initialize();
    console.log("index file loaded");
});