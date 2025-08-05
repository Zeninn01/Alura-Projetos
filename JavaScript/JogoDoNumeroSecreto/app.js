let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
console.log(numeroSecreto)

// let titulo = document.querySelector(`h1`)
// titulo.innerHTML = `Jogo do número secreto`

// let paragrafo = document.querySelector(`p`)
// paragrafo.innerHTML = `Escolha um número entre 1 e 10`

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    // responsiveVoice.speak(texto,`Brazilian Portuguese Female`, {rate: 1.2})
    if (`speechSynthesis` in window) {
        let utterance = new SpeechSynthesisUtterance(texto)
        utterance.lang = `pt-BR`
        utterance.rate = 1.2
        window.speechSynthesis.speak(utterance)
    } else {
        console.error(`Speech synthesis not supported in this browser.`)
    }
}

function exibirTextoMensagemInicial() {
    exibirTextoNaTela(`h1`, `Jogo do número secreto`)
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e 10`)
}

exibirTextoMensagemInicial()

function verificarChute() {
    let chute = document.querySelector(`input`).value
    if(chute == numeroSecreto) {
        exibirTextoNaTela(`h1`, `Você acertou!`)
        let mensagemTentativa = tentativas > 1 ? `tentativas` : `tentativa`
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${mensagemTentativa}!`
        exibirTextoNaTela(`p`, mensagemTentativas)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela(`p`, `O número secreto é menor que ${chute}`)
            tentativas++
        } else {
            exibirTextoNaTela(`p`, `O número secreto é maior que ${chute}`) 
            tentativas++
        }
        limparCampor()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampor() {
    chute = document.querySelector(`input`)
    chute.value = ``
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampor()
    tentativas = 1
    exibirTextoMensagemInicial()
    console.log(numeroSecreto)
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true)
}