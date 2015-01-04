Blog.Article = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Blog.Article.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
 },
 {
   id: 2,
   title: '...',
 },
 {
   id: 3,
   title: 'Profit!',
 }
];