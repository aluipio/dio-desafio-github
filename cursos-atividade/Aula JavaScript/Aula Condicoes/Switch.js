var idade = 10;
var idadeAvo = 10;

function animal(num){
    switch(num){
        case 14:
            return "gato";
        case 13:
            return "ladrão";
        default:
            return "não localizado";
    }
}
console.log(animal(14)); // Gato
console.log(animal(idade)); // Não localizado