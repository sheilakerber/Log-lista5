/*1) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a
capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (Feito em aula) Desafio: criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres. */

function verificarLeitos() {

    //50% dos leitos = 65 - 25 ja ocupados = 40
    let leitosDisponiveis = 40
    let contadorLeitos = 0

    while (contadorLeitos < leitosDisponiveis) {
        let entrada = Number(prompt(`Existem ${leitosDisponiveis - contadorLeitos} leitos disponíveis. Quantas pessoas entram (+) ou saem (-): `))
        contadorLeitos += entrada
    }

    //msg a ser apresentada caso nao existam leitos disponiveis
    let leitosExcedidos = contadorLeitos - leitosDisponiveis
    alert(`Não é possível pois ultrapassa a capacidade em ${leitosExcedidos} leitos. `)
}

/*2) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados. (Feito em aula)*/

function verificarMaiorMenor() {
    let maiorValor = 0
    let menorValor = 50

    for (i = 0; i < 10; i++) {
        let inputUsuario = Number(prompt("Digite um número: "))
        if (inputUsuario >= 0 && inputUsuario <= 50) {
            if (inputUsuario > maiorValor) {
                maiorValor = inputUsuario
            }
            if (inputUsuario < menorValor) {
                menorValor = inputUsuario
            }
        }
    }
    alert(`Dentre os números inseridos, o maior foi ${maiorValor}, e o menor foi ${menorValor}. Obs: Se você adicionou valores fora do intervalo entre 0 e 50, estes foram desconsiderados.`)
}

/*3) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.*/

function verificarEverest() {
    //diferenca entre altura inicial (5360m) e altura Everest (8848m) = 3488

    let alturaTotal = 0
    let dias = 0

    while (alturaTotal < 3488 && dias < 8) {
        let alturaEscaladaDia = Number(prompt("Digite a altura escalada no dia (em metros): "))
        alturaTotal += alturaEscaladaDia
        dias += 1
        console.log("alturaTotal", alturaTotal)
        console.log("dias", dias)
    }

    if (alturaTotal < 3488) {
        alert("Você deve voltar, pois corre risco de ficar sem oxigênio.")
    } else {
        alert(`Incrível! Você escalou ${alturaTotal}m de altitude em ${dias} dias.`)
    }

}

/*\4) Você vai assistir a um filme no cinema e decide comprar algumas guloseimas antes de entrar para a sessão. O cinema oferece pipoca por 6 reais a unidade, chocolate por 3 reais a unidade e refrigerante por 8,50 reais a unidade. Faça um programa que pergunte quantos tipos de guloseimas você vai querer (1, 2 ou 3) e que após isso pergunte qual a guloseima e a quantidade (unidades). Ao final deve ser mostrado o valor total. Exemplo: Digitei que quero 2 guloseimas, o programa me pergunta qual guloseima, eu digito “pipoca” e em seguida ele pergunta a quantidade, eu digito 2. Em seguida ele pergunta qual a segunda guloseima, eu digito refrigerante, quantidade 1. Nesse caso o total seria 2 x 6,00 + 1 x 8,50 = R$20,50. */

function calcularGuloseimasCinema() {
    let numGuloseimas = Number(prompt("Quantos tipos de guloseimas você quer? (Opções: pipoca (R$6.00 un), chocholate (R$3.00 un) e refrigerante (R$8.50 un))"))
    let valorFinal = 0

    if (numGuloseimas < 0 || numGuloseimas > 3) {
        alert("Você deve optar por 1, 2 ou 3 tipos de guloseimas.")

    } else {
        let pipoca = 6
        let refrigerante = 8.5
        let chocolate = 3

        for (i = 1; i <= numGuloseimas; i++) {

            let guloseima = prompt(`Guloseima ${i}:`)
            let quantidade = prompt(`Unidades de ${i}: `)

            if (guloseima == "pipoca") {
                valorFinal += (pipoca * quantidade)
            }

            if (guloseima == "refrigerante") {
                valorFinal += (refrigerante * quantidade)
            }
            if (guloseima == "chocolate") {
                valorFinal += (chocolate * quantidade)
            }
        }
        alert(`Valor devido: R$${valorFinal}.`)
    }
}

/*5) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.*/

function calcularTerritorioLeoes() {
    //area territorial: casalBaio = 400  solitarioBaio = 320

    alert("Obs: esta área pode ter no máximo 5 casais, considerando o número de machos e fêmeas.")

    let numCasais = Number(prompt("Quantos casais existem?"))
    let totalLeoes = 14 - (numCasais * 2)

    let territorioOcupado = (numCasais * 400) + (totalLeoes * 320)

    if (numCasais == 1) {
        alert(`O território ocupado por ${numCasais} casal e ${totalLeoes} indíviduos solitários corresponde a ${territorioOcupado} Km quadrados.`)
    } else {
        alert(`O território ocupado por ${numCasais} casais e ${totalLeoes} indivíduos solitários corresponde a ${territorioOcupado} Km quadrados.`)
    }

}