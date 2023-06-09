// crate elementnt('nomedoelemnto')
// setatribute("atributo","oque vai receber/nome")
// appendchild(oque?) - adicionar como filho
var body = document.getElementsByTagName('body')[0]
c= 0
for( v = 1 ; v <= 10 ; v++ ){
       // criadno elemnto

        var div = document.createElement('div')

        // setando atributo nele


        div.setAttribute('id','div'+c)

        // estilização

        div.style.height='400px'
        div.style.width='400px'
        div.style.margin='auto'
        div.style.marginTop='40px'
        div.style.background='blue'

        //  adicionando ao body como filho

        body.appendChild(div)

        div.addEventListener('click',(evt)=>{
            body.removeChild(evt.target)
            console.log(`Elemnto ${evt.target} removido com sucesso`)

        })

        c++
}
console.log(`${c} Elementos criados div com sucesso!`)