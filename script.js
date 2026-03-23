document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const projectModal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const projectsData = {
        projeto1: { 
            title: "Otimização de Layout de CD", 
            content: "Desafio: Otimizar o layout de 55 mil m³. Resultados Ilustrativos: Redução de 15% no tempo de picking e aumento de 10% na capacidade de armazenamento." 
        },
        projeto2: { 
            title: "Análise com Power BI/SQL", 
            content: "Desafio: Automatizar indicadores de recebimento. Resultados Ilustrativos: Economia de 2 horas diárias e acuracidade elevada para 99.8%." 
        },
        projeto3: { 
            title: "Controle Orçamentário", 
            content: "Desafio: Centralizar pagamentos de utilidades. Resultados Ilustrativos: Identificação de 5% de redução de custos fixos através de auditoria." 
        },
        projeto4: { 
            title: "Implantação Fulfillment", 
            content: "Desafio: Implementar infraestrutura para parceiros. Resultados Ilustrativos: Setup de 20 novos postos e 100% de conformidade em auditorias." 
        },
        agendelogo: { 
            title: "Agende Logo", 
            content: "Website: agendelogo.com. Soluções inteligentes de agendamento e branding visual para empresas." 
        },
        eloeterno: { 
            title: "Elo Eterno", 
            content: "Website: eloeterno.com. Tecnologia voltada para a preservação de memórias digitais e legados." 
        }
    };

    document.querySelectorAll('.project-detail-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const data = projectsData[btn.dataset.projectId];
            modalTitle.innerText = data.title;
            modalBody.innerText = data.content;
            projectModal.classList.add('active');
        });
    });

    closeButton.onclick = () => projectModal.classList.remove('active');
    window.onclick = (e) => { if(e.target == projectModal) projectModal.classList.remove('active'); };
});
