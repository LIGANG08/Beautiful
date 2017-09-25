/**
 * 
 * 2017-09-24
 */

'use strict';
module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 1;
    }
    * stest() {
      return '另一个服务器!';
    }
  }
  return Test;
};
