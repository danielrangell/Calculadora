function insert(num) {
  //insere numeros no display
  var display = document.getElementById("display"); //pega o display
  while (display.textContent.length < 15) {
    //enquanto o display for menor que 15 caracteres
    display.textContent += num; //adiciona o numero ao display
    break; //para o loop
  }
}
function clean() {
  //limpa o display
  document.getElementById("display").textContent = ""; //coloca o display vazio
}
function back() {
  //remove o ultimo caractere do display
  var result = document.getElementById("display").textContent;
  document.getElementById("display").textContent = result.substring(
    //coloca o display com o ultimo caractere removido
    0,
    result.length - 1
  );
}
function calcular() {
  //calcula o que esta no display
  var result = document.getElementById("display").textContent;
  if (result) {
    //se o display não estiver vazio
    document.getElementById("display").textContent = eval(result); //coloca no display o resultado da expressao
  } else {
    //se o display estiver vazio
    document.getElementById("display").textContent = "ERRO"; //Mensagem caso de erro
  }
}
