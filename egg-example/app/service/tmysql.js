/**
 * 
 * 2017-09-25
 */

'use strict';
module.exports = app => {
  class Test extends app.Service {
    * create(parm) {
      try {
        yield app.mysql.insert('user', parm);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * delete(parm) {
      try {
        yield app.mysql.delete('user', parm);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(parm) {
      try {
        yield app.mysql.update('user', parm);

      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * get(parm) {
      let a;
      try {
        a = yield app.mysql.get('user', parm);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
    return a;
    }

    * selects() {
      let s;
      try {
        s = yield app.mysql.select('student', {
          where: {
            name: [ 'ligang', 'a' ],
          },
        });
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return s;
    }
    * gets() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('user', {id: 2, age: 99 });
        yield conn.update('user', {id: 1, sno: 8 });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error();
        return false;
      }
      return true;
    }
    }
 };
