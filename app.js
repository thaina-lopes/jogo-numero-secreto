let listadeNumerosJaSorteados = [];
let qtdDePossibilidades = 100;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

let qtdTentativas = 1;

mensagemInicial();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto.");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${qtdDePossibilidades}`);
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    let palavraTentativa = qtdTentativas > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela("h1", "Aee! Você acertou!");
    exibirTextoNaTela(
      "p",
      `Você descobriu o número secreto com ${qtdTentativas} ${palavraTentativa}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    qtdTentativas++;
    limparcampo();
  }
}

function limparcampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function gerarNumeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * qtdDePossibilidades + 1);
  if (listadeNumerosJaSorteados.includes(numeroSorteado)) {
    return gerarNumeroAleatorio();
  } else {
    listadeNumerosJaSorteados.push(numeroSorteado);
    console.log(listadeNumerosJaSorteados);
    return numeroSorteado;
  }
}

function reiniciarJogo() {
  if (listadeNumerosJaSorteados.length == qtdDePossibilidades) {
    listadeNumerosJaSorteados = [];
  }
  numeroSecreto = gerarNumeroAleatorio();
  limparcampo();
  qtdTentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  console.log(numeroSecreto);
}
