console.log("Mukesh")
const a1=10;
const a2=20;
a1+a2;

let array1 = [
    {id: 1, name: "Mukesh"},
    {id: 2, name: "Nitish"},
    {id: 3, name: "asdsadsad"},
]
let function1 = (value) => {
    return (console.log(value.id));
    console.log("my aarray",array1)
}
array1.map(function1)
