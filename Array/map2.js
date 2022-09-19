const carrinho = [
'{"nome": "Borracha", "Preço": 3.75}',
'{"nome": "Carderno", "Preço": 13.90}',
'{"nome": "Kit de Lapis", "Preço": 41.22}',
'{"nome": "Caneta", "Preço": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)