/**
 * 
 * 2017-09-26 ligang
 */

'use strict';
module.exports = app => {
  class St extends app.Service {
    * create(a) {
      try {
        yield app.mysql.insert('student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * get() {
      let s;
      try {
        s = yield app.mysql.select('student');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return s;
    }
  }
  return St;
};
