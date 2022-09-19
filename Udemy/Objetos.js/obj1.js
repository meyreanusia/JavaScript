const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    }
}

// notação por ponto
console.log(carro.nome)
console.log(carro.marca)

// notação por colchetes
console.log(carro["nome"])
console.log(carro["marca"])

// acessando Objetos aninhados
console.log(carro.motor.cavalos)
console.log(carro['motor']['cilindradas'])

carro.cor = "Azul"
console.log(carro.cor)

//adicionando propriedades
carro.consumo = 11
carro.capacidade = 45


console.log(carro) // propriedade add
delete carro.motor.cavalos // remover propriedade

console.log(carro) // propriedade add

