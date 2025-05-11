// função para verificar o email
function validarEmail() {
    // Obtemos o valor do campo de email e a mensagem.
    const email = document.getElementById('email').value;
  
    // Obtemos o elemento de mensagem.
    const mensagem = document.getElementById('mensagem');
  
    // Verifica se o formato do email está correto conforme as regras estabelecidas
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Se o email estiver correto, exibe a mensagem de sucesso na cor verde.
    if (regex.test(email)) {
      mensagem.textContent = "E-mail válido!";
      mensagem.style.color = "green";
    } else {
      // Caso contrário, exibe a mensagem de erro.
      mensagem.textContent = "E-mail inválido!";
      mensagem.style.color = "red";
    }
  }
  