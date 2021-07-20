const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Muestra la tabla en consola',
        }
    })
    .check(argv => {
        if  ( isNaN(argv.base) )  {
        throw new Error("La base tiene que ser un numero");
        } else if ( argv.base < 1 || argv.base > 20 ) {
        throw new Error("Debes colocar un valor de base entre 1 y 20");
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv