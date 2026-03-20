# 🌿 Fibra Forte - Sistema de Gestão de Produção

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![Linguagem](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Localidade](https://img.shields.io/badge/Origem-Brumadinho%2C%20MG-orange)

O **Fibra Forte** é um sistema web desenvolvido para automatizar e organizar o cálculo de orçamentos e recebimentos de produtores de bucha vegetal. O projeto foca na agilidade, precisão matemática e facilidade de uso para os colaboradores.

---

## 🚀 Funcionalidades

- **Cálculo Multi-Usuário:** Processa separadamente os valores a receber para Fernanda, Jorge e Gustavo.
- **Persistência de Dados:** Utiliza `localStorage` para transitar dados entre diferentes formulários sem perda de informação.
- **Interface Responsiva:** Otimizado para uso em desktops (Asus Vivobook) e dispositivos móveis.
- **Resumo Detalhado:** Exibe um Pop-up com o fechamento total e opção de envio direto via WhatsApp.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando o conceito de **Vanilla Stack**, garantindo leveza e performance:

* **HTML5:** Estruturação semântica de formulários multi-etapas.
* **CSS3:** Layout moderno com Flexbox, Grid e efeitos de transição (hover/focus).
* **JavaScript (ES6+):** * Manipulação dinâmica do DOM.
    * Tratamento de dados com `parseFloat` e validação lógica.
    * Persistência com Web Storage API.
* **Font Awesome:** Iconografia para melhor UX (User Experience).

---

## 📂 Estrutura do Projeto

```text
├── css/
│   └── style.css          # Estilização global e das páginas Sobre/Ajuda
├── imagens/
│   └── imagem-logo.png    # Identidade visual da Fibra Forte
├── js/
│   └── function.js        # Lógica de cálculo e persistência (localStorage)
├── index.html             # inicio
├──orcamento.html          # gerar orcamento
├──receber.html            # formulario etapa 1
├── pagina2.html           # Formulário Etapa 2
├── pagina3.html           # Formulário Etapa 3 (Finalização)
├── ajuda.html             # Guia de uso do sistema
└── sobre.html             # Informações sobre o projeto e desenvolvedor
