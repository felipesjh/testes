/*******************************************

Botão que adiciona valores do formulário para Lista de contatos.

****************************************/

var botaoSalvar = document.querySelector("#salvar-formulario");

botaoSalvar.addEventListener("click", function(event) {
    event.preventDefault();

    
    var form = document.querySelector("#formulario-cadastro");

    var cliente = obterValorFormulario(form);

    /* CRIANDO ELEMENTOS HTML DENTRO DE UM SPAN*/
   
    var clienteDiv = criarLinhaContatos(cliente);

    if(cliente.nome == ""){
    	console.log("erro nome");
    	return;
    }

    if(cliente.telefone == ""){
    	console.log("erro telefone");
    	return;
    }

    if(cliente.email == ""){
    	console.log("erro email");
    	return;
    }
    /*INSERIR DIV CRIADA NA SECTION DE LISTA DE CADASTRO*/

    var listaCadastroSection = document.querySelector("#lista-cadastro");

    listaCadastroSection.appendChild(clienteDiv);

    form.reset();
});

/*******************************************

Botão que adiciona valores do formulário para Lista de contatos.

****************************************/

var botaoLimpar = document.querySelector("#limpar-formulario");

botaoLimpar.addEventListener("click", function(event) {
    
    event.preventDefault();

    var form = document.querySelector("#formulario-cadastro");

    var cliente = obterValorFormulario(form);

    /*INSERIR DIV CRIADA NA SECTION DE LISTA DE CADASTRO*/

    var listaCadastroSection = document.querySelector("#lista-cadastro");

    listaCadastroSection.removeChild("div");

    form.reset();
});


/* Função que obtém os valores do formulário e colocando dentro do objeto cliente */
function obterValorFormulario(form){
	var cliente = {
		nome: form.nome.value,
		telefone: form.telefone.value,
		email: form.email.value
	}

	return cliente;
}

/* Função que cria os elementos para receber dados do formulário */
function criarLinhaContatos(cliente){
	var clienteDiv = document.createElement("div");

    var nomeSpan = document.createElement("nome");
    var telefoneSpan = document.createElement("telefone");
    var emailSpan = document.createElement("email");

    /*INSERIR VALORES DO FORMULÁRIO NOS SPANS CRIADAS*/

    nomeSpan.textContent = cliente.nome;
    telefoneSpan.textContent = cliente.telefone;
    emailSpan.textContent = cliente.email;

    /* INSERIR SPANS DENTRO DA DIV CRIADA*/
    clienteDiv.appendChild(nomeSpan);
    clienteDiv.appendChild(telefoneSpan);
    clienteDiv.appendChild(emailSpan);

    return clienteDiv;
}