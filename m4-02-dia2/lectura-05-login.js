function login(e){
    e.preventDefault()
    let email = document.querySelector('.email')
    let password = document.querySelector('.password').value
    document.querySelector('#resultado').innerHTML = `Bienvenido ${email.value}`
}

let form = document.getElementById('formulario')
form.addEventListener('submit', login)

