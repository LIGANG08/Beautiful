/**
 * 
 * 2017-09-22
 */

const bird = require('./bird');
function dove(){
}
dove.prototype.__proto__ = bird.prototype;
var a = new dove();
module.exports = dove;