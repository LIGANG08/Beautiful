'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/screate', 'mysql.screat');
  app.post('/sdelete', 'mysql.sdelet');
  app.post('/supdate', 'mysql.supdat');
  app.post('/sget', 'mysql.sge');
  app.post('/se', 'mysql.select');
  app.post('/ge', 'mysql.gets');
};
