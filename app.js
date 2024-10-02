alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 5;
let chute;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert(`Você acertou! O número secreto é ${numeroSecreto}`);
  } else {
    // se chute for maior ou menor que o número secreto
    if (chute > numeroSecreto) {
      alert(`Você errou! O número secreto é menor que ${chute}`);
    } else {
      alert(`Você errou! O número secreto é maior que ${chute}`);
    }
  }
}
