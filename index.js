//password Toggle function 

function toggle() {
const pass = document.getElementById('password');
if(pass.type==="password"){
    pass.type = "text";
}
else{
    pass.type = "password";
}
}


//password & confirm password validation function

function validation(){
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    pass_alert = document.getElementById("pass_alert"); //Span tag below password field to show validation msg
    submitButton = document.getElementById("submit"); //Submit Button

    if(password!=confirm_password){
        pass_alert.style.color ='red';
        pass_alert.innerHTML= '☒ Use same password';
        submit.style.opacity = '0.4';

    }
    
    else{
        pass_alert.style.color ='green';
        pass_alert.innerHTML= '🗹 Password Matched';
        submit.style.opacity = '1';
    }

}


//successfully sign up alert function

function signup_alert(){
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    var name = document.getElementById('fullName').value;

    if(password && confirm_password!='') {
        alert("Congratulation "+name+
         ". Sign-Up Successfully")
     }
else{
    alert("Please Fill All the Details")
     }
}


//successfully login up alert function

function login_alert(){
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    
    if(password && email!='') {
        alert("login Successfully")
     }
else{
    alert("Enter All Details")
     }
}