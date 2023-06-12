"use strict"

const container1 = [...document.getElementsByClassName('container')][0]
const container2 = [...document.getElementsByClassName('container')][1]
const elementosC1 = [...container1.children]
const elementosC2 =[...container2.children]


function CriarDivCurso(NomeCurso){
    var ct2 = document.getElementById('ct-2')
    let input = document.createElement('input')
    input.setAttribute('type','radio')
    input.setAttribute('class','InputsDiv')
    let DivPrincipal = document.createElement('div')
    DivPrincipal.innerHTML=NomeCurso
    let Divinput = document.createElement('div')
    Divinput.setAttribute('class','DivInputs')
    Divinput.appendChild(input)
    DivPrincipal.appendChild(Divinput)
    container2.appendChild(DivPrincipal)

    return console.log(DivPrincipal.firstChild)



}

elementosC2.map((elemento,indice,array)=>{

    let input = document.createElement('input')
    input.setAttribute('type','radio')
    input.setAttribute('class','InputsDiv')

    let Div = document.createElement('div')
    Div.setAttribute('class','DivInputs')
    Div.appendChild(input)
    elemento.appendChild(Div)


})


elementosC1[1].addEventListener('click',()=>{
        let NomeDoCurso = document.getElementById('NomedoCurso')
        if(NomeDoCurso.value.length==0){
            alert('O curso não será adicionado por estar vazio')
        }else{
            CriarDivCurso(NomeDoCurso.value)
            NomeDoCurso.value=''
            console.log('Elemento adicionado com sucesso')
            
        }


})


elementosC1[2].addEventListener('click',()=>{

  
    

}) 

elementosC1[3].addEventListener('click',()=>{

    
  
    

})

elementosC1[4].addEventListener('click',()=>{
    var InputsDiv = [... document.getElementsByClassName('InputsDiv')]
    InputsDiv.map((elementos,indice,array)=>{
        if(elementos.checked){
            elementos.parentElement.parentElement.remove()
            console.log('Elemento removido com sucesso')
        }else{
            console.log('Selecione um elemento para remover')
        }
    })
   
    
})


elementosC1[5].addEventListener('click',()=>{
    var InputsDiv = [... document.getElementsByClassName('InputsDiv')]
    InputsDiv.map((elementos,indice,array)=>{
        if(elementos.checked ){
            alert('Curso selecionado: '+elementos.parentElement.parentElement.textContent)

        }else if(elementos.children != 'checked'){
            console.log('Escolha um elemento')
        }


    })



})










  