requirejs.config({
    baseUrl: '../bb/js/lib',
    paths: {
        jquery: 'jquery',
        backbone: 'backbone',
        underscore: 'underscore',
        bootstrap: 'bootstrap',
        index:'../index'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            //exports: 'backbone'
        },
        // 'underscore': {
        //     exports: '_'
        // },
        'bootstrap': {
            deps: ['jquery'],
           // exports: 'Bootstrap'
        }
    }
});
require(['index'],function(index){
    console.log("hello");
});


