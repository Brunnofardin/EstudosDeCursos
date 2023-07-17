const mongoose = require('mongoose');

// Se conectando ao banco de dados

mongoose.connect("mongodb://127.0.0.1/Registros").then(()=>{

    console.log('Conexão com o banco de dados efetuada com sucesso!')

}).catch((err)=>{

    console.log('Houve um erro ao tentar concetar-se ao BD '+err)
})

// Criando model (conjunto de variaveis)

const usuarioSchema = mongoose.Schema({
    Email:{
        type:String,
        require:true
    },
    Senha:{
        type:Number,
        require:true
    }
    
})

// Definindo coleção do nosso model acíma

mongoose.model('Usuarios',usuarioSchema);

// Inserindo dados na nossa coleção

const Usuario = mongoose.model('Usuarios')

new Usuario({

    Nome:"Brunnno Fardin de Souza",
    Senha:123456789

}).save().then(()=>{

    console.log('Usuário Registrado com sucesso!')
 
}).catch((err)=>{

    console.log('Houve um erro ao tentar regitra-lo '+err)
})