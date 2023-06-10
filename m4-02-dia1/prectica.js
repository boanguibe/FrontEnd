// funcion Basica en js

function suma(valor1, valor2){
    let resultado = valor1 + valor2
    return resultado
}
let resultado = suma(3,2)
console.log(resultado)

// funcion anonima
const resta = function (num1, num2) {
    let resultado = num1 - num2
    return resultado
}
let resultadoResta = resta(3,3)
console.log(resultadoResta)

// funcion tipo flecha
const multiplicacion = (num1, num2) => {
    return num1 * num2
}
console.log(multiplicacion(3,3))


// Scope (ambiente) variables
var contador = 10
function miFuncion(){
    var contador = 20
    console.log(contador)
}
console.log("scope Variables")
console.log(contador) // 10
console.log(miFuncion()) // 20
console.log(contador) // 10

// scope(ambiente) de funciones
function miFuncion2(){
    var miVariable = 20

    function potencia(){
        return miVariable * miVariable
    }
    return potencia()
}
var respuesta = miFuncion2();
console.log(respuesta)

// Alterando ciclos: break
console.log("Alterando ciclos: break")
for(let i = 0; i < 10; i++){
    if(i == 5){ // encontrar 5 y terminar
        break
    }
    console.log(i)
}

// Alterando ciclos: continue
console.log("Alterando ciclos: continue")
for(let i = 0; i < 10; i++){
    if(i == 5){ // encontrar 5 y no considerar
        continue
    }
    console.log(i)
}

// Loop Anidados
console.log("Loop Anidados:")
for (var i = 0; i < 2; i++) {
    console.log('loop externo: ' + i)
    for (var j = 0; j < 4; j++) {
        console.log('loop interno: ' + j)
    }
}

// var vs let
console.log("var vs let")
if(true){
    var miVariable = "hola"
}
console.log(miVariable)

if(true){
    let miVariable2 = "hola let"
    console.log(miVariable2)
}
