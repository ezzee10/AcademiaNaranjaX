/*Función que imprime la tabla del 5 hasta el 10*/

const crearArchivo = require("./crearArchivo");

const tabla_del_5 = async () => {

    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `5 * ${i} = ${5 * i} \n`
    }

    console.log(resultado);

    try {
        await crearArchivo('tabla-5.txt', resultado);
    } catch (error) {
        console.log(error)
    }

}

tabla_del_5();




