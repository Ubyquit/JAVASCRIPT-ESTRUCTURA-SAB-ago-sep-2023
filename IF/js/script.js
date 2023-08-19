/*
    if es una estructura de control en JavaScript que se utiliza para tomar decisiones basadas en una condición. 
    Permite ejecutar un bloque de código si la condición es verdadera y otro bloque de código si la condición es falsa.

La sintaxis básica de if es la siguiente:

if (condición) {
    * código a ejecutar si la condición es verdadera
} else {
    !código a ejecutar si la condición es falsa
}
*/


/*
Ejercicio:
Escribe un programa en JavaScript que solicite al usuario que ingrese su edad y, 
dependiendo del valor ingresado, imprima en la consola un mensaje que indique 
en qué etapa de la vida se encuentra. Si el usuario ingresa un valor menor que 18,
 el programa debe imprimir "Eres menor de edad". 
 Si el usuario ingresa un valor mayor o igual a 18 y menor que 60, 
 el programa debe imprimir "Eres adulto". Si el usuario ingresa un 
valor mayor o igual a 60, el programa debe imprimir "Eres un adulto mayor".
*/

let numero = prompt("Ingresa tu edad");

if(numero > 0  && numero < 18 ){
    document.write(`${numero} Eres menor de edad`);
}else if(numero >= 18 && numero < 60){
    document.write(`${numero} Eres adulto`);
}else if(numero >= 60){
    document.write(`${numero} Eres un adulto mayor`);
}else{
    document.write(`${numero} No existes`);
}




