//Atividade Prática 04 - Desafio Ilhas Growdev

// Tarefa:
// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

// Exemplo de entrada:
// 72
// Exemplo de saída:
// GC$ 50,00 -> 1

// GC$ 10,00 -> 2
// GC$ 5,00 -> 0
// GC$ 1,00 -> 2

//PseudoCodigo

// INÍCIO
//   DECLARE valor, notas50, notas10, notas5, notas1
//   LEIA valor

//   notas50 = 0
//   notas10 = 0
//   notas5 = 0
//   notas1 = 0

//   ENQUANTO valor >= 50 FAÇA
//     notas50 = notas50 + 1
//     valor = valor - 50
//   FIM ENQUANTO

//   ENQUANTO valor >= 10 FAÇA
//     notas10 = notas10 + 1
//     valor = valor - 10
//   FIM ENQUANTO

//   ENQUANTO valor >= 5 FAÇA
//     notas5 = notas5 + 1
//     valor = valor - 5
//   FIM ENQUANTO

//   ENQUANTO valor >= 1 FAÇA
//     notas1 = notas1 + 1
//     valor = valor - 1
//   FIM ENQUANTO

//   ESCREVA "GC$ 50,00 ->", notas50
//   ESCREVA "GC$ 10,00 ->", notas10
//   ESCREVA "GC$ 5,00 ->", notas5
//   ESCREVA "GC$ 1,00 ->", notas1
// FIM



let valor = parseInt(prompt("Digite o valor que deseja retirar:"));

let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

while (valor >= 50) {
    notas50++;
    valor -= 50;
}

while (valor >= 10) {
    notas10++;
    valor -= 10;
}

while (valor >= 5) {
    notas5++;
    valor -= 5;
}

while (valor >= 1) {
    notas1++;
    valor -= 1;
}

console.log("GC$ 50,00 ->", notas50);
document.write("GC$ 50,00 ->", notas50);
console.log("GC$ 10,00 ->", notas10);
document.write("GC$ 10,00 ->", notas10);
console.log("GC$ 5,00 ->", notas5);
document.write("GC$ 5,00 ->", notas5);
console.log("GC$ 1,00 ->", notas1);
document.write("GC$ 1,00 ->", notas1);