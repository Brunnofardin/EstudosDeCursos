// funções ultilizando rest


function multiplicação(...valor){
    s = 1
    for (v in valor){
       s = s*valor[v]
    }
    return s
   


}
console.log(multiplicação(4,3,2,4,))
