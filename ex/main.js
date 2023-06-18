c='s'

var i1 = 0 // Intervalo 1 0-25
var i2 = 0 // Intervalor 2 26-50
var i3 = 0 // Intervalor 3 51-75
var i4 = 0 // Intervalo 4 76-100

while(c == 's'){
    var n = prompt('Digite um número')
    var c = prompt('Quer continuar? [S/N]')
    if(n >= 0 <=25){
        i1++

    }if(n >= 26 <=50){
        i2++
    }if(n >=51 <=75){
        i3++

    }if(n >=76 <=100){
        i4++
    }
    
    
   
}


alert(`${i1} números estão no intervalo de 0-25`)
alert(`${i2} números estão no intervalo de 25-50`)
alert(`${i3} números estão no intervalo de 50-75`)
alert(`${i4} números estão no intervalo de 75-100`)