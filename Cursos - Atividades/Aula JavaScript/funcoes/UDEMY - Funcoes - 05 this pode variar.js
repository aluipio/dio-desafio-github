// Aulas UDEMY - 'this' - Aulas 05, 06, 07

function f1(){ console.log(this === window)}
// return true
// aponta para o objeto global

function f2(){ console.log(this === document)}
// return false
// aponta para o objeto global


//------------------------------------------------------
// this está associada ao contexto ao qual ela está inserida

const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoal.fala(); // Bom dia!
const falar = pessoa.falar
falar() // undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia

//------------------------------------------------------

function Pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

function Pessoa2(){
    this.idade = 0;

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa2