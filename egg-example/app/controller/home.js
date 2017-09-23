'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.home.find = yield this.service.home.find();
    }
    * inde() {
      this.ctx.body = 'hello!';
    }
  }
  return HomeController;
};
