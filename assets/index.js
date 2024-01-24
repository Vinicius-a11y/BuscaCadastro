var dados = require("./info.json");

function buscarCadastro(nome, email, telefone, cep) {
	var indiceUsuario = dados.findIndex(function (usuario) {
		return usuario.nome === nome;
	});

	if (indiceUsuario === -1) {
		console.log("Usuário não encontrado");
		return;
	}

	var nomeInput = document.getElementById("nomeId");
	var emailInput = document.getElementById("emailCad");
	var telefoneInput = document.getElementById("telefoneCad");
	var cepInput = document.getElementById("cepCad");

	nomeInput.value = dados[indiceUsuario].nome;
	emailInput.value = dados[indiceUsuario].email;
	telefoneInput.value = dados[indiceUsuario].telefone[0];
	cepInput.value = dados[indiceUsuario].endereco.cep;
}

window.onload = function () {
	buscarCadastro();
};
