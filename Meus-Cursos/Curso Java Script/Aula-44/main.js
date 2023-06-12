"use strict" // modo restrito

// CRIAÇÃO DE VARIAVEIS Caixa1, caixa 2, e arrays elementos1 e elementos2

const caixa1 = [...document.getElementsByClassName('container')][0];

var elementos1 = [...caixa1.children];


const caixa2 = [...document.getElementsByClassName('container')][1];

var elementos2 = [...caixa2.children];

/// cor

var cor = [...document.getElementsByClassName('atividade')]

cor.map((el)=>{
    el.style.background='#5d5dff'
    el.style.color='white'

})






// FIXAÇÃO HEADER

var container1 = document.getElementById('ct-1');

var topo = container1.offsetTop;

var header = document.getElementsByTagName('header')[0];

function fixar(){

    if(window.scrollY >= topo){

         header.classList.add('fixar')

    }else{

        header.classList.remove('fixar')

    }
}
window.onscroll = function(){

    fixar()

}
// Criando inputs

elementos2.map((e,i,arry)=>{ 

    var input = document.createElement('input') 

    input.setAttribute('type','radio') 

    input.setAttribute('class','inputs') 

    e.appendChild(input) 
})

// FUNÇÕES

function adicionar(){

    elementos1[3].addEventListener('click',()=>{

        var ipn = [...document.getElementsByClassName('inputs')] 

        ipn.filter((e,i,a)=>{ 

            if(e.checked){ 
                alert(e.parentElement.firstChild.textContent)
                

            }else{
                console.log('Erro escolha um curso')
            }



        })
        
        

    })
}
function remover(){

    elementos1[2].addEventListener('click',()=>{ 
        var ipn = [...document.getElementsByClassName('inputs')]

        ipn.filter((e,i,a)=>{ 

            if(e.checked){

                e.parentElement.remove(Element) 

            }


        })

    })

}
function Cursos(){

    elementos1[1].addEventListener('click',()=>{

        var input = document.createElement('input')

        input.setAttribute('type','radio')

        input.setAttribute('class','inputs')

        var nomeCurso = document.getElementById('Curso')

        var div = document.createElement('div')

        div.style.marginBottom='20px'

        if(nomeCurso.value.length == 0){

            alert('O curso não será adiconado por estar vazio')
            
        }else{

            div.innerText=`${nomeCurso.value}`

            div.appendChild(input)

            caixa2.appendChild(div)

            nomeCurso.value=''

        }


    })


}
adicionar()
remover()
Cursos()

console.log('Bem-Vindo')
console.log('Tudo ok até agora')



  