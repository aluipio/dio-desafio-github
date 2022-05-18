/* Utilização de This 
= Sempre está associado ao contexto em que está inserido, objeto ou função.
* =====> em um Metodo === está associada ao objeto instanciado
* =====> em uma Sozinha === está associada ao objeto global (NAVEGADOR E WINDOW)
* =====> em uma Função === objeto global da função
* =====> em um Evento === Elemento que recebeu o evento
* =====> em uma Tag HTML === Elemento que recebeu o evento
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

// Uso de call
console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));

/* 
Uso de Bind -> Clona a estrutura da função 
e acrescenta atributos ou metodos a função, 
passando como parâmetro. 
*/
const retornaNomes = function(){
	return this.nome;
}
let bruno = retornaNomes.bind({ nome: 'Bruno'});
console.log(bruno());
