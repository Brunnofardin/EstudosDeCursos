//              EXPRESS                    //
const express = require('express');
const app = express();


//              BODYPARSER                //
const body_parser = require('body-parser');
app.use(body_parser.json({}));
app.use(body_parser.urlencoded({extended:false}));

//             BANCO DE DADOS            //
const sequelize = require('sequelize');
const conexaobd03 = new sequelize('bancoteste03','root','123456789',{

    host:'localhost',
    dialect:'mysql',

})
conexaobd03.authenticate().then(()=>{

    console.log('Conexao com banco de dados efetuada com sucesso!')

}).catch((err)=>{

    conosle.log('Houve um erro ao tentar conectar-se ao BD erro: '+err)
})
const tabela01 = conexaobd03.define('usuarios',{
    Email:{
        type:sequelize.STRING

    },
    Senha:{
        type:sequelize.INTEGER
    }
})

//                  ROTAS                   //

app.get('/registrar', (req, res) => {
    res.sendFile(__dirname+"/index.html")

});

app.post('/dadoscoletados',(req,res)=>{

    tabela01.create({
        Email:req.body.iemail,
        Senha:req.body.isenha
    })

    res.sendFile(__dirname+"/registrado.html")
    
    
})
app.listen(8080,()=>{

    console.log('Servidor iniciado com sucesso!')

});