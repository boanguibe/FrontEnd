// arreglos o arrays
var mis_juegos = ["piedra", "papel", "tijera"];

console.log(mis_juegos)
console.log(mis_juegos[2])

mis_juegos.push('otra')
console.log(mis_juegos)
console.log("El total de juegos es: " + mis_juegos.length)

// Ciclo for
var domListGame = document.getElementById("games-list")
for (var i = 0; i < mis_juegos.length; i++) {
    var juego = mis_juegos[i]

    if(juego === 'tijera' || juego === 'papel'){
        domListGame.innerHTML += `<li class='text-info'> ${mis_juegos[i]}</li>`
    }else if(juego === 'piedra'){
        domListGame.innerHTML += `<li class='text-warning'> ${mis_juegos[i]}</li>`
    }
    else{
        domListGame.innerHTML += `<li class='text-danger'> ${mis_juegos[i]}</li>`
    } 
}


// Ciclo while  
var domListGame2 = document.getElementById("games-list2")
var countJuegos = mis_juegos.length
var indice = 0
while(indice < countJuegos){
    domListGame2.innerHTML += `<li class='text-info'> ${mis_juegos[indice]}</li>`
    indice++
}

// Ciclo do while 
var domListGame3 = document.getElementById("games-list3")
var countJuegos = mis_juegos.length
var indice = 0
do{
    domListGame3.innerHTML += `<li class='text-success'> ${mis_juegos[indice]}</li>`
    indice++
}while(indice !== countJuegos)


// Ciclo switch
var diaSemana = document.getElementById("dia-semana")
var diaActual = new Date().getDay()
var nombreDia = ""
switch(diaActual){
    case 0:
        nombreDia = "Domingo"
        break
    case 1:
        nombreDia = "Lunes"
        break
    case 2:
        nombreDia = "Martes"
        break
    case 3:
        nombreDia = "Miercoles"
        break
    case 4:
        nombreDia = "Jueves"
        break
    case 5:
        nombreDia = "Viernes"
        break
    case 6:
        nombreDia = "Sabado"
        break
    default:
        nombreDia = "Error"
}
diaSemana.innerHTML = `El dia actual es ${nombreDia}`

// funciones

function saludo(){
    console.log("Hola")
}
var respuesta = saludo()
console.log(respuesta)

function saludar(nombre, saludo){
    var greeting = `${saludo} ${nombre}`
    console.log(greeting)
}
var respuesta2 = saludar("Juan", "Hola")
console.log(respuesta2)
