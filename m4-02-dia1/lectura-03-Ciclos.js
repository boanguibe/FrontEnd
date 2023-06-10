//Ejercicio guiado: Estructuras de control y repetitivas
let resultadoPar = document.getElementById("resultaPar");
let impar = 0;
for (let i = 0; i <= 20; i++) {
  if (i == 10) {
    continue; // se ignora cualquier otro proceso
  }
  if (i == 19) {
    break; // se rompe el ciclo actual
  }
  if (i % 2 == 0) {
    resultadoPar.innerHTML += i + "<br>";
  } else {
    impar++;
  }
}

let resultadoImpar = document.getElementById("resultaImpar");
resultadoImpar.innerHTML = `La cantidad de números impares es: ${impar}`


//Ejercicio guiado: Números impares
let impar2 = 0;
let indice = 1;
let resultadoPar2 = document.getElementById("resultaPar2");
while (indice <= 15) {
  indice++;
  if (indice == 9) {
    continue; // se ignora cualquier otro proceso
  };
  if (indice == 14) {
    break; // se rompe el ciclo actual
  };
  if (indice % 2 == 0) {
    resultadoPar2.innerHTML += indice + "<br>";
  } else {
    impar2++;
  };
};
let resultadoImpar2 = document.getElementById("resultaImpar2");
resultadoImpar2.innerHTML = `La cantidad de números impares es: ${impar2}`


// Ejercicio guiado: Múltiplos de cuatro
let no_multiplo = 0;
let i = 1;
let resultado3_1 = document.getElementById("resulta3-1");
do {
  if (i == 16) {
    i++;
    continue; // se ignora cualquier otro proceso
  };
  if (i == 45) {
    break; // se rompe el ciclo actual
  };
  if (i % 4 == 0) {
    resultado3_1.innerHTML += i + "<br>";
  } else {
    no_multiplo++;
  };
  i++;
} while (i <= 50);
let resultado3_2 = document.getElementById("resulta3-2");
resultado3_2.innerHTML = `La cantidad de números no múltiplos de cuatro es: ${no_multiplo}`

// Ejercicio guiado: Encontrar elementos en un arreglo
let estudiante = "Juan"
let cursoDiseno = ["Pedro", "Maria", "Diego", "Juan", "Paola"]

let loEncontramos = false;
let respuesta4 = document.getElementById("resulta4");
for (let i = 0; i < cursoDiseno.length; i++) {
  if (cursoDiseno[i] === estudiante) {
    loEncontramos = true // VERIFICA SI EL ELEMENTO ESTÁ EN EL ARREGLO
      
  }
  if(loEncontramos){
    respuesta4.innerHTML = "El estudiante SI se encuentra en el arreglo"
  } else {
    respuesta4.innerHTML = "El estudiante NO se encuentra en el arreglo"
  }
}
let estudiantes = ["Juan", "Maria"]
for (let j = 0; j <= cursoDiseno.length; j++) {
  for (let i = 0; i < estudiantes.length; i++) {
  if(cursoDiseno[j] ===  estudiantes[i]) {
  console.log( estudiantes[i] + ' pertenece al curso de diseño')}
  }
}