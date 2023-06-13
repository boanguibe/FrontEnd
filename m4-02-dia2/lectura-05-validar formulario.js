
let miBtn = document.getElementById('boton-buscar');
miBtn.addEventListener('click', capturaDato);

function capturaDato(){
  let texto = document.querySelector('.input-a-buscar')  

  if(texto.value !== ""){
    document.querySelector('.resultado').innerHTML = `
    Estas buscando: ${texto.value}`
    document.querySelector('.error').innerHTML = ``
  }else{
    document.querySelector('.resultado').innerHTML = ``
    document.querySelector('.error').innerHTML = `
    Debes escribir algo`
  }
  
}