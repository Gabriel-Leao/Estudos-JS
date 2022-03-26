// A callback function executa uma função depois de determinada ação, muito utilizada na parte assíncrona do JS
console.log(`========================================================`)
console.log("=== callback function assíncrona ===")
/* aulas síncronas são aquelas que acontecem ao vivo. Com alunos, professor ou numa sala virtual. Aulas assíncronas são aquelas em que o professor ou a professora sobe em alguma plataforma virtual um arquivo de vídeo com suas explicações sobre um determinado tema. Em outras palavras, é uma aula gravada. */

// sincrono
console.log("Antes do setTimeout")

// assincrono
// setTimeout
setTimeout(() => {
    console.log("SetTimeout")
}, 2000)

// sincrono
console.log("Depois do setTimeout")

// Set interval

let intervalo = setInterval(() => {
    console.log("Essa mensagem aparece a cada 5 segundos e para depois de três repetições")
}, 5000)

setTimeout(() => {
    clearInterval(intervalo)
}, 15000)