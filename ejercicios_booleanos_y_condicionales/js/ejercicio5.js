let peso = parseInt(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrese su altura"));
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Bajo de peso");
} else if (imc < 24.9) {
  console.log("Normal");
} else if (imc <= 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obeso");
}
