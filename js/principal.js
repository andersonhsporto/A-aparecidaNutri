var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

	var tdClass = paciente.querySelector(".info-class");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    pesoInvalido(pesoEhValido);
    alturaInvalida(alturaEhValida);

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
		var index = classificaImc(imc);
        tdImc.textContent = imc;
		tdClass.textContent = index;
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return ("Abaixo do Peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        return ("Peso Normal");
    } else if (imc >= 25 && imc <= 29.9) {
        return ("Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        return ("Obesidade Grau I");
    } else if (imc >= 35 && imc < 39.9) {
        return ("Obesidade Grau II");
    } else {
		return ("Obesidade Grau III \n ou Mórbida");
	}
}

function pesoInvalido(pesoEhValido){
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    return false;
}

function alturaInvalida(alturaEhValida) {
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    return false;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});