const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    const number = hasta;
    let salida = "";
    let consola = "";
    for (let index = 1; index <= number; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${"x".green} ${index} ${"=".green} ${base * index}\n`;
    }

    if (listar) {
      console.log("========".green);
      console.log("Tabla del:".green, colors.blue(base));
      console.log("========".green);
      console.log(consola);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if(err) throw err;

    //   console.log(`Tabla-${base}.txt creado`);
    // });

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
