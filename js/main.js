requirejs.config({
    baseUrl: '../bb/node_modules/',
    paths: {
        jquery: 'jquery/dist/jquery',
        backbone: 'backbone/backbone-min',
        underscore: 'underscore/underscore-min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        index:'../js/index'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'backbone'
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
    console.log("hello");
});