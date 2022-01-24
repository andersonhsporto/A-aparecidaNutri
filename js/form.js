var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");

	var paciente = criarPaciente(form);
	var erro = validaPaciente(paciente);
	if (erro.length > 0) {

		mostrarErros(erro);
		return ;
	}

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

function validaPaciente(paciente){

	var erros = [];

	if (paciente.nome.length == 0){
		(erros.push("O campo nome não pode estar vazio"));
	}
	if (paciente.gordura.length == 0){
		(erros.push("O campo gordura não pode estar vazio"));
	}
	if (paciente.peso.length == 0){
		(erros.push("O campo peso não pode estar vazio"));
	}
	if (paciente.altura.length == 0){
		(erros.push("O campo altura não pode estar vazio"));
	}
	if(!validaPeso(paciente.peso)){
		(erros.push("Peso Invalido !"));
	}
	if (!validaAltura(paciente.altura)){
		(erros.push("Altura Invalida !"));
	}
	return (erros);
}

function mostrarErros(erros){
	var ul = document.querySelector("#messagem-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}