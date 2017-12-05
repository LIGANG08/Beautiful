/**
 * 
 * ligang
 */

const rabbit = require('./rabbit');
function shark(){
    
    }
shark.prototype.__proto__ = rabbit.prototype;;
module.exports = shark;