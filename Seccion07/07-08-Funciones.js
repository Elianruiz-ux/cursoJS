let res = sumarTodo(5, 4, 13, 10, 9, 10, 11);
console.log(res);

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]; // suma = suma + arguments[i];
  }
  return suma;
}
