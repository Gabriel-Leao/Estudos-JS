// A callback function executa uma função depois de determinada ação, muito utilizada na parte assíncrona do JS
console.log("=== callback function sincrona ===")
// Síncrono é um adjetivo que se aplica a algo que acontece simultaneamente, assíncrono é algo que não tem essa possibilidade. exemplo:
/* aulas síncronas são aquelas que acontecem ao vivo. Com alunos, professor ou numa sala virtual. Aulas assíncronas são aquelas em que o professor ou a professora sobe em alguma plataforma virtual um arquivo de vídeo com suas explicações sobre um determinado tema. Em outras palavras, é uma aula gravada. */

function exibir(num) {
    console.log(`O resultado da conta é ${num}`)
}

function soma(n1=0, n2=0, callback) {
    let soma = n1 + n2
    // A função está sendo executada depois de uma resposta do código
    return callback(soma)
}

soma(2, 8, exibir)