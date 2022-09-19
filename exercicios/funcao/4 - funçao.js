// lancamento de um dado

const { SymbolDisplayPartKind } = require("typescript")

for(let i = 0; i < 100; i++){
    console.log(jogar())
}
    
function jogar(){
    let dado = Math.floor(Math.random() * 7) 
    return dado
    
    
}
