MyApp.Router.map(function(match) {
    this.resource("article", { path: "/" }, function() {
    	this.route("page", { path: "/page/:page_id" });
    });

    this.resource("gallery", { path: "/gallery" }, function() {
        this.route("page", { path: "/page/:page_id" });
    });

    this.resource("project", { path: "/project" }, function() {
        this.route("page", { path: "/page/:page_id" });
    });

    this.resource("about", { path: "/about" });

    this.resource("perarticle", { path: "/perarticle/:post_id" });

    this.resource("perproject", { path: "/perproject/:project_id"});
});

MyApp.PerarticleRoute = Ember.Route.extend({
    model: function(params) {
    return this.store.find('article', params.post_id);
  }
});

MyApp.PerprojectRoute = Ember.Route.extend({
    model: function(params) {
    return this.store.find('project', params.project_id);
  }
});

MyApp.ArticlePageRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.Object.create({id: params.page_id});
    },
    setupController: function(controller, model) {
        this.controllerFor('article').set('selectedPage', model.get('id'));
    }
});

MyApp.ArticleRoute = Ember.Route.extend({
    model: function(params) {
        this.controllerFor('article').set('selectedPage', 1);
        return MyApp.Article.find();
    }

});

MyApp.GalleryPageRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.Object.create({id: params.page_id});
    },
    setupController: function(controller, model) {
        this.controllerFor('gallery').set('selectedPage', model.get('id'));
    }
});

MyApp.GalleryRoute = Ember.Route.extend({
    model: function(params) {
        this.controllerFor('gallery').set('selectedPage', 1);
        return MyApp.Gallery.find();
    }
});

MyApp.ProjectPageRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.Object.create({id: params.page_id});
    },
    setupController: function(controller, model) {
        this.controllerFor('project').set('selectedPage', model.get('id'));
    }
});

MyApp.ProjectRoute = Ember.Route.extend({
    model: function(params) {
        this.controllerFor('project').set('selectedPage', 1);
        return MyApp.Project.find();
    }
});