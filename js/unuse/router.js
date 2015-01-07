Blog.Router.map(function() {
  this.resource('home', { path: '/' });
});

Blog.HomeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('article');
  }
});