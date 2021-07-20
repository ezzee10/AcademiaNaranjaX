
/*Función que genera un archivo .txt*/
const crearArchivo = (numero = 5, imprimir = false) => {

    let fs = require('fs');
    let colors = require('colors');

    return new Promise((resolve, reject) => {

        if (numero < 0 || !Number.isInteger(numero) || isNaN(numero)) {
            reject('El número ingresado debe ser entero positivo mayor o igual que 0');
            return;
        }
        else {
            let resultado = '';

            for (let i = 1; i <= 10; i++) {
                resultado += `${numero} * ${i} = ${numero * i} \n`
            }

            resultado = colors.green(`*** Tabla del ${numero} *** \n \n`) + colors.red(resultado);
            
            fs.writeFile(`tabla-${numero}.txt`, resultado, function(err) {
                if (err) reject(err);
                else resolve(imprimir ? resultado : `tabla-${numero}.txt creado correctamente`);
            });
        }
    });
};

module.exports = crearArchivo