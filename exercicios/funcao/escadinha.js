let array = []
function exibeNumero(entrada) {
    for (let i = 0; i <= entrada; i++) {
        let novoValor = i.toString()
        array.push(novoValor.repeat(i))
    }
    for (const entrada of array) {
        console.log(entrada + " ")
    }
}
exibeNumero(5)