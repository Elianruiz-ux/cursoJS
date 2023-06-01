/*Ejemplos de tipos 
de datos en JavaScript*/

// Tipos de datos string
var nombre = "Carlos";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "3332323"
}
console.log(objeto);

//Tipo de dato boolean(true, false)
var bandera = true;
console.log(bandera);

//Tipo de dato function
function miFuncion (){}
console.log(miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo undefined
var x;
console.log(x);
x = undefined;
console.log(x);

// null = ausencia de valor
var y = null;
console.log(y);

var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);
var z = '';
console.log(z);