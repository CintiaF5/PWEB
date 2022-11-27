var form = document.getElementById("formDados");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var comentario = document.getElementById("comentario");
var radios = document.getElementsByName("escolha");

form.addEventListener("submit", (el) => {

    if (nome.value.length < 10) {
        alert("Nome precisa ter no mínimo 10 caracteres.")
        el.preventDefault();
        return false;
    }

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        alert("E-mail precisa conter os caracteres @ e .");
        el.preventDefault();
        return false;
    }

    if (document.formDados.elements['comentario'].value.length < 20) {
        alert("Comentário precisa ter no mínimo 20 caracteres.")
        el.preventDefault();
        return false;
    }

    if (!radios[0].checked && !radios[1].checked) {
        alert("Responsa a pesquisa.");
        el.preventDefault();
        return false;
    } else if (radios[0].checked) { // caso sim
        alert("Volte sempre à está página!");
    } else { // caso não
        alert("Que bom que você voltou a visitar está página!");
    }

});

