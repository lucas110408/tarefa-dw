// Variáveis Globais
let totalCompra = 0;
let contadorItens = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // 1. Atualiza contadores
    contadorItens++;
    totalCompra += precoProduto;

    // 2. Atualiza o badge (bolinha vermelha) no menu
    document.getElementById('cart-badge').innerText = contadorItens;

    // 3. Manipula a tabela do Carrinho
    const tbody = document.getElementById('lista-carrinho');
    const linhaVazia = document.getElementById('carrinho-vazio');

    // Se for o primeiro item, remove a linha que diz "carrinho vazio"
    if (linhaVazia) {
        linhaVazia.remove();
    }

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');
    
    // Insere o HTML da linha (Nome e Preço formatado)
    novaLinha.innerHTML = `
        <td>${nomeProduto}</td>
        <td class="text-end">R$ ${precoProduto.toFixed(2).replace('.', ',')}</td>
    `;

    // Adiciona a linha na tabela
    tbody.appendChild(novaLinha);

    // 4. Atualiza o valor Total lá embaixo
    document.getElementById('valor-total').innerText = 
        `R$ ${totalCompra.toFixed(2).replace('.', ',')}`;

    // 5. Feedback visual (aviso rápido)
    alert(`${nomeProduto} adicionado ao carrinho! Veja no final da página.`);
}
