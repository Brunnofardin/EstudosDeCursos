const add = document.getElementById('add');

let pessoas = []

function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
    this.getNome = function(){
        return this.nome
    }
    this.getIdade = function(){
        return this.idade 
    }
    this.setNome = function(nome){
        this.nome = nome 
    }
    this.setIdade = function(idade){
        this.idade = idade
    }
    this.info = function(){
        console.log(this.nome);
        console.log(this.idade);
    }
}
const listar = (res)=>{
    res.innerHTML=''
    pessoas.map((el,i,a)=>{
         let div = document.createElement('div')
         div.setAttribute('class','pessoa')
         div.innerHTML = `Nome ${el.getNome()} Idade ${el.getIdade()}`
         res.appendChild(div)
         return
    })
}
add.addEventListener("click",(evt)=>{
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = "";
    idade.value = "";
    nome.focus();
    const result = document.getElementById('resultado');
    listar(result);
 

})
