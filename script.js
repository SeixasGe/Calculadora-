// 1. FUNÇÃO: Função que é chamada quando o botão é clicado (onclick)
function calcular() {
    
    // 2. LEITURA DE INPUTS E DOM: Pegamos o que o usuário digitou no HTML
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2").value;
    let operacao = document.getElementById("operacao").value;
    
    // Pegando a div que vai mostrar a resposta
    let elementoResultado = document.getElementById("area-resultado");

    // Convertendo os textos dos inputs para números decimais
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    // 3. CONDICIONAL (Validação): Verifica se algum campo ficou vazio
    // isNaN significa "Is Not a Number" (Não é um número)
    if (isNaN(num1) || isNaN(num2)) {
        // ATUALIZAÇÃO DO DOM: Exibe mensagem de aviso
        elementoResultado.innerHTML = "Por favor, preencha os dois números!";
        return; // Interrompe a função aqui
    }

    let resultado = 0;

    // 4. CONDICIONAIS DE OPERAÇÃO: Decide qual conta fazer
    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        // Validação especial para divisão por zero
        if (num2 === 0) {
            elementoResultado.innerHTML = "Erro: Divisão por zero!";
            return;
        }
        resultado = num1 / num2;
    }

    // 5. ATUALIZAÇÃO DO CONTEÚDO NA PÁGINA: Escreve o resultado final na div
    elementoResultado.innerHTML = `Resultado: <span style="color: #007bff;">${resultado}</span>`;
}