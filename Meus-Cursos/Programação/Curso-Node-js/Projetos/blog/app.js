// Express
   const express = require("express");
   const app = express();

// body_parser
   const BodyParser = require("body-parser");
   app.use(BodyParser.urlencoded({ extended: false }));
   app.use(BodyParser.json());
// Handlebars
   const handlebars = require('express-handlebars');
   app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
   app.set("view engine",'handlebars');
   app.set("views",'./views');

// Rotas
   app.get('/home',(req,res)=>{
    res.render('home');
   })
// Outros 
   app.listen(9090,()=>{
    console.log('Servidor iniciado com sucesso !')
})
