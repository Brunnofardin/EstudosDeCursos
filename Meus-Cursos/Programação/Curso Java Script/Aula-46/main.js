"use strict"

let container1 = [...document.getElementsByClassName('container')][0]
let container2 = [...document.getElementsByClassName('container')][1]
let elementos1 = [...container1.children]
let elementos2 = [...container2.children]
let listaCursos = [...container2.children]

let containerCursos = document.getElementById('ct-2')
let NomeCurso = document.getElementById('Curso')
console.log(containerCursos)



function AdicionarCurso(NomeDoCurso){

    let container2 = document.getElementById('ct-2')
    let DivP = document.createElement('div')
    let Div = document.createElement('div')
    let input = document.createElement('input')
    Div.style.float='right'
    Div.style.marginRight='5px'
    input.setAttribute('type','radio')
    input.setAttribute('class','InputsDiv')
    Div.appendChild(input)
    DivP.innerHTML= NomeDoCurso
    DivP.appendChild(Div)
   
    container2.appendChild(DivP)

    console.log('Curso adiconado com sucesso!')

    return DivP
}





elementos2.map((el,i,array)=>{
    let inputs = document.createElement('input')
    let DivInputs = document.createElement('div')
    DivInputs.style.float='right'
    DivInputs.style.marginRight='5px'
    inputs.setAttribute('type','radio') 
    inputs.setAttribute('class','InputsDiv')
    DivInputs.appendChild(inputs)
    el.appendChild(DivInputs)
    
})

elementos1.map((el,i,array)=>{
    if(i > 0){
        el.addEventListener('click',(evt)=>{

            if(i==1){
            
                if(NomeCurso.value.length == 0){

                    alert('Preencha o campo (Nome do Curso) para que possa adiconar um')
                    
                }else{

                    
                    AdicionarCurso(NomeCurso.value)
                    
                    
                    alert('Adiconado com sucesso')

                    NomeCurso.value=''
                }
               
    
                
            }else if(i==2){

                var InputsSelecionado = [...document.getElementsByClassName('InputsDiv')]

                console.log(InputsSelecionado.checked)

                InputsSelecionado.filter((el,i,array)=>{

                    if(el.checked){


                        el.parentElement.parentElement.remove()

                

                    }else{

                        console.log('Selecione um Curso para remover!')
                    }
                })

    
            }else if(i==3){

                var InputsSelecionado = [...document.getElementsByClassName('InputsDiv')]
                console.log(InputsSelecionado.checked)
    
                InputsSelecionado.filter((el,i,array)=>{

                    if(el.checked){


                        return alert(el.parentElement.parentElement.textContent)

                    }
                })
    
                
    
            }else if(i==4){

                var InputsSelecionado = [...document.getElementsByClassName('InputsDiv')]
                console.log(InputsSelecionado.checked)
    
                InputsSelecionado.filter((el,i,array)=>{

                    if(el.checked){


                        let Selecionado = el.parentElement.parentElement

                        const  NovoCurso = AdicionarCurso(NomeCurso.value)

                        containerCursos.insertBefore(NovoCurso,Selecionado)

                    }
                })
               

                
              
                
                

                

            }else if(i==5){

                var InputsSelecionado = [...document.getElementsByClassName('InputsDiv')]
                console.log(InputsSelecionado.checked)
    
                InputsSelecionado.filter((el,i,array)=>{

                    if(el.checked){


                        let Selecionado = el.parentElement.parentElement.nextElementSibling

                        const  NovoCurso = AdicionarCurso(NomeCurso.value)

                        containerCursos.insertBefore(NovoCurso,Selecionado)

                    }
                })

               

               

               

            }
        })
    }

})


let divcor = [...document.getElementsByClassName('atividade')]
let element = [...divcor]
element.map((el)=>{
    el.style.background='#5d5dff'
    el.style.color='white'
})
