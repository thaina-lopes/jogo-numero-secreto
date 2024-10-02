alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 100");
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    // se chute for maior ou menor que o número secreto
    if (chute > numeroSecreto) {
      alert(`Você errou! O número secreto é menor que ${chute}`);
    } else {
      alert(`Você errou! O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Aee! O número secreto é ${numeroSecreto}! Você acertou com ${tentativas} ${palavraTentativa}`
);
