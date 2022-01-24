var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");
	var paciente = criarPaciente(form);
    var pacienteTr = criarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

	form.reset();
});

function criarPaciente(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value),
		index: classificaImc(calculaImc(form.peso.value, form.altura.value))

	}
	return (paciente);
}

function criarTr(paciente){
	var pacienteTr = document.createElement("tr");

	pacienteTr.classList.add("Paciente");
    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));
	pacienteTr.appendChild(criarTd(paciente.index, "info-class"));
	return (pacienteTr);
}

function criarTd(nome, classe){
	var td = document.createElement("td");

	td.textContent = nome;
	td.classList.add(classe);
	return (td);
}