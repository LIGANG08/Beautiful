
'use strict';
module.exports = app => {
  class HomeController extends app.Controller {
    * mobile() {
      this.ctx.body = yield this.ctx.service.mobile.set();
    }
    * updata() {
      this.ctx.body = yield this.ctx.service.mobile.updata();
    }
  }
  return HomeController;
};
