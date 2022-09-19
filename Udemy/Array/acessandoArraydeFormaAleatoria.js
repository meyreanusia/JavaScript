/* MATH
    random - sorteia numeros de 0 a 1, sem incluir o 1.(para gerar outros numeros, basta
    multiplicar o random pelo valor que deseja que serja gerado)
    math.floor() - arredonda para baixo
    math.round() arredonda pra cima 
    toFixed() arredonda pra cima, passando o numero de casas decimaiss
*/

//Exemplos:

console.log(Math.random());
console.log(Math.random() * 4);
console.log(Math.round(Math.random() * 4))


const nomes = ["Manuel", "Karen", "Meyre", "Suelen"]

let indiceAleatorio = Math.floor(Math.random() * 6)

console.log(nomes[indiceAleatorio]);