// Buscando modulo http

const http = require("http");

// Criandos servior

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});

    // Criando rotas
    
    if(req.url == '/login'){
        res.write("Formulário de login")
    }else if(req.url == '/atendimento'){
        res.write("Atendimento")
    }else{
        res.write('Bem-Vindo a página principal')
    }

    return res.end()


}).listen(9090,()=>{console.log('Srever on')})