//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomesSorteados = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    exibirTextoNaTela(".result-list", '');
    let nome = document.querySelector('input').value;
    
    if (nome == '') {
        alert("O campo não pode está em branco");
    } else {
        listaDeNomesSorteados.push(nome);
        exibirTextoNaTela(".name-list", `${listaDeNomesSorteados.join("<br>")}`);
        console.log(listaDeNomesSorteados);
    }
    document.querySelector('input').value = '';
}

function sortearAmigo() {
    if (listaDeNomesSorteados.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    } else {

    let indiceSorteado = Math.floor(Math.random() * listaDeNomesSorteados.length);
    let nomeSorteado = listaDeNomesSorteados[indiceSorteado];

    exibirTextoNaTela(".result-list", `Nome sorteado: <strong>${nomeSorteado}</strong>`);
    listaDeNomesSorteados = [];
    exibirTextoNaTela(".name-list", '');
    }
}