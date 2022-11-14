var aluno1 = new Object();

//Forma 01
aluno1.ra = "5632985632400";
aluno1.nome = "Nome do aluno";
alert("FORMA 01: " +
      "\n\nNome: " + aluno1.nome +
      "\nRA: " + aluno1.ra);

//Forma 02
aluno1["ra"] = "5632985632400";
aluno1["nome"] = "Nome aluno";
alert("FORMA 02: " +
      "\n\nNome: " + aluno1["nome"] +
      "\nRA: " + aluno1["ra"]);

//Forma 03
var ra = "ra",
      nome = "nome"
aluno1[ra] = "5632985632400";
aluno1[nome] = "Aluno nome";
alert("FORMA 03: " +
      "\n\nNome: " + aluno1.nome +
      "\nRA: " + aluno1.ra);