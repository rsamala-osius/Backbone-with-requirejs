define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n\r\n        <div class=\"starter-template\">\r\n            <h1>Bootstrap starter template</h1>\r\n            <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones\r\n                HTML document.</p>\r\n\r\n        </div>\r\n        <div class=\"starter-template\">\r\n            <h3> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + " </h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-4 righ-side-panel\">\r\n"
    + ((stack1 = container.invokePartial(partials.carousel_partial,depth0,{"name":"carousel_partial","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true})

});