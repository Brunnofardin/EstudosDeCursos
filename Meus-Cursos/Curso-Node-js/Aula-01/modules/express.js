const express = require('express')
const app = express()


app.get('/home',(req,res)=>{
    res.status(200).send('Hellow world')

})

const por = 8080

app.listen(por,()=>console.log('Rodando servior'))