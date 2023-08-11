function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                document.getElementById("resultado").textContent = "Não é possível dividir por zero.";
                return;
            }
            break;
        default:
            document.getElementById("resultado").textContent = "Operação inválida.";
            return;
    }

    document.getElementById("resultado").textContent = "O resultado é: " + resultado;
}
