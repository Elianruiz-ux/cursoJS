let x = 10;
console.log(x.length);

let persona = {
  nombre: "juan",
  apellido: "perez",
  email: "jperez@gmail.com",
  edad: 28,
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "saturn 19";
persona2.tel = "22443434";

console.log(persona2.tel);
