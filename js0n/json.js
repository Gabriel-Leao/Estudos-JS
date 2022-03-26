const obj = {
    'nome': 'Gabriel',
    'idade': 18,
    'esta__estudando': true,
    'hobies': ['ler', 'música', 'filmes', 'fazer amor'],
}

console.log(obj)
console.log(typeof(obj))
const json__obj = JSON.stringify(obj)
console.log(json__obj)

let pessoas = require('./teste.json')
console.log(pessoas)