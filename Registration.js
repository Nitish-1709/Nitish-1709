function myFunction(){
    const formDetails = document.getElementById("myForm").value;
    formDetails.addEventListener("Submit", async (form) => {
        form.preventDefault();
        var fName = document.getElementById("firstname").value;
        var lName = document.getElementById("lastname").value; 
        console.log("First Name = " + fName);
        console.log("Last Name = " + lName);
    })
}