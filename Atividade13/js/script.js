var txt = document.getElementById("texto");
var chkMaiuscula = document.getElementById("maiuscula");
var chkMinuscula = document.getElementById("minuscula");

chkMaiuscula.addEventListener("click", () => {
    if (chkMaiuscula.checked) {
        txt.value = txt.value.toLocaleUpperCase();
    }
});

chkMinuscula.addEventListener("click", () => {
    if (chkMinuscula.checked) {
        txt.value = txt.value.toLocaleLowerCase();
    }
});