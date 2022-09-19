const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    consumo: 11,
    capacidadeTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    },
    kmPercorrido: function(){
        return `o ${this.nome} percorre ${this.consumo * this.capacodadeTanque} km com um tanque cheio `
    }
}
//método Keys() - retorna um array de string que 
//representa as chaves de cada propriedade.

const chaves = Object.keys(carro)
console.log(chaves);

//Values() - retorna um array com os valores de cada propriedade

const valores = Object.values(carro)
console.log(valores);

// Entries() - Retorna um array, cujo os elementos sao tambem arrays
// correspondentes aos pares de propriedades [chave : valor]
const tuplas = Object.entries(carro)
console.log(tuplas);

//Assign() - copia as propriedades de um objeto de origem para um de destino
const carro3 = Object.assign(carro)
console.log(carro3);