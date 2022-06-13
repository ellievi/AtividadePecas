//              \\
let pesoPeca = 150;
let numeroPeca = 7;
let nomePeca = "Roda";


if(pesoPeca > 100) {
    console.log("Pode-se cadastrar a peça.")
} 
    else {
    console.log("Peça com peso insuficiente.")
}

if(numeroPeca >= 10) {
    console.log("Número de peças excedido. Não será possível cadastrar.")
} 
    else {
    console.log("Cadastro permitido.")
}

if (nomePeca.length < 3) {
    console.log("Número de caracters insuficientes. Insira ao menos três caracters.")
}
    else {
        console.log("Cadastro concluído.")
    }
