// Variável para contar itens
let carrinhoQuantidade = 0;

// Função chamada quando clica no botão "Comprar"
function adicionarAoCarrinho(nomeProduto) {
    // 1. Aumenta a contagem
    carrinhoQuantidade++;

    // 2. Atualiza o número lá no topo do site (badge)
    const contadorElemento = document.getElementById('cart-count');
    contadorElemento.innerText = carrinhoQuantidade;

    // 3. Feedback visual simples (pode ser melhorado depois)
    alert(`Ótima escolha! O produto "${nomeProduto}" foi adicionado ao seu carrinho.`);
    
    // Dica para defesa do projeto:
    // Aqui usamos manipulação básica do DOM (getElementById, innerText)
    // que é requisito fundamental da matéria.
}