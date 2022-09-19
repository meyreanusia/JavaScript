const clientes = [["Emanuel", 24, true],["edval", 24, true], ["Raphael0", 19, true]]
console.log(clientes)
console.table(clientes)// exibicao em matrix 

console.log(clientes[1][2]);


let quadroDeFuncionarios = [["finaneiro", "Anna Luiza", "Roberto"], ["Marketing", "Sarah", "Leticia"], ["Diretoria", "Keila", "Marcos"]]

quadroDeFuncionarios.forEach((departamento, indiceDep) => {
    departamento.forEach((funcionario, indicefunc)=> {
        console.log(funcionario)
    })

}
)



