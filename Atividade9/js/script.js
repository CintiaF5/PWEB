var btnMaior = document.getElementById("btnMaior");
var btnOrdenar = document.getElementById("btnOrdenar");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");

btnMaior.addEventListener('click', () => {
    alert("O maior número é: " + retornaMaior(n1.value, n2.value, n3.value));
});

function retornaMaior(n1, n2, n3) {
    return ordenaNum(n1, n2, n3)[2];
}

var ordenados = ordenaNum(n1.value, n2.value, n3.value);

n1.value = ordenados[0];
n2.value = ordenados[1];
n3.value = ordenados[2];

function ordenaNum(n1, n2, n3) {
    var ordenados = [n1, n2, n3];

    ordenados.sort((x, y) => {
        return (x - y);
    });
    return ordenados;
}

btnOrdenar.addEventListener('click', () => {
    alert("Ordem crescente: " + ordenaNum(n1.value + ', ' + n2.value + ', ' + n3.value));
});
