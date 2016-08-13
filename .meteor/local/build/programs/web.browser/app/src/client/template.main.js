(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="root"></div>');
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);
