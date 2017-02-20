requirejs.config({
    baseUrl: '../bb/node_modules/',
    paths: {
        jquery: 'jquery/dist/jquery',
        backbone: 'backbone/backbone-min',
        underscore: 'underscore/underscore-min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        handlebars: 'handlebars/dist/handlebars',
        index:'../js/index',
        myTemplates: '../templates/'
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
require(['index'],function(index){
    console.log("index file loaded");
});