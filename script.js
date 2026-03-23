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
            title: "Layout CD - Magazine Luiza",
            content: "<p>Gestão de 55 mil m² focada na eficiência de picking e Curva ABC[cite: 96].</p>"
        },
        projeto2: {
            title: "Indicadores Power BI/SQL",
            content: "<p>Atualização diária de dashboards para suporte gerencial[cite: 85].</p>"
        },
        projeto3: {
            title: "Controle Orçamentário",
            content: "<p>Gestão de pagamentos de serviços e orçamentos de suprimentos[cite: 90].</p>"
        },
        projeto4: {
            title: "Processos Fulfillment",
            content: "<p>Implantação de operações para fornecedores parceiros[cite: 97].</p>"
        },
        agendelogo: {
            title: "Agende Logo | Founder",
            content: "<p>Plataforma inteligente para automação de reservas e redução de no-shows via IA[cite: 101, 104].</p>"
        },
        eloeterno: {
            title: "Elo Eterno | Co-founder",
            content: "<p>Memoriais digitais interativos via QR Code e IA Generativa[cite: 106, 108].</p>"
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
