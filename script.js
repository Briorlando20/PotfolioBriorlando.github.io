document.addEventListener('DOMContentLoaded', () => {
    // Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.onclick = () => { navLinks.classList.toggle('active'); hamburger.classList.toggle('active'); };

    // Modal logic
    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const projectsData = {
        projeto1: { title: "Layout CD Magalu", content: "<p>Gestão de 55 mil m² focada em picking e KANBAN.</p>" },
        projeto2: { title: "Power BI & SQL", content: "<p>Análise de indicadores e malha fiscal.</p>" },
        agendelogo: { 
            title: "Agende Logo [cite: 100]", 
            content: "<p>Automação de reservas 24/7 e dashboards de performance[cite: 102]. Tecnologia LLM para triagem via IA[cite: 103].</p>" 
        },
        eloeterno: { 
            title: "Elo Eterno [cite: 105]", 
            content: "<p>Memoriais digitais interativos acessíveis via QR Code[cite: 107]. IA Generativa para narrativas biográficas[cite: 108].</p>" 
        }
    };

    document.querySelectorAll('.project-detail-btn').forEach(btn => {
        btn.onclick = () => {
            const data = projectsData[btn.dataset.projectId];
            if (data) {
                modalTitle.innerText = data.title;
                modalBody.innerHTML = data.content;
                projectModal.style.display = 'flex'; // Só aparece ao clicar
            }
        };
    });

    closeButton.onclick = () => projectModal.style.display = 'none';
    window.onclick = (e) => { if (e.target == projectModal) projectModal.style.display = 'none'; };
});
