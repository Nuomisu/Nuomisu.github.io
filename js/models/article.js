MyApp.Article = DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  introduction: DS.attr('string'),
  content: DS.attr('string')
});

MyApp.Article.FIXTURES = [
{
id: 1,
title: 'CP3101B web learning',
date: '1 March\n2015',
introduction: 'My lab website on CP3101b <The wandering cat>. It is a funny and simple web application',
content: 'This semester, I take module CP3101b Web Programming and Applications.\n\nSo far, we have finished seven labs to create a simple game web application called <a href= "http://cp3101b.comp.nus.edu.sg/~lshumin/lab7/">the wandering cat</a>. On this webiste, there is a 5x5 2D grid world, lives a small cat and his mother cat.They stay in one of the cell in the grid—their home.There are lots of obstacles in the 2D grid world. The small cat wants to explore this 2D grid world with his mother cat in a certain order: river, garden, library and home. Cats can move up, down, left and right. Player need to find a path that can pass all places in order. Pressing new puzzle button will start the game. After you starting, solition button can show the current best path. Once user finishs the game, the number of steps will be recorded. Users can sign up an account, but their scores are saved only their scores are the best.\n\nIn this website, I use html5, jquery, CSS, php and mySQL. When user start a new game, client side will ask a puzzle from server. If user want to get a solution, server side will calculate the best path and return the path to client. Users information such as name and password are stored in mySQL database. Best scores are also stored in database.\n\nFinally, I also add google analytics and facebook like. In the rest of this semester, we will take a group project about NUS IVLE dropboc sync. I will talk about in the future.'
},
{
id: 2,
title: 'Blog Two',
date: '30 Nov\n2014',
introduction: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
}
];