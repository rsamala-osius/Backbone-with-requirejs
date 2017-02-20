this["JST"] = this["JST"] || {};

this["JST"]["templates/aboutus-body-template.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n        <div class=\"container\">\r\n\r\n            <div class=\"starter-template\">\r\n                <h1>About us Page</h1>\r\n                <p class=\"lead\" About us about us.<br> About us about us.</p>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- /.container -->\r\n\r\n";
},"useData":true});

this["JST"]["templates/contact-us-template.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n    \r\n   \r\n\r\n        <div class=\"container\">\r\n\r\n            <form class=\"form-signin\">\r\n                <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n                <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n                <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n          </label>\r\n                </div>\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n            </form>\r\n\r\n        </div>\r\n        <!-- /container -->\r\n\r\n    ";
},"useData":true});

this["JST"]["templates/header-template.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "        <nav class=\"navbar navbar-inverse\">\r\n            <div class=\"container\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n                        aria-controls=\"navbar\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        </button>\r\n                        <a class=\"navbar-brand\" href=\"#\">Project name</a>\r\n                </div>\r\n                <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n                    <ul class=\"nav navbar-nav\">\r\n                        <li class=\"active\"><a href=\"#Home\">Home</a></li>\r\n                        <li><a href=\"#about\">About</a></li>\r\n                        <li><a href=\"#contact\">Contact</a></li>\r\n                    </ul>\r\n                </div>\r\n                <!--/.nav-collapse -->\r\n            </div>\r\n        </nav>";
},"useData":true});

this["JST"]["templates/main-body-template.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"container\">\r\n\r\n        <div class=\"starter-template\">\r\n            <h1>Bootstrap starter template</h1>\r\n            <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones\r\n                HTML document.</p>\r\n             "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n\r\n    </div>";
},"useData":true});