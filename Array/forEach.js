const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)// funcao passando valor do indice e o indice
})
console.log("----------------");

aprovados.forEach(nome => console.log(nome))// funcao passando o indice
console.log("----------------");
const exibirAprovados = aprovado => console.log(aprovado)// funcao
aprovados.forEach(exibirAprovados)// funcao passada no foreach
console.log("----------------");

aprovados.forEach(function(x, y, k){ // indice, nome e o proprioarray
    console.log(`${y} ${x} ${k}`)
})

