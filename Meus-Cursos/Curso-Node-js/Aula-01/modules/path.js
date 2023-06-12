const path = require('path')

// Nome do arquivo atual

console.log(path.basename(__filename))

//diretorio do arquivo atual

console.log(path.dirname(__filename))

// Exetensão do arqivo

console.log(path.extname(__filename))

// criar um objeto Path

console.log(path.parse(__filename))

// Juntar caminhos de arquvos

console.log(path.join(__dirname,'onde','onde'))