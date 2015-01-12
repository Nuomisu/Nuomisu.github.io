MyApp.Gallery = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  link1: DS.attr('string'),
  link2: DS.attr('string')
});

MyApp.Gallery.FIXTURES = [
{
id: 1,
name: 'City Gate Tower',
description: 'One city gate Tower after a battle.',
link1:'img/gallery/chenglou.jpg',
link2:'img/gallery/chenglou_s.jpg'
},
{
id: 2,
name: 'Moon Vine',
description: 'A weapon I designed',
link1:'img/gallery/moon.jpg',
link2:'img/gallery/moon_s.jpg'
},
{
id: 3,
name: 'Princess',
description: 'A pink princess',
link1:'img/gallery/princess.jpg',
link2:'img/gallery/princess_s.jpg'
},
{
id: 4,
name: 'Flowers',
description: 'One background of this website',
link1:'img/gallery/flower.jpg',
link2:'img/gallery/flower_s.jpg'
},
{
id: 5,
name: 'Rose',
description: 'My rose',
link1:'img/gallery/rose.jpg',
link2:'img/gallery/rose_s.jpg'
},
{
id: 6,
name: 'A Ruan',
description: 'Main Character of Gujianqitan',
link1:'img/gallery/ruan.jpg',
link2:'img/gallery/ruan_s.jpg'
},
{
id: 7,
name: 'Sword',
description: 'A copied line draft of one sword',
link1:'img/gallery/dao.jpg',
link2:'img/gallery/dao_s.jpg'
},
{
id: 8,
name: 'Chingay-side view',
description: 'A side-view design of Chingay float',
link1:'img/gallery/chingay.jpg',
link2:'img/gallery/chingay_s.jpg'
}
];