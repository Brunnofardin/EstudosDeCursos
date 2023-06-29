const express = require('express')
const app = express();

app.get('/home',(req,res)=>{
    res.send('Ola seja bem-vindo a minha págona ')

})
app.get('/sobre',(req,res)=>{

})
app.get('/Sobre',(req,res)=>{

})
app.get('/ola/:nome/',(req,res)=>{
    res.send(req.params.nome)

})
app.listen(9922,()=>{
    console.log('Servidor ligado')

})