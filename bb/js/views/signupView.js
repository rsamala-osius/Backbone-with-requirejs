define([
    'jquery',
    'underscore',
    'backbone',
    'myTemplates/signup-template',
    'models/signupModel',
    'collections/registerCollection'
], function ($, _, Backbone, signupTemplate, signupModel, regCollection) {
    'use strict';
    var signUpView = Backbone.View.extend({
        template: signupTemplate,
        collection: new regCollection(),
        events: {
            'submit #signupform': 'singupAction'
        },
        initialize: function () {
            console.log('signUpView initialized');
            this.data = this.data || {};
            this.regModel = new signupModel();
            this.regModel.on('invalid', this.saveErrorCallback);
            this.regModel.on('valid', this.saveSuccessCallback);
            console.log(this);
            this.render();
        },
        singupAction: function (event) {
            if (event) {
                event.preventDefault();
            }
            var formData = $(event.currentTarget).serializeObject();
            this.regModel.set(formData);
            if (this.regModel.isValid()) {
            }
            else {

            }
        },
        saveSuccessCallback: function (model, reponse) {
            console.log(model);
        },
        saveErrorCallback: function (model, response) {

            var temp = {
                "email": "Please fill email field",
                "firstname": "Please fill firstname field",
                "lastname": "Please fill lastname field",
                "passwd": "Please fill Password field",
                "re_pwd" : "Re-enter passwords please, they dont match"
            };

            var diff = _.difference(_.keys(temp), _.keys(response));

            // apply error class to invalid fields

            _.each(response, function (value, key) {
                var $element = $("input[name='" + key + "']");
                var $group = $element.closest('.form-group');

                $group.addClass('has-error');
                $group.find('.help-block').html(value).removeClass('hidden');

            });

            // remove  error class to valid fields
            if (diff.length > 0) {
                _.each(diff, function (key) {

                    var $element = $("input[name='" + key + "']");
                    var $group = $element.closest('.form-group');

                    $group.removeClass('has-error');
                    $group.find('.help-block').html('').addClass('hidden');
                });
            }

        },

        render: function () {

            this.data.message = "Hello";
            console.log(this.data);
            console.log(this.template);
            this.$el.html(this.template(this.data));
        }
    });
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    return signUpView;
});