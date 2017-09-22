/**
 * 2017-09-22
 * 
 */

function animal(){
    
};
animal.prototype = {
    name : 'name',
    sex : 'sex', 
    eat : function(){
       console.log(animal.eat);
        console.log('eat') ;
    }
}
module.exports = animal;
  

