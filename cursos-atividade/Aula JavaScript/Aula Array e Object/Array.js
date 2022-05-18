// Declaração de um Array
var array = []
var numeros = [0,1,2]

// ------------------------------------------
function separado(x, y, z){
    console.log(x + y + z)
}
separado(...numeros) // 3

// ------------------------------------------
function junto(...args){
    console.log(args.length)
}
junto() // 0
junto(2,4) // 2
junto(2,4,6) // 3
