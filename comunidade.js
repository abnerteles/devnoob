// comunidade.js
document.addEventListener("DOMContentLoaded", function () {
  var formNewsletter = document.getElementById("formNewsletter");

  formNewsletter.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede a submissão padrão do formulário

    var numeroWhatsapp = document.getElementById("whatsapp").value; // Obtém o valor do input

    if (numeroWhatsapp.trim()) {
      // Verifica se o número não está vazio
      var mensagemSucesso = document.getElementById("mensagemSucesso");
      mensagemSucesso.style.display = "block"; // Exibe a mensagem de sucesso
    } else {
      alert("Por favor, insira um número de WhatsApp."); // Alerta se o campo estiver vazio
    }
  });
});
