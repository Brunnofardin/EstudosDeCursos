const express = require("express");
const body_parser = require("body-parser")
const sequelize = require("sequelize")
const app = express()

// Body Parser

app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())

// Banco de dados

const Conexao = new sequelize('bancodeteste01','root','123456789',{
    host:'localhost',
    dialect:'mysql'

})
Conexao.authenticate().then(()=>{

    console.log('Conxeão com o banco de dados efetuada com sucesso!')
}).catch((err)=>{

    console.log('Ops! houve um emprevisto : '+err)
})
const tabela4 = Conexao.define('teste04s',{
    Nome:{
        type:sequelize.STRING
    },
    email:{
        type:sequelize.STRING
    },
    senha:{
        type:sequelize.INTEGER

    }
})

tabela4.sync()


// Rotas

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+'/html/index.html')
})
app.post('/registrar',(req,res)=>{
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    tabela4.create({
        Nome: nome,
        email: email,
        senha :senha
    })
    res.send('Registro efetuado com sucesso!')
})
app.listen(9090,()=>{
    console.log('Servidor iniciado com sucesso!')
})
