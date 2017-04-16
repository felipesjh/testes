var formulario = document.querySelector("#formulario-cadastro");

var inputNome = formulario.querySelector("#form-nome");

var botaoSalvar = document.querySelector("#salvar-formulario");

//Evento que ativa o botao salvar do formulário
botaoSalvar.addEventListener("click", function(event){
	//Retira o comportamento padrão de enviar do botão do formulário
	event.preventDefault();

	//pegar valor do fomrulário
	var form = document.querySelector("#formulario-cadastro");
	
	//chamando função para criar um objeto cadastro
	var cadastro = obtemDadosFormulario(form);

	//variaveis para selecionar as spans de erros
	var erroNome = document.querySelector("#erro-nome");
	var erroTelefone = document.querySelector("#erro-telefone");
	var erroEmail = document.querySelector("#erro-email");
	var erroValEmail = document.querySelector("#erro-valida-email");

	//validação do formulário
	if(cadastro.nome == ""){
		erroNome.classList.add("msg-erro");
    	return;
    }else{
    	erroNome.classList.remove("msg-erro");
    }

    if(cadastro.telefone == "" || cadastro.telefone.length < 14){
    	erroTelefone.classList.add("msg-erro");
    	return;
    }else{
    	erroTelefone.classList.remove("msg-erro");
    }

    if(cadastro.email == ""){
    	erroEmail.classList.add("msg-erro");
    	return;
    }else{
    	erroEmail.classList.remove("msg-erro");
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cadastro.email))) {
		erroValEmail.classList.add("msg-erro");
		return;
	}else{
		erroValEmail.classList.remove("msg-erro");
	}

	//chamando função que cria elementos para acrescentar valores na lista
	 var cadastroDiv = criarDiv(cadastro);

	//inserindo os elementos do cadastro do cliente na "lista de cadastro"
	var listaCadastro = document.querySelector("#lista-cadastro");
	listaCadastro.appendChild(cadastroDiv);

	form.reset();


});

//Função que cria um objeto de cadastro
function obtemDadosFormulario(form){
	var cadastro = {
		nome: form.nome.value,
		telefone: form.telefone.value,
		email: form.email.value
	}

	return cadastro;
}

// Função que cria os elementos "<p>" da lista de cadastros 
function criarDiv(cadastro){
	//criar div e spans
	var cadastroDiv = document.createElement("div");
	cadastroDiv.classList.add("lista-contatos");

	var nomeP = document.createElement("p");
	nomeP.classList.add("lista-nome");
	var telefoneSpan = document.createElement("p");
	telefoneSpan.classList.add("lista-telefone");
	var emailSpan = document.createElement("p");
	emailSpan.classList.add("lista-email");

	//inserindo valores do formulario nos elementos criados "div e spans"
	nomeP.textContent = cadastro.nome;
	telefoneSpan.textContent = cadastro.telefone;
	emailSpan.textContent = cadastro.email;

	//inserindo os elementos criados dentro de uma div
	cadastroDiv.appendChild(nomeP);
	cadastroDiv.appendChild(telefoneSpan);
	cadastroDiv.appendChild(emailSpan);

	return cadastroDiv;
}

/**********   VALIDAÇÃO CAMPO TELEFONE   ********/

var campoTelefone = document.querySelector("#form-telefone");
campoTelefone.addEventListener("input", function() {
    var valorTelefone = campoTelefone.value;

    campoTelefone.value = mascaraTelefone(valorTelefone);
});


function mascaraTelefone(valorTelefone){
    valorTelefone=valorTelefone.replace(/\D/g,"");           
    valorTelefone=valorTelefone.replace(/^(\d{2})(\d)/g,"($1) $2");
    valorTelefone=valorTelefone.replace(/(\d)(\d{4})$/,"$1-$2"); 
    return valorTelefone;
}