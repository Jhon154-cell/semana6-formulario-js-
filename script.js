const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

const validarNombre = () => {
    if (nombre.value.trim().length < 3) {
        error(nombre, "El nombre debe tener al menos 3 caracteres");
        return false;
    }
    success(nombre);
    return true;
};

const validarCorreo = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(correo.value)) {
        error(correo, "Correo electrónico no válido");
        return false;
    }
    success(correo);
    return true;
};

const validarPassword = () => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length < 8 || !regex.test(password.value)) {
        error(password, "Debe tener 8 caracteres, un número y un símbolo");
        return false;
    }
    success(password);
    return true;
};

const validarConfirmacion = () => {
    if (password.value !== confirmar.value || confirmar.value === "") {
        error(confirmar, "Las contraseñas no coinciden");
        return false;
    }
    success(confirmar);
    return true;
};

const validarEdad = () => {
    if (edad.value < 18) {
        error(edad, "Debes ser mayor de edad");
        return false;
    }
    success(edad);
    return true;
};

const validarFormulario = () => {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
};

const error = (input, mensaje) => {
    const campo = input.parentElement;
    campo.className = "campo error";
    campo.querySelector("small").innerText = mensaje;
};

const success = (input) => {
    const campo = input.parentElement;
    campo.className = "campo success";
};

[nombre, correo, password, confirmar, edad].forEach(input => {
    input.addEventListener("input", validarFormulario);
});

form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Formulario validado correctamente. Datos enviados con éxito.");
    form.reset();
    enviar.disabled = true;
});
