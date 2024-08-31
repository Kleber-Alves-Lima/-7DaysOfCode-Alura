document.getElementById('start-game').addEventListener('click', function() {
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End?");
    let tecnologia;
    
    if (area === "Front-End") {
        tecnologia = prompt("Você quer aprender React ou Vue?");
    } else if (area === "Back-End") {
        tecnologia = prompt("Você quer aprender C# ou Java?");
    } else {
        alert("Opção inválida!");
        return;
    }

    let especializacao = prompt("Você quer seguir se especializando na área escolhida ou se tornar Fullstack?");
    
    if (especializacao === "se especializando") {
        alert(`Ótimo! Continue se aprofundando em ${tecnologia}!`);
    } else if (especializacao === "Fullstack") {
        alert(`Incrível! Boa sorte na sua jornada para se tornar Fullstack!`);
    } else {
        alert("Opção inválida!");
        return;
    }

    let maisTecnologias = true;
    while (maisTecnologias) {
        let novaTecnologia = prompt("Quais são as tecnologias que você gostaria de aprender?");
        alert(`Legal! Você pode aprender mais sobre ${novaTecnologia} através de diversos recursos online.`);
        maisTecnologias = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
        document.getElementById('output').innerText = "Obrigado por jogar! Continue aprendendo e se desenvolvendo!";
    }

  
});
