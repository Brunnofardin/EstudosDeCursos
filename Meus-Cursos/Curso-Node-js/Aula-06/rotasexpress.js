// modulos temos que carregalos com o tipo require
// dentro de uma variavel

const express = require('express'); 

// criamos o moudulo express

const app = express();

// constantes são variaveis imutaveis

// copiamos a funcao do modulo para a variavel app

app.listen(8081,()=>{console.log('Servidor ligado')})