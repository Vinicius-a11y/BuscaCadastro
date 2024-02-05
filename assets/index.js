const dados = require("./info.json");

function buscaCad() {
	const nome = document.getElementById("nomeId").value;
	const email = document.getElementById("emailCad").value;
	const telefone = document.getElementById("telefoneCad").value;
	const cep = document.getElementById("cepCad").value;

	const usuario = dados.find((data) => data.nome === nome && data.email === email && data.telefone === telefone && data.cep === cep);

	if (usuario) {
		document.getElementById("nomeId").value = usuario.nome;
		document.getElementById("emailCad").value = usuario.email;
		document.getElementById("telefoneCad").value = usuario.telefone;
		document.getElementById("cepCad").value = usuario.cep;
	} else {
		alert("Cadastro não encontrado");
	}
}

document.querySelector("form").addEventListener("submit", function (evento) {
	evento.preventDefault();
	buscaCad();
});
