const express = require("express");
const fs = require('fs')

const app =  express()

app.get("/home",(req,res)=>{
   res.sendFile(__dirname+'/index.html')

})

app.listen(9090,()=>{console.log("Server on")})