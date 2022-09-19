const notasAlunos = [6, 7.5, 8,10,2,3,6,5,8.9,9.3]


function geraRelatorio(array){
    
    let aprovados = 0 
    let reprovados = 0
    for(const nota of array){
        if(nota >= 7){
            aprovados += 1
        }else{
            reprovados += 1
        }
    }
    return `Aprovados ${aprovados}. Reprovados ${reprovados}`
}

console.log(geraRelatorio(notasAlunos));