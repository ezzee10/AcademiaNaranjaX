const contratarJugador = new Promise((resolve, reject) => {
  const contratado = false

  if (contratado) {
    resolve('El jugador se incorpora al equipo')
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('El jugador y el equipo no llegaron a un acuerdo')
  }
})

contratarJugador
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error))
