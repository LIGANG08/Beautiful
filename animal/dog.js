/**
 * 
 * ligang
 */

const rabbit = require('./rabbit');
function dog(){
    
    }
dog.prototype.__proto__ = rabbit.prototype;
var d = new dog();
module.exports = dog;