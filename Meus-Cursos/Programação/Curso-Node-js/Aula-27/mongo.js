const mongo = require('mongoose');

mongo.connect("mongodb://localhost/Registros").then(()=>{

    console.log('Conectado ao Banco de dados com sucesso!')

}).catch((err)=>{

    console.log('Houve um erro ao tentar conectar-se: '+err)
})