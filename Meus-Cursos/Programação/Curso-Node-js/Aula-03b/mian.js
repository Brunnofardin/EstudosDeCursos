const http = require('http');
const url = require("url");
const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.end(req.url)
   
})
servidor.listen(8888,()=>{
    console.log('Server on')
})