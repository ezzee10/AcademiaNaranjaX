//Calcular tabla numérica mediante argumentos usando yargs
const yargs = require('yargs');

let argv = yargs.argv;
let numero = argv.base;

const calcular_tabla_numerica = require("../Ejercicio1/app");

calcular_tabla_numerica(numero);
