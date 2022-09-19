Object.prototype.atr0 = "0"
const avo = {atr1: "A"}
const pai = {__proto__: avo, atr2: "B"} // herança
const filho = {__proto__: pai, atr3: "C"}

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3);

const carro = {
    veloAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.veloAtual + delta <= this.velMax){
        this.veloAtual += delta
        }
        else{
            this.veloAtual = this.velMax
        }
    },
    status(){
        return `${this.veloAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 // shafowing
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //Estabelencendo a herança = relacao de prototipos de objetos
Object.setPrototypeOf(volvo,carro)

console.log(ferrari);
console.log(volvo);
volvo.acelerarMais(100)
console.log(volvo.status());