/*function add(x){
    return this.a+x;
    var a=1;
}
console.log(add(3));*/


/*var obj = {
    a:1,
    add:function(x){
       return function(){
           console.log(`this.a -> ${this.a}`)
           return this.a + x;
       } 
    }
}
console.log(obj.add(2)());
setTimeout(obj.add(2),2000);*/


/*var obj = {
    a:1,
    add:function(x){
        this.b = 2;
        return this.a + x;
    }
}
console.log(obj.add(5),obj.b);*/


for(var i=1; i<10; i++){
    var line ='';
    for(var j=1; j<=i; j++){
        line = line +i+'*'+j+'='+i * j+'\t';
    }
    console.log(line);
}


/*var arr = [];
for (var i = 0; i < 9; i++) {
    arr[i] = i + 1;
}
for(var i=0;i<arr.length;i++){
    var line = '';
      for(var j=0;j<=i;j++){
        line = line +arr[i]+'*'+arr[j]+"="+arr[i]*arr[j]+'\t';
    }
    console.log(line);
}*/

/*var i=1,j=1;
do{ 
    var line = '';
    j = 1;
    do{
    line = line +i+'*'+j+'=' + i * j+'\t';
    j++;
    }while(j<=i)
    i++;
    console.log(line);
}
while(i<10)*/




/*var i=1,j=1;
while(i<=9){
var line = '';
    j = 1;
while(j<=i){
    line = line + i*j +'\t';
    console.log(line);
    j++;
    //line = line +i*j+'\t';
    }
    i++;
}*/


/*var a = {}
function add(){
    this.x = 2;
}
add.apply(a);
console.log(`this.x->${this.x}`);*/
