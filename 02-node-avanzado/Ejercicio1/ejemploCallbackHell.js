const lenguajesAprendidos = []

function agregarLenguajeAprendido (lenguaje, callback) {
  lenguajesAprendidos.push(lenguaje)

  console.log(`Agregado: ${lenguaje}`)

  callback()
}

function mostrarLenguajesAprendidos () {
  console.log(lenguajesAprendidos)
}

function iniciarCallbackHell () {
  setTimeout(() => {
    agregarLenguajeAprendido('Java', mostrarLenguajesAprendidos)

    setTimeout(() => {
      agregarLenguajeAprendido('Node', mostrarLenguajesAprendidos)
      setTimeout(() => {
        agregarLenguajeAprendido('Python', mostrarLenguajesAprendidos)
      }, 3000)
    }, 3000)
  }, 3000)
}

iniciarCallbackHell()
