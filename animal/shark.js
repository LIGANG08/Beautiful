/**
 * 
 * 2017-09-22
 */

const rabbit = require('./rabbit');
function shark(){
    
    }
shark.prototype.__proto__ = rabbit.prototype;;
module.exports = shark;