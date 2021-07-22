/* Ejemplo para evaluar el resolve */
const contratarJugador = new Promise((resolve, reject) => {
  const contratado = true

  if (contratado) {
    resolve('El jugador se incorpora al equipo')
  } else {
    reject(new Error('El jugador y el equipo no llegaron a un acuerdo'))
  }
})

console.log(contratarJugador)

/* Ejemplo para evaluar el reject */
const contratarJugador2 = new Promise((resolve, reject) => {
  const contratado = false
  if (contratado) {
    resolve('El jugador se incorpora al equipo')
  } else {
    reject(new Error('El jugador y el equipo no llegaron a un acuerdo'))
  }
})

console.log(contratarJugador2)

/* Ejemplo para evaluar el pending */
const contratarJugador3 = new Promise((resolve, reject) => {})

console.log(contratarJugador3)
