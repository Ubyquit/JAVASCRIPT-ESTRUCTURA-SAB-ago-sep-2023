class INE {
  constructor(
    nombre,
    edad,
    sexo,
    domicilio,
    estadoCivil,
    nacionalidad,
    fechaNacimiento,
    lugarNacimiento,
    ocupacion,
    claveElector,
    curp,
    foto,
    firma,
    huella
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.domicilio = domicilio;
    this.estadoCivil = estadoCivil;
    this.nacionalidad = nacionalidad;
    this.fechaNacimiento = fechaNacimiento;
    this.lugarNacimiento = lugarNacimiento;
    this.ocupacion = ocupacion;
    this.claveElector = claveElector;
    this.curp = curp;
    this.foto = foto;
    this.firma = firma;
    this.huella = huella;
  }
}

const Luis = new INE("Luis", 20, "Hombre", "Calle 1", "Soltero", "Mexicano", "01/01/2000", "CDMX", "Estudiante", "123456789", "CURP123456789", "Foto", "Firma", "Huella");

console.log(Luis);
