/**
 * 
 * 2017-09-23  ligang
 * 
 * var promise = new Promise(function(resolve, reject) {
 if (异步操作成功 ){
 resolve(value);
} else {
reject(error);
}
});
promise.then(function(value) {
// success
}, function(value) {
// failure
});*/

var promise = new Promise(function(resolve, reject) {
    if (resolve){
    //resolve(value);
    console.log('异步操作成功！');
    } else {
    //reject(error);
    console.log('异步操作失败！');  
    }
   });
   promise.then(function(resolve) {
    // success
   }, function(value) {
    // failure
   });
