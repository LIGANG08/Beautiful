/**
 * 
 */

/*var person = function(age){
    this.age = age;
}
var name = new person(20);
var user = new person(10);
person.prototype.getAge = function(){
    return this.age;
}
console.log(name.getAge(),user.getAge());

name.n = function(){
    return 1;
}
user.u = function(){
    return 6;
}
console.log(typeof name.n.prototype);
console.log(person.__proto__===Function.prototype);
console.log(name.n.__proto__===Function.prototype);
console.log(user.u.__proto__===Function.prototype);

name.__proto__ = null;
name.getAge = function(){
    return this.age+1;
}
console.log(name.getAge());*/

var person = {
    age : 19,
}; 
person.getage = function(){
    return 0;
}

var a = Object.create(person,{
    age : {
        value : 20,
    }
});

console.log(a.__proto__);
console.log(a.getage());

a.__proto__.name = 1;
console.log(person.name);

var b = Object.create(person,{});
b.__proto__.sex = 3;
console.log(a.sex);
console.log(a.age,b.age);
