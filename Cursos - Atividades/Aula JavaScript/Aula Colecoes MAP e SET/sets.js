function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

// o Set() não permite valores repetidos
// Cria uma lista de valores únicos
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

// Inserir -> set.add()
// Visualizar -> set.has()
// Remover -> set.delete()

console.log(uniqueElements(arr));
