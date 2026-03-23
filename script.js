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

    // Dados dos projetos (Dados ilustrativos para os 4 primeiros)
    const projectsData = {
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar o layout de 55 mil m³ para reduzir o tempo de deslocamento operacional.</p>
                <p><strong>Resultados Ilustrativos:</strong> Redução de 15% no tempo médio de picking e aumento de 10% na capacidade de armazenamento.</p>
                <p><strong>Ferramentas:</strong> KANBAN, Curva ABC, AutoCAD e WMS.</p>
                <img src="assets/Indicador - Ocupação.jpeg" alt="Layout">
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Desafio:</strong> Automatizar o acompanhamento de metas diárias de recebimento.</p>
                <p><strong>Resultados Ilustrativos:</strong> Economia de 2 horas diárias de trabalho manual e acuracidade de estoque elevada para 99.8%.</p>
                <p><strong>Ferramentas:</strong> SQL Server, Power BI e Google Data Studio.</p>
                <img src="assets/Indicador - Bloqueio PowerBi.jpeg" alt="Dashboard">
            `
        },
        projeto3: {
            title: "Controle Orçamentário e Gestão de Fornecedores",
            content: `
                <p><strong>Desafio:</strong> Centralizar o controle de pagamentos de utilidades (água, luz e fretados).</p>
                <p><strong>Resultados Ilustrativos:</strong> Identificação de 5% de redução de custos fixos através de auditoria de contratos e faturas.</p>
                <p><strong>Ferramentas:</strong> Excel Avançado e SAP ERP.</p>
                <img src="assets/Indicador Financeiro.jpg" alt="Financeiro">
            `
        },
        projeto4: {
            title: "Implantação de Equipamentos e Processos FULFILLMENT",
            content: `
                <p><strong>Desafio:</strong> Implementar a infraestrutura para operações de parceiros externos.</p>
                <p><strong>Resultados Ilustrativos:</strong> Setup completo de 20 novos postos de trabalho e 100% de conformidade nos processos de auditoria logística.</p>
                <p><strong>Ferramentas:</strong> WMS Oracle e Gestão de Projetos.</p>
                <img src="assets/Indicador - Full.jpeg" alt="Fulfillment">
            `
        },
        agendelogo: {
            title: "Agende Logo",
            content: `
                <p><strong>Site:</strong> <a href="https://agendelogo.com/" target="_blank">agendelogo.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/agende_logo/" target="_blank">@agende_logo</a></p>
                <p>Plataforma dedicada a soluções de agendamento e branding.</p>
                <img src="assets/Insta_Agendelogo.png" alt="Agende Logo">
            `
        },
        eloeterno: {
            title: "Elo Eterno",
            content: `
                <p><strong>Site:</strong> <a href="https://eloeterno.com/" target="_blank">eloeterno.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/elo_eterno.ofic/" target="_blank">@elo_eterno.ofic</a></p>
                <p>Tecnologia voltada para a eternização de memórias.</p>
                <img src="assets/Insta_eloeterno.png" alt="Elo Eterno">
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
                projectModal.classList.add('active'); // Usar classe para controlar visibilidade
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });
});
