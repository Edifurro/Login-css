// Selecciona el elemento de input (presumiblemente, un campo de contraseña)
const $password = document.querySelector('input');

// Selecciona el elemento de ícono (presumiblemente, un ícono para mostrar/ocultar la contraseña)
const $toggler = document.querySelector('i');

// Función para mostrar u ocultar la contraseña
const showHidePassword = () => {
    // Verifica si el tipo de input es 'password'
    if ($password.type == 'password') {
        // Cambia el tipo de input a 'text' para mostrar la contraseña
        $password.setAttribute('type', 'text');
    } else {
        // Si el tipo de input no es 'password', cambia a 'password' para ocultar la contraseña
        $password.setAttribute('type', 'password');
    }

    // Alterna las clases del ícono para cambiar entre el ícono de ojo abierto y cerrado
    $toggler.classList.toggle('fa-eye');
    $toggler.classList.toggle('fa-eye-slash');
};

// Agrega un evento de clic al ícono que activa la función showHidePassword
$toggler.addEventListener('click', showHidePassword);
