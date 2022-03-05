let pessoa = {
    // nome, sexo, peso, altura são chamados de atributo, a função é chamada de método
    nome: "Gabriel",
    sexo: "M",
    peso: 80,
    altura: 1.75,
    imc(peso=0, altura=0) {
        return peso / altura ** 2
    }
}

console.log(typeof(pessoa))
// Prints formatados de objetos dão o retorno de [object Object]
// console.log(`Este é o meu objeto ${pessoa}`)
console.log(pessoa)

console.log(`O ${pessoa.nome} é do sexo ${pessoa.sexo}, pesa ${pessoa.peso}kg, tem ${pessoa.altura}M de altura e o IMC dele é ${pessoa.imc(pessoa.peso, pessoa.altura).toFixed(1)}`)