var formulario = document.querySelector("#formulario-cadastro");

var inputNome = formulario.querySelector("#form-nome");

var botaoSalvar = document.querySelector("#salvar-formulario");

botaoSalvar.addEventListener("click", function(event){

	event.preventDefault();

	//pegar valor do fomrulário
	var form = document.querySelector("#formulario-cadastro");
	
	//chamando função para criar um objeto cadastro
	var cadastro = obtemDadosFormulario(form);

	if(cadastro.nome == ""){
    	console.log("erro nome");
    	return;
    }

    if(cadastro.telefone == "" || cadastro.telefone.length < 14){
    	console.log("erro telefone");
    	return;
    }

    if(cadastro.email == ""){
    	console.log("erro email");
    	return;
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cadastro.email))) {
		console.log("É necessário o preenchimento de um endereço de e-mail válido.");
		return;
	}
	//chamando função que cria elementos para acrescentar valores na lista
	 var cadastroDiv = criarDiv(cadastro);

	//inserindo os elementos do cadastro do cliente na "lista de cadastro"
	var listaCadastro = document.querySelector("#lista-cadastro");
	listaCadastro.appendChild(cadastroDiv);

	form.reset();


});

function obtemDadosFormulario(form){
	var cadastro = {
		nome: form.nome.value,
		telefone: form.telefone.value,
		email: form.email.value
	}

	return cadastro;
}

function criarDiv(cadastro){
	//criar div e spans
	var cadastroDiv = document.createElement("div");
	cadastroDiv.classList.add("lista-contatos");

	var nomeP = document.createElement("p");
	nomeP.classList.add("lista-nome");
	var telefoneSpan = document.createElement("span");
	telefoneSpan.classList.add("lista-telefone");
	var emailSpan = document.createElement("span");
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

/**********   VALIDAÇÃO TELEFONE   ********/

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

/**********   VALIDAÇÃO EMAIL   ********/
/*
var campoEmail = document.querySelector("#form-email");
campoEmail.addEventListener("input", function() {
    var valorEmail = campoEmail.value;

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valorEmail))) {
		console.log("É necessário o preenchimento de um endereço de e-mail válido.");
		campoEmail .focus();
		return false;
	}else{
		return valorEmail;
		}

});

*//*
function mascaraEmail(valorEmail){          
    /*var valorEmail = valorEmail /\S+@\S+\.\S+/;*/
/*
    return re.test(valorEmail);
}*/

