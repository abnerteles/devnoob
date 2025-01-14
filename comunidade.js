// Validação e envio do formulário
document.getElementById('comunidadeForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const whatsappInput = document.getElementById('whatsapp');
  const message = document.getElementById('message');
  const whatsappNumber = whatsappInput.value.trim();

  // Valida se o número segue o padrão correto: apenas dígitos, entre 10 e 13 caracteres
  const whatsappRegex = /^\+?\d{11}$/; // Permite número com "+" opcional no início e de 10 a 13 dígitos

  if (whatsappRegex.test(whatsappNumber)) {
    message.style.display = 'none';
    alert(`Número ${whatsappNumber} enviado com sucesso!`);
    whatsappInput.value = ''; // Limpa o campo após o envio
  } else {
    message.style.display = 'block';
    message.textContent = 'Por favor, insira um número válido com 11 digitos,incluindo o ddd, ex : 27991234567';
  }
});

// Adiciona funcionalidade para mostrar feedback ao digitar
document.getElementById('whatsapp').addEventListener('input', function () {
  const whatsappInput = this.value.trim();
  const message = document.getElementById('message');

  if (whatsappInput === '' || /^\+?\d{0,13}$/.test(whatsappInput)) {
    message.style.display = 'none'; // Oculta a mensagem de erro enquanto o usuário digita corretamente
  } else {
    message.style.display = 'block';
    message.textContent = 'Apenas números são permitidos.';
  }
});
