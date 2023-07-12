// let autos = new Array("BMW", "Mercedes Nenz", "Volvo");
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
  console.log(i + ": " + autos[i]);
}

autos?.map((i) => {
  console.log(i);
});

autos[1] = "MercedesBenz";
console.log(autos);

autos.push("Audi"); // usar push agrega un elemento nuevo al final de un arreglo
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porsche';
console.log(autos);

console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);