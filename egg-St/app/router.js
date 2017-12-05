/**
 * ligang
 */

'use strict';

module.exports = app => {
  // app.post('/user/register', 'user.register');
  // app.post('/user/login', 'user.login');

  // app.post('/mobile/mobile', 'mobile.mobile');
  // app.post('/mobile/updata', 'mobile.updata');

  // app.post('/works/updata', 'works.updata');
  // app.post('/works/vote', 'works.vote');
  // app.post('/works/show', 'works.show');
  // app.post('/works/updata', 'works.updata');
  // app.post('/works/URL', '');
  app.post('/sc', 'mysql.stcreat');
  app.post('/sd', 'mysql.stdelet');
  app.post('/su', 'mysql.stupdat');
  app.post('/sg', 'mysql.stge');
  app.post('/sgs', 'mysql.stgets');
};
