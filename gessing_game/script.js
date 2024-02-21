const numeroEntrada = document.getElementById("numeroEntrada");
const mensaje = document.querySelector("#mensaje");
const intentos = document.querySelector("#intentos");
const boton = document.querySelector("button");
let numero = generarNumeroAleatorio();
let intento = 0;

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function actualizarMensaje(text, color) {
  mensaje.innerHTML = text;
  mensaje.style.color = color;
}

function comprobar() {
  const numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    actualizarMensaje("Ingrese un numero entre el 1 y 100", "red");
    return;
  }

  intento++;
  intentos.innerHTML = intento;

  if (numero < numeroIngresado) {
    actualizarMensaje("El numero a adivinar es menor", "red");
  } else if (numero > numeroIngresado) {
    actualizarMensaje("El numero a adivinar es mayor", "red");
  } else if (numero === numeroIngresado) {
    actualizarMensaje("Correcto", "green");
    finjuego();
    return;
  }

  if (intento === 6) {
    actualizarMensaje(`El numero era ${numero}`, "red");
    finjuego();
    return;
  }
}

function finjuego() {
  numeroEntrada.disabled = true;
  boton.innerHTML = "Reiniciar";
  boton.setAttribute("onclick", "reiniciar()");
}

function reiniciar() {
  boton.innerHTML = "Comprobar";
  boton.setAttribute("onclick", "comprobar()");
  numeroEntrada.disabled = false;
  intento = 0;
  numero = generarNumeroAleatorio();
  actualizarMensaje("Ingresa un numero", "black");
  intentos.innerHTML = intento;
}
