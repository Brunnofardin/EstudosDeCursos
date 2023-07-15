const Sequelize =  require('sequelize');

const conexao = new Sequelize('bancodeteste01','root','123456789',{
    host:'localhost',
    dialect:'mysql'
})
conexao.authenticate().then(()=>{
    console.log("Banco de dados sencronizado com sucesso!")
}).catch((err)=>{
    console.log("Erro:"+err)
})

const tabelaUser2 = conexao.define('Administradores',{
    Nome:{
        type:Sequelize.TEXT
    },
    Email:{
        type:Sequelize.STRING
    }
}) 
tabelaUser2.create({
    Nome:"Brunno Fardin de Souza [Master]",
    Email:"Brunnofardin@gmail.com"
})
// tabelaUser2.sync({force:true})
