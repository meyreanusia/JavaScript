// delimita uma string com " aspas duplas", 'aspas simples', `crase` .

const escola = "cod3r";
console.log(escola.charAt(4));// retorna o indice da string
console.log(escola.indexOf('3')); // retorna  o numero se existir
console.log(escola.substring(1));// pecorre a string a partir do indice 1
console.log(escola.substring(0, 3)); // pecorre a string a partir do indice 0 até o indice 3
console.log("Escola:".concat(escola).concat('!')); // concatenaçao 
console.log(escola.replace(3 , 'e')); // substitui o caracter 
console.log("Ana, Maria, Pedro".split(',')); // tranforma em um array 

const nome = 'Rebeca';
const concatencao = 'ola ' + nome + '!';
const template = `
    Olá,
    ${nome}!`

console.log(concatencao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)



