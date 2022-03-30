const obj = {
    'nome': 'Gabriel',
    'idade': 18,
    'estudando': "Javascript",
    'hobies': ['ler', 'música', 'filmes', 'fazer amor'],
}

console.log(obj)
console.log(typeof(obj))
const json__obj = JSON.stringify(obj)
console.log(json__obj)

// Require não funciona no html
let pessoas = require('./teste.json')
console.log(`O nome da pessoa é ${pessoas.nome} e ele tem ${pessoas.idade} anos`)

let pessoa
// fetch não funciona no node
fetch("js0n/teste.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        pessoa = data

        function sortear(pessoa) {
            let index = parseInt(Math.random() * pessoa.length)
            console.log(`O usuario ${pessoa[index].nome} foi encontardo, ele tem ${pessoa[index].idade} anos.`)
            return pessoa[index]
        }
        sortear(pessoa)
    })