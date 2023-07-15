const Sequelize = require("sequelize");

const conectarBanco = new Sequelize('bancodeteste01','root','123456789',{

    host:'localhost',
    dialect:'mysql',
})
conectarBanco.authenticate().then(()=>{

    console.log("Conectado ao BD com sucesso !")

}).catch((err)=>{

    console.log("Houve um erro ao tentar se conectar cujo é :"+err)
})

const tabela03 = conectarBanco.define('Funcionários',{
    Nome:{

        type:Sequelize.STRING
    },
    Idade:{

        type:Sequelize.INTEGER
    },
    Email:{

        type:Sequelize.STRING
    },
    Salário:{

        type:Sequelize.INTEGER

    }
   
})
tabela03.create({
    Nome:"Brunno Fardin de Souza",
    Idade:17,
    Email:"Brunnofardin@yahoo.com",
    salário:1900

})

