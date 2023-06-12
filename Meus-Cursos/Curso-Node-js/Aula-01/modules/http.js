const http = require('http');
const porta = 8080

const server = http.createServer((req,res)=>{
    if (req.url == '/home'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>ola</h1>')
    }

})
server.listen(porta,()=> console.log('Online') )