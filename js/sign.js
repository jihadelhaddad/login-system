var signName = document.getElementById('signName');
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var signRePassword = document.getElementById('signRePassword');
var SignAlertMss = document.getElementById('SignAlertMss');
// =======================================================================
var container;
if(localStorage.getItem('User Names') != null)
{
    container=JSON.parse(localStorage.getItem('User Names'));
}else{
    container=[];
}

function addUser(){
    user={
        name:signName.value,
        email:signEmail.value,
        password:signPassword.value,
        repasswoed:signRePassword.value
    }
    if(checkEmpty()== true){
        signAlert('All inputs Required' , 'red')
    }
    else{
        if(checkEmailEixt()==true){
            signAlert('You have already signed before!','red');
        }
        else{
            container.push(user);
            localStorage.setItem('User Names',JSON.stringify(container));
            clearUser();
            signAlert('success' , 'green');
        } 
    }
}
function signAlert(text , color){
    SignAlertMss.classList.replace('d-none' , 'd-block');
    SignAlertMss.innerHTML=text; 
    SignAlertMss.style.color =color;
}
function clearUser(){
        name:signName.value=" ";
        email:signEmail.value=' ';
        password:signPassword.value=' ';
        repasswoed:signRePassword.value=' ';
}
function checkEmpty(){
    if(signName.value==''||signEmail.value== ''|| signPassword.value==''||signRePassword.value==''){
        return true; 
    }
    else{
        return false;
    }
}
function checkEmailEixt(){
    for (let i = 0; i < container.length; i++) {
        if(container[i].email==signEmail.value)
        {
            return true ; 
        }
    }
}
