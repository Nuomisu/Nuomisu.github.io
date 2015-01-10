MyApp.Article = DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  introduction: DS.attr('string'),
  content: DS.attr('string')
});

MyApp.Article.FIXTURES = [
{
id: 1,
title: 'blog One',
date: '30 Nov 2014',
introduction: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
content: 'Cras justo odio, \n dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
},
{
id: 2,
title: 'blog Two',
date: '30 Nov 2014',
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 3,
title: 'blog Three',
date: '30 Nov 2014',
introduction: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
content: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
},
{
id: 4,
title: 'blog Four',
date: '30 Nov 2014',
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 5,
title: 'blog Five',
date: '30 Nov 2014',
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 6,
title: 'blog Six',
date: '30 Nov 2014',
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
},
{
id: 7,
title: 'blog Seven',
date: '30 Nov 2014',
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
}
];