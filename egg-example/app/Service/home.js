/**
 * 
 *2017-09-24   
 */

'use strict';
module.exports = app => {
  const _ = require('lodash');
  class Home extends app.Service {
    * find() {
      return 'hello!';
    }
    * sina() {
      // return yield app.curl('https://www.sina.com.cn');
      return 'a';
    }
    * test() {
      return 'home.test';
    }
    * chunk() {
      const a = _.chunk([ 1, 2, 3, 4, 5, 6, 7 ]);
      return _.chunk(a, 7);
    }
    * concat() {
      const c = _.compact([ 0, 1, false, 2, '', 3 ]);
      const d = _.compact([ 0, 1, true, 2, '', 3 ]);
      return c + d;
    }
    * compact() {
      const a = _.compact([ 0, 1, false, 2, '', 3 ]);
      return a;
    }
    * time() {
      const t = new Date();
      const s = t.getSeconds();
      const min = t.getMinutes();
      const h = t.getHours();
      const d = t.getDate();
      const mon = t.getMonth();
      const y = t.getFullYear();
      return `${y}年-${this.fo(mon)}月-${this.fo(d)}日-${h}:${this.fo(min)}:${this.fo(s)}`;
    }
    fo(p) {
      if (p < 10) {
        return '0' + p;
      }
      return p;
    }
  }
  return Home;
};
