document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer (Responsividade)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

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
                <p><strong>Sentido de Existência:</strong> Resolver o caos de filas e a ociosidade de profissionais através do agendamento automatizado, eliminando falhas do WhatsApp.</p>
                <p><strong>Tecnologia & IA:</strong> Uso de LLMs para automação de atendimento e análise preditiva para sugestão de horários de maior conversão.</p>
                <p><strong>O que vende:</strong> Automação 24/7, dashboards de performance e lembretes inteligentes para reduzir no-shows.</p>
            `
        },
        eloeterno: {
            title: "ELOeterno | Co-founder & Arquiteto de Soluções",
            content: `
                <p><strong>Sentido de Existência:</strong> Garantir que legados não se percam, unindo homenagens físicas (QR Code) a memoriais digitais interativos.</p>
                <p><strong>Tecnologia & IA:</strong> Uso de IA Generativa para estruturação de narrativas biográficas a partir de dados brutos.</p>
                <p><strong>Arquitetura:</strong> Desenvolvimento completo desde a interface HTML/CSS até a camada de dados em SQL.</p>
            `
        },
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar o layout de um Centro de Distribuição de 55 mil m³ para aumentar a eficiência da área de picking.</p>
                <p><strong>Minha Contribuição:</strong> Implementei mudanças estratégicas no layout, utilizei KANBAN e análise de Curva ABC.</p>
                <p><strong>Ferramentas:</strong> Power BI, Excel, WMS e ORACLE.</p>
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Desafio:</strong> Fornecer visibilidade sobre indicadores de recebimento, estoque e suprimentos.</p>
                <p><strong>Minha Contribuição:</strong> Atualização diária de indicadores transformando dados brutos em insights para a diretoria.</p>
                <p><strong>Ferramentas:</strong> SQL, Power BI e BigQuery.</p>
            `
        },
        projeto3: {
            title: "Controle Orçamentário e Gestão de Fornecedores",
            content: `
                <p><strong>Desafio:</strong> Gerenciar o controle financeiro de serviços essenciais.</p>
                <p><strong>Minha Contribuição:</strong> Controle de pagamentos (energia, água, fretado) e gestão direta com fornecedores.</p>
            `
        },
        projeto4: {
            title: "Implantação de Equipamentos e Processos FULFILLMENT",
            content: `
                <p><strong>Desafio:</strong> Implantar estruturas para operação Fulfillment.</p>
                <p><strong>Minha Contribuição:</strong> Domínio dos processos logísticos relacionados a fornecedores parceiros.</p>
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

    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });

    // Animação barras de progresso
    const skillBars = document.querySelectorAll('.progress-fill');
    const skillsSection = document.getElementById('skills');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    // Transição acionada pelo CSS
                });
            }
        });
    }, { threshold: 0.5 });

    if (skillsSection) observer.observe(skillsSection);
});
