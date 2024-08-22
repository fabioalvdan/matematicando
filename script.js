var num1 = 0;
var num2 = 0;
var res = 0;
var min = 2;
var max = 9;

form1 = document.getElementById("form1");
form2 = document.getElementById("form2");
botao = document.getElementById("setaMinMax");
texto = document.getElementById("textoMinMax");
valorMin = document.getElementById("valorMin");
valorMax = document.getElementById("valorMax");
palpite = document.getElementById("palpite");

form1.addEventListener("submit",(event) => {
    event.preventDefault();
    min = parseInt(valorMin.value);
    max = parseInt(valorMax.value);
    texto.innerText = "O mínimo é "+min+" e o máximo é "+max;
});

form2.addEventListener("submit",(event) => {
    event.preventDefault();
    if(palpite.value == res)
        window.alert("Você acertou, Parabéns!");
    else
        window.alert("Você errou!");
});


function geraAleatorioEntre(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

function gerarAdicao(){
    num1 = geraAleatorioEntre(min,max);
    num2 = geraAleatorioEntre(min,max);
    res = num1 + num2;
    var texto = num1 + " + " + num2 + " = ";
    //Limpa o resultado
    exibirConta = document.getElementById("resultado");
    exibirConta.innerText = "";
    //Escreve a conta
    exibirConta = document.getElementById("conta");
    exibirConta.innerText = texto;
}

function gerarSubtracao(){
    num1 = geraAleatorioEntre(min,max);
    num2 = geraAleatorioEntre(min,max);
    res = num1 - num2;
    var texto = num1 + " - " + num2 + " = ";
    //Limpa o resultado
    exibirConta = document.getElementById("resultado");
    exibirConta.innerText = "";
    //Escreve a conta
    exibirConta = document.getElementById("conta");
    exibirConta.innerText = texto;
}

function gerarMultiplicacao() {
    num1 = geraAleatorioEntre(min,max);
    num2 = geraAleatorioEntre(min,max);
    res = num1 * num2;
    var texto = num1 + " x " + num2 + " = ";
    //Limpa o resultado
    exibirConta = document.getElementById("resultado");
    exibirConta.innerText = "";
    //Escreve a conta
    exibirConta = document.getElementById("conta");
    exibirConta.innerText = texto;
}

function gerarDivisao() {
    num2 = geraAleatorioEntre(min,max);
    res = geraAleatorioEntre(min,max);
    num1 = num2 * res;
    var texto = num1 + " / " + num2 + " = ";
    //Limpa o resultado
    exibirConta = document.getElementById("resultado");
    exibirConta.innerText = "";
    //Escreve a conta
    exibirConta = document.getElementById("conta");
    exibirConta.innerText = texto;
}


function exibirResultado() {
    var texto2 = res;
    exibirConta = document.getElementById("resultado");
    exibirConta.innerText = texto2;
}