/**
 *  ligang
 */

'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * register() {
      this.ctx.body = yield this.ctx.service.user.register();
    }
    * login() {
      this.ctx.body = yield this.ctx.service.user.login();
    }
  }
  return HomeController;
};
