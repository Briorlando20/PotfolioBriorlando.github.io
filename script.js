document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer (Responsividade)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (apenas para mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Modais de Projeto
    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const projectDetailButtons = document.querySelectorAll('.project-detail-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    // Dados dos projetos
    const projectsData = {
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar o layout de um Centro de Distribuição de 55 mil m³ para aumentar a eficiência da área de picking e garantir o fluxo adequado de produtos. </p>
                <p><strong>Minha Contribuição:</strong> Implementei mudanças estratégicas no layout, utilizei a ferramenta KANBAN para assegurar o abastecimento correto das áreas de picking e realizei análises de giros dos produtos (Curva ABC) para otimizar os endereços de armazenagem. </p>
                <p><strong>Resultados:</strong> Aumentei a eficiência do processo de separação de pedidos, reduzindo o tempo de picking e garantindo que não houvesse divergências sistêmicas no cadastro e endereçamento de produtos. </p>
                <p><strong>Ferramentas:</strong> Power BI para dashboards de acompanhamento, Excel para análises detalhadas, sistemas WMS e ORACLE para gestão de estoque. </p>
                <img src="assets/Indicador - Ocupação.jpeg" alt="Dashboard de Ocupação">
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Desafio:</strong> Fornecer visibilidade e insights acionáveis sobre os indicadores do setor de recebimento, controle de estoque e suprimentos para apoiar análises gerenciais. </p>
                <p><strong>Minha Contribuição:</strong> Fui responsável pela atualização diária desses indicadores, transformando dados brutos em informações compreensíveis para a diretoria. Participei ativamente de reuniões para apresentar os resultados, dados e propor melhorias eficientes. </p>
                <p><strong>Resultados:</strong> Melhorei a tomada de decisão da equipe gerencial, identificando gargalos e oportunidades de otimização nos processos logísticos.</p>
                <p><strong>Ferramentas:</strong> SQL para extração e manipulação de grandes volumes de dados , Power BI para criação de dashboards dinâmicos , Excel para análises complementares. </p>
                <img src="assets/Indicador - Bloqueio PowerBi.jpeg" alt="Indicador Power BI">
            `
        },
        projeto3: {
            title: "Controle Orçamentário e Gestão de Fornecedores",
            content: `
                <p><strong>Desafio:</strong> Gerenciar o controle orçamentário e financeiro de diversos serviços essenciais, além de otimizar o relacionamento com fornecedores. </p>
                <p><strong>Minha Contribuição:</strong> Responsável pelo controle orçamentário de compras e pagamentos de serviços como energia, água, fretado, manutenção predial e refeição. Mantinha contato direto com todos os fornecedores para garantir a qualidade e a conformidade dos serviços. </p>
                <p><strong>Resultados:</strong> Contribuí para uma gestão mais eficiente dos recursos, identificando oportunidades de otimização de custos e garantindo a continuidade dos serviços essenciais. </p>
                <p><strong>Ferramentas:</strong> Excel para controle orçamentário e projeções, sistemas AUTOMIDIA e ORACLE para gestão de pagamentos e fornecedores. </p>
                <img src="assets/Indicador Financeiro.jpg" alt="Controle Financeiro">
            `
        },
        projeto4: {
            title: "Implantação de Equipamentos e Processos FULFILLMENT",
            content: `
                <p><strong>Descrição:</strong> Atuação na implantação de equipamentos e estruturas para armazenagem de produtos FULFILLMENT e domínio dos processos logísticos relacionados a fornecedores parceiros (FULFILLMENT). </p>
                <img src="assets/Indicador - Full.jpeg" alt="Indicador Fulfillment">
            `
        },
        agendelogo: {
            title: "Agende Logo",
            content: `
                <p><strong>Website:</strong> <a href="https://agendelogo.com/" target="_blank">agendelogo.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/agende_logo/" target="_blank">@agende_logo</a></p>
                <p><strong>Descrição:</strong> Plataforma focada em soluções inteligentes de agendamento e desenvolvimento de identidade visual para negócios, otimizando a presença digital de parceiros.</p>
                <img src="assets/Insta_Agendelogo.png" alt="Agende Logo Logo">
            `
        },
        eloeterno: {
            title: "Elo Eterno",
            content: `
                <p><strong>Website:</strong> <a href="https://eloeterno.com/" target="_blank">eloeterno.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/elo_eterno.ofic/" target="_blank">@elo_eterno.ofic</a></p>
                <p><strong>Descrição:</strong> Projeto dedicado à preservação de memórias e conexões significativas, utilizando tecnologia para criar legados digitais duradouros.</p>
                <img src="assets/Insta_eloeterno.png" alt="Elo Eterno Logo">
            `
        }
    };

    projectDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.projectId;
            const project = projectsData[projectId];
            if (project) {
                modalTitle.textContent = project.title;
                modalBody.innerHTML = project.content;
                projectModal.style.display = 'flex';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });

    // Animação de barras de progresso ao scroll
    const skillBars = document.querySelectorAll('.progress-fill');
    const skillsSection = document.getElementById('skills');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    // Transição acionada via CSS pelas classes progress-fill.XXXX
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (skillsSection) {
        observer.observe(skillsSection);
    }
});
