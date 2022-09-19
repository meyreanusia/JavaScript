function soma1(a, b ,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(soma1(0,0,0)) //dessa forma, que a funçao foi criada, se o valor de entrada for zero
                          // é gerado um bug, e o valor 3 é retornadao.


function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1: c
    return a + b + c 
}

console.log(soma2(0,0,0)) //Com essas condiçoes, a funçao retorna da maneira certa. 

// PARAMETRO PADRÃO 


function soma3(a = 1, b = 1, c = 1) { //Codigo limpo e menor!!!!
}

console.log(soma3(2,2,2))