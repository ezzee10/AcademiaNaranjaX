let colors = require('colors');

const calcular_tabla_numerica = require("../Ejercicio1/app");

let argv = process.argv;
let numero = parseInt(argv[2].split('=')[1]);

console.log(colors.red(`Se imprime la tabla del ${numero} \n`));

calcular_tabla_numerica(numero);