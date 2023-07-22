// Variaveis importantes

const recomendacao = document.getElementsByClassName('recomendações')[0]
const body = document.getElementsByTagName("body")[0]

// Criando itens dinâmicamente

function recomendacoes(){
    for(c=1;c<=2;c++){
        const paragrafo = document.createElement('p')
        const ul = document.createElement("ul")
        paragrafo.setAttribute('id','p'+c)
        if(c==1){
            recomendacao.appendChild(paragrafo)
            recomendacao.appendChild(ul)
            
        }else{
            recomendacao.appendChild(paragrafo)

      }
        
    }
}

// Chamando função

body.onload = ()=>{
    recomendacoes()

    // Coeltando variaveis necessárias
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const nome = document.getElementById('nome')
    const idade = document.getElementById('idade')
    const botoes = [...document.getElementsByClassName('acao')]
    const sexos = [...document.getElementsByClassName('dados_radios')]
    
    //         Apresentando idade nome etc...
    
    botoes.map((el,i,a)=>{
        el.addEventListener('click',()=>{
            if(i==1){
                if(nome.value == '' || nome.length == 0 || idade.value=='' || idade.length == 0){
                    alert('Preencha os campos e tente novamente!')
                    
                }else if(nome.length <= 2){
                    alert('Digite seu nome com ao menos 3 caracteres')
                }else if(Number(idade.value) <= 0){
                    alert('Não é possivel validar idades negativas ou iguais a zero')
                }else{
                    recomendacao.style.display='block'
                    sexos.map((el,i,a)=>{
                        if(i == 0){
                            if(el.checked){
                                p1.innerText=`Bem-vindo ${nome.value} pelo que eu entedi o Sr tem ${idade.value} anos e seu sexo é masculino. É uma prezer-Conhecel-lo`
                                p2.innerText=`Segue abaixo dicas de alimentação`
                            
                            }else{
                                p1.innerText=`Bem-vindo ${nome.value} pelo que eu entedi o Sra tem ${idade.value} anos e seu sexo é femenino. É uma prezer-Conhecel-lá`
                                p2.innerText=`Segue abaixo dicas de alimentação`
                            
                            }       
                    
                        }          
                    })       
    
                }
            }else{
                recomendacao.style.display='none'
                p1.innerHTML=''
                p2.innerHTML=''
            }   
        })    
    })    
    
}
