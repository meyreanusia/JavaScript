const categorias = {
    frutas: ["Banana", "maça", "laranja", "uva", "melancia", "melao"],
    profissoes: ["Engenheiro", "advogado", "medico", "Professor", "Pescador", "Musico"],
    animais: ["Pagagaio", "galo", "Cachorro", "gato", "Canguru", "galinha", "cavalo", "piranha"],
    cores: ["amarelo", "azul", "laranja", "roxo", "vermelho", "marro"]
}

function retornaArrayCategorias(){
    return Object.keys(categorias)
}

console.log(retornaArrayCategorias());