//Calcular tabla numérica mediante argumentos usando yargs
const yargs = require('yargs');

let argv = yargs.argv;
let numero = argv.base;

const crearArchivo = require("../helpers/multiplicar");

crearArchivo(numero);
