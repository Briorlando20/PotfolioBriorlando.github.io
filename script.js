document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

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
                <p><strong>Propósito:</strong> Resolver o caos de filas e ociosidade de horários[cite: 102].</p>
                <p><strong>Tecnologia:</strong> Uso de LLMs para automação de atendimento e análise preditiva de conversão[cite: 103, 104].</p>
                <p><strong>Destaque:</strong> Automação 24/7 que reduz drasticamente o no-show[cite: 104].</p>
            `
        },
        eloeterno: {
            title: "ELOeterno | Arquiteto de Soluções",
            content: `
                <p><strong>Propósito:</strong> Criar ponte entre o físico e digital para legados históricos[cite: 106].</p>
                <p><strong>Tecnologia:</strong> IA Generativa para narrativas personalizadas e integração via QR Code[cite: 107, 108].</p>
                <p><strong>Stack:</strong> SQL para arquitetura de dados e interface em HTML/CSS[cite: 109].</p>
            `
        },
        projeto1: {
            title: "Otimização de Layout - Magalu",
            content: `
                <p><strong>Gestão:</strong> Operação em 55 mil m² com foco em eficiência de picking[cite: 96].</p>
                <p><strong>Metodologia:</strong> Aplicação de KANBAN e Curva ABC[cite: 96].</p>
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

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });
});
