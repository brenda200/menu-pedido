function adicionarAoCarrinho(nome, preco, imagem) {
    const item = { nome: nome, preco: preco, imagem: imagem };
    let carrinhoItens = localStorage.getItem('carrinhoItens');
    if (carrinhoItens) {
        carrinhoItens = JSON.parse(carrinhoItens);
        carrinhoItens.push(item);
        localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens));
    } else {
        localStorage.setItem('carrinhoItens', JSON.stringify([item]));
    }
}
function verCarrinho() {
    window.location.href = "carrinho.html";
}