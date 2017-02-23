define([
    'backbone',
    'handlebars',
    'underscore'
], function (Backbone, handlebars,_) {
    'use strict';
    var signupModel = Backbone.Model.extend({
        defaults: {
            // email: 'test@test.com',
            // firstname: 'firstName',
            // lastname: 'lastName',
            // passwd: 'password',
            icode: 'nocode'
        },
        initialize: function () {
            this.on('invalid', function (model, errors, options) {
               console.log(model.validationError);
               console.log(model.attributes.email.isValid);
               console.log(options.validationError);
            });
        },
        validate: function (attrs, options) {
            console.log(attrs);
            console.log(options);

            var error={};
            console.log(_.size(attrs));
           var keys=_.keys(attrs);
           console.log(keys);
           for(var i=1;i<keys.length;i++){
               if(keys[i]==""){
                   return 'please enter'+keys[i]
               }
           }
          
            // if(!attrs.email){
            //     error.attrs.email='Please fill email field';
            // }
            // if(!attrs.firstname){
            //     error.attrs.firstname='Please fill firstname field';
            // }
            // if(!attrs.lastname){
            //    error.attrs.lastname='Please fill lastname field';
            // }
            // if(!attrs.passwd){
            //     error.apush('Please fill Password field');
            // }
            // if(attrs.passwd || attrs.re_pwd){
            //     error.push('Re-enter passwords please, they dont match ');
            // }
            // return error;

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
