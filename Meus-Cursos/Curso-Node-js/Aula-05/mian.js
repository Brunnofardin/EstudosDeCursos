var http = require('http')
http.createServer((req,res)=>{
    res.end('Ola meu caro')

}).listen(7655,()=>{
    console.log('Servidor rodando!')
})