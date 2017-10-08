/**
 * 
 *2017-09-27
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
      this.ctx.body = yield this.ctx.service.student.delete(this.ctx.request.body);
    }
    * supdat() {
      this.ctx.body = yield this.ctx.service.student.update(this.ctx.request.body);
    }
    * sge() {
      this.ctx.body = yield this.ctx.service.student.get(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.ctx.service.student.select(this.ctx.request.body);
    }
    * gets() {
      this.ctx.body = yield this.ctx.service.student.gets(this.ctx.request.body);
    }

    * stcreat() {
      this.ctx.body = yield this.ctx.service.st.create(this.ctx.request.body);
    }
    * stdelet() {
      this.ctx.body = yield this.ctx.service.st.delete(this.ctx.request.body);
    }
    * stupdat() {
      this.ctx.body = yield this.ctx.service.st.update(this.ctx.request.body);
    }
    * stge() {
      this.ctx.body = yield this.ctx.service.st.get(this.ctx.request.body);
    }
    * stselect() {
      this.ctx.body = yield this.ctx.service.st.select(this.ctx.request.body);
    }
    * stgets() {
      this.ctx.body = yield this.ctx.service.st.gets(this.ctx.request.body);
    }
  }
  return Mysql;
};
