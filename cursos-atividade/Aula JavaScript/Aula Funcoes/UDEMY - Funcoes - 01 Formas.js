// Aulas UDEMY - Criando Funções
// --------------------------------------
// forma literal
function fun1() {}

// --------------------------------------
// Aramazenada em uma variável
const fun2 = function () {}

// --------------------------------------
// Aramazenada em uma array
const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(array[0(2,3)]) // => Exec

// --------------------------------------
// Aramazenada em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
obj.falar()

// --------------------------------------
// Passar função com Param
function run(fun){
	fun()
}

run(function(){ console.log('Executando...')})

// --------------------------------------
// Um função por retornar/conter uma função
function soma(a,b){
	return function (c) {
		console.log( a + b + c );
	}
}

soma(2,3)(4) // soma(a,b)(c) => 9

const cincoMais = soma(2,3)
cincoMais(4)