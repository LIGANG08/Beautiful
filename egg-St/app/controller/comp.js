/**
 * 
 *2017-09-28
 */

'use strict';
module.exports = app => {
  class Mysql extends app.Service {
    * ucreat() {
      this.ctx.body = yield this.ctx.service.use.ucreate(this.ctx.request.body);
    }
    * udelet() {
      this.ctx.body = yield this.ctx.service.use.udelete(this.ctx.request.body);
    }
    * uupdat() {
      this.ctx.body = yield this.ctx.service.use.uupdate(this.ctx.request.body);
    }
    * uge() {
      this.ctx.body = yield this.ctx.service.use.uget(this.ctx.request.body);
    }
    * wcreat() {
      this.ctx.body = yield this.ctx.service.use.ucreate(this.ctx.request.body);
    }
    * wdelet() {
      this.ctx.body = yield this.ctx.service.use.udelete(this.ctx.request.body);
    }
    * wupdat() {
      this.ctx.body = yield this.ctx.service.use.uupdate(this.ctx.request.body);
    }
    * wge() {
      this.ctx.body = yield this.ctx.service.use.uget(this.ctx.request.body);
    }
    * ucrea() {
      this.ctx.body = yield this.ctx.helper.ucreate(this.ctx.request.body);
    }
    * udele() {
      this.ctx.body = yield this.ctx.helper.udelete(this.ctx.request.body);
    }
    * uupda() {
      this.ctx.body = yield this.ctx.helper.uupdate(this.ctx.request.body);
    }
    * ug() {
      this.ctx.body = yield this.ctx.helper.uget(this.ctx.request.body);
    }
    * wcrea() {
      this.ctx.body = yield this.ctx.helper.ucreate(this.ctx.request.body);
    }
    * wdele() {
      this.ctx.body = yield this.ctx.helper.udelete(this.ctx.request.body);
    }
    * wupda() {
      this.ctx.body = yield this.ctx.helper.uupdate(this.ctx.request.body);
    }
    * wg() {
      this.ctx.body = yield this.ctx.helper.uget(this.ctx.request.body);
    }
    /* photo() {
      this.ctx.body = yield app.curl('https://www.sina.com.cn');
    }*/
  }
  return Mysql;
};
