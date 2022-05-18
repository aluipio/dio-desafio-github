// Declaração de um Array
var array = [];
var numeros = [0,1,2];

(function(){
    console.log("teste");
})(); // Imprime teste

(function(x, y, z){
    console.log(x + y + z);
})(...numeros); // Imprime a soma (3)

(function(){
    //variáveis locais
    //funções locais
    //não poluem o escopo global
  })();