import type { LocaleContent } from './content-types';

export const ptBR: LocaleContent = {
  metaDescription: 'Ferramentas de IA gratuitas para devs: revisão de código, PDF, currículos e imagens. Sem cadastro, grátis para sempre.',
  testimonials: [
    {
      quote: 'O CodeEnhance AI cortou meu tempo de iteração no frontend pela metade. As sugestões da IA em tempo real parecem pair programming com um dev sênior.',
      name: 'Priya Sharma',
      role: 'Engenheira Frontend, Mumbai'
    },
    {
      quote: 'O LS PDF Tools sozinho aposentou três assinaturas pagas do time. Totalmente client-side, rápido e grátis — inacreditável.',
      name: 'Daniel Kim',
      role: 'Indie Hacker, Seul'
    },
    {
      quote: 'O blog da Lade Stack é minha referência para arquitetura RAG e MLOps. Profundo, prático, sem enrolação.',
      name: 'Ana Souza',
      role: 'Engenheira de ML, São Paulo'
    }
  ],
  products: [
    {
      title: 'CodeEnhance AI',
      tagline: 'Visualizador e aprimorador de código inteligente',
      desc: 'Transforme código bruto em software pronto para produção com lint de IA em tempo real, sugestões e preview instantâneo.',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: 'Popular'
    },
    {
      title: 'API Testing Platform',
      tagline: 'Testes REST e GraphQL automatizados',
      desc: 'Gere suítes de validação automatizadas, mocke respostas de API e rode benchmarks de segurança em segundos.',
      icon: 'lucide:network',
      link: '/apps',
      badge: 'Alta velocidade'
    },
    {
      title: 'Website Builder AI',
      tagline: 'Gerador semântico no-code',
      desc: 'Gere interfaces modernas e responsivas com marcação semântica e exporte para HTML/CSS padrão.',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: 'Zero código'
    },
    {
      title: 'Secure File Hub',
      tagline: 'Compartilhamento criptografado para devs',
      desc: 'Compartilhamento temporário, rápido e seguro para configs, credenciais e arquivos de deploy.',
      icon: 'lucide:shield-check',
      link: '/apps',
      badge: 'Criptografado'
    }
  ],
  supportTopics: [
    { title: 'Começando', text: 'Escolha um app na galeria e esteja produtivo em um minuto — sem cadastro.' },
    { title: 'Ferramentas de arquivo', text: 'As ferramentas de PDF e imagem rodam 100% no seu navegador. Para arquivos grandes, prefira desktop com conexão estável.' },
    { title: 'CodeEnhance AI', text: 'Cole o código, escolha uma ação, revise as sugestões e copie ou baixe o resultado.' },
    { title: 'Contas e dados', text: 'Sem contas. Limpe os dados do site quando quiser — a exportação protege seu trabalho.' }
  ],
  supportFaqs: [
    { q: 'Uma ferramenta não carrega. E agora?', a: 'Dê um hard refresh, desative bloqueadores agressivos para ladestack.in e tente um Chromium ou Firefox recente.' },
    { q: 'Meus arquivos vão para algum servidor?', a: 'Não. As ferramentas principais rodam totalmente no cliente; nada sai do seu dispositivo.' },
    { q: 'Como reporto um bug?', a: 'Escreva para admin@ladestack.in com o nome da ferramenta, versão do navegador e passos para reproduzir. Prints ajudam.' },
    { q: 'Posso sugerir uma ferramenta nova?', a: 'Claro — pedidos da comunidade ditam o roadmap. Fale pela página de contato.' },
    { q: 'Ferramenta grátis tem SLA?', a: 'Sem SLA formal, mas monitoramos uptime sem parar e corrigimos regressões rápido.' },
    { q: 'Onde aprendo boas práticas?', a: 'Comece pela Documentação e pelo Blog — mais de 27 guias cobrem desenvolvimento com IA de ponta a ponta.' }
  ],
  contactFaqs: [
    {
      q: 'O que é o Lade Stack?',
      a: 'O Lade Stack é uma plataforma independente de software e tecnologia fundada na Índia, dedicada a criar ferramentas práticas para desenvolvedores, software com IA, produtos SaaS e aplicações web modernas. O foco da plataforma é eliminar o atrito dos fluxos de trabalho técnicos por meio de design de UI/UX bem pensado, engenharia limpa e automação direcionada.'
    },
    {
      q: 'Quem está por trás do Lade Stack?',
      a: 'O Lade Stack foi fundado e é arquitetado por Girish Lade, que atua como Fundador e Arquiteto-Chefe de Software (Founder & Lead Software Architect). Unindo uma bagagem multidisciplinar em design de UI/UX, engenharia frontend e backend, arquitetura em nuvem e IA Generativa, Girish define a direção dos produtos e constrói ferramentas para resolver problemas reais de engenharia.'
    },
    {
      q: 'O que diferencia o Lade Stack de outras plataformas?',
      a: 'Em vez de perseguir modismos especulativos ou criar suítes corporativas infladas, o Lade Stack é liderado pelo fundador e une design com engenharia robusta. As ferramentas são projetadas para serem rápidas, acessíveis e úteis imediatamente, sem barreiras de cadastro, configurações complexas ou tentativas forçadas de venda.'
    },
    {
      q: 'Que tipos de produtos o Lade Stack constrói?',
      a: 'O Lade Stack desenvolve utilitários focados para desenvolvedores, ferramentas inteligentes de aprimoramento de código, aplicativos de produtividade no lado do cliente e software web moderno. O ecossistema inclui o CodeEnhance AI (edição e aprimoramento de código no navegador), LS PDF Tools e LS Image Studio (utilitários de mídia privados que rodam localmente), Swift Resume e ferramentas para desenvolvedores como a API Testing Platform.'
    },
    {
      q: 'O Lade Stack é voltado exclusivamente para desenvolvedores?',
      a: 'Muitas de nossas ferramentas principais — como o CodeEnhance AI, a API Testing Platform e a documentação técnica — foram pensadas primeiro para desenvolvedores, acelerando ciclos de entrega e eliminando tarefas repetitivas. No entanto, utilitários de produtividade como o LS PDF Tools, o LS Image Studio e o Swift Resume foram feitos para serem igualmente intuitivos e valiosos para estudantes, criadores e profissionais de diversas áreas.'
    },
    {
      q: 'Como o Lade Stack utiliza Inteligência Artificial Generativa?',
      a: 'A IA Generativa é integrada de forma pragmática, apenas onde a inteligência de máquina traz ganhos comprovados de agilidade — como na análise de estruturas de código, sugestões contextuais e automação de documentação. Evitamos colocar IA apenas como enfeite e focamos em assistência real e supervisionada por humanos que economize tempo.'
    },
    {
      q: 'Os produtos do Lade Stack funcionam no navegador?',
      a: 'Sim. A grande maioria das aplicações do Lade Stack roda diretamente nos navegadores web modernos, proporcionando acesso instantâneo sem instalações pesadas ou dependências locais. Várias ferramentas, incluindo as de manipulação de arquivos e imagens, executam todo o processamento localmente no seu dispositivo, com máxima velocidade e privacidade.'
    },
    {
      q: 'O Lade Stack é realmente gratuito?',
      a: 'Sim. As principais ferramentas de desenvolvimento e produtividade do Lade Stack são totalmente gratuitas, sem paywalls, períodos de teste ocultos ou necessidade de cadastrar cartão de crédito. Nosso objetivo é manter softwares de alta utilidade acessíveis a desenvolvedores, estudantes e criadores em qualquer lugar do mundo.'
    },
    {
      q: 'Todos os produtos do Lade Stack são de código aberto?',
      a: 'O Lade Stack adota uma filosofia aberta e voltada para a comunidade, disponibilizando ferramentas, bibliotecas e tutoriais selecionados no GitHub. No entanto, ser gratuito para usar não significa que todos os serviços internos sejam de código aberto. Você pode conferir os repositórios públicos diretamente no perfil do GitHub de Girish Lade.'
    },
    {
      q: 'Como o Lade Stack lida com privacidade e dados do usuário?',
      a: 'A privacidade é tratada como prioridade arquitetural. Ferramentas essenciais como o LS PDF Tools e o LS Image Studio processam arquivos localmente no navegador, ou seja, seus dados nunca saem da sua máquina. Para ferramentas com serviços online, o tratamento de dados se limita estritamente ao atendimento da solicitação atual. Consulte a documentação de cada produto para obter detalhes.'
    },
    {
      q: 'Como posso obter suporte se encontrar algum problema?',
      a: 'Você pode entrar em contato diretamente pelo formulário desta página ou enviar um e-mail para admin@ladestack.in. Todas as mensagens são lidas diretamente por Girish Lade. Embora não tenhamos um SLA corporativo formal, investigamos problemas com atenção e respondemos a dúvidas construtivas com a maior agilidade possível.'
    },
    {
      q: 'Posso sugerir uma nova funcionalidade ou ferramenta?',
      a: 'Sim, o feedback da comunidade é muito bem-vindo. Você pode enviar ideias e sugestões pelo formulário de contato ou abrindo uma issue no GitHub. As sugestões são avaliadas com base na utilidade prática, viabilidade técnica e alinhamento com a evolução da plataforma.'
    },
    {
      q: 'Encontrei um bug. Qual é a melhor forma de relatar?',
      a: 'Caso encontre alguma falha, envie os detalhes pelo formulário de contato ou pelo e-mail admin@ladestack.in. Informar o nome da ferramenta, navegador, sistema operacional, passos para reproduzir o erro e prints ou mensagens de erro nos ajuda a investigar e corrigir rapidamente.'
    },
    {
      q: 'Onde encontro documentação e tutoriais de uso?',
      a: 'Guias aprofundados, explicações de arquitetura e instruções de configuração estão disponíveis na seção de Documentação (/docs) e no Blog do Lade Stack. Os conteúdos são constantemente atualizados a cada novo lançamento.'
    },
    {
      q: 'O Lade Stack oferece soluções corporativas ou planos para equipes?',
      a: 'O Lade Stack é atualmente uma plataforma independente liderada pelo fundador, focada em ferramentas web leves e eficientes, sem contratos corporativos complexos ou certificações enterprise. No entanto, se sua equipe ou startup tiver necessidades específicas ou dúvidas sobre integrações personalizadas, fique à vontade para entrar em contato e conversar.'
    },
    {
      q: 'Como o Lade Stack decide o que construir a seguir?',
      a: 'As decisões de produto são orientadas pelos gargalos reais enfrentados pelos desenvolvedores, pelo feedback dos usuários e por oportunidades onde tecnologias web modernas e IA Generativa possam reduzir atritos. Cada ideia começa com uma pergunta objetiva: isso realmente economiza tempo e simplifica uma tarefa essencial?'
    },
    {
      q: 'Posso colaborar ou contribuir com o Lade Stack?',
      a: 'Conversas sobre parcerias, feedback técnico e contribuições em código aberto são sempre bem-vindas. Se você é um desenvolvedor interessado em contribuir com os repositórios abertos ou um criador com ideias de integração, fale conosco pelo admin@ladestack.in ou conecte-se pelo LinkedIn e GitHub.'
    }
  ],
  docsGroups: [
    { id: 'getting-started', title: 'Primeiros passos', articles: [
      { title: 'Início rápido: abra seu primeiro app', text: 'Abra a galeria, escolha uma ferramenta e esteja produtivo em um minuto — sem cadastro.' },
      { title: 'Tour pelo ecossistema', text: 'Início, Apps, Blog, Docs e Suporte — como cada área encaixa no seu workflow.' }
    ]},
    { id: 'api-reference', title: 'Referência de API', articles: [
      { title: 'Usando o CodeEnhance AI', text: 'Cole HTML, CSS ou JS, escolha melhorar ou explicar e exporte código pronto.' },
      { title: 'Quotas e uso justo', text: 'Quotas gratuitas generosas com proteção por minuto para todo mundo ir rápido.' }
    ]},
    { id: 'integrations', title: 'Integrações', articles: [
      { title: 'Exportando para GitHub e Vercel', text: 'Copie o código gerado direto para o repo e publique previews em um clique.' }
    ]},
    { id: 'tutorials', title: 'Tutoriais', articles: [
      { title: 'Landing page em 5 minutos', text: 'Do prompt à publicação com Website Builder e Image Studio juntos.' }
    ]},
    { id: 'security', title: 'Segurança', articles: [
      { title: 'Privacidade por design', text: 'Processamento client-side: nas ferramentas principais, nada sai do navegador.' }
    ]},
    { id: 'teams', title: 'Times', articles: [
      { title: 'Colaborando com links', text: 'Compartilhe resultados e templates com o time via exportação JSON portátil.' }
    ]},
    { id: 'data', title: 'Dados', articles: [
      { title: 'Exportando seu trabalho', text: 'Toda ferramenta tem copiar, baixar e exportar markdown — seus dados são seus.' }
    ]},
    { id: 'deployment', title: 'Deploy', articles: [
      { title: 'Checklist de self-hosting', text: 'Arquitetura static-first: espelhar as ferramentas é moleza.' }
    ]}
  ],
  docsChangelog: [
    { v: 'v2.4.0', date: '2026-08-20', text: 'Reescrita em Astro puro com 7 idiomas e Lighthouse 100.' },
    { v: 'v2.3.0', date: '2024-11-30', text: 'Beta do Documentation AI e coleções de API Testing.' },
    { v: 'v2.0.0', date: '2024-06-01', text: 'CodeEnhance AI disponível para todos.' }
  ],
  timeline: [
    { year: '2020', title: 'Nasce a caixinha de ferramentas', text: 'Girish Lade começa a criar utilitários pessoais — PDF, imagem, ajudantes de código.' },
    { year: '2022', title: 'Lade Stack ganha forma', text: 'Linguagem visual única e promessa de grátis para sempre reúnem tudo numa marca.' },
    { year: '2024', title: 'Vira ecossistema de IA', text: 'Lançamento do CodeEnhance AI; blog e docs passam de 27 guias; comunidade passa de 8 mil devs.' },
    { year: '2026', title: 'Reescrita em Astro puro', text: 'Reconstrução 100% estática: zero JS de runtime, 7 idiomas, Lighthouse 100.' }
  ],
  aboutStats: ['Fundação', 'Ferramentas em prod', 'Devs', 'Grátis para sempre'],
  storyExtra: 'Engenheiro e designer multidisciplinar — sistemas de IA, desenvolvimento web e UX. Constrói ferramentas que dão a qualquer criador velocidade de startup, de graça.',
  footerLinks: {
    aiCodeViewer: 'Visualizador de Código IA',
    support: 'Central de ajuda',
    privacy: 'Privacidade',
    terms: 'Termos de uso'
  },
  aicodeFeatures: [
    { title: 'Assistência de IA em tempo real', text: 'Explique, refatore e melhore código enquanto digita, com sugestões fundamentadas.' },
    { title: 'Preview e compilação ao vivo', text: 'Veja o resultado de HTML, CSS e JS na hora, com erros destacados.' },
    { title: 'Melhoria em um clique', text: 'Rascunhos viram código limpo, acessível e pronto para produção.' },
    { title: 'Exporte para qualquer lugar', text: 'Copie ou baixe — sem lock-in, sem marca d’água.' }
  ],
  privacy: [
    { h: 'O que coletamos', p: 'Só o mínimo: mensagens que você envia, e-mail da newsletter que você assina e analytics respeitosa (views, sem rastreio cross-site). As ferramentas principais processam arquivos 100% no navegador — seus documentos nunca chegam aos nossos servidores.' },
    { h: 'Como usamos', p: 'Para responder ao suporte, mandar a newsletter que você pediu e melhorar performance e confiabilidade. Nunca vendemos dados nem compartilhamos com redes de anúncio.' },
    { h: 'Cookies e armazenamento', p: 'Tema e idioma ficam só no localStorage do seu dispositivo. Se houver cookies de analytics, são próprios e anonimizados.' },
    { h: 'Seus direitos', p: 'Peça acesso, correção ou exclusão quando quiser: admin@ladestack.in. Saída da newsletter em um clique.' },
    { h: 'Contato', p: 'Dúvidas sobre a política: admin@ladestack.in, Mumbai, Índia.' }
  ],
  terms: [
    { h: 'Uso aceitável', p: 'Use as ferramentas dentro da lei. Sem abusar de rate limits, sem tentar derrubar o serviço, sem processar conteúdo alheio sem direito.' },
    { h: 'Licença gratuita', p: 'Uso pessoal e comercial grátis. O que você cria é seu. Redistribuir a plataforma sob nossa marca exige permissão.' },
    { h: 'Uso justo da API', p: 'Acesso automatizado respeita as quotas publicadas. Tráfego abusivo pode ser limitado por todos.' },
    { h: 'Sem garantias', p: 'Serviços “como estão”, sem garantias. Lutamos pela confiabilidade, mas não prometemos zero downtime.' },
    { h: 'Limite de responsabilidade', p: 'No máximo permitido por lei, sem responsabilidade por danos indiretos do uso.' },
    { h: 'Contato', p: 'Dúvidas sobre os termos: admin@ladestack.in, Mumbai, Índia.' }
  ],
  apps: {
    'ai-code-viewer-ai': {
      tagline: 'Editor de código frontend com IA',
      description: 'Edite, compile e melhore HTML, CSS e JS com assistência de IA em tempo real.',
      features: ['Assistência de IA ao vivo', 'Preview instantâneo', 'Melhoria em 1 clique']
    },
    'ls-pdf': {
      tagline: 'Kit PDF grátis no navegador',
      description: 'Junte, divida, comprima e converta PDFs 100% no cliente. Sem upload.',
      features: ['Juntar e dividir', 'Comprimir', 'PDF para imagem']
    },
    'ls-img': {
      tagline: 'Comprima e converta imagens na hora',
      description: 'Compressão em lote, resize e conversão no navegador, com privacidade.',
      features: ['Compressão em lote', 'Conversão de formato', 'Resize']
    },
    'swift-resume': {
      tagline: 'Currículos ATS em minutos',
      description: 'Currículos caprichados e otimizados para ATS, com preview ao vivo e exportação PDF.',
      features: ['Templates ATS', 'Preview ao vivo', 'Exportar PDF']
    },
    'bharat-land': {
      tagline: 'Registros de terra da Índia',
      description: 'Consulte e entenda dados fundiários numa interface limpa e rápida.',
      features: ['Busca rápida', 'UI limpa', 'Mobile pronto']
    },
    'api-testing': {
      tagline: 'Teste APIs REST e GraphQL no visual',
      description: 'Desenhe, envie e automatize testes de API com collections e environments.',
      features: ['Collections', 'Environments', 'Scripts de teste']
    },
    'website-builder': {
      tagline: 'Landing pages com IA',
      description: 'Descreva seu site e publique uma landing rápida e pronta para SEO.',
      features: ['Seções com IA', 'SEO por padrão', 'Publicar em 1 clique']
    },
    'file-management': {
      tagline: 'Arquivos com links que expiram',
      description: 'Suba arquivos e compartilhe links seguros com expiração, sob controle.',
      features: ['Links com expiração', 'Sem cadastro', 'CDN rápido']
    },
    'documentation-ai': {
      tagline: 'Resuma docs na hora',
      description: 'Cole docs ou código e receba resumos claros, guias e referências.',
      features: ['Resumos instantâneos', 'Explica código', 'Exportar markdown']
    }
  },
  appTime: {
    'Instant': 'Na hora',
    '1 minute': '1 minuto',
    '2 minutes': '2 minutos',
    '5 minutes': '5 minutos'
  },
  appCategories: {
    'AI Tools': 'Ferramentas de IA',
    'Productivity': 'Produtividade',
    'Utilities': 'Utilidades'
  },
  blogCategories: {
    'AI Development': 'Desenvolvimento com IA',
    'Generative AI': 'IA generativa',
    'SaaS Architecture': 'Arquitetura SaaS',
    'Backend as a Service': 'BaaS',
    'API Design & Scaling': 'Design e escala de APIs',
    'Cloud Computing': 'Nuvem',
    'Virtual Machines': 'VMs',
    'DevOps & CI/CD': 'DevOps e CI/CD',
    'Security in Web Apps': 'Segurança web',
    'AI Production Systems': 'IA em produção'
  },
  blogPosts: {
    'future-of-ai-in-software-development': { title: 'O futuro do desenvolvimento com IA: 2025 e além', description: 'Como modelos generativos, fluxos agênticos e verificação automática estão mudando a engenharia de software.' },
    'building-ai-powered-code-review-systems': { title: 'Construindo code review com IA', description: 'Como desenhar revisões automáticas que pegam bugs, impõem estilo e mentoram devs.' },
    'machine-learning-pipelines-for-web-developers': { title: 'Pipelines de ML para devs web', description: 'Da ingestão ao treino, avaliação e serving — uma entrada prática em ML.' },
    'generative-ai-for-content-creation': { title: 'IA generativa para criar conteúdo', description: 'Como delegar rascunho, edição e escala ao LLM sem perder sua voz.' },
    'building-rag-applications-vector-databases': { title: 'Apps RAG com bancos vetoriais', description: 'Chunking, embeddings, busca vetorial e respostas fundamentadas — RAG de ponta a ponta.' },
    'fine-tuning-llms-domain-specific-tasks': { title: 'Fine-tuning de LLMs por domínio', description: 'Quando tunar e quando só pedir; datasets e pipelines LoRA de baixo custo.' },
    'multi-tenant-saas-architecture-patterns': { title: 'SaaS multi-tenant: padrões', description: 'Silo, pool e bridge: isolamento, custo e escala comparados.' },
    'building-subscription-billing-systems': { title: 'Construindo billing por assinatura', description: 'Trial, prorrata, cobrança e webhooks — um billing que o financeiro confia.' },
    'scaling-saas-applications-million-users': { title: 'SaaS para um milhão de usuários', description: 'Cache, filas, réplicas de leitura e sharding — plano em fases até o milhão.' },
    'baas-platforms-compared-firebase-supabase-appwrite': { title: 'BaaS comparado: Firebase vs Supabase vs Appwrite', description: 'Comparação honesta: auth, banco, preço e estratégia de saída.' },
    'building-serverless-backends-with-baas': { title: 'Backends serverless com BaaS', description: 'Backend de produção sem servidor: schema, edge functions, jobs.' },
    'real-time-data-sync-backend-services': { title: 'Sync de dados em tempo real', description: 'WebSocket, CRDT e realtime gerenciado para presença e edição colaborativa.' },
    'rest-vs-graphql-choosing-right-api-paradigm': { title: 'REST vs GraphQL: o que escolher', description: 'Um framework de decisão via versionamento, cache, payloads e velocidade do time.' },
    'api-rate-limiting-throttling-strategies': { title: 'Rate limiting e throttling em APIs', description: 'Token buckets e quotas que protegem a API sem punir bons clientes.' },
    'building-api-gateways-microservices': { title: 'API gateways para microsserviços', description: 'Auth, roteamento, transformação e observabilidade na borda da frota.' },
    'cloud-cost-optimization-strategies-startups': { title: 'Otimizando custo de cloud em startups', description: 'Rightsizing, commits, lifecycle de storage e tags cortando 30–50% da conta.' },
    'multi-cloud-architecture-aws-azure-gcp': { title: 'Multicloud: AWS, Azure e GCP', description: 'Quando multicloud compensa e como manter portabilidade com containers e IaC.' },
    'containers-vs-vms-when-to-use-each': { title: 'Containers vs VMs: quando usar cada', description: 'Isolamento, overhead e operação — escolha com confiança.' },
    'optimizing-vm-performance-production-workloads': { title: 'Tuning de VMs em produção', description: 'CPU pinning, NUMA, filas de storage e defesa contra vizinho barulhento.' },
    'gitops-managing-infrastructure-with-git': { title: 'GitOps: infra gerida com Git', description: 'Infra declarativa, review em PR, detecção de drift e sync automático.' },
    'building-zero-downtime-deployment-pipelines': { title: 'Deploys sem downtime', description: 'Blue-green, canary e rolling com health gates — deploys que ninguém percebe.' },
    'infrastructure-as-code-terraform-pulumi': { title: 'IaC com Terraform e Pulumi', description: 'HCL ou linguagem de verdade, state e desenho de módulos.' },
    'zero-trust-security-web-applications': { title: 'Zero Trust para web apps', description: 'Nunca confie, sempre verifique: proxies com identidade, credenciais curtas, microssegmentação.' },
    'owasp-top-10-complete-mitigation-guide': { title: 'OWASP Top 10: guia completo', description: 'Os 10 riscos: código vulnerável lado a lado com o corrigido — aplique hoje.' },
    'implementing-oauth2-openid-connect': { title: 'Implementando OAuth2 e OpenID Connect', description: 'Authorization code + PKCE, guarda de tokens, rotação e logout — certo de primeira.' },
    'mlops-deploying-ml-models-production': { title: 'MLOps: modelos em produção', description: 'Registries, serving canário, feature store e rollback — modelos confiáveis.' },
    'monitoring-ai-systems-in-production': { title: 'Monitorando sistemas de IA em prod', description: 'Qualidade, drift, custo e latência das features de IA — com evals e guardrails.' }
  }
};
