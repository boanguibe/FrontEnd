// 3.  Cree  una  función  que,  para  las  personas  que  si  tienen  asignación  familiar,  consulte  la 
// cantidad de “beneficiados con carga familiar (recibe como parámetro un número entero r 
// que indique la cantidad de personas con el beneficio) y retorne el número que corresponda 
// al monto a recibir por carga familiar, obtenido en el punto anterior, multiplicado por la
// cantidad  de  beneficiarios. Por  ejemplo,  una  persona  con  beneficio  de  10327 y  3  cargas 
// familiares deberá responder con 30981. 


// Funcion que convierte nombre y apellido en mayusculas
function convertirAMayusculas(nombre, apellidos) {
    // Usamos el método toUpperCase() para convertir a mayúsculas
    let nombreMayusculas = nombre.toUpperCase();
    let apellidosMayusculas = apellidos.toUpperCase();
    let nombreCompleto = `${nombreMayusculas} ${apellidosMayusculas}`
    // Devolvemos el nombre y apellidos en mayúsculas
    return nombreCompleto;
  }
  

  // funcion para calcular monto asignacion familiar
  function calcularAsignacionFamiliar(sueldoSemestreAnterior, cargasFamiliares) {
    var tramo, monto;
  
    if (cargasFamiliares == 'si'){
      if (sueldoSemestreAnterior < 429900) {
        tramo = 1;
        monto = 16828;
      } else if (sueldoSemestreAnterior < 627914) {
        tramo = 2;
        monto = 10327;
      } else if (sueldoSemestreAnterior < 979331) {
        tramo = 3;
        monto = 3264;
      } else {
        tramo = 4;
        monto = 0;
      }
      return monto;
    } else {
      return 0;
    }
   
  }

  function tramoCCAF(sueldoSemestreAnterior, cargasFamiliares) {
    var tramo;
  
    if (cargasFamiliares == 'si'){
      if (sueldoSemestreAnterior < 429900) {
        tramo = 'A';
      } else if (sueldoSemestreAnterior < 627914) {
        tramo = 'B';
      } else if (sueldoSemestreAnterior < 979331) {
        tramo = 'C';
      } else {
        tramo = 'D';
      }
      return tramo;
    } else {
      return 'SIN TRAMO';
    }
   
  }
  
  // creacion de funcion para calcular monto final de cargas familiares
  function calcularMontoCargas(montoBeneficio, numCargas){
    let montoTotalCargas = montoBeneficio * numCargas
    return montoTotalCargas;
  }


  function calcularBeneficio() {
    
    // Capturar datos del usuarios
    let nombre = prompt("Ingrese su Nombre");
    let apellidos = prompt('Ingrese sus Apellidos');
    let sueldoBaseActual = parseInt(prompt('Ingrese Sueldo Actual:'));
    let sueldoBasePromedioSemestreAnterior =  parseInt(prompt('Ingrese Sueldo Base Promedio Anterior:'));
    let cargaFamiliar = prompt('¿Tienes Cargas Familiares? Si o No:');
    let numeroCargas = parseInt(prompt('Cantidad de Cargas familiares'));

    // llamado de funcion para convertir nombre y apellido en mayuscular
    let nombreCompleto = convertirAMayusculas(nombre, apellidos);
    
    // llamado de funcion para calcular valor de asignacion familiar
    let AsignacionFamiliar = calcularAsignacionFamiliar(sueldoBasePromedioSemestreAnterior, cargaFamiliar)
 
    // llamado de funcion calcula monto total de cargas familiares
    let calcularTotalAsignacionFamiliar = calcularMontoCargas(AsignacionFamiliar,numeroCargas)
   
    // llamando a funcion para saber en que tramo esta el trabajador
    let calculoTramo = tramoCCAF(sueldoBasePromedioSemestreAnterior, cargaFamiliar)
    console.log(calculoTramo)

    // creacion de objeto persona
    const persona = {
      nombre: nombre,
      apellidos: apellidos,
      cargaFamiliar: cargaFamiliar,
      numeroCargas: numeroCargas,
      tramo: calculoTramo,
      montoPorCarga: AsignacionFamiliar,
      montoTotalCargas: calcularTotalAsignacionFamiliar,
      SueldoMasCargas: sueldoBaseActual + calcularTotalAsignacionFamiliar

    } 


    // Envio de data al formulario
    document.querySelector("#resultado4").innerHTML = `
    <ul>
      <li>Nombre: ${persona.nombre}</li>
      <li>Apellido: ${persona.apellidos}</li>
      <li>Cargas (si/no): ${persona.cargaFamiliar}</li>
      <li>Cantidad de Cargas Familiares: ${persona.numeroCargas}</li>
      <li>Tramo: ${persona.tramo}</li>
      <li>Monto por Carga: $${persona.montoPorCarga}.-</li>
      <li>Monto total Cargas Familiares: $${persona.montoTotalCargas}.-</li>
      <li>Sueldo Mensual + CCAF: $${persona.SueldoMasCargas}.-</li>
    </ul>` ;
  }
  
  

  document.querySelector("#mostrarInfo").addEventListener("click", calcularBeneficio);
  
  