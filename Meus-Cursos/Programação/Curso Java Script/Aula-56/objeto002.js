class Carros{
    constructor(nome,tipo){
        this.nome=nome
        if(tipo == 1){
            this.tipo='Esportivo'
            this.velocidade = 290

        }else if(tipo == 2){
            this.tipo='Militar'
            this.velocidade = 180

        }else if(tipo == 3){
            this.tipo='Ultilitário'
            this.velocidade = 112

        }else{
            this.tipo='Corrida'
            this.velocidade = 332

        }


    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelociade(){
        return this.velocidade

    }
    getInfo(){
        return [this.nome,this.tipo,tipo,this.velocidade]
    }
    info(){
        console.log('Nome: '+this.nome)
        console.log('Velocidade: '+this.velocidade)
        console.log('Tipo: ',+this.tipo)
    }
}

const carro01 = new Carros('Bravura',3);