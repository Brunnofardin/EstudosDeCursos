const express = require('express')
const app = express()
const bodyparse = require('body-parse')
const sequelize = require('sequelize')

const conexao = sequelize('teste3','root','BFS15054819BD',{
    host:'localhost',
    dialect:'mysql'

})
app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

app.get('/formulario',(req,res)=>{
    res.send(nome)
    res.sendFile(__dirname+'/index.html')

})
app.post('/registro',(req,res)=>{
    res.send('Formulário recebido')

})
app.listen(8081,()=>{
    console.log('Server ligado')
})