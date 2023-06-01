let a = 3,  b = 3, c = "3";

let z = a == b; // se revisa el valor sin importar el tipo
console.log(z);

z = a != c;// se revisa el valor sin importar el tipo pero diferentes
console.log(z);

z = a === c; // revisa si los valores son iguales pero tambien los tipos
console.log(z);

z = a !== c; // revisa si los valores son diferentes pero tambien los tipos
console.log(z);

z = a < b; // operador menor que
console.log(z)

z = a <= b; // operador menor que o igual
console.log(z)

z = a > b; // operador mayor que
console.log(z)

z = a >= b; // operador mayor que o igual
console.log(z)