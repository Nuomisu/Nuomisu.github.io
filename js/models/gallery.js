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
link1:'img/gallery/chenglou.png',
link2:'img/gallery/chenglou_s.png'
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
link1:'img/gallery/princess.png',
link2:'img/gallery/princess.png'
},
{
id: 4,
name: 'Flowers',
description: 'One background of this website',
link1:'img/gallery/flower.png',
link2:'img/gallery/flower.png'
},
{
id: 5,
name: 'Sword',
description: 'A copied line draft of one sword',
link1:'img/gallery/dao.png',
link2:'img/gallery/dao_s.png'
},
{
id: 6,
name: 'Chingay-side view',
description: 'A side-view design of Chingay float',
link1:'img/gallery/chingay.jpg',
link2:'img/gallery/chingay_s.jpg'
},
{
id: 7,
name: 'Image Seven',
description: 'Seven Image',
link1:'img/gallery/flower.png',
link2:'img/gallery/flower.png'
},
{
id: 8,
name: 'Image Eight',
description: 'Eight Image',
link1:'img/gallery/flower.png',
link2:'img/gallery/flower.png'
}
];