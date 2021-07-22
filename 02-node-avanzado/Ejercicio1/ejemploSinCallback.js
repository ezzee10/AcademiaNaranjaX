const lenguajes = ['Node', 'React', 'Java', 'Python', 'Ruby on Rails']

function mostrarLenguajes () {
  setTimeout(() => {
    lenguajes.forEach(lenguaje => console.log(lenguaje))
    console.log('\n')
  }, 1000)
}

mostrarLenguajes()
