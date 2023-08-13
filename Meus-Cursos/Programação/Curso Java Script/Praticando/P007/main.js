const pessoa = {Nome:"Brunno",_id:'3736fdvgv3g36',Cargo:""};
  
function editar(op,cont){
    if(op == 1){
        pessoa.Nome = cont
    }else if(2){
        pessoa._id = cont

    }else{
        pessoa.Cargo = cont
    }
};

function  verificar(){
    let res = new Promise((acerto,negado)=>{
        if(pessoa._id == '3736fdvgv3g36' ){
            acerto({nome:pessoa.Nome})
            // admin
        }else{
            negado({nome:pessoa.Nome})
            // usuário
            
        }

    })
    return res
};

verificar().then((acerto)=>{
    console.log(`Olá ${acerto.nome},seja bem-vindo.`)
}).catch((err)=>{
    console.log(`Olá ${err.nome},Você não pode acessar esta rota.`)
    
});


// Editar 1 -> Nome
// Editar 2-> _id
// Editar 3-> Cargo

editar(1,'João')
editar(2,'47rtdreg')
editar(3,'Usuário')
