const prompt = require('prompt-sync')();

function formatar(horario){

    if(horario < 13){
        
        if (horario >= 0 && horario < 1){
            let horario1 = (horario + 12)
           
            return horario1
        }else{
            return horario
        }

        
    }else{
        let horario1 = (horario - 12).toFixed(2)
        return horario1
    }
}

function formatarHora(horario){
   
    if(horario < 12){ 
        hora = horario.toString()
        let substituicao = hora.replace(".", ":")
        return (substituicao + ' A.M')
    }
    else{
        hora = horario.toString()
        let substituicao = hora.replace(".", ":")
        return substituicao+ ' P.M'
    }

}


let valor = 1

while (valor != 0){

    let horario1 = prompt("Digite a o horário para convenção(00:00):").replace(":",".")
    horarioNumb = parseFloat(horario1).toFixed(2)
    
    
    if (horarioNumb >= 24){
        console.log('Horario invalido')
    }else{ 
        console.log(formatarHora(formatar(horarioNumb)))
    
    }   
    
}


