// var arr = [1, 2, 4, 5, 6, 9, 10, 15];
// var r = arr.filter(function (x) {
//     return x % 2 !== 0;
// });
// console.log(r);

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
console.log(r);