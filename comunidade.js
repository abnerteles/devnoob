
document.getElementById('comunidadeForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const whatsappInput = document.getElementById('whatsapp');
  const message = document.getElementById('message');
  const whatsappNumber = whatsappInput.value.trim();

  
  const whatsappRegex = /^\+?\d{11}$/; 

  if (whatsappRegex.test(whatsappNumber)) {
    message.style.display = 'none';
    alert(`Número ${whatsappNumber} enviado com sucesso!`);
    whatsappInput.value = ''; 
  } else {
    message.style.display = 'block';
    message.textContent = 'Por favor, insira um número válido com 11 digitos,incluindo o ddd, ex : 27991234567';
  }
});


document.getElementById('whatsapp').addEventListener('input', function () {
  const whatsappInput = this.value.trim();
  const message = document.getElementById('message');

  if (whatsappInput === '' || /^\+?\d{0,13}$/.test(whatsappInput)) {
    message.style.display = 'none';
  } else {
    message.style.display = 'block';
    message.textContent = 'Apenas números são permitidos.';
  }
});
