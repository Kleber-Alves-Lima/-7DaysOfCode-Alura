function processarRespostas() {
    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const linguagem = document.getElementById('linguagem').value;

    // Validação simples
    if (nome && idade && linguagem) {
        // Exibe a mensagem final
        alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
    } else {
        alert('Por favor, preencha todas as perguntas.');
    }
}