function tamanho(){
    if(window.innerWidth > 724){
        let menu = document.getElementById('menu')
        menu.style.display='block'
    }else{
        let menu = document.getElementById('menu')
        menu.style.display='none'
    }
}
function mostrar_menu(){
    if(menu.style.display == 'block'){
        let menu = document.getElementById('menu')
        menu.style.display = 'none'
    }else{
        let menu = document.getElementById('menu')
        menu.style.display = 'block'
    }
}