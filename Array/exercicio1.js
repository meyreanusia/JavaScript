function ordenar(vetor){
    let atual;
    for (let i = 0; i < vetor.length; i++){
        let j  = i - 1;
        atual = vetor[i]
        vetor[0] = atual 
        while (j >= 0 && atual < vetor[i]){
            vetor[j + 1] = vetor[j];
            j++;
        }
        vetor[j+1] = atual
    }
    return vetor; 
}


let vetor = [18,1,0,25,55,70]
console.log(ordenar(vetor));