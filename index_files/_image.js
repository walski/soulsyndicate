(function() {
  this.JST || (this.JST = {});
  this.JST["images/_image"] = (function() {
              Handlebars.registerPartial("image", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
    helpers = helpers || Handlebars.helpers;
    var buffer = "", stack1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;
  
  
    buffer += "<div class=\"image\" style=\"background-image:url(";
    stack1 = helpers.url || depth0.url;
    if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
    else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
    buffer += escapeExpression(stack1) + ");\"></div>\n";
    return buffer;}));
            }).call(this);;
}).call(this);
