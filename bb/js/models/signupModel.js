define([
    'backbone',
    'handlebars'
], function (Backbone, handlebars) {
    'use strict';
    var signupModel = Backbone.Model.extend({
        defaults: {
            // email: 'test@test.com',
            // firstname: 'firstName',
            // lastname: 'lastName',
            // passwd: 'password',
        },
        initialize: function () {
            this.on('invalid', function (model, errors, options) {
                // console.log(model.validationError);
                // console.log(errors);
                // console.log(options.validationError);
            });
        },
        validate: function (attrs, options) {
            // console.log(attrs);
            // console.log(options);
            // var keys = _.keys(attrs);
            // console.log(keys);

            var error = [];
            if (!attrs.email) {
                error.push('Please fill email field');
            }
            if (!attrs.firstname) {
                error.push('Please fill firstname field');
            }
            if (!attrs.lastname) {
                error.push('Please fill lastname field');
            }
            if (!attrs.passwd) {
                error.push('Please fill Password field');
            }
            if (attrs.passwd !== attrs.re_pwd) {
                error.push('Re-enter passwords please, they dont match ');
            }
            return error;

            // var error = [];
            // if (!attrs.email) {
            //     $('.email').text('Please fill email field');
            // }
            // if (!attrs.firstname) {
            //     return ('Please fill firstname field');
            // }
            // if (!attrs.lastname) {
            //     return ('Please fill lastname field');
            // }
            // if (!attrs.passwd) {
            //     return ('Please fill Password field');
            // }
            // if (attrs.passwd || attrs.re_pwd) {
            //     return ('Re-enter passwords please, they dont match ');
            // }
            // return error;
        }
    });
    return signupModel;

});
