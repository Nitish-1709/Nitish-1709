function sub(){
    var a = document.getElementById('name').value
    var b = document.getElementById('email').value
    var c = document.getElementById('contact').value
    var d = document.getElementById('role').value
    var e = document.getElementById('designation').value
    var f = document.getElementById('password').value
    var g = document.getElementById('std').value
    var h = document.getElementById('div').value
    console.log("Name : " + a)
    console.log("Email : " + b)
    console.log("Contact : " + c)
    console.log("Role : " + d)
    console.log("Designation : " + e)
    console.log("Password : " + f)
    console.log("Standard : " + g)
    console.log("Division : " + h)
}

function remove(){
    console.log("Success")
   
    var a = document.getElementById('body');  
var b = document.getElementById('tempstd');  
 a.removeChild(b);  

 var c = document.getElementById('body');  
var d = document.getElementById('tempdiv');  
 c.removeChild(d);  

}

function add(){
    console.log("finish")
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", " ");
    document.getElementById('tempstd').appendChild(x);

    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", " ");
    document.getElementById('tempdiv').appendChild(y);
    console.log("Success")
}
