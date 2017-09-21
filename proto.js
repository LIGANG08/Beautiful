/*var Amine = Object.create(null,{
    str: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'zhang'
    /*str: {
          configurable: false,
          get: function(){ return 20;}
          set: function(value){
          }
    }  
    }
})

var  obj = Object.create(Amine, {
     age:{
         enumerable: false,
         writable: true,
         value: 20,
     }


})
console.log(typeof Amine);
console.log(obj.str);
console.log(typeof obj);
console.log(Amine);
console.log(Amine.str);
var value = 'Hello!';
console.log(obj.str);
console.log(Amine);
console.log(Amine.str);
console.log(Amine.__proto__ === Object.prototype);
console.log(obj.__proto__ === Object.prototype);*/


/*-----------Animal-----------*/
function Animal(){
  
}
Animal.prototype = {
    name:'zhang',
    age: 20 
  }

/*-----------bird-----------*/
function bird(){

}
bird.prototype = {
    fly: function(){
    console.log('I can fly');
    }
}
bird.prototype.__proto__ === Animal.prototype;

/*-----------cat-----------*/
function cat(){

}
cat.prototype = {
    run: function(){
        console.log('I like run!');
    }
}
cat.prototype.__proto__ === Animal.prototype;  

/*-----------pig-----------*/
function pig(){

}
pig.prototype = {
    eat: function(){
    console.log('I favotite eat !'); 
    }
}
pig.prototype.__proto__ === bird.prototype;

/*-----------fish-----------*/
function fish(){

}
fish.prototype = {
    swimm: function(){
        console.log('Swimming');
    }
}
fish.prototype.__proto__ === bird.prototype;

/*-----------dog-----------*/
function dog(){

}  
dog.prototype = {
    move: function(){
        console.log('Move');
    }
}
dog.prototype.__proto__ === cat.prototype;

/*-----------moneky-----------*/
function moneky(){

}
moneky.prototype = {
    run: function(){
        console.log('Run');
    }
}
moneky.prototype.__proto__ === cat.prototype;

var a = new pig();
a.name = 'pig';
console.log(a);
a.fly();
a.eat();

var b = new fish();
b.name = 'fish';
console.log(b);
b.fly();
b,swimm();

var c = new dog();
c.name = 'dog';
console.log(c);
c.move();
c.run();

var d = new moneky();
d.name = 'moneky';
console.log(d);
d.run();

var a = new Object.create(function(){},{});
console.log(typeof a);