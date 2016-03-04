// function  pow( x ){
//     return x*x;
// }

// var arr = [1,2,3,4,5,6,7,8,9];
// arr.map(pow);
// console.log(arr);
// console.log(arr.map(pow));


var arr = [1, 3, 5, 7, 9];
var x = arr.reduce(function (x, y) {
    return x + y;
}); // 25/ 25

console.log(x);