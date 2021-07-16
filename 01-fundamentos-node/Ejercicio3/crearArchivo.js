
/*Función que genera un archivo .txt*/
let crearArchivo = (nombre, data) => {

    let fs = require('fs');

    return new Promise((resolve, reject) => {

        if(nombre === '' || typeof nombre !== "string") {
            reject('El nombre no puede estar vacio y debe ser de tipo string');
        } else {
            fs.writeFile(`${nombre}.txt`, data, function(err) {
                if (err) reject(err);
                else resolve(data);
            });
        }
    });
};

module.exports = crearArchivo
