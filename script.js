document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.onclick = () => { navLinks.classList.toggle('active'); hamburger.classList.toggle('active'); };

    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const projectsData = {
        projeto1: { title: "Layout CD Magalu", content: "<p>Gestão de 55 mil m² focada em picking e KANBAN[cite: 96].</p>" },
        projeto2: { title: "Power BI & SQL", content: "<p>Análise de indicadores diários para suporte gerencial[cite: 85].</p>" },
        projeto3: { title: "Controle Orçamentário", content: "<p>Gestão de pagamentos de serviços prediais e suprimentos[cite: 90].</p>" },
        projeto4: { title: "Fulfillment", content: "<p>Implantação de operações para parceiros logísticos[cite: 97].</p>" },
        agendelogo: { title: "Agende Logo", content: "<p>Plataforma de agendamento inteligente com IA[cite: 101, 103].</p>" },
        eloeterno: { title: "Elo eterno", content: "<p>Memoriais digitais via QR Code e IA Generativa[cite: 106, 108].</p>" }
    };

    document.querySelectorAll('.project-detail-btn').forEach(btn => {
        btn.onclick = () => {
            const data = projectsData[btn.dataset.projectId];
            if (data) {
                modalTitle.innerText = data.title;
                modalBody.innerHTML = data.content;
                projectModal.style.display = 'flex';
            }
        };
    });

    closeButton.onclick = () => projectModal.style.display = 'none';
    window.onclick = (e) => { if (e.target == projectModal) projectModal.style.display = 'none'; };
});
