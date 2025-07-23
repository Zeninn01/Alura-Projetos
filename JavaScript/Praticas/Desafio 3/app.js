// Desafio 1: Calcular o IMC

// let peso = prompt("Digite seu peso em kg:")
// let altura = prompt("Digite sua altura em metros:")

// altura = altura.replace(",", ".")

// function calcularIMC(peso, altura) {
//     return parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
// }

// let resultadoIMC = calcularIMC(peso, altura)

// alert(`Seu IMC é: ${resultadoIMC.toFixed(2)}`)

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Desafio 2: Fatoração de um número

// let numero = prompt(`Digite um número para fatorar:`)

// function fatorarNumero(numero) {
//     let resultado = 1;
//     for (let i = 1; i <= numero; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }

// let resultadoFatoracao = fatorarNumero(numero);

// alert(`O fatorial de ${numero} é: ${resultadoFatoracao}`);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Desafio 3: Conversor Dollar para Real

// let valorEmDolar = prompt("Digite o valor em Dólar:")
// let cotacaoDolar = parseFloat(4,80)

// function converterDolarParaReal(valor, cotacao) {
//     return parseFloat(valor) * parseFloat(cotacao);
// }

// let valorEmReal = converterDolarParaReal(valorEmDolar, cotacaoDolar);
// alert(`O valor de $${valorEmDolar} em Reais é: R$${valorEmReal.toFixed(2)}`);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Desafio 4: Área e Perímetro de um Retângulo

// let base = prompt("Digite a base do retângulo:")
// let altura = prompt("Digite a altura do retângulo:")

// function calcularArea(base, altura) {
//     return parseFloat(base) * parseFloat(altura);
// }

// function calcularPerimetro(base, altura) {
//     return 2 * (parseFloat(base) + parseFloat(altura));
// }

// let area = calcularArea(base, altura);
// let perimetro = calcularPerimetro(base, altura);

// alert(`A área do retângulo é: ${area.toFixed(2)}\nO perímetro do retângulo é: ${perimetro.toFixed(2)}`);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Desafio 5: Área e Perímetro de um Círculo

// let raio = prompt("Digite o raio do círculo:");
// let pi = parseFloat(3.14);

// function calcularAreaCirculo(raio) {
//     return pi * parseFloat(raio) * parseFloat(raio);
// }

// function calcularPerimetroCirculo(raio) {
//     return 2 * pi * parseFloat(raio);
// }

// let areaCirculo = calcularAreaCirculo(raio);
// let perimetroCirculo = calcularPerimetroCirculo(raio);

// alert(`A área do círculo é: ${areaCirculo.toFixed(2)}\nO perímetro do círculo é: ${perimetroCirculo.toFixed(2)}`);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Desafio 6: Tabuada

// let numeroTabuada = prompt("Digite um número para ver sua tabuada:");
// numeroTabuada = parseInt(numeroTabuada);

// function gerarTabuada(numeroTabuada) {
//     let tabuada = "";
//     for (let i = 1; i <= 10; i++) {
//         tabuada += `${numeroTabuada} x ${i} = ${numeroTabuada * i}\n`;
//     }
//     return tabuada;
// }

// let resultadoTabuada = gerarTabuada(numeroTabuada);

// alert(`Tabuada do ${numeroTabuada}:\n${resultadoTabuada}`);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
