"use strict"

/*

var - pode ser usada de qualquer escopo e modificada

let - pode ser usada somente do mesmo escopo para cima 

*/

function oi(){
    const nome = 'Brunno'
    if(true){
        console.log('Dentro do IF do oi: '+nome)
        if(true){
            console.log('Dentro do IF que está no outro IF: '+nome)
        }
    }
    console.log('Dentro do oi e fora do IF: '+nome)
}

oi()