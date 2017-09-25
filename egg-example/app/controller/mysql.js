/**
 * 
 * 2017-09-25
 */

'use strict';
module.exports = app => {
  class Mysql extends app.Service {
    * creat() {
      this.ctx.body = yield this.ctx.service.tmysql.create(this.ctx.request.body);
    }
    * delet() {
      this.ctx.body = yield this.ctx.service.tmysql.delete(this.ctx.request.body);
    }
    * updat() {
      this.ctx.body = yield this.ctx.service.tmysql.update(this.ctx.request.body);
    }
    * ge() {
      this.ctx.body = yield this.ctx.service.tmysql.get(this.ctx.request.body);
    }
    * screat() {
      this.ctx.body = yield this.ctx.service.student.create(this.ctx.request.body);
    }
    * sdelet() {
      this.ctx.body = yield this.ctx.service.stduent.delete(this.ctx.request.body);
    }
    * supdat() {
      this.ctx.body = yield this.ctx.service.student.update(this.ctx.request.body);
    }
    * sge() {
      this.ctx.body = yield this.ctx.service.student.get(this.ctx.request.body);
    }
  }
  return Mysql;
};
