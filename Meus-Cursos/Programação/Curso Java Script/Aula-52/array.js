// Trabalhando com ararys

let cursos = ['HTML5','CSS3','Node JS','PHP']

cursos[0] = "React" // posição 0 recebendo o valor string "React"

cursos.push('HTML5') // adionado elemnto html na ultima posição

cursos.unshift("Python")//adcionando elemento na primeira posição da array

cursos.pop() // removendo ultmio elemento da array

cursos.shift() // removendo 1° elemento da array


cursos.map((el,i,array)=>{
    console.log("O curso de "+el,"está na posição "+i)
})