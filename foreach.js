let sum = 0;
const number = [10, 20, 15, 25];
number.forEach(myFunction);

function myFunction(num){
    sum += num
}

console.log(sum) 

const numbers = [10, 20, 15, 25];
numbers.forEach(multi);

function multi(num1, index, arr){
    arr[index] = num1 * 10;
    console.log(arr[index]);
}

