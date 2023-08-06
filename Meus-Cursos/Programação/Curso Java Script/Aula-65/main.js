const pessoa = {
    nome:"Brunno Fardin de Souza",
    idade:16,
    cargo:"ADMIN",
    linguagens:{
        javaScript:"Intermediário",
        python:"intermediário",
        html:{
            md01:"Báscio",
            md02:"Intermediário",
            md03:"Avançado",

        }

    }
}

const objetoParaString = JSON.stringify(pessoa)
const stringParaObjeto = JSON.parse(objetoParaString)
console.log(objetoParaString)


