let num = parseInt(prompt("Trate de adivinar el número"));

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(rand(1, 10));

let resu = rand(1, 10);

if (resu == num) {
  console.log("Felicitaciones, ese era!");
} else {
  console.log("Lo siento, intenta nuevamente!");
}
