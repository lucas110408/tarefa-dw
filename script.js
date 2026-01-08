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
    
    // Efeito visual no badge
    badge.classList.add('bg-warning');
    setTimeout(() => badge.classList.remove('bg-warning'), 300);

    // 3. Manipular a tabela
    const tbody = document.getElementById('lista-carrinho');
    const linhaVazia = document.getElementById('carrinho-vazio');

    // Se a linha de "vazio" existir, remove ela
    if (linhaVazia) {
        linhaVazia.remove();
    }

    // Criar nova linha
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td class="py-3 ps-3">${nomeProduto}</td>
        <td class="text-end py-3 pe-3 fw-bold">R$ ${precoProduto.toFixed(2).replace('.', ',')}</td>
    `;

    // Adicionar linha na tabela
    tbody.appendChild(novaLinha);

    // 4. Atualizar o Valor Total
    atualizarTotalNaTela();

    // 5. Feedback no console (opcional)
    console.log(`Adicionado: ${nomeProduto}`);
    alert(`${nomeProduto} adicionado!`);
}

// NOVA FUNÇÃO: Finalizar Compra e Resetar Tudo
function finalizarCompra() {
    // Se não tiver itens, avisa e para a função
    if (contadorItens === 0) {
        alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
        return;
    }

    // 1. Mensagem de Sucesso
    alert(`Compra realizada com sucesso!\n\nValor Total: R$ ${totalCompra.toFixed(2).replace('.', ',')}\n\nObrigado pela preferência! O carrinho será esvaziado para uma nova compra.`);

    // 2. Resetar Variáveis
    totalCompra = 0;
    contadorItens = 0;

    // 3. Resetar Badge do Menu
    document.getElementById('cart-badge').innerText = '0';

    // 4. Limpar a Tabela Visualmente
    const tbody = document.getElementById('lista-carrinho');
    tbody.innerHTML = ''; // Apaga tudo que tem dentro do corpo da tabela

    // 5. Recriar a linha de "Carrinho Vazio"
    // (Precisa recriar para que o layout volte ao original)
    const linhaVaziaHTML = `
        <tr id="carrinho-vazio">
            <td colspan="2" class="text-center text-muted py-5">
                <i class="bi bi-cart-x display-1 opacity-25 d-block mb-3"></i>
                <span class="fs-5">Seu carrinho está vazio no momento.</span>
            </td>
        </tr>
    `;
    tbody.innerHTML = linhaVaziaHTML;

    // 6. Zerar o Total visual
    atualizarTotalNaTela();
    
    // 7. Rolar a tela de volta para o topo (Início)
    window.location.href = "#inicio";
}

// Função auxiliar para atualizar o texto do preço
function atualizarTotalNaTela() {
    document.getElementById('valor-total').innerText = 
        `R$ ${totalCompra.toFixed(2).replace('.', ',')}`;
}
