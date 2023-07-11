"use strict"

let cont = document.getElementById('cont')
let el = document.getElementById('el')

el.addEventListener('click',(evt)=>{
    evt.stopPropagation()


})
cont.addEventListener('click',(evt)=>{
    alert('Clicou')
})