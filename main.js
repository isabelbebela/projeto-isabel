const campoSenha = document.getElementById("campo-senha");

const quantidade = document.getElementById("quantidade");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const nivel = document.getElementById("nivel");


let tamanho = 12;


const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const listaNumeros = "0123456789";
const listaSimbolos = "!@#$%&*()-_=+[]{}<>?/";



// MOSTRAR QUANTIDADE

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


    if(caracteres.length === 0){

        campoSenha.value = "";
        atualizarForca();

        return;

    }



    let senha = "";


    for(let i = 0; i < tamanho; i++){

        let aleatorio = Math.floor(Math.random() * caracteres.length);

        senha += caracteres[aleatorio];

    }


    campoSenha.value = senha;


    atualizarForca();

}




// FORÇA DA SENHA

function atualizarForca(){


    let tipos = 0;


    if(maiusculas.checked){
        tipos++;
    }

    if(minusculas.checked){
        tipos++;
    }

    if(numeros.checked){
        tipos++;
    }

    if(simbolos.checked){
        tipos++;
    }



    // FORTE

    if(tamanho >= 12 && tipos >= 3){

        nivel.style.width = "100%";
        nivel.style.background = "#22c55e";

    }


    // MÉDIA

    else if(tamanho >= 8 && tipos >= 2){

        nivel.style.width = "66%";
        nivel.style.background = "#ffc107";

    }


    // FRACA

    else{

        nivel.style.width = "33%";
        nivel.style.background = "#ff2346";

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




// CHECKBOX

maiusculas.addEventListener("change", gerarSenha);
minusculas.addEventListener("change", gerarSenha);
numeros.addEventListener("change", gerarSenha);
simbolos.addEventListener("change", gerarSenha);




// INICIAR

atualizarQuantidade();

gerarSenha();
