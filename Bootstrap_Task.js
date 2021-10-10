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
    var select = document.getElementById('tempstd');
    select.removeChild(select.lastChild); 
    var select1 = document.getElementById('tempdiv');
    select1.removeChild(select1.lastChild);  
    var select2 = document.getElementById('tempminus');
    select2.removeChild(select2.lastChild);
    
}
function add(){

    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("class", "form-control")
    x.setAttribute("placeholder", "Select");
    x.setAttribute("aria-label", "Select");
    document.getElementById('tempstd').appendChild(x);

    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("class", "form-control")
    y.setAttribute("placeholder", "Select");
    x.setAttribute("aria-label", "Select");
    document.getElementById('tempdiv').appendChild(y);

    var z = document.createElement("BUTTON");
    z.setAttribute("type", "button");
    z.setAttribute("class", "fa fa-minus-circle")
    z.setAttribute("style", "font-size:30px;color:red");
    z.setAttribute("onclick", "remove()");
    document.getElementById('tempminus').appendChild(z);
}