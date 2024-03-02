// lembrando que o nome dos parametros eu posso escolher qualquer nome.
// fiquei perdido no nome dos parametros>>>>

let numeroSecreto = gerarNumeroAleatorio(); // aqui fica o returno da função ..
let tentativas = 1;

function trocaTexto(elementosHtml, FrasesEcolhidas) {
    let variavel = document.querySelector(elementosHtml);
    variavel.innerHTML = FrasesEcolhidas;
} // essa função executa algo na tela e não retorna nada.

function exibirMensagemInicial() {

    trocaTexto('h1', 'Jogo Do Número Secreto');
    trocaTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()


function verificarChute() { // essa função sem (params) 
    // tenhoi que refazer essa função, não funcionou ..
    let chuteDigitado = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';

    if (chuteDigitado == numeroSecreto) {
        trocaTexto('h1', 'Acertou !');
        trocaTexto('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chuteDigitado > numeroSecreto) {
            trocaTexto('h1', 'Errou!');
            trocaTexto('p', 'O Número é Menor!');
        } else {
            trocaTexto('h1', 'Errou!');
            trocaTexto('p', 'O Número é maior!');
        }
        tentativas++;
        limparInputDigitado();
    }
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
} // essa função tem retorno queremos que ela nos diga algo ..


function limparInputDigitado() {// essa função vai ser responsavel por limpar o campo do valor digitado no input.
    chuteDigitado = document.querySelector('input');
    chuteDigitado.value = '';
}

function ReiniciarJogo() {
    let numeroSecreto = gerarNumeroAleatorio();
    limparInputDigitado();
    let tentativas = 1;

    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}