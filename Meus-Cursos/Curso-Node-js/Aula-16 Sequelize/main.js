let Sequelize = require('sequelize')

 var nome = 'Brenno Rodrigues'
 var idade = 15
 var email = 'Brennorodrigues853@gmail.com'

let conexao = new Sequelize('teste2','root','BFS15054819BD',{
    host:'localhost',
    dialect:'mysql'
})

let TabelaFuncionarios = conexao.define('Funcionários',{
    Nome:{
        type:Sequelize.STRING

    },
    Idade:{
        type:Sequelize.INTEGER
    },
    Email:{
        type:Sequelize.STRING
    }
})

TabelaFuncionarios.create({
    Nome:`${nome}`,
    Idade:`${idade}`,
    Email:`${email}`
})


