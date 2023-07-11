let array = ['Node js','Java-Script','Mysql','React'];
let array1 = document.getElementById('array');
let cursos = array.map((el)=>{
    return `Curso ${el}`
})
array1.firstElementChild.innerHTML=cursos
const result = document.getElementById("res");
const elementos_pesquisar =[...document.getElementsByClassName('el-pesquisa')];
elementos_pesquisar.map((e,i,a)=>{
    if(i == 0){
        e.addEventListener('click',(evt)=>{
            const pesquisa = e.parentElement.nextElementSibling.firstElementChild.value 
            const verificar = array.some((e,i)=>{
                if(pesquisa.toUpperCase() == e.toUpperCase()){
                    const el = result.firstElementChild;
                    el.style.color='#2cff2c'
                    el.style.textShadow='1px 1px 3px black'
                    return el.innerHTML=`Elemento encontrado na posição ${i}`

                }else{
                    return false
                }    
            })
            if(verificar == false){
                const el = result.firstElementChild;
                el.style.color='red'
                el.innerHTML='Elemento não encontrado'
                el.style.textShadow='1px .8px 0px black'

            }
        })
    }
})