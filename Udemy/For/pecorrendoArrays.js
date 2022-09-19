//Tradicional - For IN
const frutas = ["Melancia", "Banana", "Morcego", "Uva"]
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log();
// opçao nao tao ideial

for(let indice in frutas){
    console.log(frutas[indice]);
}

console.log();
// For of - cada elemento de arrray para uma variavel definida
// da acesso apenas o valor e nao o indice

for(let fruta of frutas){
    console.log(fruta);
}

console.log();

// foreach - pecorre o array passando por cada elemento 
// retorna valor e indice

frutas.forEach((fruta, indice)=>{
 
    console.log("fruta " + indice + ":" + fruta);
})