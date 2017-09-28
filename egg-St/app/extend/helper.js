/**
 * 2017-09-28
 */

'use strict';
module.exports = app => {
  class St extends app.Service {
    * ucreate(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * udelete(a) {
      try {
        yield app.mysql.delete('user', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * uupdate(a) {
      try {
        yield app.mysql.update('user', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * uget() {
      let s;
      try {
        s = yield app.mysql.select('user');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return s;
    }
    * wcreate(a) {
      try {
        yield app.mysql.insert('works', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * wdelete(a) {
      try {
        yield app.mysql.delete('works', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * wupdate(a) {
      try {
        yield app.mysql.update('works', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * wget() {
      let s;
      try {
        s = yield app.mysql.select('works');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return s;
    }
  }
  return St;
};
