// Aulas UDEMY - Parametros Variaveis
// --------------------------------------
// forma literal
function soma() {
	let soma = 0;
	for (i in arguments){
		soma += arguments[i];
	}
	return soma;
}

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, Teste)) // 3.300000000003Teste
console.log(soma(2, 3, 17, 22, 44)) // 6
console.log(soma('a','b','0')) // 0abc