// Clave - Valor
// 10 : limpieza

const Frutas = {
  Manzana: 5,
  Pera: 10,
  Uva: 2,
  Mango: 9,
  Naranja: 10,
};

const ordenarFrutasPorCantidad = (frutas) => {
    const frutasOrdenadas = Object.entries(frutas).sort((a, b) => {
        return a[1] - b[1];
    });
    
    return frutasOrdenadas;
}



console.log(ordenarFrutasPorCantidad(Frutas));
