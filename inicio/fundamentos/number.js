const peso1 = 1.0;
const peso2 = Number("2.0"); // tipo Number serve pra inteiro e numero quebrado 1 = 1.0 

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // verifica se é inteiro

const avalicao1 = 9.871;
const avalicao2 = 6.871;

const total = avalicao1 * peso1 + avalicao2 * peso2;
const media = total / (peso1 + peso2);
console.log("A media é: ", media.toFixed(2)); //funçao exibe uma quantidade de numeros apos o ponto flutuante


