// Carregando modulos

const express = require('express');
const handlebars = require('express-handlebars');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// Configurações
   // bodyparser
      app.use(body_parser.urlencoded({extended:true}));
      app.use(body_parser.json());
   // Handlebars
      app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
      app.set('view engine', 'handlebars');
      app.set('views', './views');
   // Mongose
      // em breve


// Rotas
app.get('/home',(req,res)=>{
    res.render('home')

})

// Outros
const port = 8081
app.listen(port,()=>{console.log("Servidor iniciado com sucesso!")})