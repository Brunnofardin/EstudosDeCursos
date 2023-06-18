const menu = document.getElementsByTagName('menu')[0]
const span = document.getElementsByTagName('span')[0]
const body = document.getElementsByTagName('body')[0]
const nome = document.getElementsByTagName('a')[3]
const abb = document.getElementsByTagName('abbr')[3]
const ancora = document.createElement('a')
const main = document.getElementsByTagName('main')[0]
const duvida = document.getElementById('duvida')
const enviar = document.getElementById('enviar')

window.onscroll = function(){
    fixar()
    console.log('Fixar e dinanismo ativados')
}
span.addEventListener('click',()=>{
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
        console.log('Menu fechado')
    }else{
        menu.style.display = 'block'
        console.log('Menu aberto')
    }
})

function sizes(){
    console.log('Largura sendo aumentada')
    if(window.innerWidth > 498){
        menu.style.display ='block'
        console.log('Menu para tablets ou telas maiores que 498px aberto')
    }else{
         console.log('Menu Hamburguer acionado para telas menores que 498px')
         menu.style.display='none'
    }
    

}

 function fixar(){
    if(window.scrollY > 150){
        span.classList.add('top')
        menu.classList.add('top1')
        console.log('Conectado ao ponto 0')
    }else{
        span.classList.remove('top')
        menu.classList.remove('top1')
        console.log('Desconectado ao ponto 0')
    }
}


ancora.innerText = '@NomedaEmpresa'

setTimeout(()=>{
    ancora.innerText='BrunnoFardin'
    ancora.setAttribute('href','https://www.facebook.com/profile.php?id=100092449466270')
    ancora.setAttribute('target','_blank')


},4000)
setTimeout(()=>{
    ancora.innerText='Brunnofardin'
    ancora.setAttribute('href','https://www.instagram.com/brunnofardin/')
    ancora.setAttribute('target','_blank')


},8000)
setTimeout(()=>{
    ancora.innerText='BFinformatica'
    ancora.setAttribute('href','https://www.youtube.com/channel/UC46bdkygIeBB3EJZ3kn822w')
    ancora.setAttribute('target','_blank')

},8000)

abb.appendChild(ancora)

enviar.addEventListener('click',()=>{
    var divFrame = document.createElement('div')
    divFrame.setAttribute('id','frame')
    var link = prompt('Digite o link da imagem')
    if(link.length == 0){
        alert('Digite o link de uma imagem')
    }else{
        var img = document.createElement('img')
        img.setAttribute('src',`${link}`)
        main.appendChild(divFrame)
        divFrame.appendChild(img)
    }
    
})
duvida.addEventListener('click',()=>{
    var respDuvida = document.getElementById('resDuvida')
    var voltar = document.getElementById('voltar')

    if(respDuvida.style.display == 'block'){
        respDuvida.style.display = 'none'
        voltar.style.display='none'
    }else{
        respDuvida.style.display='block'
        voltar.style.display='block'
       
    }
    voltar.addEventListener('click',()=>{
        respDuvida.style.display = 'none'
        voltar.style.display='none'


    })

})


const divP = document.getElementsByTagName('li')[3]
divP.style.width='1000px'


