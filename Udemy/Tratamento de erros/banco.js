const prompt = require("prompt-sync")()
let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalista; 

if(idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09
}else if(idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08
}else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07
}else{
    taxaDeJuros = 0.06
}

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, 
    valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente){
        nome = nomeCliente
        sobrenome = sobrenomeCliente
        idade = idadeCliente
        valorEmprestimo = valorEmprestimoCliente
        numAnos = numAnosCliente
        ehBomPagador = ehBomPagadorCliente
        taxaDeJuros = defineTaxa(idadeCliente)
        avalista = avalistasCliente
    }

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <= 25){
        return 0.09
    }else if(idade >= 26 && idade <= 35){
        return 0.08
    }else if(idade >= 36 && idade <= 50){
        return 0.07
    }else{
        return  0.06
    }
}

function credenciaisInvalidas(mensagem){
    this.nome = "Credenciais invalidas"
    this.mensagem = mensagem
}


function adicionaInfLogin(cliente, email, senha){
    if(email.indexOf("@") !== -1 && senha.length > 5){
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente
    }else{
        throw new credenciaisInvalidas("Os dados são invalidas")
    }
}


try{
    const cliente1 = cadastraCliente("Meyre", "França",24, 5000, 4, true, ["Suelen", "Karen"])
}catch(erro){
    console.log(erro);
}finally{
    console.log("Deseja realizar uma nova operação? ");
}