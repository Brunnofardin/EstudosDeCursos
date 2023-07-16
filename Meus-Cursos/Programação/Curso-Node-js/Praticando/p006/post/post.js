const bd = require('../db/db')

bd.conexaobd03.authenticate().then(()=>{
    console.log('Conexao com banco de dados efetuada com sucesso!')
}).catch((err)=>{
    conosle.log('Houve um erro ao tentar conectar-se ao BD erro: '+err)
})
const tabela01 = bd.conexaobd03.define('usuarios',{
    Email:{
        type:bd.sequelize.STRING

    },
    Senha:{
        type:bd.sequelize.INTEGER
    }
})
module.exports={
    tabela01
}