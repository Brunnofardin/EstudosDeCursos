const http = require("http");

const servidor  = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    if(req.url=='/home'){
        res.write("Bem-Vindo a minha home")
    }else if(req.url == '/sobre'){
        res.write("Bem-Vindo a meu /sobre")
        
    }else{
        res.write('Bem vindo a minha página principal')
    }
    res.end()
}).listen(8888,()=>{
    console.log('Server on')
});