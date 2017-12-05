/**
 * 
 *  ligang
 */

'use strict';
module.exports = app => {
  class St extends app.Service {
    * create(a) {
      try {
        yield app.mysql.insert('st', a);
      } catch (y) {
        this.ctx.logger.error(y);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('st', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('st', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * get() {
      let s;
      try {
        s = yield app.mysql.select('st');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return s;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('st', {
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
  }
  return St;
};
