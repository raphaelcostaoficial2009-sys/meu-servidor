// Seleciona o formulário pelo class="form-login"
const form = document.querySelector(".form-login");

// Evento de envio do formulário
form.addEventListener("submit", (event) => {

    const email = form.email.value.trim();
    const senha = form.senha.value.trim();

    // ----- Validação dos campos -----
    if (!email || !senha) {
        alert("Preencha todos os campos.");
        event.preventDefault();
        return;
    }

    // Senha mínima (opcional)
    if (senha.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres.");
        event.preventDefault();
        return;
    }

    // ----- Efeito de carregamento -----
    const botao = form.querySelector("button");
    botao.innerText = "Entrando...";
    botao.disabled = true;
});
