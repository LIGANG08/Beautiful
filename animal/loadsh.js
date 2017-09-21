/**
 * 
 */
const _ = require('lodash');

console.log('chunk:', _.chunk(['a','b','c','d'],3));//创建一组按长度划分为组的元素数组。如果数组不能被均匀分割，则最后的块将是剩余的元素。
console.log("_.compact(['a','b','c','d']):", _.compact(['a','b','c','d']));//创建一个与所有虚假值删除阵列。价值观假、空，0，”，不确定的，和楠是虚假。
console.log('compact:',_.compact(['a','b',false,1,'',3])); 
console.log('concat',_.concat([1, 2],[4,5,6,'a','b'],['c'],['d'])); //创建一个新数组串联阵列的任何额外的阵列和/或价值。
console.log('difference:',_.difference([2,1],[2,3])); //创建一个数组，数组的值不包括在其他应用samevaluezero平等比较阵列。结果值的顺序和引用由第一个数组决定。
console.log('differenceBy1:',_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); //这种方法就像是:_.difference,只是它接受的比较器比较值调用数组元素。结果值的顺序和引用由第一个数组决定。比较两个参数调用：（arrval，othval）。
console.log('differenceBy2:',_.differenceBy([0.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));

//这种方法就像是:_.difference,只是它接受的比较器比较值调用数组元素。结果值的顺序和引用由第一个数组决定。比较两个参数调用:（arrval，othval）
console.log(_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual));

//创建一个数组，其中n个元素从一开始就被删除。
console.log('drop:',_.drop([1, 2, 3],1));
console.log('drop:',_.drop([1, 2, 3], 2));
console.log('drop:',_.drop([1, 2, 3], 5));
console.log('drop:',_.drop([1, 2, 3], 0));
console.log('drop:',_.dropRight([1, 2, 3]));

//创建一个带有n个元素从结尾处删除的数组。
console.log('dropRight:',_.dropRight([1, 2, 3], 2));
console.log('dropRight:',_.dropRight([1, 2, 3], 5));
console.log('dropRight:',_.dropRight([1, 2, 3], 0));

//创建一个数组片段，不包括从结尾处删除的元素。元素下降到谓词返回Falsey。谓词用三个参数调用：（值、索引、数组）。
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
console.log('dropRightWhile:',_.dropRightWhile(users, function(o) { return !o.active; }));
console.log('dropRightWhile:',_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
console.log('dropRightWhile:',_.dropRightWhile(users, ['active', false]));
console.log('dropRightWhile:',_.dropRightWhile(users, 'active'));

//创建数组的一部分，不包括从开头删除的元素。元素下降到谓词返回Falsey。谓词用三个参数调用：（值、索引、数组）。
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
console.log('dropWhile:',_.dropWhile(users, function(o) { return !o.active; }));
console.log('dropWhile:',_.dropWhile(users, { 'user': 'barney', 'active': false }));
console.log('dropWhile:',_.dropWhile(users, ['active', false]));
console.log('dropWhile:',_.dropWhile(users, 'active'));

//用从开始到结束的值填充数组元素，但不包括。
console.log('fill:',_.fill([1, 2, 3], 'a'));
console.log('fill:',_.fill(Array(3), 2));
console.log('fill:',_.fill([4, 6, 8, 10], '*', 1, 3));

//这种方法就像是:_.find除了它返回第一个元素的索引返回一些谓词而不是元素本身。
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
console.log('findIndex:',_.findIndex(users, function(o) { return o.user == 'barney'; }));  
console.log('findIndex:',_.findIndex(users, { 'user': 'fred', 'active': false }));
console.log('findIndex:',_.findIndex(users, ['active', false]));
console.log('findIndex:',_.findIndex(users, 'active'));

//这种方法就像是:_.findIndex除了遍历集合元素从右到左。
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
console.log('findLastIndex:',_.findLastIndex(users, function(o) { return o.user == 'pebbles'; }));
console.log('findLastIndex:',_.findLastIndex(users, { 'user': 'barney', 'active': true }));
console.log('findLastIndex:',_.findLastIndex(users, ['active', false]));
console.log('findLastIndex:',_.findLastIndex(users, 'active'));