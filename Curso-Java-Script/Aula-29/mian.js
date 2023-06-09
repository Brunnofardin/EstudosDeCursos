function aluno(nome,nota){
    this.nome = nome
    this.nota = nota
    function dados(){
        setTimeout(()=>{
            console.log(nome)
            console.log(nota)


        },2000)
    }dados()

    return 
}

aluno('Brunno',18)