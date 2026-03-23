document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const projectDetailButtons = document.querySelectorAll('.project-detail-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const projectsData = {
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar o layout de um Centro de Distribuição de 55 mil m³ para aumentar a eficiência da área de picking.</p>
                <p><strong>Minha Contribuição:</strong> Implementei mudanças estratégicas e utilizei KANBAN e Curva ABC para otimização.</p>
                <img src="assets/Indicador - Ocupação.jpeg" alt="Layout">
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Minha Contribuição:</strong> Atualização diária de indicadores gerenciais utilizando SQL e Power BI.</p>
                <img src="assets/Indicador - Bloqueio PowerBi.jpeg" alt="Power BI">
            `
        },
        projeto3: {
            title: "Controle Orçamentário e Gestão de Fornecedores",
            content: `
                <p><strong>Descrição:</strong> Controle de pagamentos de serviços essenciais e contato direto com fornecedores.</p>
                <img src="assets/Indicador Financeiro.jpg" alt="Financeiro">
            `
        },
        projeto4: {
            title: "Implantação de Equipamentos e Processos FULFILLMENT",
            content: `
                <p><strong>Descrição:</strong> Domínio dos processos logísticos relacionados a fornecedores parceiros.</p>
                <img src="assets/Indicador - Full.jpeg" alt="Fulfillment">
            `
        },
        agendelogo: {
            title: "Agende Logo",
            content: `
                <p><strong>Site:</strong> <a href="https://agendelogo.com/" target="_blank">agendelogo.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/agende_logo/" target="_blank">@agende_logo</a></p>
                <p>Soluções digitais focadas em agendamento e branding para negócios.</p>
                <img src="assets/Insta_Agendelogo.png" alt="Agende Logo">
            `
        },
        eloeterno: {
            title: "Elo Eterno",
            content: `
                <p><strong>Site:</strong> <a href="https://eloeterno.com/" target="_blank">eloeterno.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/elo_eterno.ofic/" target="_blank">@elo_eterno.ofic</a></p>
                <p>Preservação de memórias através de tecnologia e conexões duradouras.</p>
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
});
