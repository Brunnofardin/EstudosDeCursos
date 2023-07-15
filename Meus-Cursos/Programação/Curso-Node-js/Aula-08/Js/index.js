const express =  require('express');

const app = express()

app.get('/home',(req,res)=>{
  
})
app.listen(9090,()=>{
    console.log('Servidor ligado')
})