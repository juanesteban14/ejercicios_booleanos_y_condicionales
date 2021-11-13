let num = parseInt(prompt("Ingrese un número"));
if (num % 3 == 0) {
  if (num % 5 == 0) {
    console.log("Múltiplo de 5");
  } else {
    console.log("Múltiplo de 3");
  }
} else if (num % 5 == 0) {
  console.log("Múltiplo de 5 y de 3");
} else {
  console.log("No es múltiplo ni de 3 ni de 5");
}
