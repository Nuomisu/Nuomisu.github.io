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