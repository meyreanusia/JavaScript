const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Preto",
    ano: 2012,
    consumo: 11,
    capacidadeTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.6

    }
}
let nome = carro.nome // desestruturacao nao tao indicada 
const {marca, cor, ano, consumo, capacidadeTanque} = carro
console.log(marca, cor, ano, consumo, capacidadeTanque) // forma indicada
const {motor: {cavalos}} = carro // desestruturacao de objetos aninhados
console.log(cavalos);