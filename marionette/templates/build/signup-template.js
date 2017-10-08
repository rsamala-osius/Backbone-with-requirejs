define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n    <div id=\"signupbox\" style=\"display:none; margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Sign Up</div>\r\n                <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\">Sign In</a></div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"error\"></div>\r\n                <form id=\"signupform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n                    <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\r\n                        <p>Error:</p>\r\n                        <span></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\r\n                        <div class=\"col-md-9\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\">\r\n                            <span class=\"help-block hidden\"></span>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"firstname\" class=\"col-md-3 control-label\">First Name</label>\r\n                        <div class=\"col-md-9\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\">\r\n                            <span class=\"help-block hidden\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastname\" class=\"col-md-3 control-label\">Last Name</label>\r\n                        <div class=\"col-md-9\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\">\r\n                            <span class=\"help-block hidden\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\r\n                        <div class=\"col-md-9\">\r\n                            <input type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\">\r\n                            <span class=\"help-block hidden\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\" class=\"col-md-3 control-label\">Confirm Password</label>\r\n                        <div class=\"col-md-9\">\r\n                            <input type=\"password\" class=\"form-control\" name=\"re_pwd\" placeholder=\"Password\">\r\n                            <span class=\"help-block hidden\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <!-- Button -->\r\n                        <div class=\"col-md-offset-3 col-md-9\">\r\n                            <button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info singup-submit\"><i class=\"icon-hand-right\"> Sign Up</button>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true})

});