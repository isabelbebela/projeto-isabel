// ELEMENTOS DA PÁGINA

const campoSenha = document.getElementById("campo-senha");

const quantidade = document.getElementById("quantidade");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const nivel = document.getElementById("nivel");


// TAMANHO INICIAL DA SENHA

let tamanho = 12;


// LISTA DE CARACTERES

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const listaNumeros = "0123456789";
const listaSimbolos = "!@#$%&*()-_=+[]{}<>?/";


// ATUALIZA O NÚMERO DE CARACTERES

function atualizarQuantidade(){

    quantidade.textContent = tamanho;

}


// GERAR SENHA

function gerarSenha(){

    let caracteres = "";

    if(maiusculas.checked){
        caracteres += letrasMaiusculas;
    }

    if(minusculas.checked){
        caracteres += letrasMinusculas;
    }

    if(numeros.checked){
        caracteres += listaNumeros;
    }

    if(simbolos.checked){
        caracteres += listaSimbolos;
    }


    if(caracteres === ""){

        campoSenha.value = "";
        atualizarForca(0);
        return;

    }


    let senha = "";


    for(let i = 0; i < tamanho; i++){

        let numero = Math.floor(Math.random() * caracteres.length);

        senha += caracteres[numero];

    }


    campoSenha.value = senha;


    calcularForca();

}



// CALCULAR FORÇA DA SENHA

function calcularForca(){

    let pontos = 0;


    // tamanho

    if(tamanho >= 8){
        pontos += 2;
    }

    if(tamanho >= 12){
        pontos += 2;
    }


    // tipos de caracteres

    if(maiusculas.checked){
        pontos++;
    }

    if(minusculas.checked){
        pontos++;
    }

    if(numeros.checked){
        pontos++;
    }

    if(simbolos.checked){
        pontos++;
    }


    atualizarForca(pontos);

}



// ALTERAR BARRA DE FORÇA

function atualizarForca(pontos){


    if(pontos <= 3){

        nivel.style.width = "33%";
        nivel.style.background = "#ff2346";

    }


    else if(pontos <= 6){


        nivel.style.width = "66%";
        nivel.style.background = "#ffc107";


    }


    else{


        nivel.style.width = "100%";
        nivel.style.background = "#22c55e";


    }


}



// BOTÃO +

aumentar.addEventListener("click", function(){


    if(tamanho < 30){

        tamanho++;

        atualizarQuantidade();

        gerarSenha();

    }


});



// BOTÃO -

diminuir.addEventListener("click", function(){


    if(tamanho > 4){

        tamanho--;

        atualizarQuantidade();

        gerarSenha();

    }


});



// ALTERAÇÃO DOS CHECKBOX

maiusculas.addEventListener("change", gerarSenha);
minusculas.addEventListener("change", gerarSenha);
numeros.addEventListener("change", gerarSenha);
simbolos.addEventListener("change", gerarSenha);



// INICIAR

atualizarQuantidade();

gerarSenha();
