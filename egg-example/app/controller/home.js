/**
 * 
 * 2017-09-23
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * inde() {
      this.ctx.body = 'hello!';
    }
  }
  return HomeController;
};
