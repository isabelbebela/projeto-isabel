// Elementos
const campoSenha = document.getElementById("campo-senha");
const quantidade = document.getElementById("quantidade");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const nivel = document.getElementById("nivel");

// Quantidade inicial
let tamanho = 12;

// Caracteres
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numerosLista = "0123456789";
const simbolosLista = "!@#$%&*()-_=+[]{}<>?/";

// Atualiza quantidade na tela
function atualizarQuantidade() {
    quantidade.textContent = tamanho;
}

// Gera senha
function gerarSenha() {

    let caracteres = "";

    if (maiusculas.checked) caracteres += letrasMaiusculas;
    if (minusculas.checked) caracteres += letrasMinusculas;
    if (numeros.checked) caracteres += numerosLista;
    if (simbolos.checked) caracteres += simbolosLista;

    if (caracteres === "") {
        campoSenha.value = "";
        atualizarForca(0);
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;

    calcularForca();
}

// Calcula força
function calcularForca() {

    let pontos = 0;

    if (tamanho >= 8) pontos++;
    if (tamanho >= 12) pontos++;

    let tipos = 0;

    if (maiusculas.checked) tipos++;
    if (minusculas.checked) tipos++;
    if (numeros.checked) tipos++;
    if (simbolos.checked) tipos++;

    pontos += tipos;

    atualizarForca(pontos);
}

// Atualiza barra
function atualizarForca(pontos) {

    if (pontos <= 3) {
        nivel.style.width = "33%";
        nivel.style.background = "#ff2346";
    }
    else if (pontos <= 5) {
        nivel.style.width = "66%";
        nivel.style.background = "#ffc107";
    }
    else {
        nivel.style.width = "100%";
        nivel.style.background = "#22c55e";
    }

}

// Botão +
aumentar.addEventListener("click", () => {

    if (tamanho < 30) {
        tamanho++;
        atualizarQuantidade();
        gerarSenha();
    }

});

// Botão -
diminuir.addEventListener("click", () => {

    if (tamanho > 4) {
        tamanho--;
        atualizarQuantidade();
        gerarSenha();
    }

});

// Checkboxes
[maiusculas, minusculas, numeros, simbolos].forEach(item => {
    item.addEventListener("change", gerarSenha);
});

// Iniciar
atualizarQuantidade();
gerarSenha();
