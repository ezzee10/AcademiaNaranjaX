const contratarJugador = new Promise((resolve, reject) => {
  const contratado = true
  if (contratado) {
    resolve('El jugador se incorpora al equipo')
  } else {
    reject(new Error('El jugador y el equipo no llegaron a un acuerdo'))
  }
})

const functionPromise = (mensaje) => {
  console.log(`Mensaje: ${mensaje}`)
}

contratarJugador
  .then(mensaje => functionPromise(mensaje))
  .catch(error => console.log(error))
