const crearArchivo = require("../helpers/multiplicar");

const tabla_yargs = () => {

    const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false
                    }
                })
                .check(argv => {
                    if  ( isNaN(argv.base) )  {
                      throw new Error("La base tiene que ser un numero");
                    } else if ( argv.base < 1 || argv.base > 20 ) {
                      throw new Error("Debes colocar un valor de base entre 1 y 20");
                    } else if (argv.listar) {
                        return crearArchivo(argv.base, true);
                    } else {
                        return crearArchivo(argv.base);
                    }
                  })
                .argv;
}

tabla_yargs();




