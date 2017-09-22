/**
 * 
 * 2017-09-22
 */

const animal = require('./animal');
function bird(){
    
    };
    bird.prototype = {
        fly : function(){
            console.log('I can fly');
            console.log('fly')
        }
    }
    bird.prototype.__proto__ = animal.prototype;
module.exports = bird;    