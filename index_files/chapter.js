(function() {
  this.JST || (this.JST = {});
  this.JST["images/chapter"] = function(context) {
              return HandlebarsTemplates["images/chapter"](context);
            };
            this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
            this.HandlebarsTemplates["images/chapter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
    helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
    var buffer = "", stack1, stack2, tmp1, self=this;
  
  function program1(depth0,data) {
    
    var buffer = "", stack1;
    buffer += "\n    ";
    stack1 = depth0;
    stack1 = self.invokePartial(partials.image, 'image', stack1, helpers, partials);;
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "\n  ";
    return buffer;}
  
    buffer += "<div class=\"chapter\">\n  ";
    stack1 = helpers.images || depth0.images;
    stack2 = helpers.each;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    stack1 = stack2.call(depth0, stack1, tmp1);
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "\n</div>\n";
    return buffer;});;
}).call(this);
