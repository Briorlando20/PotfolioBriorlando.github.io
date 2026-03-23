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
                <p><strong>Solução:</strong> Automação de reservas 24/7 e dashboards de performance para redução de ociosidade[cite: 102].</p>
                <p><strong>Tecnologia & IA:</strong> Desenvolvimento integrado a LLMs para automação de atendimento e triagem de clientes[cite: 103].</p>
                <p><strong>Impacto:</strong> Análise preditiva para sugestão de horários de maior conversão e redução de no-shows[cite: 104].</p>
            `
        },
        eloeterno: {
            title: "ELOeterno | Co-founder & Arquiteto de Soluções",
            content: `
                <p><strong>Solução:</strong> Memoriais digitais interativos acessíveis via QR Code em suportes físicos[cite: 107].</p>
                <p><strong>Tecnologia & IA:</strong> Uso de IA Generativa para estruturação de narrativas biográficas e curadoria de dados[cite: 108].</p>
                <p><strong>Arquitetura:</strong> Ciclo completo desde interface (HTML/CSS) até a camada de dados (SQL)[cite: 109].</p>
            `
        },
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar layout de 55 mil m³ para aumentar eficiência de picking[cite: 96].</p>
                <p><strong>Minha Contribuição:</strong> Uso de KANBAN e análise de Curva ABC para otimização de endereços[cite: 96].</p>
                <p><strong>Ferramentas:</strong> WMS, ORACLE, SQL e Power BI[cite: 92, 98].</p>
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Desafio:</strong> Visibilidade de indicadores de recebimento e estoque[cite: 85].</p>
                <p><strong>Contribuição:</strong> Tratativa de malha fiscal e atualização de indicadores diários[cite: 85, 87].</p>
                <p><strong>Ferramentas:</strong> SQL Analítico, BigQuery e Data Studio[cite: 47, 98].</p>
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
