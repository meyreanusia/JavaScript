/* sistema que receba um objeto usuário e
 omita o valor da propriedade senha */

function omitirSenha(senha){
    let senhaocuta = ""
    for(let i = 0; i < senha.length; i++ ){
        senhaocuta += "*"
    }
    return  senhaocuta
}

const usuario = {
    nome: "José",
    email: "jose@gmail.com",
    senha: "jose12345",
    senhaAux: ""
}
 
usuario.senhaAux = omitirSenha(usuario.senha)
console.log(usuario.senhaAux);