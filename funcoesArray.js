const latinhas = ["Koka-kola", "Esprite"]

latinhas.push("coleção-especial")

// Filtar o array latinhas retornando os itens diferentes de "Esprite" e salva esse novo array dentro da const latinhasNaoEsprite
const latinhasNaoEsprite = latinhas.filter(latinha => {
    return latinha !== "Esprite"
})

// Ele procura no array e retorna o primeiro, e apenas o primeiro item que tiver "Koka-Kola" como valor. Quando ele achar o valor correspodente ele para de procurar 
const latinhaKoka = latinhas.find(latinha => {
    return latinha === "Koka-kola"
})

// Ele retorna um valor booleano, tem que passar o valor a ser encontrado, e tambem pode se passar de que posição ele começa a procurar
const found = latinhas.includes("coleção-especial")

// Retorna um novo array
const novasLatinhas = [...latinhas, "Itubaína"]

// Ele tira a primeira latinha e a última, e retorna os valores restantes em um novo array 
const latinhasAtualizada = latinhas.slice(1, -1)

// remove o ultimo item do array, modificando o array
latinhas.pop()

const fruits = ["🍎", "🍇"]
console.log(`Essa é a minha lista de frutas ${fruits}`)

// O reverse reverte a ordem dos itens no array. Ele altera o array original, então é preciso destruturar ele para que isso não aconteça
const fruitsReverse = [...fruits].reverse()
console.log(`Essas é a minha lista frutas ao contrário ${fruitsReverse}`)

// Transforma todos os itens dentro do array fruits em maçãs e gera um novo array
const apple = fruits.map(fruta => {
    return "🍎"
})
console.log(`Agora só tem maçãs ${apple}`)

// O forEach() não retorna um novo array e nem altera o original, ele apenas faz algo para todos os itens dentro do array. É um for para arrays
fruits.forEach((fruit, index) => {
    console.log(`Essa é a minha ${index+1}° fruta ${fruit}`)
})