if (P > 0) {
  let divisao = parseFloat(H / P).toFixed(1); //complete com o sinal da operação faltante entre x e y
  console.log(divisao);
}

let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X  Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
        console.log(divisao);
    }
}


//// SOLUÇÃO

//TODO: Complete o código com uma solução possível
// H -> Coxinhas e P -> participantes (1 ≤ H, P ≤ 1000)
let line = gets().split(" ");
let H = parseInt(line[0]);
let P = parseInt(line[1]);
console.log(parseFloat(H / P).toFixed(2)); // fixa 02 casa decimais

//https://studio.code.org/s/mc/stage/1/puzzle/1