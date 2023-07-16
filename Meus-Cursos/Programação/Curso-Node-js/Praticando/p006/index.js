//              EXPRESS                    //
const express = require('express');
const app = express();

//              BODYPARSER                //
const body_parser = require('body-parser');
app.use(body_parser.json({}));
app.use(body_parser.urlencoded({extended:false}));

//              Banco de dados
const tabela01 = require('./post/post')

//                  ROTAS                   //
app.get('/registrar', (req, res) => {

    res.sendFile(__dirname+"/html/index.html")

});
app.post('/dadoscoletados',(req,res)=>{
    tabela01.tabela01.create({
        Email:req.body.iemail,
        Senha:req.body.isenha

    }).then(()=>{

        console.log('Usuário registrado com sucesso!')

    }).catch((err)=>{

        console.log('Ops! houve um erro: '+err)
    })

    res.sendFile(__dirname+"/html/deletar.html")
    
    
});
app.post('/del',(req,res)=>{
    res.sendFile(__dirname+'/html/deletar.html')

    tabela01.tabela01.destroy({where:{'Email':req.body.iuser}}).then(()=>{
        console.log('Usuário deletado!')
    })

})
app.listen(8080,()=>{

    console.log('Servidor iniciado com sucesso!')

});