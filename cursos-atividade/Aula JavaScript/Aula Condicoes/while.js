// Declarações While e Do..While
// Executa depois da verificação
var array = ['a','b','c',4,4,5];
var eixo = 0;
while(eixo < array.length){
    console.log(eixo, ' => ', array[eixo]);
    eixo++;
}

// Executa antes da verificação
var eixo2 = 0;
do{
    console.log(eixo2, ' => ', array[eixo2]);
    eixo++;
}while(eixo < array.length) 
