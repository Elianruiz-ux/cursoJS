//Declaracion de la funcion
function miFuncion(a, b) {
  return a + b;
}

//llamando la funcion
let resultado = miFuncion(10, 20);
console.log(resultado);

//declaracion de un funcion de tipo expresion
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(1, 2);
console.log(resultado);
