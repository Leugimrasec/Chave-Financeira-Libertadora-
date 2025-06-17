function abrirModalCompra() {
    var myModal = new bootstrap.Modal(document.getElementById('compraModal'));
    myModal.show();
}



function processarPagamento() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var cpf = document.getElementById('cpf').value;

    var mensagemWhatsApp = `Olá! Recebi um novo pedido de pagamento PIX.\n\nNome: ${nome}\nE-mail: ${email}\nWhatsApp: ${whatsapp}\nCPF: ${cpf}\n\nPor favor, verifique o extrato bancário para confirmar o pagamento.`;

    var numeroWhatsAppDestino = '5561999226353'; // Seu número de WhatsApp

    var urlWhatsApp = `https://wa.me/${numeroWhatsAppDestino}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    window.open(urlWhatsApp, '_blank');

    // Exibir mensagem de confirmação ao cliente
    alert('Pedido Confirmado! Aguarde que em breve enviaremos a planilha financeira.');

    // Fechar o modal
    var myModal = bootstrap.Modal.getInstance(document.getElementById('compraModal'));
    myModal.hide();
}

