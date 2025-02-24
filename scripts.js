function calcular() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let operacao = prompt("Digite a operação (+, -, *, /):");
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let resultado;

    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: divisão por zero";
            break;
        default:
            resultado = "Operação inválida";
    }

    alert("Resultado: " + resultado);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#calcularBtn").addEventListener("click", calcular);
});
