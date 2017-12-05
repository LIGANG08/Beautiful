/**
 * 
 * ligang
 */

/*function animal(){
    //this.species = 'animal';
 }
 animal.prototype.species = 'animal';
 function cat(name){
    animal.apply(this, arguments);
    this.name = name;
 }
 var c = new cat('gjj');
 console.log(c)
 
 cat.species = 'ssss';
 console.log(animal.prototype.species);*/


/*function animal(){

 }

//cat.prototype.species = animal.prototype; 
function cat(name){
  animal.apply(this,arguments);
  this.name = name;
 }
 
cat.prototype = new animal();
cat.prototype.constructor = cat;
console.log(cat.prototype.species);*/


/*// 定义一个动物类
function animal (name) {
  // 属性
  this.name = 'name';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};*/


/*
/-----------(1)原型链继承----------/
// 定义一个动物类
function animal (name) {
  // 属性
  this.name = 'name';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
function Cat(){ 
}
Cat.prototype = new animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
//console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof animal); //true 
console.log(cat instanceof Cat); //true
*/


/*/----------(2)构造继承-----------/
// 定义一个动物类
function animal (name) {
  // 属性
  this.name = 'name';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
function Cat(name){
  animal.call(this);
  this.name = 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof animal); // false
console.log(cat instanceof Cat); // true*/


/*/---------(3)实例继承--------/
// 定义一个动物类
function animal (name) {
  // 属性
  this.name = 'name';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
function Cat(name){
  var instance = new animal();
  instance.name = 'Tom';
  return instance;
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof animal); // true
console.log(cat instanceof Cat); // false*/

/*
/---------(4)拷贝继承---------/
// 定义一个动物类
function animal (name) {
  // 属性
  this.name = 'name';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
function Cat(name){
  var animal = new animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof animal); // false
console.log(cat instanceof Cat); // true*/

/*/----------构造函数继承----------/
function Animal(name){
  this.species = 'animal';
}
function Cat(name,color){
  this.name = 'animal';
  this.color = color;

}
console.log(this.species);
console.log(this.name);
console.log(this.color);*/
