var welcomeInput=document.getElementById('welcomeInput');
var logOutbtn=document.getElementById('logOutbtn');

var container;
if(localStorage.getItem('username')!=null);
{
    welcomeInput.innerHTML=`<h2>Wellcome ${localStorage.getItem('username')}</h2>`
}

function logOut(){
    location.href='../index.html';
    localStorage.removeItem('username');
}
logOutbtn.addEventListener('click',logOut);