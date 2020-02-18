const readline = require("readline-sync");

function start() {
  const content = {};

  content.pesquisaTermo = respostaDoTermoDePesquisa();
  content.prefixo = respostaDoPrefixo();

  function respostaDoTermoDePesquisa() {
    return readline.question("Digite um termo de pesquisa: ");
  }

  function respostaDoPrefixo() {
    const prefixos = ["quem é", "oque é", "A historia de"];
    const indiceDoPrefixoSelecionado = readline.keyInSelect(prefixos, "choose one option: ");
    const textoDoPrefixoSelecionado = prefixos[indiceDoPrefixoSelecionado]

    return textoDoPrefixoSelecionado;
  }

  console.log(content);
}
start();
