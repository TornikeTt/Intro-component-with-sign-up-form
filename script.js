function Textchange(){
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // name check start
    var inputName = document.getElementById("firstName").value;
    var error = document.getElementById("error")
    var inputForBorderColor = document.querySelector("#firstName")
    var checkName = /^[a-zA-Z]+$/g;
    var checknumber = /\d/g
    if(inputName.match(checkName)){
        name.textContent = "";
        inputForBorderColor.style.borderColor = "black"
        error.src = "";
    }else if(inputName.match(checknumber)){
        name.textContent = "looks like you have a number in your name";
        //text position
        name.style.marginLeft = "185px"
        //error logo
        error.src = "images/icon-error.svg";
        //border color
        inputForBorderColor .style.borderColor = "red"

    }else{
        name.textContent = "first name cannot be empty"
        name.style.marginLeft = "285px"
        error.src = "images/icon-error.svg";
        inputForBorderColor.style.borderColor = "red"
    }
    // name check end

    
    // surname start 
    var inputSurname = document.getElementById("inputSurname").value
    var inputForBorderColor_surname = document.querySelector("#inputSurname")
    var errorSurname = document.getElementById("errorSurname")
    var checkSurname = /^[a-zA-Z]+$/g;
    var check_number_surname = /\d/g;
    if(inputSurname.match(checkSurname)){
        surname.textContent = "";
        inputForBorderColor_surname.style.borderColor = "black";
        errorSurname.src = "";
    }else if(inputSurname.match(check_number_surname)){
        surname.textContent = "looks like you have a number in your Last name"
        //text position
        surname.style.marginLeft = "155px"
        //border color
        inputForBorderColor_surname.style.borderColor = "red"
        //error
        errorSurname.src = "images/icon-error.svg";
    }else{
        surname.textContent = "Last name cannot be empty"
        //text position
        surname.style.marginLeft = "285px"
        //border color
        inputForBorderColor_surname.style.borderColor = "red"
        //error
        errorSurname.src = "images/icon-error.svg";
    }
    // surname end


    //email start 
    var inputEmail = document.getElementById("inputEmail").value
    var inputForBorderColor_Email = document.querySelector("#inputEmail")
    var errorEmail = document.getElementById("errorEmail")
    var check_Email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ 

    if(inputEmail.match(check_Email)){
        email.textContent = ""
        inputForBorderColor_Email.style.borderColor = "black"
        errorEmail.src= ""
    }else{
        email.textContent= "Looks like this is not an email"
        inputForBorderColor_Email.style.borderColor = 'red'
        email.style.marginLeft = "285px"
        //error
        errorEmail.src= "images/icon-error.svg";
    }
    //email end


    //password start 
    var inputPassword = document.getElementById("inputPassword").value
    var inputForBorderColor_Password = document.querySelector("#inputPassword")
    var erroPassword = document.getElementById("errorPassword")
    var check_password = /\w+/g;

    if(inputPassword.match(check_password)){
        password.textContent= "";
        inputForBorderColor_Password.style.borderColor = 'black';
        erroPassword.src= "";
    }else{
        password.textContent = "password cannot be empty"
        password.style.marginLeft = "285px"
        inputForBorderColor_Password.style.borderColor = 'red';

        //error
        erroPassword.src= "images/icon-error.svg";

    }
    //password end
}



