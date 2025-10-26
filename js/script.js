console.log("Archivo script.js cargado correctamente");

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const numero = document.getElementById("numero");
const correo = document.getElementById("correo");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Nombre:", nombre.value);
    console.log("Apellido:", apellido.value);
    console.log("Whatsapp:", numero.value);
    console.log("Correo:", correo.value);

    formulario.reset();
});
