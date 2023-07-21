let container = document.getElementById("array")
let cores =  ['Azul','vermelho','verde',["claro","escuro","medio"]];
let cursos = ['Html5','CSS3','Python','Java-Script',cores]


// Inserindo elemento na primeira posição da array
cursos.unshift('Node Js')
// Inserindo na ultimo posição
cursos.push('Node Js')
// Deletando elemento da ultima posição
cursos.shift()
// Deletando elemento da primeira posição
cursos.pop()

let c = 0
cursos.map((el,i,a)=>{
   const p = document.createElement('p')
   p.innerHTML = cursos[c]
   container.appendChild(p)
   c++
    

})
console.log(cursos[4][3][2])
