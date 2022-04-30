// Filtrando todos os valores pequenos
// Os exemplos a seguir usam filter() para criar um array filtrado em que todos os elementos com valores menores que 10 são removidos.

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]