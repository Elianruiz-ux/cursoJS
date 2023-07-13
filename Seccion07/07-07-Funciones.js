//declaracion de un funcion de tipo expresion
let sumar = function (a = 0, b = 0) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + arguments[2];
};

resultado = sumar(1, 5, 10);
console.log(resultado);
