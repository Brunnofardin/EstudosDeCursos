const caixa2 = [...document.getElementsByClassName('container')][1]
var elementos1 = [...caixa2.children]
elementos1.map((e,i,arry)=>{
    var input = document.createElement('input')
    input.setAttribute('type','radio')
    input.setAttribute('class','inputs')
    e.appendChild(input)
})

const caixa1 = [...document.getElementsByClassName('container')][0]
var elementos2 = [...caixa1.children]

var c1 = document.getElementById('ct-1')
var h = document.getElementsByTagName('header')[0]
var topo = c1.offsetTop

window.onscroll = function(){
    fixar()

}
function fixar(){
    if(window.scrollY >= topo){
         h.classList.add('fixar')
    }else{
        h.classList.remove('fixar')
    }
}

elementos2[3].addEventListener('click',()=>{
    var ipn = [...document.getElementsByClassName('inputs')]
    ipn.filter((e,i,a)=>{
        if(e.checked){
            ar = e.parentElement
            console.log(ar)

        }



    })
    
    

})
elementos2[2].addEventListener('click',()=>{
    var ipn = [...document.getElementsByClassName('inputs')]
    ipn.filter((e,i,a)=>{
        if(e.checked){
            e.parentElement.remove(Element)

        }



    })

})
elementos2[1].addEventListener('click',()=>{
    var nome = document.getElementById('Curso')
    var div = document.createElement('div')
    div.style.marginBottom='20px'
    if(nome.value.length == 0){
        alert('O curso não será adiconado por estar vazio')
        
    }else{
        div.innerText=`${nome.value}`
        caixa2.appendChild(div)

    }

})

// console.log(div1.children)
// console.log(document.getRootNode())



  