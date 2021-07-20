let colors = require('colors');

const crearArchivo = require("../helpers/multiplicar");

let argv = process.argv;
let numero = parseInt(argv[2].split('=')[1]);

console.log(colors.red(`Se imprime la tabla del ${numero} \n`));

crearArchivo(numero);