let secaoProdutos = document.getElementById('itens')
// let secaoProdutos = [...secaoProdutos1]


function CriarDiv(qtd){
    let c = 1
    while (c<=qtd){
        let divs = document.createElement('div')

        const criarSecao = document.createElement('section')
        criarSecao.setAttribute('class','conteudo')

        // Criando local de imagem

        let CriarDivimg = document.createElement('div')
        CriarDivimg.setAttribute('class','img')

        // criando imagem

        let criarImg = document.createElement('img')
        criarImg.setAttribute('class','img')
        criarImg.src=''

        CriarDivimg.appendChild(criarImg)

        criarSecao.appendChild(CriarDivimg)
        
        // craindo botao
        for(vezes=1 ; vezes<=2;vezes++){
            var criarBtn = document.createElement('div')
            criarBtn.setAttribute('class','btns')
            
            // criandoinputs para o botao
            
            let criarInput = document.createElement('input')
            criarInput.setAttribute('class','btn'+vezes)
            criarInput.setAttribute('type','button')
            criarInput.style.cursor='pointer'
            criarBtn.appendChild(criarInput)
            criarSecao.appendChild(criarBtn)
            
            // adicionando valores aos botoes
            var btn1 = [...document.getElementsByClassName('btn1')]
            
            var btn2 = [...document.getElementsByClassName('btn2')]
            btn1.map((el)=>{
                
                el.value='Ver descrição'
            })
            btn2.map((el)=>{
                
                el.value='Comprar'
            })
            
            
            
            
        }
        
        divs.setAttribute('class','produtos')
        divs.appendChild(criarSecao)
        secaoProdutos.appendChild(divs)
        c++
    }
}
CriarDiv(9)

