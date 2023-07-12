// let autos = new Array("BMW", "Mercedes Nenz", "Volvo");
const autos = ["BMW", "Mercedes Nenz", "Volvo"];
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
