let log1 = document.querySelector('.log1 a');
let logpass = document.querySelector('.logpass');
let message1 = document.querySelector('.message1');
let clo1 = document.querySelector('.clo1');


window.localStorage.setItem('pass','1234');
log1.onclick = function(){
    if(logpass.value ==  window.localStorage.getItem('pass')){
        log1.href = log1.dataset.link;
    }else{
        message1.style.opacity = '1';
    }
}
clo1.onclick = function(){
    message1.style.opacity = '0';
    logpass.value = null ;
}












