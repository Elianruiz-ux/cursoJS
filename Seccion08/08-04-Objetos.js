let persona = {
  nombre: "juan",
  apellido: "perez",
  email: "jperez@gmail.com",
  edad: 28,
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(persona.apellido);
console.log(persona["apellido"]);

// for in 
for(nomprePropiedad in persona) {
   console.log(nomprePropiedad)
   console.log(persona[nomprePropiedad]) 
}
