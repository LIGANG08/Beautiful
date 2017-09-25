/**
 * 
 * 2017-09-25 ligang
 */

'use strict';
module.exports = app => {
  class St extends app.Service {
    * create(a) {
      try {
        yield app.mysql.insert('Student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('Student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('Student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * get(a) {
      try {
        yield app.mysql.get('Student', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
  }
  return St;
};
