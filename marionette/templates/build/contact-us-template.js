define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- /container -->\r\n\r\n<div class=\"container\">\r\n    <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Sign In</div>\r\n                <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a>Forgot password?</a></div>\r\n            </div>\r\n\r\n            <div style=\"padding-top:30px\" class=\"panel-body\">\r\n\r\n                <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n                <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n                    <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                        <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username or email\">\r\n                    </div>\r\n\r\n                    <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n                        <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"input-group\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                   <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me </label>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div style=\"margin-top:10px\" class=\"form-group\">\r\n                        <!-- Button -->\r\n\r\n                        <div class=\"col-sm-12 controls\">\r\n                            <a id=\"btn-login\" href=\"#\" class=\"btn btn-success\">Login  </a> \r\n\r\n                        </div>\r\n                    </div>                   \r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.errorMessage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  ";
},"useData":true})

});