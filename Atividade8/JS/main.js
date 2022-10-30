var totalPessoas = 1;
var somaIdade = 0, maiorIdade, menorIdade, qtdPessimos = 0, qtdBom = 0, qtdOtimo = 0, qtdHomens = 0, qtdMulheres = 0;

while (totalPessoas <= 3) {

    alert("Entrevistado: " + totalPessoas);
    
    var idade = prompt("Informe sua idade:");
    idade = parseInt(idade);

    var sexo = prompt("Informe seu sexo: 1 para feminino ou 2 para Masculino");
    sexo = parseInt(sexo);

    var opiniao = prompt("O que você achou do filme? 1 - Péssimo, 2 - Regular, 3 - Bom, 4 - Ótimo");
    opiniao = parseInt(opiniao);

    somaIdade += idade;

    if(totalPessoas == 1 || maiorIdade < idade){
        maiorIdade = idade;
    } 

    if(totalPessoas == 1 || menorIdade > idade){
        menorIdade = idade;
    } 

    if(opiniao == 1){
        qtdPessimos++;
    }

    if(opiniao == 3){
        qtdBom++;
    }

    if(opiniao == 4){
        qtdOtimo++;
    }

    if(sexo == 1){
        qtdMulheres++;
    } else{
        qtdHomens++;         
    }    
    totalPessoas++;
}

var mediaIdade = somaIdade / (totalPessoas-1); 

document.getElementById("mediaIdade").setAttribute("value", mediaIdade);
document.getElementById("maiorIdade").setAttribute("value", maiorIdade);
document.getElementById("menorIdade").setAttribute("value", menorIdade);
document.getElementById("qtdPessimos").setAttribute("value", qtdPessimos);

var porcentoOtimo = qtdOtimo / 100; 
document.getElementById("qtdOtimo").setAttribute("value", porcentoOtimo);

var porcentoBom = qtdBom / 100; 
document.getElementById("qtdBom").setAttribute("value", porcentoBom);

document.getElementById("qtdMulheres").setAttribute("value", qtdMulheres);
document.getElementById("qtdHomens").setAttribute("value", qtdHomens);