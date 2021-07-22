/* Función para agregar elementos a un array e imprimirlos luego de agregarlos */

const elementos = []

const agregarElementos = (elemento, callback) => {
  elementos.push(elemento)
  callback(elementos)
}

const imprimirElementos = () => {
  elementos.forEach(elemento => console.log(elemento))
  console.log('\n')
}

const mostrarResultados = () => {
  agregarElementos('Argentina', imprimirElementos)
  agregarElementos('Brasil', imprimirElementos)
  agregarElementos('Perú', imprimirElementos)
  agregarElementos('Uruguay', imprimirElementos)
  agregarElementos('Chile', imprimirElementos)
}

mostrarResultados()
