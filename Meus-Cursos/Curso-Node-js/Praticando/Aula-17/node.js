let sequelize = require('sequelize')

let TabelaRegistro = new sequelize('teste3','root','BFS15054819BD',{
    host:'localhost',
    dialect:'mysql'
})

let DadosRegistro = TabelaRegistro.define('Registro',{
    Nome:{
        type:sequelize.STRING
    },
    Email:{
        type:sequelize.STRING
    },
    Senha:{
        type:sequelize.INTEGER
    }
})

DadosRegistro.create({
    Nome:'Brunno Fardin de Souza',
    Email:'Brunnofardin@yahoo.com',
    Senha:15054819
})


// TabelaRegistro.sync({fore:true})
