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
      try {
        yield app.mysql.get('user', parm);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};
