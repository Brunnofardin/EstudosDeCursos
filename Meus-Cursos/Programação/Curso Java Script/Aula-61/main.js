const pessoa={
    nome:"Kaylane",
    sexo:"feminino",
    Cargo:"admin",
    idade:17,
    info:{
        nome:"Souza",
        sexo:17,
        idade:2,
        

    }
}

if(pessoa.sexo.toLocaleUpperCase()[0] == 'M'){
    if(pessoa.Cargo.toLocaleUpperCase()[0] == 'A'){
        console.log(`Olá Sr ${pessoa.nome}, seu cargo atual é de : ${pessoa.Cargo} (Administrador) `)
        console.log('Informações:')
        console.log(pessoa.info.nome,pessoa.info.sexo,pessoa.info.idade)

    }else{
        console.log(`Olá Sr ${pessoa.nome}, seu cargo atual é de : ${pessoa.Cargo} (Funcionário)`)
          console.log('Informações:')
          console.log(pessoa.info.nome,pessoa.info.sexo,pessoa.info.idade)


    }
    
}else{
    if(pessoa.Cargo.toLocaleUpperCase()[0] == 'A'){
        console.log(`Olá Sra ${pessoa.nome}, seu cargo atual é de : ${pessoa.Cargo} (Administrador) `)
          console.log('Informações:')
        console.log(pessoa.info.nome,pessoa.info.sexo,pessoa.info.idade)
    }else{
        console.log(`Olá Sra ${pessoa.nome}, seu cargo atual é de : ${pessoa.Cargo} (Funcionária)`)
          console.log('Informações:')
          console.log(pessoa.info.nome,pessoa.info.sexo,pessoa.info.idade)

    }


}
