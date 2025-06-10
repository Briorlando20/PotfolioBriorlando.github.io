// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer (Responsividade)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (apenas para mobile)
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

    // Dados dos projetos (você pode carregar de um JSON ou diretamente aqui)
    const projectsData = {
        projeto1: {
            title: "Otimização de Layout de CD - Magazine Luiza",
            content: `
                <p><strong>Desafio:</strong> Otimizar o layout de um Centro de Distribuição de 55 mil m³ para aumentar a eficiência da área de picking e garantir o fluxo adequado de produtos. </p>
                <p><strong>Minha Contribuição:</strong> Implementei mudanças estratégicas no layout, utilizei a ferramenta KANBAN para assegurar o abastecimento correto das áreas de picking e realizei análises de giros dos produtos (Curva ABC) para otimizar os endereços de armazenagem. </p>
                <p><strong>Resultados:</strong> Aumentei a eficiência do processo de separação de pedidos em X%, reduzindo o tempo de picking e garantindo que não houvesse divergências sistêmicas no cadastro e endereçamento de produtos. </p>
                <p><strong>Ferramentas:</strong> Power BI para dashboards de acompanhamento, Excel para análises detalhadas, sistemas WMS e ORACLE para gestão de estoque. </p>
                <p><em>Exemplo de Dashboard de Eficiência (se tiver um embeddable):</em></p>
                <img src="assets/images/dashboard-exemplo.png" alt="Dashboard de Eficiência">
            `
        },
        projeto2: {
            title: "Análise de Indicadores Logísticos com Power BI/SQL",
            content: `
                <p><strong>Desafio:</strong> Fornecer visibilidade e insights acionáveis sobre os indicadores do setor de recebimento, controle de estoque e suprimentos para apoiar análises gerenciais. </p>
                <p><strong>Minha Contribuição:</strong> Fui responsável pela atualização diária desses indicadores, transformando dados brutos em informações compreensíveis para a diretoria. Participei ativamente de reuniões para apresentar os resultados, dados e propor melhorias eficientes. </p>
                <p><strong>Resultados:</strong> Melhorei a tomada de decisão da equipe gerencial, identificando gargalos e oportunidades de otimização nos processos logísticos. Minhas análises levaram à implementação de X novas propostas de melhoria.</p>
                <p><strong>Ferramentas:</strong> SQL para extração e manipulação de grandes volumes de dados , Power BI para criação de dashboards dinâmicos , Excel para análises complementares e simulações. </p>
                <p><em>Exemplo de Relatório SQL:</em></p>
                <pre><code>SELECT 
  A.CD_ENDERECO AS ENDERECO,
  A.CD_EMPRESA || ' - ' || B.NM_EMPRESA AS EMPRESA,
  A.CD_TIPO_ENDERECO || ' - ' || F.DS_TIPO_ENDERECO AS TIPO_DE_END,
  A.CD_CLASSE || ' - ' || D.DS_CLASSE AS CLASSE,
  A.CD_SITUACAO || ' - ' || E.DS_SITUACAO AS SITUACAO,
  A.CD_AREA_ARMAZ AS AREA,
  CASE 
    WHEN ID_ARMAZ_FLEXIVEL = 'S' THEN 'SIM'
    WHEN ID_ARMAZ_FLEXIVEL = 'N' THEN 'NAO'
  END AS FLEXIVEL,
  CD_ROTATIVIDADE AS ROTATIVIDADE,
  CASE 
    WHEN ID_ENDERECO_BAIXO = 'S' THEN 'BAIXO'
    WHEN ID_ENDERECO_BAIXO = 'N' THEN 'ALTO'
  END AS NIVEL,
  TP_PALETE AS TIPO_DE_PALETE
FROM
  maga-bigdata.wis.t_endereco_estoque A
  JOIN maga-bigdata.wis.t_empresa B ON A.CD_EMPRESA = B.CD_EMPRESA
  JOIN maga-bigdata.wis.t_classe D ON A.CD_CLASSE = D.CD_CLASSE
  JOIN maga-bigdata.wis.t_situacao E ON A.CD_SITUACAO = E.CD_SITUACAO
  JOIN maga-bigdata.wis.t_tipo_endereco F ON A.CD_TIPO_ENDERECO = F.CD_TIPO_ENDERECO
WHERE 
  A.CD_EMPRESA = 12500
  AND TRIM(A.CD_ENDERECO) LIKE '%C'
ORDER BY
  A.CD_ENDERECO;
                </code></pre>
            `
        },
        projeto3: {
            title: "Controle Orçamentário e Gestão de Fornecedores",
            content: `
                <p><strong>Desafio:</strong> Gerenciar o controle orçamentário e financeiro de diversos serviços essenciais, além de otimizar o relacionamento com fornecedores. </p>
                <p><strong>Minha Contribuição:</strong> Responsável pelo controle orçamentário de compras e pagamentos de serviços como energia, água, fretado, manutenção predial e refeição. Mantinha contato direto com todos os fornecedores para garantir a qualidade e a conformidade dos serviços. </p>
                <p><strong>Resultados:</strong> Contribuí para uma gestão mais eficiente dos recursos, identificando oportunidades de otimização de custos e garantindo a continuidade dos serviços essenciais. Implementei um processo de auditoria que reduziu os custos com fornecedores em Y%.</p>
                <p><strong>Ferramentas:</strong> Excel para controle orçamentário e projeções, sistemas AUTOMIDIA e ORACLE para gestão de pagamentos e fornecedores. </p>
            `
        }
        // Adicione mais projetos aqui
    };

    projectDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.projectId;
            const project = projectsData[projectId];
            if (project) {
                modalTitle.textContent = project.title;
                modalBody.innerHTML = project.content;
                projectModal.style.display = 'flex'; // Exibe o modal
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none'; // Esconde o modal
    });

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none'; // Esconde o modal ao clicar fora
        }
    });

    // Animação de barras de progresso ao scroll (opcional, pode ser mais complexo)
    const skillBars = document.querySelectorAll('.progress-fill');
    const skillsSection = document.getElementById('skills');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Quando 50% da seção de habilidades estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    // O CSS já define a largura final, o JS só aciona a transição
                    // bar.style.width = bar.dataset.width; // Se você quisesse controlar com JS
                });
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    if (skillsSection) {
        observer.observe(skillsSection);
    }
});