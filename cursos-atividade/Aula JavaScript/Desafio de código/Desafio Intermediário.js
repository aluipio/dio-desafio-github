// -------------------------------------------------------
// Quadrado ao Cubo
let limit = parseInt(gets());

for (let i = 1; i <= linhas; i++) {
  let X = (i**2);
  let Y = (i**3);

  print( i + ' ' + X + ' '  + Y );
}

// -------------------------------------------------------
// -------------------------------------------------------
var participantes = gets(); // Número de Crianças
var criancas; // Nome da criança
var array = [];
for( let i = 0; i<participantes; i++ ){
  criancas = gets().split(' ');
  array.push(criancas);
}

const meninos = array.filter(val => val[1] == 'M').length;
const meninas = array.filter(val => val[1] == 'F').length;

print(`${meninos} carrinhos\n${meninas} bonecas`);

 /*Saída:
  2 carrinhos
  3 bonecas
 */


// -------------------------------------------------------
// -------------------------------------------------------
//TODO: Complete os espaços em branco com uma solução possível para o problema.
let line = gets();
let matricula = 0;

for( let i = 0; i<parseInt(line); i++ ){
  line = gets();
  line = line.split(" ")
  if( parseFloat(line[1]) >= 8.0 ){
    matricula = line[0];
  }
}

if( matricula > 0 ){
  print(matricula);
}else{
  print("Minimum note not reached");
}

// -------------------------------------------------------
// -------------------------------------------------------
//TODO: Complete os espaços em branco com uma solução possível para o problema.
let line = gets();
let matricula = 0;

let nota = 0; 
if (parseInt(line) >= 3 && parseInt(line) <= 100){
  for( let i = 0; i<parseInt(line); i++ ){
    line = gets();
    line = line.split(" ")
    if( parseFloat(line[1]) >= 8.0 && parseFloat(line[1]) > nota && 
      parseFloat(line[1]) >= 0 && parseFloat(line[1]) <= 10 && 
      parseInt(line[0]) > 0 && parseInt(line[0]) < 1000000 ){
      matricula = line[0];
      nota = parseFloat(line[1]);
    }
  }
  
  if( matricula === 0 ){
    print("Minimum note not reached");
  }else if(matricula > 0 ){
    print(matricula);
  }
}
//////////////////////////////
// Tentativa 02

let n = parseInt(gets());

let arrMat = Array(n);

let arrNot = Array(n);


for (i = 0; i < n; i++) {

  let line = gets().split(' ');

  arrMat[i] = parseInt(line[0]);

  arrNot[i] = parseFloat(line[1]);

}


let maior = 0;

var max = arrNot.reduce(function(a, b) {

  return Math.max(a, b);

});


for (i = 0; i < n; i++) {

  if (max < 8) {
    console.log('Minimum note not reached');
    break;
  } else if (arrNot[i] === max) {
    console.log(arrMat[i]);
  }

}