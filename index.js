let vitorias = parseInt(prompt("Digite o valor de vitórias"));
let derrotas = parseInt(prompt("Digite o valor de derrotas"));

let saldo = vitorias - derrotas;

let error = true;

do {
  
    if (saldo < 0) {
        console.log("Erro, número negativo");

        vitorias = parseInt(prompt("Digite o valor de vitórias"));
        derrotas = parseInt(prompt("Digite o valor de derrotas"));
        saldo = vitorias - derrotas; 
    }

    if (saldo >= 0) {
        error = false; 
    }

} while (error === true); 


let resultado = Math.floor(saldo / 10); 

let nivel; 

switch (resultado) {
    case 0:
        nivel = "Ferro";
        break;
    case 1:
    case 2:
        nivel = "Bronze";
        break;
    case 3:
    case 4:
        nivel = "Prata";
        break;
    case 5:
    case 6:
    case 7:
        nivel = "Ouro";
        break;
    case 8:
        nivel = "Diamante";
        break;
    case 9:
        nivel = "Lendário";
        break;
    default:
        nivel = "Imortal"; 
        break;
}


function injetar(saldoVitorias, nivel) {
    console.log(`O Herói tem um saldo de ${saldo} vitórias e está no nível de ${nivel}`);
}

injetar(saldo, nivel);