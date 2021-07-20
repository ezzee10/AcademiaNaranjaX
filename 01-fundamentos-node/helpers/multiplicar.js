
/* Función que genera un archivo .txt */
const crearArchivo = (numero = 5, imprimir = false) => {
  const fs = require('fs')
  const colors = require('colors')

  return new Promise((resolve, reject) => {
    if (numero < 0 || !Number.isInteger(numero) || isNaN(numero)) {
      throw new Error('El número ingresado debe ser entero positivo mayor o igual que 0')
    } else {
      let resultado = ''

      for (let i = 1; i <= 10; i++) {
        resultado += `${numero} * ${i} = ${numero * i} \n`
      }
      const resultadoConsola = colors.green(`*** Tabla del ${numero} *** \n \n`) + colors.red(resultado)
      fs.writeFile(`salida/tabla-${numero}.txt`, resultado, function (err) {
        if (err) reject(err)
        else resolve(imprimir ? resultadoConsola : `tabla-${numero}.txt creado correctamente`)
      })
    }
  })
}
module.exports = crearArchivo
