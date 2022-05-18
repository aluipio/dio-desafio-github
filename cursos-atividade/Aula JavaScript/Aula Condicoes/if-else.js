var idade = 10;
var idadeAvo = 10;

function numeros(num){
    // Verificação comum
    let resultado;
    if (num > 10){
        resultado = "maior que 10";
    }else{
        resultado = "menor ou igual a 10";
    }

    // Faz a verificação na variavel: boolean
    let sinal = num > 0;
    if (sinal){ num++; }

    // Verificação ternária
    let divisao = num % 2 == 0 ? 'par': 'impar';
    
    return resultado, divisao;
}

console.log(numeros(idade));