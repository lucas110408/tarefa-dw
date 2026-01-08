// Variáveis Globais
let totalCompra = 0;
let contadorItens = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // 1. Atualizar contadores
    contadorItens++;
    totalCompra += precoProduto;

    // 2. Atualizar o badge vermelho no menu
    const badge = document.getElementById('cart-badge');
    badge.innerText = contadorItens;
    
    // Efeito visual no badge (pulsar)
    badge.classList.add('bg-warning');
    setTimeout(() => badge.classList.remove('bg-warning'), 300);

    // 3. Manipular a tabela
    const tbody = document.getElementById('lista-carrinho');
    const linhaVazia = document.getElementById('carrinho-vazio');

    // CORREÇÃO: Verifica se a linha vazia existe antes de tentar remover
    if (linhaVazia) {
        linhaVazia.remove();
    }

    // Criar nova linha
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nomeProduto}</td>
        <td class="text-end fw-bold">R$ ${precoProduto.toFixed(2).replace('.', ',')}</td>
    `;

    // Adicionar linha na tabela
    tbody.appendChild(novaLinha);

    // 4. Atualizar o Valor Total
    document.getElementById('valor-total').innerText = 
        `R$ ${totalCompra.toFixed(2).replace('.', ',')}`;

    // 5. Feedback amigável (sem alert chato, apenas rola um pouquinho se quiser, 
    // ou mostra no console para debug)
    console.log(`Adicionado: ${nomeProduto}`);
    
    // Opcional: Avisar o usuário com um alerta rápido
    alert(`Sucesso! ${nomeProduto} foi para o carrinho.`);
}
