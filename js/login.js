var logEmail = document.getElementById('logEmail');
var logPassword = document.getElementById('logPassword');
var loginbtn = document.getElementById('loginbtn');
var SignAlertMss = document.getElementById('SignAlertMss');


var container ; 
if(localStorage.getItem('User Names') !=null){
    container=JSON.parse(localStorage.getItem('User Names'));
}else {
    container = [] ; 
}
function logIn(){
    if(checkEmpty()==true){
        AlertMss('Inputs required' ,'red');
    }
    else{
        if(checklogin()==true){
            location.href='../home.html'
        }
        else{
            AlertMss('Email or Password incorrect' , 'red')
        }
    }
}

function checklogin(){
    for (let i = 0 ; i < container.length; i++) {
        if(container[i].email==logEmail.value && container[i].password==logPassword.value)
        {
            localStorage.setItem('username' ,container[i].name);
            return true ; 
        }
    }
}

function AlertMss(text , color){
    SignAlertMss.classList.replace('d-none' , 'd-block');
    SignAlertMss.innerHTML=text; 
    SignAlertMss.style.color =color;
}
function checkEmpty(){
    if(logEmail.value==''||logPassword.value==''){
        return true ;
    }
    else {
        return false ;
    }
}
loginbtn.addEventListener('click' ,logIn);


