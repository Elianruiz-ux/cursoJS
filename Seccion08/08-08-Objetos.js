// Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}
let padre = new Persona("juan", "perez", "juan@email.com");
console.log(padre.nombreCompleto());

let madre = new Persona("laura", "quinter", "laura@email.com");
console.log(madre.nombreCompleto());
