//!Suma
const suma = (arg1, arg2) => {
  let num1 = arg1;
  let num2 = arg2;
  let resultado = num1 + num2;

  console.log(`La suma es ${resultado}`);
};

//!Resta
const resta = (arg1, arg2) => {
  let num1 = arg1;
  let num2 = arg2;
  let resultado = num1 - num2;

  console.log(`La resta es ${resultado}`);
};

const operaciones = (parm1,parm2,operacion) =>{

    switch(operacion){
        case "suma": 
            suma(parm1,parm2);
            break;
        case "resta":
            resta(parm1,parm2);
            break;
        default:
            console.log("Solo puedes ingresar la palabra suma o resta")
    }
}

operaciones(23,5,"suma");
operaciones(10,23,"resta");
operaciones(10,23,"multiplicacion");