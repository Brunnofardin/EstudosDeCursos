const sequelize = require('sequelize');
const conexao= new sequelize("bancodeteste01","root",'123456789',{
    host:'localhost',
    dialect:'mysql',
}) 

conexao.authenticate().then(()=>{
    console.log("Conectado ao banco de dados com sucesso")
})