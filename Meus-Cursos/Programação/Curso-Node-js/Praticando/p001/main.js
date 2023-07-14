// Busncando modulo http
const http = require("http");
// Criando servidor
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Bem-Vindo");
    res.end();

}).listen(9090,()=>{
    console.log('Server on')
});