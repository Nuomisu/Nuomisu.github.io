window.MyApp = Ember.Application.create({
	rootElement : '#app'
}
);

MyApp.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
});

Ember.Handlebars.helper('breaklines', function(text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Handlebars.SafeString(text);
});