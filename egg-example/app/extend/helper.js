/**
 * 
 * 2017-09-24 ligang
 */
// helper访问
'use strict';

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
