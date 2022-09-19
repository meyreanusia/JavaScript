const { isThisTypeNode } = require("typescript")

var Cliente = function(){ // classe
    //Atributos 
    this.nome = ""
    this.telefone = ""
    this.cpf = ""

    // Métodos

    this.mostrar = function(){
        console.log("nome: " + this.nome) 
        console.log("Telefone: "+ this.telefone) 
        console.log("CPF: " + this.cpf) 
    
    }

}

let Retangulo = class {
    constructor(altura,largura){
        this.altura = altura
        this.largura = largura
    }
    
}

let c = new Cliente() //objeto instanciado 
c.nome = "Meyre"
c.cpf = 10408923458
c.telefone = 85743330
c.mostrar()

let a = new Cliente()
a.nome = "Suelen"
a.cpf = 5458792236
a.telefone = 85766175

a.mostrar()