/**
 * 
 *2017-09-23 
 */

'use strict';
module.exports = app => {
  class home extends app.Service {
    * find() {
      return 'hello!';
    }
  }
  return home;
};
