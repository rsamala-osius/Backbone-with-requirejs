define([
    'backbone',
    'handlebars'
], function (Backbone, handlebars ) {
    'use strict';
    var mainModel = Backbone.Model.extend({
        defaults: {
            name: 'Raju'
        }
    });
    return mainModel;

});

