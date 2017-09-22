/**
 * 
 * 2017-09-22
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