document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Modais de Projeto
    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const projectDetailButtons = document.querySelectorAll('.project-detail-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const projectsData = {
        agendelogo: {
            title: "Agende Logo | Founder & Lead Developer",
            content: `
                <p><strong>Sentido de Existência:</strong> Resolver o caos de filas e ociosidade através do agendamento automatizado[cite: 102].</p>
                <p><strong>Tecnologia & IA:</strong> Uso de LLMs para automação de atendimento e análise preditiva[cite: 103, 104].</p>
            `
        },
        eloeterno: {
            title: "ELOeterno | Co-founder & Arquiteto de Soluções",
            content: `
                <p><strong>Sentido de Existência:</strong> Preservar histórias através de QR Codes e memoriais digitais interativos[cite: 106, 107].</p>
                <p><strong>Tecnologia & IA:</strong> Uso de IA Generativa para estruturação de narrativas biográficas[cite: 108].</p>
            `
        },
        projeto1: {
            title: "Otimização de Layout - Magalu",
            content: `
                <p><strong>Ação:</strong> Gestão de 55 mil m² focada na eficiência de picking com KANBAN e Curva ABC[cite: 96].</p>
                <p><strong>Resultados:</strong> Redução do tempo de picking e garantia de zero divergência sistêmica[cite: 96].</p>
            `
        },
        projeto2: {
            title: "Indicadores Power BI/SQL - Magalu",
            content: `
                <p><strong>Ação:</strong> Atualização diária de dashboards para suporte às análises gerenciais da diretoria[cite: 85].</p>
                <p><strong>Ferramentas:</strong> SQL para extração e Power BI para visualização dinâmica[cite: 98].</p>
            `
        },
        projeto3: {
            title: "Controle Orçamentário - Magalu",
            content: `
                <p><strong>Ação:</strong> Gestão de pagamentos de serviços prediais e orçamentos de suprimentos[cite: 90].</p>
                <p><strong>Impacto:</strong> Otimização de custos e continuidade de serviços essenciais no CD[cite: 91].</p>
            `
        },
        projeto4: {
            title: "Fulfillment - Magalu",
            content: `
                <p><strong>Ação:</strong> Implantação física e sistêmica de operações para fornecedores parceiros[cite: 97].</p>
                <p><strong>Conhecimento:</strong> Domínio completo dos processos de logística fulfillment[cite: 97].</p>
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

    closeButton.addEventListener('click', () => { projectModal.style.display = 'none'; });
    window.addEventListener('click', (event) => { if (event.target === projectModal) projectModal.style.display = 'none'; });
});
