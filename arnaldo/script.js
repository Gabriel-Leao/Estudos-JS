function inverte(word = "") {
  let invertido = ""
  let tamanho = word.length

  if (tamanho == 0) {
    throw "Nenhuma palavra foi passada"
  } else {
    tamanho = tamanho - 1
    for (let i = tamanho; i >= 0; i--) {
      invertido += word[i]
    }
  
    return console.log(`A palavra ${word.toLocaleUpperCase().replace(/ /g, "")}, ao contrário é: ${invertido.toLocaleUpperCase().replace(/ /g, "")}.`)
  }
}

inverte("Gabriel")