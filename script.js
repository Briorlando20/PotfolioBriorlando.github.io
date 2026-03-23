document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const projectDetailButtons = document.querySelectorAll('.project-detail-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const projectsData = {
        agendelogo: {
            title: "Agende Logo | Founder & Developer",
            content: `
                <p><strong>O que é:</strong> Plataforma de Gestão de Fluxo para resolver caos de filas e ociosidade de profissionais[cite: 101, 102].</p>
                <p><strong>Como funciona:</strong> Automação de reservas 24/7 com uso de LLMs (IA) para atendimento e triagem[cite: 102, 103].</p>
                <p><strong>Impacto:</strong> Análise preditiva para sugerir horários de maior conversão e redução drástica de no-shows[cite: 104].</p>
            `
        },
        eloeterno: {
            title: "ELOeterno | Co-founder & Arquiteto",
            content: `
                <p><strong>Sentido:</strong> Criar uma ponte entre o físico e digital para homenagens via QR Code[cite: 106, 107].</p>
                <p><strong>IA Aplicada:</strong> Uso de IA Generativa para estruturação de narrativas biográficas personalizadas[cite: 108].</p>
                <p><strong>Stack:</strong> Ciclo completo desde a interface HTML/CSS até a camada de dados em SQL[cite: 109].</p>
            `
        },
        projeto1: {
            title: "Layout CD - Magazine Luiza",
            content: `
                <p><strong>Escopo:</strong> Gestão de 55 mil m³ focada em eficiência de picking[cite: 96].</p>
                <p><strong>Ações:</strong> Uso de KANBAN e análise de Curva ABC para otimização de endereços[cite: 96].</p>
            `
        },
        projeto2: {
            title: "Indicadores Power BI/SQL",
            content: `
                <p><strong>Ação:</strong> Atualização diária de indicadores de recebimento e estoque para diretoria[cite: 85].</p>
                <p><strong>Técnica:</strong> Extração de dados via SQL e BigQuery para dashboards gerenciais[cite: 89, 98].</p>
            `
        },
        projeto3: {
            title: "Controle Orçamentário",
            content: `
                <p><strong>Gestão:</strong> Controle financeiro de serviços como energia, água e manutenção predial[cite: 90].</p>
                <p><strong>Interface:</strong> Contato direto com fornecedores para garantir conformidade dos serviços[cite: 91].</p>
            `
        },
        projeto4: {
            title: "Fulfillment - Magazine Luiza",
            content: `
                <p><strong>Implantação:</strong> Estruturação de equipamentos para armazenagem Fulfillment[cite: 97].</p>
                <p><strong>Processos:</strong> Domínio da logística relacionada a fornecedores parceiros[cite: 97].</p>
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
    window.addEventListener('click', (e) => { if (e.target === projectModal) projectModal.style.display = 'none'; });
});
