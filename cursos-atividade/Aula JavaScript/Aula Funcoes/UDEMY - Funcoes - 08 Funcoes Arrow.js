/* Aulas UDEMY - FUNÇÕES ARROW 
A função deve ser declarada antes de chamada.
*/


let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a;
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param
console.log(ola())

// -----------------------------------------------
function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa