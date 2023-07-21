const usuarios = new Map()

usuarios.set("Nome","Brunno Fardin de Souza")
usuarios.set("Email","Brunnoafrdin@yahoo.com")
usuarios.set("Idade",16)

let nome = ['Brunno Fardin de Souza']

if(usuarios.get("Nome") == nome[0]){
    console.log('Mlk ai é brabo: '+usuarios.get("Nome"))
}else{
    console.log("Nome normal: "+nome[0])
}
console.log(usuarios)

// set(par1,par2) - inserir a chave tal com o valor tal
   // par1 chave par2 valor
// delete(par1) deletar o que?
    // para1 chave
// Get(par1) - buscar
   // par1 buscar o que?
// has(par1) - tem o que?
   // par1 - chave
// algo.size - tamanho de algo

// algo.forEcah((el)=>{}) - pecorre toda a array

// algo.delete(par1) - deletar de algo o que?
   // par1 - chave