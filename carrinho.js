document.addEventListener('DOMContentLoaded', function() {
    atualizarCarrinho();
});

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    let carrinhoItens = localStorage.getItem('carrinhoItens');
    if (carrinhoItens) {
        carrinhoItens = JSON.parse(carrinhoItens);
        carrinhoItens.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            `;
            listaCarrinho.appendChild(listItem);
        });
    }
}

function limparCarrinho() {
    localStorage.removeItem('carrinhoItens');
    atualizarCarrinho();
}
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    listaCarrinho.innerHTML = '';
    let carrinhoItens = localStorage.getItem('carrinhoItens');
    let total = 0;
    if (carrinhoItens) {
        carrinhoItens = JSON.parse(carrinhoItens);
        carrinhoItens.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            `;
            listaCarrinho.appendChild(listItem);
            total += item.preco;
        });
    }
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}
function enviarPedidoParaWhatsApp() {
    let carrinhoItens = localStorage.getItem('carrinhoItens');
    let mensagemPedido = "Olá! Gostaria de fazer o seguinte pedido:\n";

    if (carrinhoItens) {
        carrinhoItens = JSON.parse(carrinhoItens);
        carrinhoItens.forEach(item => {
            mensagemPedido += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
        });
    }

    // Formatar a mensagem para o formato que o WhatsApp aceita
    mensagemPedido = encodeURIComponent(mensagemPedido);

    // Abrir o WhatsApp com a mensagem do pedido
    window.open(`https://wa.me/seu-numero-do-whatsapp/?text=${mensagemPedido}`, '_blank');
}
