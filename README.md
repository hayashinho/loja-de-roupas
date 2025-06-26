Olá

# MinimalStore - Loja de Roupas Minimalista (Frontend Estático)

Este é um projeto de frontend estático para uma loja de roupas minimalista, desenvolvido com HTML, CSS e JavaScript puro. O design é focado em ser clean, moderno e responsivo.

## Funcionalidades

*   **Página Inicial (Home):** Banner principal e seções de categorias em destaque.
*   **Catálogo de Produtos:** Grade de produtos com imagem, nome e preço.
*   **Detalhe do Produto:** Página individual para cada produto com imagem ampliada, nome, preço, descrição (placeholder) e botão "Comprar" (simulado).
*   **Página Sobre:** Texto descritivo sobre a filosofia da loja.
*   **Página de Contato:** Formulário de contato simples (layout, sem funcionalidade de envio real).
*   **Navegação:** Menu fixo no topo para fácil acesso entre as seções.
*   **Responsividade:** O site se adapta a diferentes tamanhos de tela (desktop, tablet, mobile).

## Tecnologias Utilizadas

*   HTML5
*   CSS3 (com Flexbox e Grid para layout)
*   JavaScript (vanilla, para interatividade básica como menu mobile e carregamento de detalhes do produto)
*   Google Fonts (Inter)
*   Imagens de placeholder/domínio público (Unsplash)

## Como Rodar Localmente

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone https://github.com/seu-usuario/minimalstore.git 
    cd minimalstore
    ```
    (Se você baixou como ZIP, extraia os arquivos para uma pasta.)

2.  **Abra o arquivo `index.html` no seu navegador:**
    Não há necessidade de um servidor web complexo. Basta navegar até a pasta do projeto e abrir o arquivo `index.html` diretamente no seu navegador preferido (Chrome, Firefox, Edge, Safari, etc.).

    *Exemplo:* Se você salvou os arquivos em `C:\Projetos\MinimalStore`, abra `C:\Projetos\MinimalStore\index.html` no navegador.

## Como Implantar no GitHub Pages

O GitHub Pages é uma ótima maneira de hospedar sites estáticos gratuitamente diretamente do seu repositório GitHub.

1.  **Crie um repositório no GitHub:**
    Se você ainda não o fez, crie um novo repositório no GitHub para este projeto.

2.  **Envie os arquivos do projeto para o repositório:**
    Adicione todos os arquivos (`index.html`, `catalog.html`, `css/`, `js/`, etc.) ao seu repositório e faça o commit/push.
    ```bash
    git add .
    git commit -m "Versão inicial do site da loja"
    git push origin main # ou a branch que você estiver usando
    ```

3.  **Habilite o GitHub Pages nas configurações do repositório:**
    *   Vá para o seu repositório no GitHub.
    *   Clique na aba "Settings" (Configurações).
    *   No menu lateral, vá para a seção "Pages" (Páginas) em "Code and automation".
    *   Em "Source" (Fonte), selecione a branch que contém seus arquivos (geralmente `main` ou `master`).
    *   Escolha a pasta `/ (root)` (a menos que seus arquivos estejam em uma subpasta como `/docs`).
    *   Clique em "Save" (Salvar).

4.  **Acesse seu site:**
    O GitHub Pages fornecerá um link (geralmente algo como `https://seu-usuario.github.io/nome-do-repositorio/`). Pode levar alguns minutos para o site estar disponível após a configuração.

## Design e Estilo

*   **Cores:** Paleta neutra (branco, preto, tons de cinza).
*   **Tipografia:** Google Font "Inter" para uma leitura clara e moderna.
*   **Layout:** Clean, com bom uso de espaço em branco.

## Próximos Passos (Sugestões)

*   Adicionar mais produtos e categorias.
*   Implementar filtros no catálogo (ex: por preço, tipo).
*   Integrar um carrinho de compras real (exigiria backend ou soluções como Shopify Lite).
*   Melhorar a animação do menu mobile.
*   Adicionar validação mais robusta ao formulário de contato.
*   Otimizar imagens para melhor performance.
