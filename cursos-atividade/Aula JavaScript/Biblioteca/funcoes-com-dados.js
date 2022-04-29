// Função Range
function range(tamanho, inicial = 1, intervalo = 0) {
    return [...Array(tamanho).keys()].map(i => i + inicial);
}
// --------------------------------------------------------------------------
// Função Fatorial
function fatorial(numero) {
    return range(numero).reduce((acumulador, elemento) => acumulador * elemento);
}
// --------------------------------------------------------------------------
// Função Arranjo
function arranjo(n, k){
    let retorno = { 'Elementos': n, 'nElementosGrupo': k }
    retorno['nElementos'] = n.length;
    retorno['nPossibilidades'] = fatorial( n.length ) / fatorial( n.length - k );
    return retorno;
}
// --------------------------------------------------------------------------
// Função Combinação
function combinacao(n, k){
    let retorno = { 'Elementos': n, 'nElementosGrupo': k }
    retorno['nElementos'] = n.length;
    retorno['nPossibilidades'] = fatorial( n.length ) / ( fatorial( k ) * fatorial( n.length - k ) );
    return retorno;
}

console.log(combinacao([0,1,2,3],3))