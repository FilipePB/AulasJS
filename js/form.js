var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //previne comportamento padrão
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteFormulario(form);    

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionarPacienteTabela(paciente);

    //Reseta a tela para que as informações escritas sumam
    form.reset(); 

    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = "";

});

function adicionarPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa o html

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("O peso é inválido!");
    }
    
    if (!validaAltura(paciente.altura) || paciente.altura.length == 0){
        erros.push("A altura é inválido!");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}