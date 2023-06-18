let header = document.getElementsByTagName('header')[0]
let img = document.getElementsByTagName('section')[0]
let topo = img.offsetTop

window.onscroll = ()=>{
    if(window.scrollY>=topo){
       header.classList.add('fixar')
    }else{
        header.classList.remove('fixar')
    }
 
}


