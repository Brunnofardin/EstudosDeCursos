const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/index.html')

})
app.listen(9987,()=>{console.log('Servidor ligado na porta https://localhost9987')})