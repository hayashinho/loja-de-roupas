// Lógica para o menu responsivo (hamburger)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon

    const navUl = document.querySelector('header nav ul');
    const nav = document.querySelector('header nav');

    if (nav && navUl) {
        nav.insertBefore(menuToggle, navUl); // Adiciona o botão antes da lista ul

        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Opcional: Fechar o menu ao clicar em um link (para SPAs ou navegação na mesma página)
    // Se for navegação entre páginas diferentes, isso não é estritamente necessário
    // mas pode ser útil se o menu ocupar muito espaço na tela.
    const navLinks = navUl.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
            }
        });
    });

    // Ativar link da página atual (exemplo simples)
    // Isso pode ser melhorado para corresponder a caminhos mais complexos
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '') { // Para a raiz (index.html)
        document.querySelector('header nav ul li a[href="index.html"]').classList.add('active');
    } else {
        const activeLink = document.querySelector(`header nav ul li a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

});

// Função para buscar parâmetros da URL (se necessário para product-detail.html)
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Exemplo de como usar (a ser implementado na lógica de product-detail.html)
// const productId = getQueryParam('id');
// if (productId) {
//     console.log('Product ID:', productId);
//     // Aqui você buscaria os dados do produto e popularia a página
// }

// Lógica para a página de Detalhes do Produto
// Este código só deve rodar se estivermos na página product-detail.html
if (window.location.pathname.endsWith('product-detail.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const productName = getQueryParam('name');
        const productPrice = getQueryParam('price');
        const productImage = getQueryParam('img');
        // const productId = getQueryParam('id'); // Se precisar do ID para algo mais

        const mainImageElement = document.getElementById('main-product-image');
        const nameElement = document.getElementById('product-name');
        const priceElement = document.getElementById('product-price');
        // const descriptionElement = document.getElementById('product-description'); // Poderia ser populada também

        if (productName && productPrice && productImage) {
            if (nameElement) nameElement.textContent = decodeURIComponent(productName);
            if (priceElement) priceElement.textContent = decodeURIComponent(productPrice);
            if (mainImageElement) {
                mainImageElement.src = decodeURIComponent(productImage);
                mainImageElement.alt = decodeURIComponent(productName); // Atualiza o alt text
            }
            // Poderia adicionar uma descrição padrão ou buscar uma baseada no ID se tivesse um "banco de dados" JS
            // if (descriptionElement) descriptionElement.textContent = `Detalhes sobre ${decodeURIComponent(productName)}. Excelente qualidade e design.`;
        } else {
            // Opcional: Mostrar uma mensagem de erro ou redirecionar se os parâmetros não estiverem presentes
            if (nameElement) nameElement.textContent = 'Produto não encontrado';
            if (priceElement) priceElement.textContent = '';
            if (mainImageElement) mainImageElement.style.display = 'none'; // Esconde a imagem se não houver info
            console.error('Parâmetros do produto não encontrados na URL.');
        }

        // Simulação de funcionalidade do botão comprar
        const buyButton = document.querySelector('.btn-buy');
        if (buyButton) {
            buyButton.addEventListener('click', () => {
                alert(`"${decodeURIComponent(productName)}" adicionado ao carrinho! (Simulação)`);
            });
        }
    });
}

// Lógica para o formulário de contato (apenas simulação)
if (window.location.pathname.endsWith('contact.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Previne o envio real do formulário
                alert('Obrigado por sua mensagem! (Simulação - Formulário não funcional)');
                contactForm.reset(); // Limpa o formulário
            });
        }
    });
}
