var formulario = document.getElementById("form")
formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    let nombre = document.querySelector(".textNombre").value
    let telefono = document.querySelector(".textTelefono").value
    let email = document.querySelector(".textEmail").value

    let resultado = validar(nombre, telefono, email)

    if (resultado == true) {
        exito()
    }
})

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = ""
    document.querySelector(".errorNombre").innerHTML = ""
    document.querySelector(".errorTelefono").innerHTML = ""
    document.querySelector(".errorEmail").innerHTML = ""

}

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario paso la validacion"
}

function validar(nombre, telefono, email) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
        pasamosLaValidacion = false;
    };
    let validacionTelefono = /\d/gim;
    if (validacionTelefono.test(telefono) == false) {
        document.querySelector(".errorTelefono").innerHTML = "Ingrese un teléfono válido(sólo números)."
        pasamosLaValidacion = false;
    };
    let validaciónEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
    if (validaciónEmail.test(email) == false) {
        document.querySelector(".errorEmail").innerHTML = "Ingrese un correo válido."
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
}