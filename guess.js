const target = 60;

let numero = Number(prompt("Ingrese un numero del 1 al 100"));
if (numero > target) {
  console.log("Muy grande");
} else if (numero < target) {
  console.log("Muy pequeno");
} else {
  console.log(`Acertaste! el numoero era ${target}`);
}
