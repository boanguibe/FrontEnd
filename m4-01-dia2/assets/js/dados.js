var jugadasTotales = 3
var jugadasActuales = 0

while (jugadasActuales < jugadasTotales) {
    var numeroUsuario = parseInt(prompt("Introduce un número entre 1 y 6"))
    var numeroMaquina = jugadaDados()
    definirGanador(numeroMaquina, numeroUsuario)
    jugadasActuales++
}

//Retornar un valor aleatorio entre 1 y 6
function jugadaDados(){
    numeroAleatorio = Math.floor(Math.random() * 6) + 1
    return numeroAleatorio
}

function definirGanador(respUsuario, respMaquina){
    if(respUsuario == respMaquina){
        alert(`Ganaste: Adivinaste el numero ${respMaquina} de la maquina`)
    }
     else{
        alert(`Perdiste: No Adivinaste el numero ${respMaquina} era y tu elegiste
        ${respUsuario}`)
    }
}