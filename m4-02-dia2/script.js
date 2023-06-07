//Ejercicio guiado: Estructuras de control y repetitivas
for (let i = 0; i <= 20; i++) {
  if (i == 10) {
    continue; // se ignora cualquier otro proceso
  }
  if (i == 19) {
    break; // se rompe el ciclo actual
  }
  if (i % 2 == 0) {
    document.write(i + "<br>");
  } else {
    impar++;
  }
}
document.write("La cantidad de números impares es: " + impar);
