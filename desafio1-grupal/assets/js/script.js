let jugadasTotales = parseInt(prompt("¿Cuantas veces deceas Jugar? 1 a 6"))
let jugadasActuales = 0
let puntosUsuario = 0
let puntosMaquina = 0

while(jugadasActuales < jugadasTotales){
    let numeroUsuario = parseInt(prompt("Introduce (1) Piedra; (2) Papel; (3) Tijera"))
    console.log(numeroUsuario)
    let numeroMaquina = jugadaMaquina()
    console.log(numeroMaquina)
    definirGanador(numeroUsuario, numeroMaquina)
    jugadasActuales++
    if(puntosUsuario > puntosMaquina){
        alert(`Gana: Usuario ${puntosUsuario} vs Maquina ${puntosMaquina}`)
    }
    else if(puntosMaquina > puntosUsuario){
        alert(`Pierde: Usuario ${puntosUsuario} vs Maquina ${puntosMaquina}`)
    }
    else{
        alert(`Empate: Usuario ${puntosUsuario} vs Maquina ${puntosMaquina}`)
    }
}
alert(`Juego Terminado: Usuario ${puntosUsuario} vs Maquina ${puntosMaquina}`)


function jugadaMaquina() {
    let numero = Math.floor(Math.random()*3)+1
    return numero
}

function definirGanador(respUsuario, respMaquina){
    if(respUsuario == 1 && respMaquina == 2){
        alert(`Perdiste: (${respUsuario}) Piedra vs (${respMaquina}) Papel`)
        puntosMaquina++
    } else if(respUsuario == 1 && respMaquina == 3){
        alert(`Ganaste: (${respUsuario}) Piedra vs (${respMaquina}) Tijera`)
        puntosUsuario++
    } else if(respUsuario == 2 && respMaquina == 1){
        alert(`Ganaste: (${respUsuario}) Papel vs (${respMaquina}) Piedra`)
        puntosUsuario++
    } else if(respUsuario == 2 && respMaquina == 3){
        alert(`Perdiste: (${respUsuario}) Papel vs (${respMaquina}) Tijera`)
        puntosMaquina++
    } else if(respUsuario == 3 && respMaquina == 1){
        alert(`Perdiste: (${respUsuario}) Tijera vs (${respMaquina}) Piedra`)
        puntosMaquina++
    } else if(respUsuario == 3 && respMaquina == 2){
        alert(`Ganaste: (${respUsuario}) Tijera vs (${respMaquina}) Papel`)
        puntosUsuario++
    } else {
        alert(`Empate: ${respUsuario} vs ${respMaquina}`)
    }
    return puntosUsuario, puntosMaquina
}


