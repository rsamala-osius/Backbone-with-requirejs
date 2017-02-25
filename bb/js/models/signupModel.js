define([
    'backbone',
    'handlebars'
], function (Backbone, handlebars) {
    'use strict';
    var signupModel = Backbone.Model.extend({
        defaults: {

        },
        initialize: function () {

        },
        validate: function (attrs, options) {
            var error_msg = {};
            var keys = {
                email :  /^([-0-9a-zA-Z'_\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            };

            if (!attrs.email) {
                error_msg.email = ('Please fill email field');
            }else if (!keys.email.test(attrs.email)){
                error_msg.email = ('Please enter valid email');
            }
            if (!attrs.firstname) {
                error_msg.firstname = ('Please fill firstname field');
            }
            if (!attrs.lastname) {
                error_msg.lastname = ('Please fill lastname field');
            }
            if (!attrs.passwd) {
                error_msg.passwd = ('Please fill Password field');
            }
            if (attrs.passwd || attrs.re_pwd) {
                error_msg.re_pwd = ('Re-enter passwords please, they dont match');
            }
            return error_msg;
        }
    });
    return signupModel;

});
