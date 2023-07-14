const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,arquivo)=>{
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(arquivo)
        return res.end()
        
    })


})
servidor.listen(8888,()=>{
    console.log('Server on')

})