let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = ingresarNombre.value.trim();
  let asunto = ingresarAsunto.value.trim();
  let mensaje = ingresarMensaje.value.trim();

  if (nombre && asunto && mensaje) {
    formulario.textContent = "¡¡¡Mensaje enviado con éxito!!!";
    formulario.classList.add("resultado");
  }
});

let ingresarNombre = document.getElementById("nombre");
let errorNombre = document.getElementById("errorNombre");
let nombreRegex = /^[\s,.'-]*[a-zA-Z\pL][\s,.'-]*$/;
function validarNombre(nombre) {
  if (!nombreRegex.test(nombre)) {
    errorNombre.textContent = "El nombre es requerido";
    return false;
  } else {
    errorNombre.textContent = " ";
    return true;
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  validarNombre();
});

let ingresarAsunto = document.getElementById("asunto");
let errorAsunto = document.getElementById("errorAsunto");
let asuntoRegex = /^[\s,.'-]*[a-zA-Z\pL][\s,.'-]*$/;

function validarAsunto(asunto) {
  if (!asuntoRegex.test(asunto)) {
    errorAsunto.textContent = "El asunto es requerido";
    return false;
  } else {
    errorAsunto.textContent = " ";
    return true;
  }
}
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  validarAsunto();
});

let ingresarMensaje = document.getElementById("mensaje");
let errorMensaje = document.getElementById("errorMensaje");
let mensajeRegex = /^[\s,.'-]*[a-zA-Z\pL][\s,.'-]*$/;

function validarMensaje(mensaje) {
  if (!mensajeRegex.test(mensaje)) {
    errorMensaje.textContent = "El mensaje es requerido";
    return false;
  } else {
    errorMensaje.textContent = " ";
    return true;
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  validarMensaje();
});
