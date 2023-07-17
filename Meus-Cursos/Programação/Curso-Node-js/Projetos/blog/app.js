// Express
const express = require('express');
const app = express();
// Configurações modulos 

   // bodyparser
      const body_parser = require('body-parser');
      app.use(body_parser.urlencoded({extended:true}));
      app.use(body_parser.json());

   // Handlebars
       const handlebars = require('express-handlebars');

       app.engine('handlebars',handlebars.engine({defaultLayout:'main'}));
       app.set("view engine",'handlebars');
       app.set('views','./views')
      
         
   // Mongose
      const mongoose = require('mongoose');

// Rotas

app.get('/home',(req,res)=>{
   res.render('home')
})


// Outros

app.listen(9090,()=>{
    console.log("Servidor iniciado com sucesso!")
})