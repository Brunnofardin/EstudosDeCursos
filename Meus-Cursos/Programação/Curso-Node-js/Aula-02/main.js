const http = require("http")

http.createServer((req,res)=>{
    res.writeHead((200),{
        'Content-Type':'text/plain'
    })
    res.write("Olá")
    res.end("")
}).listen(3322,()=>{
    console.log('Server on')
})