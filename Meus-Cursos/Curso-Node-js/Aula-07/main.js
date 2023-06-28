const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
    res.end('Ola')

})
app.listen(7777,()=>{console.log('Servidor ligado na porta https://localhost7777')})