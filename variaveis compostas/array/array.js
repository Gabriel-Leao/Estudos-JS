let num = [56,2,4,1,79,0]

console.log("Meu vetor é " + num)
// Coloca os itens na lista de modo decrescente
console.log("Meu vetor organizado " + num.sort())

for (let pos = 0; pos < num.length; pos++) {
    console.log(`O item no índice ${pos} tem o valor de ${num[pos]}`)
}

let nomes = ["Gabriel", "Leão", "Sue", "John", "Hugo", "Eliza"]

for (let pos in nomes) {
    console.log(`O nome na posição ${pos} é igual a ${nomes[pos]}`)
}