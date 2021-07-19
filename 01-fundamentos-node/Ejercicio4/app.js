

const calcular_tabla_numerica = require("../Ejercicio1/app");

let argv = process.argv;
let numero = parseInt(argv[2].split('=')[1])


calcular_tabla_numerica(numero)