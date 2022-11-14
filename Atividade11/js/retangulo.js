var base = document.getElementById("base");
var altura = document.getElementById("altura");
var area = document.getElementById("area");
var botaoCalcular = document.getElementById("btnCalcular");
var botaoLimpar = document.getElementById("btnLimpar");

function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return (this.base * this.altura);
    }
}

botaoCalcular.addEventListener("click", () => {
    retangulo = new Retangulo(base.value, altura.value);
    area.value = retangulo.calcularArea();
})

function limpar() {
    base.value = '';
    altura.value = '';
    area.value = '';

    base.focus();
}

botaoLimpar.addEventListener("click", limpar);