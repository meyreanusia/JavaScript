function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, 
  valorEmprestimoCliente, numAnosCliente = 2, 
  ehBomPagadorCliente = false, avalistasCliente){
  cliente = {
    nome:nomeCliente,
    sobrenome: sobrenomeCliente,
    idade: idadeCliente,
    emprestimo: {
      valorEmprestimo: valorEmprestimoCliente,
      numAnos: numAnosCliente,
      ehBomPagador: ehBomPagadorCliente,
      taxaDeJuros: defineTaxa(idadeCliente),
      avalista: avalistasCliente
      },
    adicionaAvalista: function(avalista){
      this.emprestimo.avalista.push(avalista)
    },
    removeAvalista: function(){
      this.emprestimo.avalista.pop()
    },
    editaAvalista: function(nomeAvalista, indice){
      this.emprestimo.avalista[indice] = nomeAvalista 
    },
    ordenaAvalista: function(){
      this.emprestimo.avalista.sort()
    },
    exibirAvalista: function(){
      this.emprestimo.avalista.forEach((avalista, indice) => {
        console.log(`O ${indice + 1}º avalista é ${avalista}`)
      })
    }
       
    }
      return cliente
    }

function defineTaxa(idadeCliente){
  if(idadeCliente >= 18 && idadeCliente <= 25){
    return 0.09
  }else if(idadeCliente >= 26 && idadeCliente <= 35){
    return 0.08
  }else if(idadeCliente >= 36 && idadeCliente <= 50){
    return 0.07
  }else{
    return  0.06
  }
}

const cliente1 = cadastraCliente("Meyre", "França", 24, 5000, 9, true, ["Suelen", "Karen", "Luciano"])

function adicionaInfLogin(cliente, email, senha){
  

    if(email.indexOf("@") !== -1 && senha.length > 5){
      cliente.login = {
        email: email,
        senha: senha 
      }
      return cliente
    }else{
      return "Credenciais inválidas"
    }
}

console.log(adicionaInfLogin(cliente, "meyreanusia@gmail.com","124589"));
console.log(adicionaInfLogin(cliente, "meyreanusia@gmail.com","12458"));
console.log(adicionaInfLogin(cliente, "meyreanusiagmail.com","12458"));
console.log("Entrei");
console.log(cliente1.exibirAvalista());
console.log(cliente1.ordenaAvalista());
console.log(cliente1.exibirAvalista());