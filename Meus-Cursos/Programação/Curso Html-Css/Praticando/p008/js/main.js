"use strict"

let secaoimg = document.getElementsByTagName('section')[2]

var c = 0

secaoimg.addEventListener('click',()=>{
    secaoimg.classList.add('aumentar')
    secaoimg.classList.add('transitar')
    if(window.innerWidth < 367){
        secaoimg.style.maxWidth='189px'
        secaoimg.style.margin='auto'
        
    }else if(window.innerWidth > 367 && window.innerWidth <480){
        secaoimg.style.maxWidth='220px'
        secaoimg.style.margin='auto'
        
    }else if(window.innerWidth >480 && window.innerWidth <730){
        secaoimg.style.maxWidth='310px'
        secaoimg.style.margin='auto'
        
    }else{
        secaoimg.style.maxWidth='480px'
        secaoimg.style.margin='auto'
    }
    c++
    if(c%2==0){
        secaoimg.classList.remove('aumentar')
    }
})
function tamanho(){
    secaoimg.classList.remove('aumentar')
    
}