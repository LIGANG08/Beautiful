/**
 * 
 * ligang
 */

'use strict';


module.exports = app => {
  const knex = require('knex');
  class works extends app.Service {
    * upload() {
      try {
        yield app.mysql.insert('works');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * vote() {
      try {
        yield app.mysql.insert('works');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * show() {
      const a = knex.select('wechat', 'votes').from('works');
      yield app.mysql.query(a.toString());
      try {
        yield app.mysql.insert('works');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
  }
  return works;
};
