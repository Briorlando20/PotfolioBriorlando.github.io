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
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar o layout de 55 mil m³ para aumentar a eficiência da área de picking[cite: 96]. </p>
                <p><strong>Contribuição:</strong> Implementação estratégica com ferramenta KANBAN e análise de Curva ABC[cite: 96]. </p>
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos - Power BI/SQL",
            content: `
                <p><strong>Ação:</strong> Atualização diária de indicadores transformando dados brutos em informações compreensíveis para a diretoria[cite: 85]. </p>
                <pre><code>SELECT A.CD_ENDERECO FROM maga-bigdata.wis.t_endereco_estoque A;</code></pre>
            `
        },
        projeto3: {
            title: "Controle Orçamentário",
            content: `<p>Gestão orçamentária de serviços como energia, água e manutenção predial[cite: 90].</p>`
        },
        projeto4: {
            title: "Implantação FULFILLMENT",
            content: `<p>Domínio dos processos logísticos relacionados a fornecedores parceiros[cite: 97].</p>`
        },
        agendelogo: {
            title: "Agende Logo | Founder",
            content: `<p>Plataforma inteligente para automação de reservas e redução de no-shows via IA[cite: 101, 104].</p>`
        },
        eloeterno: {
            title: "Elo eterno | Arquiteto",
            content: `<p>Memoriais digitais interativos integrados via QR Code e narrativas por IA Generativa[cite: 106, 108].</p>`
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
