
//  conectando ao banco de dados

const sequelize = require('sequelize')
const conexao  = new sequelize('teste04','root','BFS15054819BD',{
    host:'localhost',
    dialect:'mysql'
})
const tabela = conexao.define('Usuários',{
    Nome:{
            type:sequelize.STRING
    },
    Email:{
            type:sequelize.STRING
    },
    Senha:{
            type:sequelize.INTEGER
    },
    Cargo:{
            type:sequelize.STRING
    }
})
// conexao.sync({force:true})
tabela.create({
    Nome:'Brunno Fardin de Souza',
    Email:'brunnofardin@yahoo.com',
    Senha:15054819,
    Cargo:'Admin'
})
