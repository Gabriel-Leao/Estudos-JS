// As funções assíncronas funcionam como Promises, porém com uma sintaxe mais simples
// Precisamos declarar a função com a palavra async. Podemos aplicar o recurso em funções anônimas e métodos de classe

function forIt () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("wait for it...")
            resolve()
        }, 1000)
    })
}

// sintaxe
async function legendary() {
    console.log("Legen...")

    // Quando precisarmos aguardar por algo a instrução precisa do await. Tentar usar o await sem o async gera um erro
    await forIt()

    console.log("...dary")
    console.log("Legendary")
}

legendary()

function getUser(id) {
    try {
        return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))
    } catch (error) {
        console.log(`O erro encontrado foi: ${error}`)
    }
}

async function showUserName(id) {
    try {
        const user = await getUser(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch (error) {
        console.log(`O erro encontrado foi: ${error}`)
    }
}

setTimeout(() => {
    showUserName(1)
}, 2000)