const inverte = (word = "") => {
  let invertido = ""
  let tamanho = word.trim().length - 1

  if (tamanho < 0) {
    throw "Nenhuma palavra foi passada!"
  } else if (tamanho == 0) {
    throw "Por favor passe uma palavra ao invés de um caractere!"
  } else {
    for (let i = tamanho; i >= 0; i--) {
      invertido += word[i]
    }
  }
  console.log(`A palavra "${word.replace(/ /g, "").toUpperCase()}" invertida é: "${invertido.replace(/ /g, "").toUpperCase()}".`)

  if (word.replace(/ /g, "").toUpperCase() == invertido.replace(/ /g, "").toUpperCase()) {
    return console.log("Essa palavra é um Palíndromo!")
  } else return console.log("Essa palavra não é um Palíndromo!")
}

inverte("arara")