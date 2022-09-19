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

console.log(carro.kmPercorrido());