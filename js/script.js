function enviarPedido(elemento, tipo) {
  const item = elemento.closest('li');
  const nomeItem = item.querySelector('strong').textContent.trim();
  const numero = '5514991305822';  // Número de contato no WhatsApp

  let mensagem = '';
  
  if (tipo === 'pizza') {
    mensagem = `Olá! Gostaria de pedir uma pizza de ${nomeItem}.`;
  } else if (tipo === 'bebida') {
    mensagem = `Olá! Gostaria de pedir uma bebida: ${nomeItem}.`;
  }

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, '_blank');
}
