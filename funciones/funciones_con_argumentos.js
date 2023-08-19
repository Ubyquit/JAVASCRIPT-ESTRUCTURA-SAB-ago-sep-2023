function suma(arg1, arg2) {
  let num1 = arg1;
  let num2 = arg2;
  let resultado = num1 + num2;
  console.log(resultado);
}

function resta(arg1, arg2) {
  let num1 = arg1;
  let num2 = arg2;
  let resultado = num1 - num2;
  console.log(resultado);
}

//suma(10, 7);
//resta(6, 7);

function temperatura(temperatura) {
  let tempMin = 17;
  let tempMax = 30;

  if (temperatura < tempMin) {
    temp = 17;
    console.log("La temperatura es muy baja");
  } else if (temperatura > tempMax) {
    temp = 30;
    console.log("La temperatura es muy alta");
  } else {
    temp = temperatura;
  }
  console.log(temp);
}

temperatura(31);