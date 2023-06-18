let array = document.getElementById('p-array')
let pesquisa = document.getElementById('procurar')
let btn_procurar = document.getElementById('btn-procurar')
let msg = document.getElementById('msg')
let elementos = ['Brunno', 'João','Kely','Ana','Maria luiza','Jordana']
array.innerHTML=`[ ${elementos} ]`

btn_procurar.addEventListener('click',(evt)=>{
    msg.innerHTML='Valor não encontrado'
    elementos.find((el,i)=>{
        if(el==pesquisa.value){
            msg.innerText = `Valor encontrado : ${el} e está na posição ${i}`
            pesquisa.value=''
        }

     })

})