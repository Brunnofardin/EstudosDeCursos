const add = document.getElementById('add');

let pessoas = []

class Pessoa{
    constructor(nome,idade){ // O método construtor é sempre chamado ao criarmos um novo objeto para a classe
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade 
    }
    setNome(nome){
        this.nome = nome 
    }
    setIdade(idade){
        this.idade = idade
    }
    info(){
        console.log(this.nome);
        console.log(this.idade);
    }
}
const listar = ()=>{
    pessoas.map((el,i,a)=>{
         const div = document.createElement('div')
         div.setAttribute('class','pessoa')
         div.innerHTML = el
    })
}
add.addEventListener("click",(evt)=>{
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log(pessoas)
    const result = document.getElementById('resultado')
    result.innerHTML=listar
 

})