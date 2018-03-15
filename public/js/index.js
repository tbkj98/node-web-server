// var login_button = document.getElementById("button");

// login_button.addEventListener("click",login);

function login(event){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var emailValue = email.value;
    var passwordValue = password.value;

    var flag = false;

    if(!emailValue){
        email.style.border = "solid 2px red";
    } else {
        email.style.border = "inset 2px";
        flag = true;
    }

    if(!passwordValue){
        password.style.border = "solid 2px red";
        event.preventDefault();
        return ;
    } else {
        if(!flag){
            event.preventDefault();
            return ;
        }
        password.style.border = "inset 2px";
    }

    if(validateEmail(email.value)){   //true for valid email
        email.style.border = "inset 2px";
    } else {
        email.style.border = "solid 2px red";
        alert("Invalid email");
        event.preventDefault();
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}