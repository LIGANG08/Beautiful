/**
 * 
 *2017-09-23 
 */

'use strict';
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'hello!';
    }
  }
  return Home;
};
