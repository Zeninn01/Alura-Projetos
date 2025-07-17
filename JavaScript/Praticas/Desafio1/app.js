let titulo = document.querySelector(`h1`)
titulo.innerHTML = `Hora do Desafio!`

function verificarConsole() {
    console.log(`O botão foi clicado.`)
}

function verificarAlert() {
    alert(`Eu amo JS!`)
}

function verificarPrompt() {
    let cidade = prompt(`Insira uma cidade brasileira:`)
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function verificarSoma() {
    let N1 = prompt(`Insira o 1º número:`)
    let N2 = prompt(`Insira o 2º número:`)
    let soma = parseInt(N1) + parseInt(N2)
    alert(soma)
}
