// Declarações FOR
var array = [1,2,3,4,4,5]
for( let i = 0; i < array.length; i++){
    console.log(i, array[i])
}

// -----------------------------------------
var casa = { 
    id: 1, 
    nome: "Anderson",
    bairro: "Luanda"
}
for( i  in  casa){
    console.log(i, " => ", casa[i])
}

// -----------------------------------------
var nome = 'Felipe'
for( i  in  nome){
    console.log(i, " => ", nome[i])
}
for( i  of  nome){
    console.log(i)
}