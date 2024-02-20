function agregar(value) {
  document.getElementById("pantalla").value += value;
}
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);

  document.getElementById("pantalla").value = resultado;
}
function borrar() {
  document.getElementById("pantalla").value = "";
}
