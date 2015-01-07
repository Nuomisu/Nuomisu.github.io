window.PersonApp = Ember.Application.create();

PersonApp.PersonController = Ember.ArrayController.extend(Ember.PaginationMixin, {
    itemsPerPage: 3
});

PersonApp.PaginationView = Ember.View.extend({
    templateName: 'pagination',
    tagName: 'li',

    page: function() {
        return Ember.Object.create({id: this.get('content.page_id')});
    }.property()
});

PersonApp.Router.map(function(match) {
    this.resource("person", { path: "/" }, function() {
        this.route("page", { path: "/page/:page_id" });
    });
});

PersonApp.PersonPageRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.Object.create({id: params.page_id});
    },
    setupController: function(controller, model) {
        this.controllerFor('person').set('selectedPage', model.get('id'));
    }
});

PersonApp.PersonRoute = Ember.Route.extend({
    model: function(params) {
        this.controllerFor('person').set('selectedPage', 1);
        return PersonApp.Person.find();
    }

});

PersonApp.Person = DS.Model.extend({
    title: DS.attr('string'),
    date: DS.attr('disoate'),
    introduction: DS.attr('string'),
    content: DS.attr('string')
});

PersonApp.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
});

PersonApp.Person.FIXTURES = [
{
id: 1,
title: 'blog One',
date: new Date("2013-9-30"),
introduction: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
},
{
id: 2,
title: 'blog Two',
date: new Date("2014-10-04"),
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 3,
title: 'blog Three',
date: new Date(),
introduction: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
content: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
},
{
id: 4,
title: 'blog Four',
date: new Date("2014-10-04"),
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 5,
title: 'blog Five',
date: new Date("2014-10-04"),
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 6,
title: 'blog Six',
date: new Date("2014-10-04"),
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 7,
title: 'blog Seven',
date: new Date("2014-10-04"),
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
}
];



PersonApp.imageInfo = DS.Model.extend({
    title: DS.attr('string'),
    
    href: DS.attr('string'),
    src: DS.attr('string'),
    introduction: DS.attr('string')
});

PersonApp.imageInfo.FIXTURES = [
{
id: 1,
title: 'Project 1',
href: 'img/gallery/image_01_b.jpg',
src: 'img/gallery/image_01.jpg',
introduction: 'Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero.',
},
{
id: 2,
title: 'Project 2',
href: 'img/gallery/image_02_b.jpg',
src: 'img/gallery/image_02.jpg',
introduction: 'Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero.',
},
{
id: 3,
title: 'Project 3',
href: 'img/gallery/image_03_b.jpg',
src: 'img/gallery/image_03.jpg',
introduction: 'Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero.',
},
{
id: 4,
title: 'Project 4',
href: 'img/gallery/image_04_b.jpg',
src: 'img/gallery/image_04.jpg',
introduction: 'Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero.',
},
{
id: 5,
title: 'Project 5',
href: 'img/gallery/image_05_b.jpg',
src: 'img/gallery/image_05.jpg',
introduction: 'Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero.',
},
{
id: 6,
title: 'Project 6',
href: 'img/gallery/image_06_b.jpg',
src: 'img/gallery/image_06.jpg',
introduction: 'Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero.',
}
];
