let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
  console.log("no es un numero");
} else {
  if (edad >= 18) {
    console.log("puede votar");
  } else {
    console.log("no puede votar");
  }
}

if (isNaN(edad)) {
  console.log("no es un numero");
} else {
  let rs = edad >= 18 ? "puede votar" : "no puede votar";
  console.log(rs);
}
