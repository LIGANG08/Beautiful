/**
 * 
 * ligang
 */

const bird = require('./bird');
function chicken(){
    
    }
chicken.prototype.__proto__ = bird.prototype;
var b = new chicken();
module.exports = chicken;    