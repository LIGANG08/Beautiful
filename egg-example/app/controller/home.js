/**
 * 
 * 2017-09-23-24
 * 
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * inde() {
      this.ctx.body = 'hello?';
    }
    * indexx() {
      this.ctx.body = yield this.service.home.sina();
    }
    * test() {
      const a = yield this.service.home.test();
      const b = yield this.service.test.test();
      this.ctx.body = a + b;
    }
    * chu() {
      this.ctx.body = yield this.service.home.chunk();
    }
    * con() {
      this.ctx.body = yield this.service.home.concat();
    }
    * cp() {
      this.ctx.body = yield this.service.home.compact();
    }
    * hel() {
      /* const c = this.ctx.helper.foo(this.ctx.request.query.a);
      this.ctx.body = this.ctx.helper.foo(this.ctx.request.query.b) + c;*/
      this.ctx.body = this.ctx.helper.foo('foo');
    }
    * c() {
      this.ctx.body = this.ctx.helper.cat();
    }
    * d() {
      this.ctx.body = this.ctx.helper.dog(1, 2);
    }
    * times() {
      this.ctx.body = yield this.service.home.time();
    }
    * ste() {
      this.ctx.body = yield this.service.test.stest();
    }
    * heltime() {
      this.ctx.body = this.ctx.helper.time();
    }
    * hel1() {
      this.ctx.body = yield this.ctx.helper.find();
    }
    * hel2() {
      this.ctx.body = yield this.ctx.helper.sina();
    }
    * hel3() {
      const a = yield this.ctx.helper.test();
      const b = yield this.ctx.helper.test();
      this.ctx.body = a + b;
    }
    * hel4() {
      this.ctx.body = yield this.ctx.helper.chunk();
    }
    * hel5() {
      this.ctx.body = yield this.ctx.helper.concat();
    }
    * hel6() {
      this.ctx.body = yield this.ctx.helper.compact();
    }

  }
  return HomeController;
};
