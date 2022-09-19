//usando notação literal
const obj1 = {}


//Objetct em JS

///console.log(typeof Object, typeof new Object);
//const obj2 = new Object 


//função construtora
function Produto(nome, preco, desconto){
    this.nome = nome 
    this.getPrecoComDesconto = () => {//funcao
        return preco * (1 - desconto)
    }
}
const p1 = new Produto("caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());//chamada de funcao

//funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)

        }
    }
}

const f1 = criarFuncionario("Joao", 7980, 4)
const f2 = criarFuncionario("Maria", 11400, 1)
console.log("Entrei");
console.log(f1.getSalario(), f2.getSalario());

//objetct.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)