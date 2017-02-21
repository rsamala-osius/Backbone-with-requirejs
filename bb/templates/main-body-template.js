define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"container\">\r\n\r\n        <div class=\"starter-template\">\r\n            <h1>Bootstrap starter template</h1>\r\n            <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones\r\n                HTML document.</p>\r\n             "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n\r\n    </div>";
},"useData":true})

});