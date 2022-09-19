const valores = [7.7, 8.9, 6.3, 9.2]
valores[4] = 10
console.log(valores[4])
console.log(valores.length) //length vai dizer quantos elementos existem no array

// push adiciona novos elementos no array
valores.push({id:3}, false, null, "teste") // array aceita diferentes tipos de dados, inclusive um objeto.

console.log(valores.pop()) // pop exclui o ultimo elemento do array
delete valores[1] //exclui o lementos passando o indice (<1 empty item>) < elemento retirado

console.log(typeof valores)