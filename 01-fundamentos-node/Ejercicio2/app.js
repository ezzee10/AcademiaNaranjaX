/*Función que imprime la tabla del 5 hasta el 10*/

let fs = require('fs');

const tabla_del_5 = () => {

    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `5 * ${i} = ${5 * i} \n`
    }

    console.log(resultado);

    fs.writeFile('tabla-5.txt', resultado, (err) => {
        if (err) throw err;
        console.log('Archivo guardado correctamente');
    });
}

tabla_del_5();


