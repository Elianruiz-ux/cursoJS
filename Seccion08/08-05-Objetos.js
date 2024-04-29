let persona = {
  nombre: "juan",
  apellido: "perez",
  email: "jperez@gmail.com",
  edad: 28,
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

persona.tel = "2993002";

console.log(persona);

delete persona.tel;

console.log(persona)
