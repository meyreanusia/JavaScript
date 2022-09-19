const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)

// funcao que pode ser reutilizada
const notasMenorQue7 = nota => nota < 7

const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
