MyApp.Gallery = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  link1: DS.attr('string'),
  link2: DS.attr('string')
});

MyApp.Gallery.FIXTURES = [
{
id: 1,
name: 'Image One',
description: 'First Imagge',
link1:'img/gallery/chenglou.png',
link2:'img/gallery/chenglou_s.png'
},
{
id: 2,
name: 'Image Two',
description: 'Two Imagge',
link1:'img/gallery/moon.jpg',
link2:'img/gallery/moon_s.jpg'
},
{
id: 3,
name: 'Image Three',
description: 'Three Imagge',
link1:'img/gallery/princess.png',
link2:'img/gallery/princess_s.png'
},
{
id: 4,
name: 'Image Four',
description: 'Four Imagge',
link1:'img/gallery/flower.png',
link2:'img/gallery/flower_s.png'
},
{
id: 5,
name: 'Image Five',
description: 'Five Imagge',
link1:'img/gallery/dao.png',
link2:'img/gallery/dao_s.png'
},
{
id: 6,
name: 'Image Six',
description: 'Six Imagge',
link1:'img/gallery/image_06_b.jpg',
link2:'img/gallery/image_06.jpg'
},
{
id: 7,
name: 'Image Seven',
description: 'Seven Imagge',
link1:'img/gallery/image_01_b.jpg',
link2:'img/gallery/image_01.jpg'
},
{
id: 8,
name: 'Image Eight',
description: 'Eight Imagge',
link1:'img/gallery/image_02_b.jpg',
link2:'img/gallery/image_02.jpg'
}
];