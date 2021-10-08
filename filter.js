const ages = [10, 20, 15, 25];
var ages1 = ages.filter(check)
console.log(ages1);

function check(age){
   return age >= 18;
}