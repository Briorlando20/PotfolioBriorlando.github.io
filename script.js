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
            content: "Desafio: Otimizar o layout de 55 mil m³ para reduzir o tempo de deslocamento operacional. Resultados Ilustrativos: Redução de 15% no tempo médio de picking e aumento de 10% na capacidade de armazenamento. Ferramentas: KANBAN, Curva ABC, AutoCAD e WMS." 
        },
        projeto2: { 
            title: "Análise com Power BI/SQL", 
            content: "Desafio: Automatizar o acompanhamento de metas diárias de recebimento. Resultados Ilustrativos: Economia de 2 horas diárias de trabalho manual e acuracidade de estoque elevada para 99.8%. Ferramentas: SQL Server, Power BI e Google Data Studio." 
        },
        projeto3: { 
            title: "Controle Orçamentário", 
            content: "Desafio: Centralizar o controle de pagamentos de utilidades (água, luz e fretados). Resultados Ilustrativos: Identificação de 5% de redução de custos fixos através de auditoria de contratos e faturas. Ferramentas: Excel Avançado e SAP ERP." 
        },
        projeto4: { 
            title: "Implantação Fulfillment", 
            content: "Desafio: Implementar a infraestrutura para operações de parceiros externos. Resultados Ilustrativos: Setup completo de 20 novos postos de trabalho e 100% de conformidade nos processos de auditoria logística. Ferramentas: WMS Oracle e Gestão de Projetos." 
        },
        agendelogo: { 
            title: "Agende Logo", 
            content: "Site: agendelogo.com. Instagram: @agende_logo. Plataforma especializada em soluções inteligentes de agendamento online e criação de identidade visual personalizada para empresas." 
        },
        eloeterno: { 
            title: "Elo Eterno", 
            content: "Site: eloeterno.com. Instagram: @elo_eterno.ofic. Projeto inovador focado na preservação de memórias digitais e conexões significativas por meio de tecnologia avançada." 
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
