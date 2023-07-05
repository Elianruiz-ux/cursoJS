/* 
6am-11am - Buenos dias
12pm-18pm - Buenas tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let hora = 6;
let menasaje;

if (hora >= 6 && hora <= 11) {
  menasaje = "Buenos dias";
} else if (hora >= 12 && hora <= 18) {
  menasaje = "Buenas tardes";
} else if (hora >= 19 && hora <= 24) {
  menasaje = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  menasaje = "Durmiendo";
} else {
  menasaje = "Hora desconocida";
}

console.log(menasaje);
