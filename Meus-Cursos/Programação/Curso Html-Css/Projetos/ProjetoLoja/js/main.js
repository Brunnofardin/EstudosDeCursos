// Variaveis necessárias
const main = document.getElementsByTagName('main')[0]
const divs = document.getElementsByClassName('produtos');
const sectionPrincipal = document.getElementById('itens');
const conteudo = document.getElementsByClassName('conteudo');
const imagens = document.getElementsByClassName('imgs');
const btns1 = document.getElementsByClassName('btn1');
const btns2 = document.getElementsByClassName('btn2');
const burguer = document.getElementById('burguer');
const previous = document.getElementById('previous')
const menuflutuante = document.getElementById('menuflutuante');

// Menu flutuante

burguer.addEventListener('click',()=>{
    if(menuflutuante.style.display=='flex'){
        menuflutuante.style.display='none'
    }else{
        menuflutuante.style.display='flex'
    }
})

previous.addEventListener('click',()=>{
    menuflutuante.style.display='none'
})

// Criação dinâmicas de divs/sections

function CriarDiv(qtd){
    let secaoProdutos = document.createElement('section')
    secaoProdutos.setAttribute('id','itens')
    
    let c = 1
    
    while (c <= qtd){
        
        const criarDivs = document.createElement('div')
        criarDivs.setAttribute('class','produtos')
        
        // criando seção
        
        const criarSecao = document.createElement('section')
        criarSecao.setAttribute('class','conteudo')

        // Criando local de imagem

        let CriarDivimg = document.createElement('div')
        CriarDivimg.setAttribute('class','img')

        // criando imagem

        let criarImage = document.createElement('img')
        criarImage.setAttribute('class','imgs')
        criarImage.src=''
           
        // Armazenando imagem

        CriarDivimg.appendChild(criarImage)

        criarSecao.appendChild(CriarDivimg)
        
        // Criando botao
        let t =0

        for(vezes=1 ; vezes <= 2; ++vezes){

            var criarBtn = document.createElement('div')
            criarBtn.setAttribute('class','btns')
            
            // Criando inputs para os botões
            
            var criarInput = document.createElement('input')
            criarInput.setAttribute('class','btn'+vezes)
            criarInput.setAttribute('type','button')
            criarInput.style.cursor='pointer'
            criarBtn.appendChild(criarInput)
            if(t%2==0){
                criarInput.value='Ver descrição'
                t++

            }else{
                criarInput.value='Comprar'
            }    
            
            // armazenando botao
            
            
            // adicionando valores aos botoes     
            criarSecao.appendChild(criarBtn)
            
        }    
        
        criarDivs.appendChild(criarSecao)
        secaoProdutos.appendChild(criarDivs)
        main.appendChild(secaoProdutos)
        c++
    }    
}    
CriarDiv(1)



function mudarImagem(imagem='',i=0){
    const imgs = [...imagens]
    imgs.src = imagem
}    
let imagemdesejada =''
mudarImagem(imagemdesejada,0)

