/**
 * 
 * ligang
 */
const dove = require('./dove');
const chicken = require('./chicken');
const dog = require('./dog');
const shark = require('./shark');

var a = new dove();
var b = new chicken();
var c = new shark();
var d = new dog();

c.jump();
a.fly();
a.eat();
b.fly();
d.eat();
