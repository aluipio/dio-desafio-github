// Função Sequência()
function sequencia(n, inicio = 1, intervalo = 1) {
    return [...Array(n).keys()].map(i => (i * intervalo) + inicio);
}
// --------------------------------------------------------------------------
// Função Range()
function range(start, stop, step){
    return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}
// --------------------------------------------------------------------------
// Função Fatorial()
function fatorial(numero) {
    return sequencia(numero).reduce((acumulador, elemento) => acumulador * elemento);
}
// --------------------------------------------------------------------------
// Função Arranjo()
function arranjo(n, k){
    let retorno = { 'Elementos': n, 'nElementosGrupo': k }
    retorno['nElementos'] = n.length;
    retorno['nPossibilidades'] = fatorial( n.length ) / fatorial( n.length - k );
    return retorno;
}
// --------------------------------------------------------------------------
// Função Combinação()
function combinacao(n, k){
    let retorno = { 'Elementos': n, 'nElementosGrupo': k }
    retorno['nElementos'] = n.length;
    retorno['nPossibilidades'] = fatorial( n.length ) / ( fatorial( k ) * fatorial( n.length - k ) );
    return retorno;
}

console.log(combinacao([0,1,2,3],3))
console.log(sequencia(6,0,10))

const meuObjeto = {
    'chave': "valor"
   }
   
   console.log(meuObjeto.chave); 
   console.log(meuObjeto['chave']);