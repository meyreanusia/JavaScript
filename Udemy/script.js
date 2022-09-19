/* Elemento HTML referente a categoria */
const categoria = document.querySelector("#category");
/* Elemento HTML referente a lista das letras erradas*/
const letrasErradas = document.querySelector(".wrongLetters");
/* Elemento HTML referente a palavra oculta
   Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
   const palavraInterface = document.querySelector(".dashes");
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll(".eyes"));
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);
/* Palavra corrente */
let palavraProposta;
/* Lista das letras erradas */
let letrasErradasArray = [];
/* Index da parte do corpo corrente */
let indiceBoneco;
/* Numero de chances do jogador */
const numTentativas = 7;
/* Valor para opacidade dos olhos */
const opacidadeOlhos = 0.3;

const categorias = {
    frutas: ["Banana", "maça", "laranja", "uva", "melancia", "melao"],
    profissoes: ["Engenheiro", "advogado", "medico", "Professor", "Pescador", "Musico"],
    animais: ["Pagagaio", "galo", "Cachorro", "gato", "Canguru", "galinha", "cavalo", "piranha"],
    cores: ["amarelo", "azul", "laranja", "roxo", "vermelho", "marro"]
}

function retornaArrayCategorias(){
    return Object.keys(categorias)
}

console.log(retornaArrayCategorias());
function retornaCateogia(){ 
    const arrayCategorias = retornaArrayCategorias()
    let indiceCategorias = retornaNumAleatorio(arrayCategorias.length)
    return arrayCategorias[indiceCategorias]
}

function exibeCategoria(){
    categoria.innerHTML = retornaCateogia()
}

function retornaNumAleatorio(max){
    return Math.floor(Math.random() * max)
}

function definePalavraProposta(){
    const arrayPalavras = categorias[categoria.innerHTML]
    let indicePalavra = retornaNumAleatorio(arrayPalavras.length)
    palavraProposta = arrayPalavras[indicePalavra]
    ocultaPalavra()
}

function ocultaPalavra(){
    let palavraOcultada = ""
    for(let i = 0; i < palavraProposta.length; i++){
        palavraOcultada += "-"
    }
    exibirPalavraInterface(palavraOcultada)
}

function exibirPalavraInterface(palavra){
    palavraInterface.innerHTML = palavra
}
function tentativa(letra){
    if(palavra.palavraProposta.includes(letra)){
        atualizaPalavraInterface(letra)

    }else{
        letrasErradasArray.push(letra)
        letrasErradas.innerHTML = "Letras erradas" + letrasErradasArray
        if(partesBoneco.length > indiceBoneco){
            desenhaBoneco()
        }
    }
    verificaFimDeJogo()
}
function atualizaPalavraInterface(letra){
    let palavraAux = ""
    for(let i = 0; i < palavraProposta.length; i++){
        if(palavraProposta === letra){
            palavraAux
        }else if(palavraInterface.innerHTML[i] != "-"){
            palavraAux += palavraInterface.innerHTML[i]
        }
        else{
        palavraAux += "-"
        }
    }
    exibirPalavraInterface(palavraAux)
}

function verificaFimDeJogo(){
    if(!palavraInterface.innerHTML.includes("-")){
    exibirPalavraInterface("VOCÊ VENCEU!!")
    window.removeEventListener("keypress", retornaLetra)
    }else if(letrasErradasArray.length >= numTentativas){
        desenhaOlhos()
        exibirPalavraInterface("VOCÊ PERDEU!!")
        window.removeEventListener("keypress", retornaLetra)
    }
}

/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/
function retornaLetra(e){ 
    tentativa(e.key);
}

/*
Desenha a parte do corpo corrente
*/
function desenhaBoneco(){
    partesBoneco[indiceBoneco].classList.remove("hide");
    indiceBoneco++; 
}

/* 
Desenha os olhos do personagem
*/
function desenhaOlhos(){
    olhos.forEach((olho => {
        olho.style.opacity = 1;
        olho.style.zIndex = 10;
    }));
}

/*
Oculta as partes do corpo do personagem
*/
function ocultaBoneco(){
    olhos.forEach((olho => {
        olho.style.opacity = opacidadeOlhos; 
    }));
    partesBoneco.forEach(parteBoneco => {
        parteBoneco.classList.add("hide");
    });
}

/*
Inicia as configurações do jogo
*/
function iniciaJogo(){
    indiceBoneco = 0;
    letrasErradasArray = [];
    ocultaBoneco()
    exibeCategoria()
    definePalavraProposta()
    letrasErradas.innerHTML = "Letras erradas: ";
    window.addEventListener("keypress", retornaLetra);
}

window.addEventListener("load", iniciaJogo);
