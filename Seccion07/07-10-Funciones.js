// tipos primitivos
let x = 10;
function cambiarValor(a) {
  a = 20;
}

//paso por valor
cambiarValor(x);
console.log(x);
// console.log(a);

const persona = {
  nombre: "Juan",
  apellido: "Perez",
};

function cambiarValorObjeto(p1) {
  p1.nombre = "Carlos";
  p1.apellido = "Marin";
}

//paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
