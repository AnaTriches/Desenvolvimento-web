const prompt = require('prompt-sync')();

const conta = {
    nome: "Ana Carolina Triches",
    agencia: "1234",
    numero: "56789-0"
};

let saldo = 1000.00;
let opcao;

while (opcao !== "0") {

    console.log("\n================================");
    console.log("       CAIXA ELETRÔNICO");
    console.log("================================");
    console.log("1 - Consultar dados da conta");
    console.log("2 - Consultar saldo");
    console.log("3 - Realizar débito");
    console.log("4 - Realizar crédito");
    console.log("0 - Sair");
    console.log("================================");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1":
            console.log("\n--- DADOS DA CONTA ---");
            console.log(`Nome: ${conta.nome}`);
            console.log(`Agência: ${conta.agencia}`);
            console.log(`Número da conta: ${conta.numero}`);
            break;

        case "2":
            console.log("\n--- SALDO ATUAL ---");
            console.log(
                saldo.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            );
            break;

        case "3":
            let valorDebito = Number(prompt("Digite o valor do débito: R$ "));

            if (isNaN(valorDebito) || valorDebito <= 0) {
                console.log("Valor inválido!");
            } else if (valorDebito > saldo) {
                console.log("Saldo insuficiente!");
            } else {
                saldo -= valorDebito;

                console.log("Débito realizado com sucesso!");
                console.log(
                    `Novo saldo: ${saldo.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}`
                );
            }
            break;

        case "4":
            let valorCredito = Number(prompt("Digite o valor do crédito: R$ "));

            if (isNaN(valorCredito) || valorCredito <= 0) {
                console.log("Valor inválido!");
            } else {
                saldo += valorCredito;

                console.log("Crédito realizado com sucesso!");
                console.log(
                    `Novo saldo: ${saldo.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}`
                );
            }
            break;

        case "0":
            console.log("\nPrograma encerrado. Obrigada por utilizar o sistema!");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.");
    }
}