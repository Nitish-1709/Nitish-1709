var arr = [10, 20, 15, 25];
var arr2 = arr.reduce(number);

function number(total, num){
    return total + num
}

console.log(arr2);
