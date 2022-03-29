// Promises são como promessas da vida real, ela está esperando algum retorno
// Para criar uma promessa intanciamos a classe promise.  Ela leva dois argumentos resole (solução) e reject (erro)
const promessa = new Promise((resolve, reject) => {
    const nome = "Gabriel"

    if (nome === "Gabriel") {
        resolve(`Usuário ${nome} encontrado`)
    } else {
        reject(`Usuário ${nome} não encontrado!`)
    }
})

// para executar a promisse utilizamos o método then
promessa.then((data) => {
    console.log(data)
})

const promessa1 = new Promise((resolve, reject) => {
    const nome = "Arnaldo"

    if (nome === "Gabriel") {
        resolve(`Usuário ${nome} encontrado`)
    } else {
        reject(`Usuário ${nome} não encontrado!`)
    }
})

// Funciona como um try-catch
promessa1.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log("Aconteceu um erro:", err)
})

// Resolver varias promessas utilizando o all, espera todas as promises estarem completas para retornar elas dentro de um array
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 ok! Timeout")
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!")
})

const p3 = new Promise((resolve, reject) => {
   resolve("P3 ok!")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log("Depois do all")

// Resolver varias promessas utilizando o race, retorna a primeira promise concluida
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P4 ok! Timeout")
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve("P5 ok!")
})

const p6 = new Promise((resolve, reject) => {
   resolve("P6 ok!")
})

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch request na API do Github
// Fetch API retorna uma Promise
const userName = "Gabriel-Leao"

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET', 
    headers: {
        accept: "application/vnd.github.v3+json"
    }
})
    // Para encadear mais processos utilizamos o método then
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(`Encontramos o usuario ${data.name}`)
        return data
    })
    .catch((err) => {
        console.log(`Houve um errdo: ${err}`)
        return err
    })