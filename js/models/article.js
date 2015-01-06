Blog.Article = DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  introduction: DS.attr('string'),
  content: DS.attr('string')
});

Blog.Article.FIXTURES = [
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
 }
];