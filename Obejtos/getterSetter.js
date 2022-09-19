const sequencia = {
    _valor: 1, //Convençao: variavem com _ é privada, mas nd impede de ser altarada
    get valor(){return this._valor++},
    set valor(valor){
        if(valor >this._valor){
        this._valor = valor
    }
}
}

console.log(sequencia.valor, sequencia.valor)

console.log(sequencia._valor);