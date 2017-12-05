/**
 * 
 * ligang
 */

const animal = require('./animal');
function rabbit(){
    
}; 
rabbit.prototype = {
    jump : function(){
        console.log('I like');
        console.log('like');
    }
}
rabbit.prototype.__proto__ = animal.prototype;
module.exports = rabbit;