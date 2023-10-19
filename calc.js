function insert(num) {
    var display = document.getElementById('display');
    while (display.textContent.length < 15) {
        document.getElementById('display').innerHTML += num;
        break;
    }
}
function clean() {
    document.getElementById('display').innerHTML = "";
}
function back() {
    var result = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = result.substring(0, result.length - 1);
}
function calcular() {
    var result = document.getElementById('display').innerHTML;
    if (result) {
        document.getElementById('display').innerHTML = eval(result);
    } else {
        document.getElementById('display').innerHTML = 'ERRO';
    }
}
