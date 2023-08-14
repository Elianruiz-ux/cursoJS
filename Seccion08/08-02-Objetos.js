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

