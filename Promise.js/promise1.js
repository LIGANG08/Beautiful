/**
 * 
 * 2017-09-23
 * Promise 是抽象异步处理对象及对其进行各种操作的组件。字面上可以理解为“承诺”，A 调用 B，B 返回一个“承诺” 给 A。基本规则为：

三种状态：pending, fulfilled, rejected
只能由 pending 转变为 fulfilled 或 rejected
必须实现 then 方法，then 必须返回一个 Promise
then 方法接受两个参数，第一个为成功时回调，另一个是失败时回调；也可接受另一个 Promise传入
 */

//看一个简单例子：
/*function asyncFunction() { 
return new Promise(function (resolve, reject) {
setTimeout(function () {
resolve('Async Hello world');}, 3000);
});
}
asyncFunction().then(function (value) {
console.log(value);
}).catch(function (error) {
console.log(error);
});*/


//其中 resolver 为要执行的函数（不一定是异步），我们可看一个 Promise 简单实现：
/*function Promise(resolver) {
if(!(this instanceof Promise)) return new Promise(resolver);
this.status = 'pending';
this.value;
this.reason;
// then may be called multiple times on the same promise
this._resolves = [];
this._rejects = [];
if(isFn(resolver)) resolver(this.resolve.bind(this), this.reject.bind(this));
return this;
};*/

/*返回一个 Promise 对象，在返回之前，异步操作已开始执行；并且当 resolver 完成后，将会调用 Promise 对象本身的 resolve 或 reject 方法，
然后会触发 Promise 对象的 then 或者 catch 或其他的操作。*/

//编写一个实用的异步功能：
/*function getURL(URL) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}*/

/*根据上面的说明，使用 Promise 异步处理，需要函数本身返回 Promise 对象，但是 Node.js 库几乎都是回调方式。
那么可以使用 bluebird 将函数 Promise 化，如：*/
/*var readFileAsync = function(name){
  return new Promise(function(resolve, reject){
    fs.readFile(name, function(err, data){
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
}*/
 


