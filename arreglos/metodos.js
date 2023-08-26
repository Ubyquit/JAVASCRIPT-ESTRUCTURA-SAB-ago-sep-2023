// ! Arreglo de pizzas

// * creación de un arreglo
const pizzas = [
  "Peperoni",
  "hawaiana",
  "Mexicana",
  "Cuatro Quesos",
  "Vegetariana",
  "Pollo con champiñones",
  "Carnes frias",
  "Hawaiana con tocino",
  "Peperoni con extra queso",
  "Peperoni con extra queso y extra salsa",
];

// * Acceder al arreglo total
console.log(pizzas);

// * Acceder a la longitud del arreglo
console.log(pizzas.length);

// * Acceder a l ultimo elemento del arreglo
console.log(pizzas[pizzas.length - 1]);

// * imprimir los datos del arreglo
/* ! pizzas.length - 1 siempre va a ser
el ultimo elemento del arreglo*/
for (let i = 0; i <= pizzas.length - 1; i++) {
  console.log(`${i} ${pizzas[i]}`);
}

// * funcion de la documentación de MDN
pizzas.forEach(function (pizza, indice) {
  console.log(`${indice} - ${pizza}`);
});

// * funcion ideal () => {}
pizzas.forEach((pizza, indice) => {
  console.log(`${indice} - ${pizza}`);
});

pizzas.push("Sarten")