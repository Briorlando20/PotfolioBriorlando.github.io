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
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar um CD de 55 mil m³ para maximizar a eficiência do picking.</p>
                <p><strong>Contribuição:</strong> Implementação de KANBAN, Curva ABC e reestruturação de endereçamento.</p>
                <p><strong>Ferramentas:</strong> Power BI, Excel, WMS e Oracle.</p>
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos",
            content: `
                <p><strong>Escopo:</strong> Monitoramento de recebimento, estoque e suprimentos.</p>
                <p><strong>Tecnologia:</strong> SQL BigQuery para extração e Power BI para visualização gerencial.</p>
            `
        },
        agendelogo: {
            title: "Agende Logo | Fundador e Desenvolvedor",
            content: `
                <p><strong>Solução:</strong> Plataforma de Gestão de Fluxo e Agendamento Inteligente para prestadores de serviços.</p>
                <p><strong>Tecnologia & IA:</strong> Integração com LLMs para automação de atendimento e triagem via IA.</p>
                <p><strong>Destaque:</strong> Redução drástica de no-shows através de lembretes inteligentes.</p>
                <hr>
                <p><a href="https://agendelogo.com/" target="_blank" class="btn primary">Acessar Site Oficial</a></p>
                <p><a href="https://www.instagram.com/agende_logo/" target="_blank" style="color: #E1306C;"><i class="fab fa-instagram"></i> Siga no Instagram</a></p>
            `
        },
        eloeterno: {
            title: "Elo Eterno | Fundador e Desenvolvedor",
            content: `
                <p><strong>Solução:</strong> Ecossistema digital de preservação de memória através de memoriais interativos via QR Code.</p>
                <p><strong>Arquitetura:</strong> Ciclo completo (SDLC), desde UI (HTML/CSS) até modelagem SQL.</p>
                <p><strong>IA:</strong> Uso de IA Generativa para estruturação de narrativas biográficas.</p>
                <hr>
                <p><a href="https://eloeterno.com/" target="_blank" class="btn primary">Acessar Site Oficial</a></p>
                <p><a href="https://www.instagram.com/elo_eterno.ofic/" target="_blank" style="color: #E1306C;"><i class="fab fa-instagram"></i> Siga no Instagram</a></p>
            `
        },
        projeto3: {
            title: "Controle Orçamentário",
            content: `<p>Gestão de pagamentos de utilidades (Energia, Água, Refeição) e controle de contratos de manutenção.</p>`
        },
        projeto4: {
            title: "Implantação Fulfillment",
            content: `<p>Domínio dos processos logísticos relacionados a fornecedores parceiros e estruturação de armazenagem especializada.</p>`
        }
    };

projectDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.dataset.projectId;
        const project = projectsData[projectId];
        if (project) {
            modalTitle.textContent = project.title;
            modalBody.innerHTML = project.content;
            
            // Esta linha abaixo deve estar exatamente aqui, 
            // para só abrir quando houver um clique:
            projectModal.style.display = 'flex'; 
        }
    });
});

    closeButton.addEventListener('click', () => { projectModal.style.display = 'none'; });
    window.addEventListener('click', (event) => { if (event.target === projectModal) projectModal.style.display = 'none'; });
});
