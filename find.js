const ages = [10, 20, 15, 25];
const verify = ages.find(checkAge);
console.log(verify);

function checkAge(age){
    return age >= 18;
}