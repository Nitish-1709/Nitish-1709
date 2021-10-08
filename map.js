var arr = [10, 20, 15, 25];
var arr2 = arr.map(a => a * 2);
console.log("arr : " + arr);
console.log("arr2 : " + arr2);

let numbers = [16, 25, 36, 81]
let roots = numbers.map(function(num){
    return Math.sqrt(num)
});
console.log(roots)

let numbers1 = [10, 20, 15, 25]
let doubles = numbers1.map(function(num){
    return num * 2
})
console.log(doubles)
