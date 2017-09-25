'use strict';

module.exports = app => {
  app.get('/a', 'home.index');
  app.get('/', 'home.inde');
  app.get('/sina', 'home.indexx');
  app.get('/test', 'home.test');
  app.get('/Test', 'home.test');
  app.get('/chunk', 'home.chu');
  app.get('/concat', 'home.con');
  app.get('/compact', 'home.cp');
  app.get('/he', 'home.hel');
  app.get('/cat', 'home.c');
  app.get('/dog', 'home.d');
  app.post('/time', 'home.times');
  app.get('/time', 'home.times');
  app.get('/stest', 'home.ste');
  app.post('/heltimes', 'home.heltime');
};
