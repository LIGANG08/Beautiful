/**
 * 
 * 2017-09-29
 */

'use strict';
module.exports = app => {
  class user extends app.Service {
    * register() {
      try {
        yield app.mysql.insert('user');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * login() {
      try {
        yield app.mysql.insert('user');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
  }
  return user;
};
