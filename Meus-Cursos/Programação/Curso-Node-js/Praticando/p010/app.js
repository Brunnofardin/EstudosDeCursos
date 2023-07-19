const express = require('express')
const app = express()
// Configurações
   // BodyParser
     const bodyParser = require('body-parser');
      // Config
         app.use(bodyParser.json());
         app.use(bodyParser.urlencoded({extended:false}));
   //  template handlebars
     const handlebars = require('express-handlebars');
      // config
          app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
          app.set('view engine','handlebars')
          app.set('views','./views')
        
// Rotas

app.get("/",(req,res)=>{
    res.render('home')

})


// Servidor 
 
app.listen(9090,()=>{console.log('Servidor on')})