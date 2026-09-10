import type { LocaleContent } from './content-types';

export const ptBR: LocaleContent = {
  metaDescription:
    'Lade Stack — Ecossistema prático de ferramentas de desenvolvimento e engenharia de IA fundado por Girish Lade. Inspeção de código, testes de API e utilitários. Grátis para sempre sem cadastro.',
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
      desc: 'Inspecione, depure e aprimore código com linting estrutural por IA em tempo real e visualização imediata no navegador.',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: 'Popular'
    },
    {
      title: 'API Testing Platform',
      tagline: 'Testes REST e GraphQL automatizados',
      desc: 'Valide endpoints de requisição, inspecione payloads de resposta estruturados, depure cabeçalhos e verifique contratos de API no navegador.',
      icon: 'lucide:network',
      link: '/apps',
      badge: 'Alta velocidade'
    },
    {
      title: 'Website Builder AI',
      tagline: 'Prototipador Web Semântico',
      desc: 'Converta ideias de interface em protótipos web modernos e responsivos com HTML/CSS semântico e sem dependências desnecessárias.',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: 'Zero código'
    },
    {
      title: 'Secure File Hub',
      tagline: 'Compartilhamento Seguro de Configs e Arquivos',
      desc: 'Compartilhamento temporário e controlado de arquivos de configuração, credenciais, variáveis de ambiente e artefatos de deploy.',
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
    {
      id: 'getting-started',
      title: 'Primeiros passos',
      articles: [
        {
          title: 'O que é o Lade Stack?',
          text: 'O Lade Stack é um ecossistema independente de ferramentas para desenvolvedores e plataforma de conhecimento técnico criado por Girish Lade (Fundador e Arquiteto-Chefe de Software). Construído com foco em implementação limpa, alto desempenho de execução e automação prática, o Lade Stack oferece utilitários web focados, ferramentas de desenvolvimento com IA Generativa e assistentes de documentos com privacidade em primeiro lugar. Todas as ferramentas rodam diretamente em navegadores modernos sem necessidade de cadastro ou assinaturas ocultas.'
        },
        {
          title: 'Entendendo a arquitetura do ecossistema',
          text: 'O ecossistema Lade Stack é composto por cinco áreas principais projetadas para apoiar os desenvolvedores em todo o ciclo de criação: o Início apresenta a visão técnica da plataforma; a Galeria de Apps (/apps) oferece acesso imediato a ferramentas de produção; o Blog de Engenharia (/blog) traz guias aprofundados de arquitetura; a Documentação (/docs) atua como centro de referência técnica confiável; e a Central de Suporte (/support) fornece assistência de engenharia e FAQs detalhadas.'
        },
        {
          title: 'Início rápido: abra seu primeiro app',
          text: 'Começar a usar o Lade Stack leva menos de trinta segundos. Acesse a Galeria de Apps, selecione uma ferramenta como o CodeEnhance AI ou o LS PDF Tools e comece a trabalhar imediatamente. Os utilitários principais rodam no lado do cliente (client-side) dentro da sandbox do seu navegador usando padrões web, sem necessidade de instalação, configuração de ambiente ou cartão de crédito.'
        },
        {
          title: 'Navegando pela galeria e espaço de trabalho',
          text: 'A Galeria de Apps organiza as ferramentas em áreas lógicas: Ferramentas de IA (CodeEnhance AI, testadores visuais de API e utilitários de documentação inteligente), Produtividade (LS PDF Tools, LS Image Studio, Swift Resume) e Utilitários Gerais (Bharat Land Records, fluxos de arquivos). Cada card exibe o tempo para entrega de valor, integrações suportadas e URLs diretas de execução.'
        },
        {
          title: 'Detalhes dos produtos e ferramentas',
          text: 'O Lade Stack disponibiliza aplicações web sob medida para fluxos de desenvolvimento específicos: o CodeEnhance AI (code.ladestack.in) oferece edição em tempo real de HTML/CSS/JS e refatoração inteligente baseada em AST; o LS PDF Tools (pdf.ladestack.in) processa mesclagem, divisão e compressão de PDFs no próprio navegador sem upload de arquivos; o LS Image Studio (img.ladestack.in) converte e comprime em lote formatos modernos como WebP e AVIF; e o Swift Resume (resume.ladestack.in) gera currículos técnicos otimizados para sistemas ATS.'
        },
        {
          title: 'Fluxo de trabalho essencial do desenvolvedor',
          text: 'O fluxo recomendado segue quatro fases práticas: 1. Entrada (Input): Cole códigos preliminares, carregue documentos ou configure parâmetros diretamente no navegador. 2. Processamento (Process): Utilize a compilação no cliente ou o motor assistido por IA para otimizar a estrutura. 3. Prévia (Preview): Valide o comportamento e a renderização em quadros DOM isolados ou janelas em tempo real. 4. Exportação (Export): Copie o código limpo ou baixe os arquivos diretamente para o seu repositório local.'
        },
        {
          title: 'Completando seu primeiro projeto com sucesso',
          text: 'Para obter seu primeiro resultado rápido no Lade Stack: abra o CodeEnhance AI, cole um botão HTML sem estilo ou menu de navegação, clique em \'Melhorar (Enhance)\' para gerar CSS flexbox responsivo e atributos de acessibilidade (ARIA), teste as interações na sandbox e clique em \'Copiar\' para transferir o código pronto para sua aplicação.'
        },
        {
          title: 'Próximos passos e feedback da comunidade',
          text: 'Após experimentar sua primeira ferramenta, confira nossos artigos detalhados no Blog (/blog) sobre integração com IA generativa, arquitetura estática no Astro e otimização de performance front-end. Para solicitações de recursos, relatos de bugs ou discussões técnicas, fale diretamente com Girish Lade pelo admin@ladestack.in ou via GitHub.'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'Referência de API',
      articles: [
        {
          title: 'Visão geral da API e convenções arquiteturais',
          text: 'As APIs e microsserviços do Lade Stack são projetados em torno de padrões HTTP/REST previsíveis e modelos de execução sem estado (stateless). Os endpoints seguem convenções web estabelecidas: payloads JSON em UTF-8, verbos semânticos (GET, POST), envelopes de erro padronizados e cabeçalhos estritos (Content-Type: application/json), priorizando tráfego leve e baixa latência.'
        },
        {
          title: 'Modelo de acesso público e autenticação',
          text: 'Em consonância com o compromisso de gratuidade permanente do Lade Stack, os utilitários interativos e serviços de análise de código funcionam com acesso público sem atrito. Os fluxos usuais de navegador não exigem chaves de API proprietárias, tokens Bearer ou autenticação de sessão. As requisições são protegidas na borda da rede por verificação de origem e limites de uso justo.'
        },
        {
          title: 'Especificações de requisição e resposta',
          text: 'Todas as interfaces legíveis por máquina comunicam-se via JSON codificado em UTF-8. Chamadas bem-sucedidas retornam status 200 OK com campos estruturados. Em caso de anomalia, são retornados códigos de erro HTTP padronizados (400 Bad Request, 429 Too Many Requests ou 500 Internal Error) acompanhados de um objeto JSON estruturado contendo código de erro, mensagem explicativa e instruções de resolução.'
        },
        {
          title: 'Fluxo de processamento do CodeEnhance AI',
          text: 'Ao solicitar a melhoria ou explicação de um trecho no CodeEnhance AI, o ciclo é determinístico: 1. O cliente captura o código e a linguagem ativa (HTML, CSS, JS). 2. Uma validação preliminar de sintaxe e comprimento é feita no front-end. 3. A requisição viaja criptografada via TLS para o motor de processamento. 4. O sistema analisa a árvore sintática (AST), aplica refatorações e formata a indentação. 5. O código enriquecido retorna ao editor com destaque de diferenças em tempo real.'
        },
        {
          title: 'Requisitos de entrada e padrões de saída',
          text: 'O CodeEnhance AI suporta marcação HTML5 válida, CSS3 moderno (incluindo variáveis personalizadas, Flexbox e Grid) e JavaScript ES6+. Para um processamento confiável, os trechos de entrada devem conter texto simples sem sequências binárias. A saída entrega código semântico e aderente aos padrões web, focado em legibilidade, acessibilidade e performance, sem injetar dependências proprietárias.'
        },
        {
          title: 'Códigos de status e diagnóstico de erros',
          text: 'As respostas do serviço seguem a semântica HTTP: 400 indica JSON malformado ou código inválido; 413 indica que o volume de caracteres excedeu o limite da requisição; 429 indica estouro momentâneo da taxa de chamadas; 504 representa tempo limite de resposta. Quando um erro ocorre, a interface exibe orientações claras e ações recomendadas em vez de rastreamentos de pilha confusos.'
        },
        {
          title: 'Limites de taxa e princípios de uso justo (Fair-use)',
          text: 'Para garantir alta disponibilidade e tempos de resposta inferiores a um segundo para desenvolvedores em todo o mundo, o Lade Stack aplica proteções de pico baseadas em janelas móveis por minuto. As cotas alocadas por origem impedem abusos automatizados e ataques de negação de serviço, reservando largura de banda suficiente para o fluxo diário de desenvolvimento e testes.'
        },
        {
          title: 'Solução de problemas de conectividade na API',
          text: 'Se uma requisição falhar ou demorar para responder: 1. Verifique sua conexão de rede e confirme se o firewall autoriza tráfego HTTPS de saída para os domínios ladestack.in. 2. Certifique-se de que extensões de navegador ou bloqueadores de anúncios não estão retendo requisições Fetch. 3. Verifique se o código enviado não excede os limites de caracteres. 4. Se receber o status 429, aguarde 60 segundos antes de tentar novamente.'
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrações',
      articles: [
        {
          title: 'Exportação para GitHub e controle de versão',
          text: 'As ferramentas do Lade Stack foram desenhadas para se integrar de forma natural com o fluxo do Git. O código gerado no CodeEnhance AI ou em outros utilitários pode ser copiado ou baixado diretamente para o seu repositório Git local. Adicione os arquivos ao seu branch de trabalho (git add . && git commit -m "feat: add enhanced component") para manter o histórico de alterações íntegro.'
        },
        {
          title: 'Exportação limpa e sem dependências proprietárias',
          text: 'Ao contrário de plataformas que prendem o usuário a ecossistemas fechados, o Lade Stack adota uma postura rígida de \'zero lock-in\'. Todo código exportado consiste em HTML5 padrão, CSS moderno e JavaScript/TypeScript modular. Você pode inseri-lo diretamente em projetos Astro, Next.js, Vite ou páginas estáticas simples sem alterar scripts de compilação.'
        },
        {
          title: 'Deploy de prévias e produção na Vercel',
          text: 'Publicar projetos desenvolvidos no Lade Stack na Vercel é extremamente simples: 1. Envie o código exportado para um repositório no GitHub. 2. Conecte o repositório no painel da Vercel. 3. A plataforma detectará automaticamente a estrutura (como Astro ou Vite), ajustando o comando de build (npm run build) e a pasta de saída (dist). 4. Clique em Deploy para obter URLs de prévia e produção na CDN global da Vercel.'
        },
        {
          title: 'Conectando fluxos de trabalho no seu editor de código',
          text: 'Os snippets e modelos exportados se adaptam perfeitamente ao seu ambiente de desenvolvimento. Abra o diretório no VS Code, Cursor ou WebStorm, aplique formatadores como o Prettier e execute o servidor de desenvolvimento local (npm run dev). Por seguir padrões rigorosos da web, recursos de autocompletar, checagem de tipos e linting funcionam sem necessidade de configurações extras.'
        },
        {
          title: 'Solução de problemas comuns de integração',
          text: 'Caso encontre dificuldades ao importar os arquivos gerados: 1. Verifique se os caminhos relativos de imagens e fontes correspondem à pasta public do seu framework. 2. Certifique-se de que variáveis CSS personalizadas não colidam com folhas de estilo globais do projeto. 3. Confirme se os navegadores suportados pelo seu projeto cobrem as propriedades modernas de CSS geradas pelas ferramentas.'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutoriais',
      articles: [
        {
          title: 'Construa uma landing page em 5 minutos',
          text: 'Crie uma página de destino moderna e responsiva em cinco passos: Passo 1: Abra o CodeEnhance AI e estruture o esqueleto semântico (seção principal, grade de recursos, chamada para ação). Passo 2: Clique em \'Melhorar\' para gerar estilos modernos em CSS Flexbox responsivo. Passo 3: Acesse o LS Image Studio (img.ladestack.in) e comprima as imagens em lote para o formato WebP. Passo 4: Atualize os caminhos dos arquivos no código HTML. Passo 5: Copie o código final e publique na sua plataforma de hospedagem.'
        },
        {
          title: 'Refatore códigos front-end legados com o CodeEnhance AI',
          text: 'Modernize códigos antigos e difíceis de manter: Passo 1: Copie um trecho antigo de HTML/CSS baseado em float de um projeto existente. Passo 2: Cole-o no editor do CodeEnhance AI e selecione a aba da linguagem. Passo 3: Execute a análise para conferir sugestões como transição para Flexbox, variáveis CSS e tags ARIA. Passo 4: Valide o layout visual na sandbox em tempo real. Passo 5: Exporte o código limpo diretamente de volta para a sua aplicação.'
        },
        {
          title: 'Processamento privado de PDFs com o LS PDF Tools',
          text: 'Gerencie arquivos confidenciais sem riscos à privacidade: Passo 1: Acesse o LS PDF Tools (pdf.ladestack.in). Passo 2: Escolha a operação desejada: mesclar múltiplos PDFs, extrair páginas ou comprimir tamanho. Passo 3: Arraste os arquivos PDF diretamente para a janela do navegador. Passo 4: Reorganize a ordem ou selecione o nível de compressão. Passo 5: Clique em Processar para que o WebAssembly execute a tarefa na memória local. Passo 6: Baixe o arquivo processado. Os dados jamais saem do seu computador.'
        },
        {
          title: 'Compressão e otimização de imagens em lote no LS Image Studio',
          text: 'Maximize a velocidade de carregamento do seu site com imagens leves: Passo 1: Abra o LS Image Studio (img.ladestack.in). Passo 2: Arraste suas imagens PNG, JPEG ou WebP para a área de processamento. Passo 3: Escolha o formato de saída (WebP ou AVIF recomendados para a web) e o nível de qualidade. Passo 4: Clique em \'Comprimir Tudo\' para processar em paralelo via Canvas e WebAssembly. Passo 5: Baixe o pacote de imagens de alta definição com peso reduzido.'
        },
        {
          title: 'Crie um currículo aprovado em ATS com o Swift Resume',
          text: 'Elabore um currículo estruturado para leitura de sistemas automatizados: Passo 1: Abra o Swift Resume (resume.ladestack.in). Passo 2: Preencha suas informações: dados de contato, competências técnicas, experiência profissional e formação acadêmica. Passo 3: Escolha um modelo com tipografia e espaçamento otimizados para leitura por robôs de triagem (ATS). Passo 4: Use a prévia em tempo real para equilibrar o tamanho das páginas. Passo 5: Exporte um PDF vetorial nítido pronto para envio.'
        },
        {
          title: 'Do protótipo web ao repositório Git e deploy em produção',
          text: 'Transforme uma ideia experimental em um serviço publicado na web: Passo 1: Finalize seus componentes e ativos nas ferramentas do Lade Stack. Passo 2: Baixe os arquivos estáticos gerados para uma pasta no seu computador. Passo 3: Inicialize um repositório Git local (git init && git add . && git commit -m "Initial commit"). Passo 4: Crie um repositório no GitHub e envie o código. Passo 5: Conecte o repositório na Vercel ou Cloudflare Pages para ativar o deploy contínuo automatizado.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Segurança',
      articles: [
        {
          title: 'Privacidade por design: arquitetura no navegador',
          text: 'O principal diferencial arquitetural do Lade Stack é a \'Privacidade por Design (Privacy by Design)\'. Ferramentas como o LS PDF Tools e o LS Image Studio operam exclusivamente na memória do seu navegador através de WebAssembly, HTML5 File API e Canvas. Documentos confidenciais, contratos e imagens privadas nunca são enviados, gravados ou analisados em servidores remotos.'
        },
        {
          title: 'Tráfego de dados e política de zero retenção',
          text: 'Para ferramentas que dependem de processamento em nuvem, como o CodeEnhance AI, toda a comunicação é protegida por criptografia TLS 1.3. O Lade Stack segue uma política rigorosa de retenção zero: os códigos enviados para análise são processados em memória volátil e devolvidos imediatamente. Não mantemos bancos de dados de códigos de usuários nem rastreadores de terceiros.'
        },
        {
          title: 'Privacidade em IA e proteção de propriedade intelectual',
          text: 'Respeitamos a propriedade intelectual dos desenvolvedores. Os códigos e instruções fornecidos às ferramentas de IA do Lade Stack jamais são usados para treinar, refinar ou alimentar modelos de inteligência artificial. Cada interação é efêmera e os dados são descartados assim que a resposta é entregue.'
        },
        {
          title: 'Execução segura no cliente e sandboxing de DOM',
          text: 'A prévia em tempo real dentro do CodeEnhance AI roda em um iframe estritamente isolado (sandbox). Essa contenção impede que scripts executados acessem cookies, localStorage, tokens de sessão ou o histórico da janela principal. Todas as entradas passam por processos de sanitização no DOM para anular riscos de injeção de scripts (XSS).'
        },
        {
          title: 'Boas práticas de segurança para o usuário',
          text: 'Embora a plataforma implemente defesas rigorosas, os desenvolvedores devem manter hábitos operacionais seguros: evite colar senhas de bancos de dados em produção ou chaves de API secretas em qualquer ferramenta web. Revise extensões de terceiros instaladas no navegador e mantenha seu sistema operacional sempre atualizado.'
        },
        {
          title: 'Comunicação de vulnerabilidades e resposta rápida',
          text: 'A segurança dos nossos usuários é levada muito a sério. Se você identificar uma possível vulnerabilidade, vazamento de memória ou inconsistência em qualquer aplicação do Lade Stack, informe diretamente o fundador pelo e-mail admin@ladestack.in. Envie os passos detalhados de reprodução para que possamos analisar e publicar a correção com agilidade.'
        }
      ]
    },
    {
      id: 'teams',
      title: 'Times',
      articles: [
        {
          title: 'Colaboração ágil com links sem estado',
          text: 'O Lade Stack viabiliza colaboração rápida entre colegas através de parâmetros codificados na própria URL (stateless). Parâmetros de ajuste e modelos selecionados são serializados diretamente no link compartilhável. Quando um membro da equipe abre o endereço, o estado exato é restaurado no navegador local sem depender de bancos de dados compartilhados ou contas corporativas.'
        },
        {
          title: 'Exportação portátil em JSON e compartilhamento de templates',
          text: 'Para projetos mais complexos e configurações de múltiplos módulos, o Lade Stack suporta importação e exportação em formato JSON padrão. Salve seu estado de trabalho em um arquivo .json leve, suba para o repositório Git do time ou compartilhe pelos canais de comunicação da empresa. Seus colegas podem carregar o arquivo e continuar o trabalho com fidelidade total.'
        },
        {
          title: 'Revisão assíncrona de código baseada em Git',
          text: 'Defendemos a revisão de código assíncrona integrada ao Git em vez de ambientes isolados na nuvem. Códigos gerados com o Lade Stack devem ser incorporados em Pull Requests da equipe, passando por testes automatizados em esteiras de CI/CD e revisão de pares, garantindo qualidade técnica e sustentabilidade a longo prazo.'
        },
        {
          title: 'Padronização de código e convenções de front-end',
          text: 'O código gerado pelas ferramentas do Lade Stack reflete as melhores práticas da indústria: tags semânticas do HTML5, nomenclaturas modulares de CSS, atributos de acessibilidade (ARIA) e tipagem rigorosa em TypeScript. Equipes podem utilizar esses padrões como referência arquitetural, reduzindo debates desnecessários sobre estilo durante as revisões de PR.'
        }
      ]
    },
    {
      id: 'data',
      title: 'Dados',
      articles: [
        {
          title: 'Exportação de arquivos e posse total dos seus dados',
          text: 'No Lade Stack, você mantém a propriedade integral e incondicional de tudo o que criar. Todas as ferramentas oferecem recursos rápidos de exportação: cópia para a área de transferência com um clique, download direto dos arquivos e geração em Markdown. Não impomos marcas d\'água, restrições de licença ou aprisionamento à plataforma.'
        },
        {
          title: 'Persistência no dispositivo com LocalStorage',
          text: 'Para lembrar suas preferências sem monitorar suas atividades, o Lade Stack utiliza o localStorage do navegador. Definições como o tema visual (claro/escuro), idioma de preferência e rascunhos em edição ficam gravados no seu próprio aparelho. Essas informações jamais são sincronizadas com servidores externos de telemetria.'
        },
        {
          title: 'Ciclo de vida dos dados e liberação imediata de memória',
          text: 'As ferramentas do Lade Stack são programadas para consumir o mínimo de memória. Após o processamento de mídias no cliente, o sistema executa imediatamente URL.revokeObjectURL para liberar alocações de memória. Ao fechar a aba ou limpar os dados do navegador, todos os rascunhos temporários e arquivos em cache são completamente removidos.'
        },
        {
          title: 'Migrando projetos entre diferentes ambientes de desenvolvimento',
          text: 'Transferir código do Lade Stack para seu projeto de produção é muito simples: baixe os arquivos brutos de HTML, CSS ou JS, copie-os para a pasta correspondente no seu projeto local (como components/ no Next.js, src/components/ no Astro ou diretório estático do Nginx) e faça a importação usual com caminhos relativos.'
        },
        {
          title: 'Organização de ativos estáticos e otimização para web',
          text: 'Em aplicações web modernas, a gestão de ativos estáticos influencia diretamente a manutenibilidade. Sugerimos agrupar arquivos em pastas estruturadas (/public/images, /src/styles), converter imagens pesadas em PNG/JPEG para WebP ou AVIF com o LS Image Studio e inserir pequenos ícones como SVG inline para diminuir requisições de rede.'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deploy',
      articles: [
        {
          title: 'Arquitetura de implantação prioritariamente estática',
          text: 'O Lade Stack adota uma filosofia \'static-first\' para a web. Pré-renderizar páginas em HTML puro, CSS moderno e o mínimo de JavaScript elimina brechas de segurança no servidor, reduz os custos de hospedagem a zero e possibilita cache instantâneo em CDNs globais. Esta central de documentação e o portal principal utilizam o Astro 5 para demonstrar essas vantagens na prática.'
        },
        {
          title: 'Checklist técnico antes de publicar em produção',
          text: 'Antes de colocar sua aplicação no ar para o público, valide os seguintes pontos: 1. Inspecione a semântica do HTML e certifique-se de que todas as tags <img> tenham atributos alt, width e height definidos. 2. Confirme se as cores atendem aos critérios de acessibilidade WCAG AA. 3. Audite o tamanho dos bundles para evitar scripts desnecessários de framework. 4. Execute testes no Lighthouse para buscar a pontuação 100/100.'
        },
        {
          title: 'Publicação descomplicada na Vercel, Cloudflare Pages e Netlify',
          text: 'Aplicações estáticas construídas com ferramentas modernas podem ser hospedadas com extrema facilidade. Na Vercel, conecte seu repositório Git para um deploy automático; na Cloudflare Pages, configure o comando de build (npm run build) e a pasta de saída (dist); na Netlify, arraste a pasta dist ou integre ao GitHub. Todas fornecem CDN de borda global e certificados SSL gratuitos.'
        },
        {
          title: 'Configuração de variáveis de ambiente e otimização de build',
          text: 'Em projetos prontos para produção, separe regras de negócio das configurações usando arquivos .env. Em compilações estáticas, lembre-se de que variáveis públicas precisam conter o prefixo exigido pelo framework (como PUBLIC_ no Astro). Habilite sinalizadores de build para minificar HTML, compactar CSS e gerar o sitemap XML de forma automática.'
        },
        {
          title: 'Estratégias para notas máximas no Core Web Vitals',
          text: 'Conquistar pontuações de destaque no Core Web Vitals requer decisões de arquitetura claras: elimine bloqueios de renderização para garantir o First Contentful Paint (FCP) abaixo de 0,8 segundos; reserve dimensões fixas para banners e imagens mantendo o Cumulative Layout Shift (CLS) em 0,00; e pré-carregue fontes essenciais e banners para otimizar o LCP.'
        },
        {
          title: 'Diagnóstico de falhas comuns de deploy e caminhos de arquivo',
          text: 'Principais entraves em deploys e como resolvê-los: 1. Imagens ou estilos com erro 404: certifique-se de que a configuração base do build corresponde ao subdiretório do servidor e que os arquivos utilizam caminhos relativos. 2. Erro 404 ao atualizar rotas internas: verifique se as regras de redirecionamento para SPAs estão ativas na hospedagem. 3. Demora na atualização de conteúdo: ajuste os cabeçalhos de Cache-Control.'
        }
      ]
    }
  ],
  docsChangelog: [
    {
      v: 'v2.4.0',
      date: '2026-08-20',
      text: 'Reestruturação completa com arquitetura 100% estática em Astro 5. Suporte nativo a 6 idiomas, eliminação total do overhead de hidratação e nota 100/100 em todas as métricas do Lighthouse.'
    },
    {
      v: 'v2.3.0',
      date: '2024-11-30',
      text: 'Lançamento da versão beta do Documentation AI e adição da funcionalidade de coleções interativas na API Testing Platform para testes visuais de endpoints.'
    },
    {
      v: 'v2.0.0',
      date: '2024-06-01',
      text: 'Disponibilização geral do CodeEnhance AI, trazendo editor de código em tempo real, sandbox com prévia DOM sem recarregamento e melhorias automatizadas via AST.'
    },
    {
      v: 'v1.5.0',
      date: '2024-03-20',
      text: 'Lançamento do Swift Resume com modelos focados em ATS, prévia de diagramação dinâmica e geração instantânea de PDFs vetoriais pelo navegador.'
    },
    {
      v: 'v1.2.0',
      date: '2023-09-01',
      text: 'Lançamento do LS Image Studio com compressão local protegida por privacidade, conversão de formatos modernos (PNG/JPEG/WebP/AVIF) e redimensionamento.'
    },
    {
      v: 'v1.0.0',
      date: '2023-06-10',
      text: 'Lançamento oficial do LS PDF Tools, unificando a suíte de utilitários de produtividade com processamento direto no navegador e sem uploads.'
    }
  ],
  timeline: [
    {
      year: '2020',
      title: 'Início do kit de ferramentas',
      text: 'Início da criação de utilitários pessoais de desenvolvimento na Índia — ferramentas focadas em manipulação de PDF, processamento de imagens e automação de código para eliminar tarefas repetitivas nos fluxos diários de engenharia.'
    },
    {
      year: '2022',
      title: 'O Lade Stack ganha forma',
      text: 'Consolidação de utilitários individuais sob a identidade unificada do Lade Stack, estabelecendo um sistema de design coeso, arquitetura compartilhada e o compromisso permanente com ferramentas gratuitas para desenvolvedores.'
    },
    {
      year: '2024',
      title: 'Ecossistema impulsionado por IA',
      text: 'Expansão para fluxos inteligentes com o lançamento do CodeEnhance AI, ferramentas de análise de código em tempo real e guias técnicos aprofundados sobre arquiteturas RAG, desenvolvimento full-stack e deploy moderno em nuvem.'
    },
    {
      year: '2026',
      title: 'Reconstrução arquitetural em Astro puro',
      text: 'Reescrita completa baseada em arquitetura static-first utilizando Astro 5, TypeScript puro e Tailwind CSS — alcançando zero sobrecarga de runtime no cliente, internacionalização fluida e pontuação 100/100 no Lighthouse.'
    }
  ],
  aboutStats: ['Fundação', 'Ferramentas em prod', 'Devs', 'Grátis para sempre'],
  storyExtra: 'Engenheiro e designer multidisciplinar — sistemas de IA, desenvolvimento web e UX. Constrói ferramentas que dão a qualquer criador velocidade de startup, de graça.',
  aboutPage: {
    metaTitle: 'Sobre Girish Lade — Fundador, Arquiteto de Software e Desenvolvedor UI/UX',
    metaDescription: 'Perfil pessoal, filosofia de engenharia, ecossistema técnico e trajetória de Girish Lade — desenvolvedor UI/UX, engenheiro de software e Fundador e Arquiteto-Chefe de Software do Lade Stack.',
    metaKeywords: 'Girish Lade, fundador Lade Stack, desenvolvedor UI/UX, engenheiro de software, IA Generativa, arquitetura cloud-native, filosofia de engenharia',
    imageAlt: 'Girish Lade - Fundador e Arquiteto-Chefe de Software',
    heroEyebrow: 'SOBRE O CRIADOR',
    heroTitle: 'Criando na Interseção entre Design, Engenharia e IA',
    heroSubtitle: 'Sou Girish Lade — desenvolvedor UI/UX, engenheiro de software e criador de produtos baseado na Índia. Projeto e construo produtos de software práticos, utilitários para desenvolvedores e sistemas alimentados por inteligência artificial para eliminar fricção e simplificar fluxos de trabalho complexos.',
    founderRole: 'Fundador e Arquiteto-Chefe de Software',
    founderLocation: 'Índia',
    founderBio1: 'Dedico meu tempo a pensar em todo o ciclo de vida do software — desde a experiência inicial do usuário e design de interação até sistemas cloud-native, arquitetura de backend e integração prática de IA Generativa.',
    founderBio2: 'Minha motivação é direta: construir software útil e cuidadosamente projetado que seja intuitivo e natural de usar, independentemente da complexidade dos mecanismos por trás dele.',
    storyEyebrow: 'QUEM SOU',
    storyTitle: 'A Evolução de um Construtor',
    storyParagraphs: [
      'Sempre fui movido por uma curiosidade profunda sobre como as coisas funcionam sob a superfície, acompanhada imediatamente pela vontade de construí-las eu mesmo. Para mim, desenvolver software nunca foi sobre escolher entre ser um designer visual ou um engenheiro de backend. Minha trajetória evoluiu naturalmente por todo o espectro: começando com design visual e interfaces frontend, aprofundando-me em arquiteturas de backend e bancos de dados, explorando infraestrutura em nuvem e DevOps, e agora focando em IA Generativa e engenharia de produtos de ponta a ponta.',
      'Em vez de enxergar essas áreas como disciplinas separadas, vejo-as como facetas interligadas de uma mesma mentalidade. Minha base em UI/UX me treina para ter empatia com quem está diante da tela — questionando onde surge a fricção cognitiva, quão intuitiva parece uma interface e se uma tarefa precisa de três cliques em vez de um só. Ao mesmo tempo, minha bagagem em engenharia de software garante que o sistema por trás da interface seja robusto, sustentável, performático e arquiteturalmente limpo.',
      'Quando a IA Generativa surgiu, não foi um desvio desse caminho; tornou-se um amplificador natural. A inteligência artificial nos dá paradigmas de interação inteiramente novos, mas apenas quando integrada com propósito e fundamentada em engenharia prática de produtos.'
    ],
    whatBuildEyebrow: 'O QUE EU CONSTRUO',
    whatBuildTitle: 'Software Prático Desenvolvido para Eliminar Fricção',
    whatBuildSubtitle: 'Tenho interesse em construir software prático e pronto para produção, em vez de acumular protótipos puramente teóricos. Ao avaliar um projeto ou ideia de produto, a pergunta central que faço é: Qual gargalo real isso resolve e como torna o fluxo de trabalho de alguém mais ágil ou intuitivo?',
    whatBuildItems: [
      {
        num: '01 / UTILITÁRIOS PARA DESENVOLVEDORES',
        title: 'Ferramentas de Desenvolvimento com IA',
        desc: 'Assistentes de código inteligentes, ferramentas de aprimoramento em tempo real e plataformas automatizadas de testes de API projetadas para eliminar tarefas repetitivas e acelerar entregas.'
      },
      {
        num: '02 / SAAS E COLABORAÇÃO',
        title: 'Sistemas em Nuvem e Compartilhamento de Arquivos',
        desc: 'Utilitários seguros de compartilhamento temporário, suítes de conversão de documentos e serviços leves em nuvem com foco em privacidade, zero sobrecarga no cliente e rápida transferência de dados.'
      },
      {
        num: '03 / PLATAFORMAS DE APLICAÇÃO',
        title: 'Aplicações Web Modernas',
        desc: 'Interfaces e aplicações web de altíssimo desempenho, construídas com HTML semântico, estados de interação acessíveis e arquiteturas com zero runtime no cliente.'
      },
      {
        num: '04 / AUTOMAÇÃO DE FLUXOS',
        title: 'Fluxos de Trabalho Assistidos por IA',
        desc: 'Camadas inteligentes de automação que conectam dados estruturados, geração de documentação e tarefas de desenvolvimento em pipelines fluídos com supervisão humana.'
      }
    ],
    craftEyebrow: 'OFÍCIO INTEGRADO',
    craftTitle: 'Por que UI/UX e Engenharia São Inseparáveis',
    craftParagraphs: [
      'Em muitas organizações, design e engenharia operam em lados opostos de um abismo — designers entregam mockups e engenheiros escrevem código para reproduzi-los. Eu sempre trabalhei de forma diferente. Para mim, design não é uma decoração superficial aplicada após o término do código, e engenharia não é mero detalhe invisível de implementação.',
      'A experiência do usuário influencia diretamente a arquitetura: uma interface que exige resposta em tempo real demanda uma arquitetura orientada a eventos ou cliente otimista. Por outro lado, a arquitetura dita a experiência do usuário: APIs desestruturadas, consultas lentas no banco de dados ou pacotes pesados no cliente degradarão o uso, não importa o quão polido esteja o arquivo no Figma.',
      'Desempenho é um requisito essencial de UX. Acessibilidade é uma marca de maturidade da engenharia. Quando design e engenharia são tratados como uma única disciplina unificada, o software resultante é mais enxuto, resiliente e imediatamente intuitivo.'
    ],
    aiEyebrow: 'IA GENERATIVA',
    aiTitle: 'Inteligência Artificial Prática, Enraizada em Fluxos Reais',
    aiParagraphs: [
      'A IA Generativa representa uma das minhas principais áreas de exploração. No entanto, meu interesse está centrado na utilidade prática e não no hype especulativo. Não tenho interesse em construir wrappers superficiais ou presumir que a IA resolve tudo automaticamente.',
      'Em vez disso, concentro-me em como a IA Generativa pode remodelar fundamentalmente a interação com o software:'
    ],
    aiPillars: [
      {
        title: 'Assistência Consciente do Contexto',
        text: 'Incorporação de modelos de linguagem diretamente em visualizadores de código e ferramentas de desenvolvimento para explicar, refatorar e auditar lógica instantaneamente.'
      },
      {
        title: 'Automação Inteligente de Processos',
        text: 'Substituição de procedimentos manuais em várias etapas por pipelines estruturados de IA que extraem, transformam e validam dados com supervisão humana.'
      },
      {
        title: 'Interfaces de Usuário Semânticas',
        text: 'Criação de interfaces que se adaptam dinamicamente à intenção do usuário, traduzindo linguagem natural em ações concretas de software.'
      },
      {
        title: 'Ferramental Focado no Desenvolvedor',
        text: 'Construção de utilitários que lidam com geração de documentação, scaffolding automático de testes e validação de esquemas, permitindo que os engenheiros foquem na arquitetura.'
      }
    ],
    philosophyEyebrow: 'FILOSOFIA',
    philosophyTitle: 'Princípios Que Orientam Minhas Criações',
    philosophyItems: [
      {
        title: 'Interfaces simples sobre engrenagens complexas',
        text: 'A verdadeira marca de uma engenharia cuidadosa é pegar um problema inerentemente complexo — dados distribuídos, inferência de modelos, codificação de arquivos — e apresentá-lo por meio de uma interface serena, previsível e direta.'
      },
      {
        title: 'Redução da carga cognitiva',
        text: 'Toda ferramenta deve respeitar a energia mental do usuário. O software deve minimizar configurações desnecessárias, eliminar atritos de instalação e nunca forçar o desenvolvedor a memorizar o que um sistema bem projetado pode resolver automaticamente.'
      },
      {
        title: 'A IA precisa justificar sua presença no pipeline',
        text: 'A inteligência artificial nunca deve ser adicionada como mero artifício. Seu lugar é onde a lógica determinística é insuficiente e onde ela entrega valor imediato e verificável para quem usa o produto.'
      },
      {
        title: 'Velocidade e desempenho não são negociáveis',
        text: 'Respostas em fração de segundo, pacotes mínimos e marcação semântica limpa não são itens secundários — são requisitos fundamentais que definem a qualidade e a confiança do produto.'
      },
      {
        title: 'Arquitetura limpa possibilita iteração contínua',
        text: 'Bases de código de fácil manutenção, tipagem estrita e limites modulares de componentes oferecem a agilidade necessária para evoluir produtos rapidamente sem acumular dívidas técnicas paralisantes.'
      }
    ],
    workEyebrow: 'COMO EU TRABALHO',
    workTitle: 'Uma Abordagem Sistemática à Criação de Produtos',
    workSubtitle: 'Seja desenvolvendo uma ferramenta aberta para programadores ou arquitetando um serviço em nuvem, sigo um processo de execução disciplinado e iterativo:',
    workSteps: [
      {
        step: '01',
        title: 'Desconstruir o Problema',
        desc: 'Isolar o gargalo central. Eliminar premissas superficiais para entender com clareza o problema real que o usuário precisa resolver.'
      },
      {
        step: '02',
        title: 'Projetar a Experiência e os Fluxos',
        desc: 'Mapear o caminho mais curto entre a intenção do usuário e a saída desejada. Desenhar estados de interação, navegação por teclado e ergonomia responsiva.'
      },
      {
        step: '03',
        title: 'Estruturar os Fundamentos Arquiteturais',
        desc: 'Escolher a pilha mais enxuta e confiável para o problema. Definir esquemas type-safe, contratos de API e modelos de banco de dados.'
      },
      {
        step: '04',
        title: 'Integrar IA Onde Houver Valor Real',
        desc: 'Incorporar inteligência de máquina onde ela elimine etapas manuais, aplicando travas de segurança e fallbacks para garantir consistência.'
      },
      {
        step: '05',
        title: 'Medir, Otimizar e Refinar',
        desc: 'Auditar o tamanho dos pacotes, monitorar métricas do Lighthouse, testar casos de borda e aperfeiçoar microinterações com base no uso real.'
      }
    ],
    ecosystemEyebrow: 'ECOSSISTEMA TÉCNICO',
    ecosystemTitle: 'Amplitude em Toda a Pilha de Tecnologia',
    ecosystemSubtitle: 'Meu repertório técnico abrange múltiplos domínios, permitindo conduzir conceitos desde protótipos visuais no Figma até infraestruturas de nuvem em produção.',
    ecosystemGroups: [
      {
        label: 'Frontend e Aplicações Cliente',
        desc: 'Desenvolvimento de interfaces responsivas e acessíveis e experiências móveis multiplataforma com tipagem moderna.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Flutter']
      },
      {
        label: 'Design e Ferramentas Criativas',
        desc: 'Criação de design systems, jornadas de usuário, ativos vetoriais, elementos 3D e protótipos interativos.',
        tags: ['Figma', 'Framer', 'Adobe Illustrator', 'Adobe Photoshop', 'Blender']
      },
      {
        label: 'Backend e Bancos de Dados',
        desc: 'Estruturação de APIs REST e orientadas a eventos, esquemas de bancos relacionais e armazenamento escalável de documentos.',
        tags: ['Node.js', 'MongoDB', 'MySQL', 'Oracle']
      },
      {
        label: 'Nuvem e DevOps',
        desc: 'Gerenciamento de pipelines de integração contínua, ambientes conteinerizados e serviços de nuvem multirregião.',
        tags: ['AWS', 'Google Cloud', 'Docker', 'Git']
      },
      {
        label: '3D e Sistemas Interativos',
        desc: 'Exploração de design espacial, renderização em tempo real e ambientes virtuais interativos.',
        tags: ['Unity', 'Unreal Engine']
      }
    ],
    learningEyebrow: 'EXPLORAÇÃO ATIVA',
    learningTitle: 'Aprendizado Contínuo e Crescimento Técnico',
    learningSubtitle: 'A tecnologia não para, e meu kit de ferramentas evolui no mesmo ritmo. Mantenho o hábito de estudar ativamente tecnologias emergentes sempre que oferecem maneiras superiores de construir produtos sólidos e úteis:',
    learningCards: [
      {
        badge: 'EXPLORANDO',
        title: 'Kotlin e Mobile',
        desc: 'Aprofundando o desenvolvimento nativo para Android com Kotlin para entregar experiências móveis perfeitamente integradas.'
      },
      {
        badge: 'EXPLORANDO',
        title: 'GenAI Avançada',
        desc: 'Pesquisando padrões de agentes autônomos, geração aumentada por recuperação (RAG) e orquestração eficiente de modelos.'
      },
      {
        badge: 'EXPLORANDO',
        title: 'Arquitetura Cloud-Native',
        desc: 'Investigando microsserviços distribuídos, padrões serverless e computação de borda para sistemas altamente escaláveis.'
      }
    ],
    stackEyebrow: 'FUNDAÇÃO PRINCIPAL',
    stackTitle: 'Stack Principal',
    stackSubtitle: 'As tecnologias fundamentais do Lade Stack são selecionadas para proporcionar zero sobrecarga no cliente, pré-renderização estática, segurança estrita de tipos e resposta imediata.',
    journeyEyebrow: 'MARCOS',
    journeyTitle: 'Trajetória',
    futureEyebrow: 'DIREÇÃO DE LONGO PRAZO',
    futureTitle: 'Construindo Software Que Realmente Capacita Criadores',
    futureBody: 'Olhando para a frente, meu foco permanece em construir ferramentas SaaS inovadoras com IA, sistemas colaborativos de arquivos e utilitários para desenvolvedores que unem excelente UX a uma engenharia de alto padrão.',
    futureQuote: '"Eu construo software porque gosto de transformar desafios técnicos complexos em ferramentas limpas e acessíveis que dão aos desenvolvedores e criadores uma vantagem real. Boa engenharia e bom design podem e devem coexistir."',
    futureAuthor: '— Girish Lade'
  },
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
