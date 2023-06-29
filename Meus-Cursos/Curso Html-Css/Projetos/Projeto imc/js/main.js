let calcular = document.getElementById('calcular')
let limpar = document.getElementById('limpar')
let res = document.getElementById('msg')
let res1 = document.getElementById('msg1')

let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
calcular.addEventListener('click',()=>{
    if(peso.value.length == 0 || altura.value.length == 0 ){
        alert('Preencha todos os campos e tente novamente')
    }else{
        console.log(peso.value)
        res.style.display='block'
        let imc = Number(peso.value)/(Number(altura.value ** 2)) 
        res1.innerHTML=`Seu indice de massa corporal é ${imc}`

    }
    
})
limpar.addEventListener('click',()=>{
    res.style.display='none'
    peso.value=''
    altura.value=''

})