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
console.log(persona);

// concatenar cada valor de cada propiedad
console.log(`${persona.nombre} ${persona.apellido}`);

// for in
for (nombrePropieda in persona) {
  console.log(persona[nombrePropieda]);
}

//object.values()
let personaArray = Object.values(persona);
console.log(personaArray);

// cadena
let personaString = JSON.stringify(persona);
console.log(personaString);
