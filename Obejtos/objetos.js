//~~~ CRIANDO OBJETO ~~~

/* nesse exemplo foi criado um objeto vazio, e os seus atributos foram 
adicionados de forma dinamica */
const prod1 = {} // par de chaves é a descriçao de um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const produto2 = {  //obejeto 2
    nome:'Camisa Polo',
    preco: 79.80
    /*obj: { // objeto dentro de outro
        blabla: 1, */

}

const carro = {
    modelo: "A4", //Atributos
    valor: 89000,//Atributos
    proprietario: { //Objeto
        nome: "Raul", //Atributos
        idade: 56,//Atributos
        endereço: { // Objeto
            logradouro: "Rua ABC",//Atributos
            numero: 123//Atributos
        }
    }, 
    condutores: [{ //objeto que é um array/ conjunto de objetos
        nome: "Junior",
        idade: 19
    },  {
        nome: "Ana",
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }


}