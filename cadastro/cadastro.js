let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let confirmarSenha = document.querySelector("#confirmar-senha");

/**
 * Verifica se todos os campos do formulario estão preenchidos.
 */
function cadastrar() {
    //Verifica se algum campo está vazio.
    if (nome.value == "" || email.value == "" || senha.value == "" || confirmaSenha.value == "") {
        alert("Preencha os dados corretamente");//exibe mensagem
    }
    //Verifica se os valores de senha e confirmar senha são iguais
    else if (senha.value != confirmaSenha.value == "") {
        alert("Preencha os dados corretamente");//exibe mensagem
    }
    //Se todos os campos do formulário foram preenchidos 
    else{    
        alert("Cadastro realizado com sucesso");//exibe mensagem
        
    }
}