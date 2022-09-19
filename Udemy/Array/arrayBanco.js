const prompt = require("prompt-sync")()
let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalista; 

if(idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09
}else if(idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08
}else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07
}else{
    taxaDeJuros = 0.06
}

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, 
    valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente){
        nome = nomeCliente
        sobrenome = sobrenomeCliente
        idade = idadeCliente
        valorEmprestimo = valorEmprestimoCliente
        numAnos = numAnosCliente
        ehBomPagador = ehBomPagadorCliente
        taxaDeJuros = defineTaxa(idadeCliente)
        avalista = avalistasCliente
    }

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <= 25){
        return 0.09
    }else if(idade >= 26 && idade <= 35){
        return 0.08
    }else if(idade >= 36 && idade <= 50){
        return 0.07
    }else{
        return  0.06
    }
}

cadastraCliente("Meyre", "França", 24, 5000, 9, true, ["Suelen", "Karen", "Luciano"])

function adicionaAvalista(avalistas){
    avalista.push(avalistas)
}
function removerAvalista(){
    avalista.pop(avalista)
}
function editaAvalista(nomeAvalista, indice){
    avalista[indice] = nomeAvalista
}
function ordenarAvalista(){
    return avalista.sort()
}

function exibeAvalista(){
    avalista.forEach((avalista, indice) => {

        console.log(`o ${indice + 1}º avalista é ${avalista}`)

    });
}






adicionaAvalista("Arthur")
adicionaAvalista("Raiane")
adicionaAvalista("Marcos")

console.log(avalista)

editaAvalista("Arthur Saldanha", 3)
console.log(avalista)

removerAvalista()

console.log(avalista)
console.log(ordenarAvalista())

exibeAvalista()