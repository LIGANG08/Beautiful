/**
 * ligang
 */

'use strict';
module.exports = app => {
  class HomeController extends app.Controller {
    * vote() {
      this.ctx.body = yield this.ctx.service.works.vote();
    }
    * updata() {
      this.ctx.body = yield this.ctx.service.works.updata();
    }
    * show() {
      this.ctx.body = yield this.ctx.service.works.show();
    }
  }
  return HomeController;
};
