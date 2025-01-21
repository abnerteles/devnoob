let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextimage();
}, 5000)

function nextimage(){
    count++;
    if(count>4){
    count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

// Seleciona o formulário e o campo de email
const form = document.querySelector('.newsletter');
const emailInput = document.getElementById('email');

// Adiciona um evento de validação ao enviar o formulário
form.addEventListener('submit', function (event) {
  const emailValue = emailInput.value.trim(); // Remove espaços em branco do início e fim
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|com\.br)$/; // Regex para validar o email

  if (!emailRegex.test(emailValue)) {
    // Se o email for inválido, exibe um alerta e impede o envio
    alert('Por favor, insira um email válido no formato exemplo@dominio.com ou exemplo@dominio.com.br');
    event.preventDefault(); // Impede o envio do formulário
  } else {
    // Se o email for válido, exibe uma mensagem de sucesso
    alert('Email enviado com sucesso!');
    emailInput.value = ''; // Limpa o campo de email após o envio
  }
});

