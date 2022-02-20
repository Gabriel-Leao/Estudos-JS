let agora = new Date
let dia__semana = agora.getDay()

// Sempre usar o break exceto se tiver um return não precisa
switch(dia__semana) {
    case 0:
       return console.log("Hoje é Domingo")
    case 1:
       return console.log("Hoje é Segunda")
    case 2:
       return console.log("Hoje é Terça")
    case 3:
       return console.log("Hoje é Quarta")
    case 4:
       return console.log("Hoje é Quinta")
    case 5:
       return console.log("Hoje é Sexta")
    case 6:
       return console.log("Hoje é Sábado") 
}