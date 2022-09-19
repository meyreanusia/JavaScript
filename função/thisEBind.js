const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()  //conflito entre paradigma funcional e POO. 


const falarPessoa = pessoa.falar.bind(pessoa) /*Está sendo dito para o JS usando o bind  é que 
                                                o this  sempre vai apontar para pessoa . Então,
                                                como falarDePessoa  é uma função, o this  não vai mudar 
                                                mais dentro dela. */
falarPessoa() 