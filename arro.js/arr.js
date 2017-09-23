var a = (app)=>{
    this.b = 1;

}
console.log(typeof a.prototype);
//var x = new a;
a();
//console.log(typeof .prototype);

console.log(a.b, this.b, a);