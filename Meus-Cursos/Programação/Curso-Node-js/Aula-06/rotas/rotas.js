const express = require('express')

const rotas = express.Router()
const cursos = ['Nodejs','Java-script','Mysql']

rotas.get('/',(req,res)=>{
    res.json({ola:'Seja bem vindo'})

})

rotas.get('/:cursoid',(req,res)=>{
    const curso = req.params.cursoid
    res.send(curso)
    let curoI = cursos.find(curso == cursos)
    if(!curoI){
        res.status(404).json(
            {erro:"Curso não encontrado"}

        )
    }
})

module.exports= rotas
