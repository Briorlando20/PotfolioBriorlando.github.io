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
                <p><strong>Ações:</strong> Implementação de KANBAN e Curva ABC para otimização de endereços de armazenagem[cite: 96]. </p>
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Desafio:</strong> Fornecer visibilidade sobre indicadores de recebimento e estoque[cite: 85]. </p>
                <p><strong>Código SQL Exemplo:</strong></p>
                <pre><code>SELECT A.CD_ENDERECO, B.NM_EMPRESA FROM maga-bigdata.wis.t_endereco_estoque A JOIN maga-bigdata.wis.t_empresa B ON A.CD_EMPRESA = B.CD_EMPRESA;</code></pre>
            `
        },
        projeto3: {
            title: "Controle Orçamentário e Fornecedores",
            content: `<p>Gestão orçamentária de serviços como energia, água e manutenção predial[cite: 90].</p>`
        },
        projeto4: {
            title: "Implantação de Processos FULFILLMENT",
            content: `<p>Implantação de estruturas para armazenagem Fulfillment e gestão de processos com fornecedores parceiros[cite: 97].</p>`
        },
        agendelogo: {
            title: "Agende Logo | Founder & Developer",
            content: `
                <p><strong>Solução:</strong> Gestão de Fluxo Inteligente para resolver ociosidade de profissionais[cite: 101].</p>
                <p><strong>IA:</strong> Automação de atendimento via LLM e análise preditiva de no-shows[cite: 103, 104].</p>
            `
        },
        eloeterno: {
            title: "Elo eterno | Arquiteto de Soluções",
            content: `
                <p><strong>Solução:</strong> Memoriais digitais interativos integrados via QR Code[cite: 107].</p>
                <p><strong>IA:</strong> Uso de IA Generativa para estruturação de narrativas biográficas[cite: 108].</p>
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
