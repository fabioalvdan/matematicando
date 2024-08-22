var num1 = 0;
var num2 = 0;
var res = 0;

function gerarConta() {
    num1 = Math.ceil(10*Math.random());
    num2 = Math.ceil(10*Math.random());
    res = num1 + num2;
    var texto = num1 + " + " + num2 + " = ";
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