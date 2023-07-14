const express = require('express');
const app = express()
app.get('/home',(req,res)=>{
    res.send("Bem-Vindo")

})
app.listen(9090,()=>{console.log('Server on')})