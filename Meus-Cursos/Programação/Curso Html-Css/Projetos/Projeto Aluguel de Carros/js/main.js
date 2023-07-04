const carros = ["Hyundai HB20",
"Chevrolet Onix",
"Chevrolet Onix Plus",
"Fiat Mobi",
"Volkswagen Gol",
"Fiat Argo",
"Renault Kwid",
"Fiat Cronos",
"Volkswagen Voyage 1.0",
" Renault Sandero S Edition 1.0",
"Volkswagen Voyage;"
]
let MenuCarros = document.getElementById('carros')
function GeradorOptions(qtd){
    for(c=0 ; c <= qtd ;c++){
        let option = document.createElement('option')
        //  atributos
        option.setAttribute('id','carro'+c)
        option.setAttribute('class','ListaDeCarros')
        option.innerHTML=carros[c]
        // finalizando
        MenuCarros.appendChild(option)
    }
}
GeradorOptions(carros.length - 1)











/* CARROS

"Hyundai HB20",
"Chevrolet Onix",
"Chevrolet Onix Plus",
"Fiat Mobi",
"Volkswagen Gol",
"Fiat Argo",
"Renault Kwid",
"Fiat Cronos",
"Volkswagen Voyage 1.0",
" Renault Sandero S Edition 1.0",
"Volkswagen Voyage;"



*/