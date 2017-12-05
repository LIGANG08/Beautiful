/**
 * 
 * ligang
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
    * select() {
      let res;
      try {
        res = yield app.mysql.select('usr', {
          where: {
            name: [ 'lg', 'a' ],
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * gets() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('usr', { id: 2, age: 999 });
        yield conn.update('student', { id: 1, sno: 8 });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return St;
};
