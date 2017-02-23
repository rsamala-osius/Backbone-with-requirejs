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
            icode: 'nocode'
        },
        validate : function(atts){
            if(!attrs.email){
                return 'Please fill email field'
            }
            if(!attrs.firstname){
                return 'Please fill firstname field'
            }
            if(!attrs.lastname){
                return 'Please fill lastname field'
            }
            if(!attrs.passwd){
                return 'Please fill Password field'
            }
            if(attrs.passwd || atts.re_pwd){
                return 'Re-enter passwords please, they dont match '
            }
        }
    });
    return signupModel;

});
