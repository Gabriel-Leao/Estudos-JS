// Fetch request na API do Github
// Fetch API
const userName = "Gabriel-Leao"

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET', 
    headers: {
        accept: "application/vnd.github.v3+json"
    }
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(`Encontramos o usuario ${data.name}, ele tem ${data.followers} seguidores e mora em ${data.location}`)
        console.log(data)
        return data
    })
    .catch((err) => {
        console.log(`Houve um errdo: ${err}`)
        return err
    })