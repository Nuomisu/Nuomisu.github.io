MyApp.Project = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  imageLink: DS.attr('string'),
  content: DS.attr('string')
});

MyApp.Project.FIXTURES = [
{
id: 1,
title: 'Final Year Project \n- Transformer',
description: 'The simulation of transformer animation',
imageLink: 'img/transformer.png',
content: 'Transformers have been popular in cartoons and movies in recent years. Usually, they are manually designed and created by artists and visual effect specialists.\nTo simplify the issue, we would like to investigate a simple way to cut a 3D mesh model into pieces based on a skeleton template, and automatically transform these pieces into pre-determined configuration. To simulate the animation of transformation, we regard the animation as a series of joints movement with joint parameters. In this project, the proposed method is to build a transformable skeleton with movable joints and activate each joint with designed parameters in a flexible order. User also can do some interaction with the animation of transformation by modifying joint parameters to give feedback and recut the mesh.'
},
{
id: 2,
title: 'Unity Game Development Project',
description: 'One 2D game and one 3D game',
imageLink: 'img/unity.jpg',
content: 'I learnt the module "Game Development" in University College Dublin during my student exchange program. There are two personal assignments in this module, and they are to build a 2D game and a 3D game by using Unity.'
},
{
id: 3,
title: 'Road Sign Recogniser ',
description: 'Content-based Image Retrieval System Project',
imageLink: 'img/3246.jpg',
content: 'With the development of the society, vehicles are becoming prevalent nowadays. As the result, a basic knowledge of road rules and signs is of importance. While more and more people already own driving licenses, some are still trying to get theirs. The road signs in Singapore are similar to the signs used in United Kingdom with changes introduced for local road conditions. Some road signs are simple and understandable while some may be confused to people, especially new drivers. \nThis project aims to solve this kind of problems by providing a road sign detection application that can read in one image with a road sign, detect this sign and display its meaning. Besides, the application also provides the functions to save/delete signs to memory list, add personal notes to signs as well as display all signs.'
},
{
id: 4,
title: 'Interaction Design Project CS3240',
description: 'Flash prototype design of a music application which can record sound, generate scores, play music in different instruments and share music',
imageLink: 'img/3240.jpg',
content: 'In the CS3240, we are required '
},
{
id: 5,
title: '3D reconstruction CS4243',
description: 'Python coding for a software which can build object structure from motion by using Bundler and PMVS',
imageLink: 'img/4243.png',
content: 'This project is to build a software which can build an object structure from motion by using Bundler and PMVS on Python platform. \nStructure from motion refers to the process of estimating three-dimensional structures from two-dimensional image sequences that may be coupled with local motion signals. \nMain steps in this project are initialization, photo preparation, feature matching, bundle adjustment, PMVS(Patch-based Multi-view Stereo), and 3D model visualization on MeshLab. Bundle adjustment is the most important part, which includes matching key point descriptors, organizing the matches into tracks, using five points algorithm and triangulation. The final results are a series of points stored in .ply file. Those points can be visualized in MeshLab, 3D mesh processing software system. '
},
{
id: 6,
title: 'Static Program Analysis Tool Projec',
description: 'Preparing',
imageLink: 'img/3201.png',
content: 'Preparing'
}
]