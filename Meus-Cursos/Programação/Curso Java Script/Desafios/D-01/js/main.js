//////////////////////////   Calculos \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const operadores = [(n1,n2)=>{return n1+n2},(n1,n2)=>{return n1-n2},(n1,n2)=>{return n1/n2},(n1,n2)=>{return n1*n2}];

//////////////////////////////  números \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let n1 = 0;
let n2 = 0;

//////////////////////////// Operações  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const operacoes = [...document.getElementsByClassName('op')];
const numeros = [...document.getElementsByClassName("num")];
const resultado = document.getElementById("s-3");
const res = resultado.firstElementChild;

operacoes.map((el,i,a)=>{
    console.log(el)
    el.addEventListener('click',()=>{
        numeros.map((el,i,a)=>{
            if(i == 1){
                n1 = Number(el.firstElementChild.value)
            }else if(i == 2){
                n2 = Number(el.firstElementChild.value)
               
            }
        })
        if(n1 == 0 || n2 == 0){

        }else{
            if(i <=3){
                res.innerHTML = "Resultado: "+operadores[i](n1,n2)

            }else{
                res.innerHTML = "Resultado: 100"

            }

        }
        

    })
})
