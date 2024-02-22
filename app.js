// lembrando que o nome dos parametros eu posso escolher qualquer nome.
// fiquei perdido no nome dos parametros>>>>

let numeroSecreto = gerarNumeroAleatorio(); // aqui fica o returno da função ..

function trocaTexto(elementosHtml, FrasesEcolhidas) {
    let variavel = document.querySelector(elementosHtml);
    variavel.innerHTML = FrasesEcolhidas;
} // essa função executa algo na tela e não retorna nada.

trocaTexto('h1', 'Jogo Do Número Secreto');
trocaTexto('p', 'Escolha um número entre 1 e 10');

console.log(trocaTexto())

function verificarChute() { // essa função sem (params)

    let chuteDigitado = document.querySelector('input').value;

    if (chuteDigitado == numeroSecreto) {
        trocaTexto('h1', 'Acertou !');
        trocaTexto('p', 'Você descobriu o número secreto.');
    } else {
        if (chuteDigitado > numeroSecreto) {
            trocaTexto('h1', 'O Número é Menor!');
            trocaTexto('p', '');
        } else {
            trocaTexto('h1', 'O Número é maior!');
            trocaTexto('p', '');
        }
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
} // essa função tem retorno queremos que ela nos diga algo ..

