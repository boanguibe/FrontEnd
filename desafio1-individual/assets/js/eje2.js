// 2.  Cree  una  segunda  función  que  muestre  los  datos  de  Nombre  y  Apellidos  y  solicite  dos 
// montos  (dos  números  enteros)  para  sueldo  base  actual  y  sueldo  base  promedio  del 
// semestre anterior, que ingrese el dato de si tiene cargas familiares autorizadas y, si tiene 
// cargas familiares autorizadas, retorne otro entero que sea el valor que le corresponde según 
// la tabla siguiente: 

function convertirAMayusculas(nombre, apellidos) {
  // Usamos el método toUpperCase() para convertir a mayúsculas
  let nombreMayusculas = nombre.toUpperCase();
  let apellidosMayusculas = apellidos.toUpperCase();
  let nombreCompleto = `${nombreMayusculas} ${apellidosMayusculas}`
  // Devolvemos el nombre y apellidos en mayúsculas
  return nombreCompleto;
}

function calcularAsignacionFamiliar(sueldoSemestreAnterior, cargasFamiliares) {
  var monto;

  if (cargasFamiliares == 'si'){
    if (sueldoSemestreAnterior < 429900) {
      monto = 16828;
    } else if (sueldoSemestreAnterior < 627914) {
      monto = 10327;
    } else if (sueldoSemestreAnterior < 979331) {
      monto = 3264;
    } else {
      monto = 0;
    }
    return monto;
  } else {
    return 0;
  }
 
}


function calcularBeneficio() {
  let nombre = prompt("Ingrese su Nombre");
  let apellidos = prompt('Ingrese sus Apellidos');
  let nombreCompleto = convertirAMayusculas(nombre, apellidos);
  let sueldoBaseActual = parseInt(prompt('Ingrese Sueldo Actual:'));
  let sueldoBasePromedioSemestreAnterior =  parseInt(prompt('Ingrese Sueldo Base Promedio Anterior:'));

  let cargaFamiliar = prompt('¿Tienes Cargas Familiares? Si o No:');
  let AsignacionFamiliar = calcularAsignacionFamiliar(sueldoBasePromedioSemestreAnterior, cargaFamiliar)


  document.querySelector("#resultado2").innerHTML = `
  Sr. ${nombreCompleto}, usted tiene derecho al monto de $${AsignacionFamiliar}.- 
  por concepto de asignación familiar x carga según su Sueldo Base promedio 
  Semestre anterior de $${sueldoBasePromedioSemestreAnterior}.-` ;
}

document.querySelector("#calculaBeneficio").addEventListener("click", calcularBeneficio);

