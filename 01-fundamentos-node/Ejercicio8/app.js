const crearArchivo = require("../helpers/multiplicar");
const yargs = require("../config/yargs");

const tabla_yargs = () => {

    if (yargs.listar) {
        crearArchivo(yargs.base, true)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    } else {
        crearArchivo(yargs.base);
    }

}

tabla_yargs();