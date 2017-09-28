'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/screate', 'mysql.screat');
  app.post('/sdelete', 'mysql.sdelet');
  app.post('/supdate', 'mysql.supdat');
  app.post('/sget', 'mysql.sge');
  app.post('/se', 'mysql.select');
  app.post('/ge', 'mysql.gets');
  app.post('/uc', 'comp.ucreat');
  app.post('/ud', 'comp.udelet');
  app.post('/uu', 'comp.uupdat');
  app.post('/ug', 'comp.uge');
  app.post('/wc', 'comp.wcreat');
  app.post('/wd', 'comp.wdelet');
  app.post('/wu', 'comp.wupdat');
  app.post('/wg', 'comp.wge');
};
