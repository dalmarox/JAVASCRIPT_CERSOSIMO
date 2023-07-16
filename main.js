let nombre = prompt("Ingrese su nombre");
console.log(nombre);
alert("Hola" + " " + nombre);

let numero = prompt("Ingresa tu edad");
console.log(numero);
alert("Tienes" + " " + numero + " " + "años");

let pregunta = prompt(
  "¿Tu medicación es en comprimidos o cápsulas?"
).toLowerCase();

if (pregunta === "si") {
  alert("Continua con los cálculos");
}
if (pregunta != "no") {
} else {
  alert("ve a opción 2");
}

let miligramos = prompt("¿Cuántos miligramos tiene un comprimido");
console.log(miligramos);
alert("Cada comprimido tiene" + " " + miligramos + " " + "mg");

let comprimidos = prompt("Ingrese cantidad de comprimidos en una caja");
console.log(comprimidos);
alert("Cada caja tiene" + " " + comprimidos);

alert(
  "En una caja tienes" +
    " " +
    Number(miligramos) * Number(comprimidos) +
    " " +
    "mg"
);

//ejercicio clase 2

let dinero = prompt("¿tienes mas de $1000?");
if (dinero === "si") {
  alert("Puedes pagar");
} else {
  alert("No puedes pagar");
}
/*clase 3 ciclos- estructura del for 
for(desde; hasta; actualizacion){
  codigo a repetir
}*/
/*for(let i = 1; i < 100; i++){
  console.log(i);
*/

/*for (let i = 0; i>= 0; i++) {
  let resultado = milig *i;
  alert(`${numero} * ${i} = ${resultado}`);
}*/
for (let turno = 1; turno <= 3; turno++) {
  let apellido = prompt("Ingrese su Apellido y Nombre");
  alert(`turno ${turno} : ${apellido}`);

}
alert(" Se acabaron los turnos ");

  