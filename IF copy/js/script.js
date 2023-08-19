/*
Vamos a crear un sistema que solicite 3 calificaciones
Que me de el promedio y con base al promedio final
me diga si el alumno aprobo o reprobo

la condicion es que la califiacion aprobatoria 
deberá ser mayor o igual a 8
*/

alert("Ingresa 3 calificaciones");

let calUno = parseInt(prompt("Ingresa la primera calificación"));
let calDos = parseInt(prompt("Ingresa la segunda calificación"));
let calTres = parseInt(prompt("Ingresa la tercera calificación"));

let promedioFinal = (calUno + calDos + calTres) / 3;

if(promedioFinal >= 8){
    document.write(`✅ Aprobaste, el promedio final es: ${promedioFinal} <br>`);
}else{
    document.write(`❌ Reprobaste, el promedio final es: ${promedioFinal} <br>`);
}