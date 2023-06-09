// funções geradoras

function* cores(){
    yield 'blue'
    yield 'pruple'
    yield 'red'

}
const itc = cores()
console.log(itc.next().value)