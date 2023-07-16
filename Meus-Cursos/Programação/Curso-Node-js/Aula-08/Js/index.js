const express =  require('express');
const body_parser = require('body-parser')
const app = express();


// Banco de dados
const sequelize = require('sequelize');
const conexao = new sequelize("bancodeteste01",'root','123456789',{

    host:'localhost',
    dialect:'mysql'
});

conexao.authenticate().then(()=>{

    console.log('Conxexão estabilizada com sucesso!')

}).catch((err)=>{

    console.log('Houve um erro ao tentar conectar-se com o BD: '+err)
})
const tabela01 = conexao.define("teste01",{

    Email:{

        type:sequelize.STRING
    }
})

// Rotas

app.get('/cad',(req,res)=>{
    res.sendFile(__dirname+"/html/index.html")

})
app.post('/add',(req,res)=>{
    const email = req.body.Iemail 
    tabela01.create({

        Email:email
    })
    res.send("Dado coletado: "+email)
    res.send('Formulário recebido')

})
app.listen(9090,()=>{

    console.log('Servidor ligado')
    
})