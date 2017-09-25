/**
 *            
 * 2017-09-24 ligang
 */
// helper访问
'use strict';
const _ = require('lodash');
module.exports = {
  foo(a) {
    return a;
  },
  cat() {
    return 'hello cat !';
  },
  dog(x, y) {
    return x * 1 + y;
  },
  * fish(x, y, z) {
    return (x * y) * (x + y) * z;
  },
  * find() {
    return 'hello!';
  },
  * sina() {
    // return yield app.curl('https://www.sina.com.cn');
    return 'a';
  },
  * test() {
    return 'home.test';
  },
  * chunk() {
    const a = _.chunk([ 1, 2, 3, 4, 5, 6, 7 ]);
    return _.chunk(a, 7);
  },
  * concat() {
    const c = _.compact([ 0, 1, false, 2, '', 3 ]);
    const d = _.compact([ 0, 1, true, 2, '', 3 ]);
    return c + d;
  },
  * compact() {
    const a = _.compact([ 0, 1, false, 2, '', 3 ]);
    return a;
  },
  time() {
    const t = new Date();
    const y = t.getFullYear();
    const mon = t.getMonth();
    const d = t.getDate();
    const h = t.getHours();
    const min = t.getMinutes();
    const s = t.getSeconds();
    return `${y}-${this.f(mon)}-${d}-${h}:${min}-${s}`;
    // return t;
  },
  f(p) {
    if (p < 10) {
      return '0' + p;
    }
  },
};
