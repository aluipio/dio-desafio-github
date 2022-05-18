// Declaração de um Objeto
var casa = { 
    id: 1, 
    nome: "Anderson",
    bairro: "Luanda"
}

console.log(casa.id);  // 1
console.log(casa['id']); // 1

//--------------------------------------------------------------------
// Selecionando argumento de retorno
function seleciona({nome}){ // -> pegando atributo nome do objeto casa;
    console.log(nome)
}
seleciona(casa); // Passando objeto casa;