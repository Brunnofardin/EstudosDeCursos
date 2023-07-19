const express = require('express');
const app = express()


//Configurações
   // bodyParser
      const bodyParser = require('body-parser')
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:false}));
   // Bancode dados
       const mongoose = require('mongoose')
       mongoose.connect('mongodb://127.0.0.1/Regsitros').then(()=>{

            console.log("Conectado ao mongose com sucesso! ")

       }).catch(()=>{

            console.log('Erro ao tentar se conectar ao mongose! ');
       })
       

// Rotas

app.use(express.static(__dirname+'/css'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/html/raiz/index.html')
})
app.get('/formulario',(req,res)=>{
    res.sendFile(__dirname+'/html/form/form.html')

})
app.post('/registrar',(req,res)=>{
    const nome = req.body.nome 
    const idade = req.body.idade
    require('./models/usuarios')
    const usuario = mongoose.model('Usuarios')

    new usuario({
        Nome:nome,
        Idade:idade

    }).save().then(()=>{
        console.log("Usuário registrado com sucesso! ")
    }).catch(()=>{
        console.log("Erro ao tentar cadastra-lo!")
    })
    res.redirect('/')

})
app.get('/registros',(req,res)=>{
    require('./models/usuarios')
    const usuario = mongoose.model('Usuarios')

    usuario.find().then((arquivo)=>{
        res.send(arquivo)
    })
})

// Servidor 

app.listen(9090,()=>{console.log('Servidor on')})