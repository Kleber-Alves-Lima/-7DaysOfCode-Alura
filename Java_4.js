let numeroSecreto = gerarNovoNumero();
let tentativas = 3;

document.getElementById('btn_chutar').addEventListener('click', function() {
    const palpite = parseInt(document.getElementById('nro_palpite').value);
    const mensagem = document.getElementById('alerta');

    if (palpite === numeroSecreto) {
        mensagem.textContent = 'Parabéns! Você acertou!';
        mensagem.style.color = 'green';
        reiniciarJogo()
    } else if (isNaN(palpite))  {
            mensagem.textContent = `Escolha um número por favor.`;
            mensagem.style.color = 'orange';
            limpaAlerta()
        }
    else {
        tentativas--;
        if (tentativas > 0) {
            mensagem.textContent = `Errado! Você tem mais ${tentativas} tentativa(s).`;
            mensagem.style.color = 'orange';
            limpaAlerta()
        } else {
            mensagem.textContent = `Você perdeu! O número era ${numeroSecreto}.`;
            mensagem.style.color = 'red';
            reiniciarJogo()
        }
    }
});

function gerarNovoNumero() {
    return Math.floor(Math.random() * 11);
}

function reiniciarJogo() {
    tentativas = 3;
    numeroSecreto = gerarNovoNumero();
    document.getElementById('nro_palpite').value = '';
    document.getElementById('btn_chutar').disabled = false;
    limpaAlerta()
}

function limpaAlerta() {
    setTimeout(() => {
        document.getElementById('alerta').textContent = '';
    }, 2000); 
}
