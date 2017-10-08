/**
 * 
 *2017-09-29 
 */

'use strict';
module.exports = app => {
  class mobile extends app.Service {
    * set() {
      try {
        yield app.mysql.insert('mobile');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * updata() {
      try {
        yield app.mysql.insert('mobile');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
  }
  return mobile;
};
