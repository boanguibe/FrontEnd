var enviar = document.querySelector('#enviar')
enviar.addEventListener('click', validar)

function validar() {
    let texto = document.querySelector('.texto').value
    var patron1 = /casi/gim;
    var patron2 = /nunca/gim;
    var patron3 = /siempre/gim;
    var patron4 = /^horrible/gim;
    var patron5 = /hermoso$/gim;
    if (texto.match(patron1) || texto.match(patron2) ||
        texto.match(patron3) || texto.match(patron4) || texto.match(patron5)) {
        alert("Las palabras ingresadas no son permitidas");
    } else {
        alert("Las palabras ingresadas son permitidas");
    }
}
