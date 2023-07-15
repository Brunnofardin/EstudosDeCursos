const express = require('express');
const app = express()
const rotas = require('../rotas/rotas')

app.listen(9090,()=>{
    console.log('Server on')
})