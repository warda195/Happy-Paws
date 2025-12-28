<<<<<<< HEAD

window.onload = function(){
    alert("Welcome to Happy Paws 🐾");
}


function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    if(name=="" || email=="" || msg==""){
        alert("Please fill all fields!");
        return false;
    }
    alert("Thank you for contacting Happy Paws 🐾");
    return true;
}
=======

window.onload = function(){
    alert("Welcome to Happy Paws 🐾");
}


function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    if(name=="" || email=="" || msg==""){
        alert("Please fill all fields!");
        return false;
    }
    alert("Thank you for contacting Happy Paws 🐾");
    return true;
}
>>>>>>> 88a7b0d8cf93efa24b54e4caa779fbe2e5e4a356
