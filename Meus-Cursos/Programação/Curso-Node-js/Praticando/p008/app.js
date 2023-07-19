
const express = require('express');
const app = express();

app.use(express.static(__dirname+"/css"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/html/index.html")
})
app.listen(9090,()=>{console.log('Servidor on pohaa kkk')})