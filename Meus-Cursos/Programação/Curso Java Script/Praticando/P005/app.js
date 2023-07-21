const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars')


// Configurações
       // express
       const app = express()
       // bodyParser
       app.use(bodyParser.json())
       app.use(bodyParser.urlencoded({extended:false}))
       // handlebars
       app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
       app.set('view engine','handlebars')
       app.set('views','./views')
       // mongoose 
       mongoose.connect('mongodb://127.0.0.1/Registrar').then(()=>{
          console.log('Mongoose conectado com sucesso!')
       }).catch((err)=>{
        console.log('Erro: '+err)
       })

       const Schema = mongoose.Schema

       const produtoSchema = new Schema({
        Nome:{
            type:String,

        },
        Descricao:{
            type:String,
        }
       })
       mongoose.model('produtos',produtoSchema)
       //


//   Rotas
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/views/registro/formulario.html')
})
app.get('/registrar',(req,res)=>{
    const user = mongoose.model('produtos')
    new user({
        Nome:req.body.nome,
        Descricao:req.body.descricao
    }).save().then(()=>{
        console.log('Produto registrado com sucesso')
        res.sendFile(__dirname+'/views/registro/registros.html')
    }).catch((err)=>{
        console.log('Erro, tente novamente '+err) 
        res.redirect('/registrar')  
    })
    
})
app.get('/registros',(req,res)=>{
})

// Servidor

app.listen(9090,()=>{console.log('Servidor online')})