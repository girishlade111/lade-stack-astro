import type { SupportedLocale } from './config';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  breadcrumbName: string;
}

export type SEOPageKey =
  | 'home'
  | 'about'
  | 'apps'
  | 'products'
  | 'aiCodeViewer'
  | 'docs'
  | 'support'
  | 'contact'
  | 'privacy'
  | 'terms';

export const seoData: Record<SupportedLocale, Record<SEOPageKey, PageSEO>> = {
  // =========================================================================
  // ENGLISH (Canonical Source)
  // =========================================================================
  en: {
    home: {
      title: 'Free AI Developer Tools & Coding Utilities',
      description:
        'Lade Stack is a free, privacy-first developer platform by Girish Lade. High-speed AI code review, REST & GraphQL API testing, PDF utilities, and dev workflows.',
      keywords:
        'AI developer tools, developer productivity tools, free AI coding tools, API testing tool, browser developer tools, client-side PDF utilities, code review AI, Lade Stack',
      ogTitle: 'Lade Stack — Free AI Developer Tools & Coding Utilities',
      ogDescription:
        'High-speed, privacy-first developer tools: AI code inspection, API testing, and browser utilities. 100% free with zero signup.',
      breadcrumbName: 'Home',
    },
    about: {
      title: 'About Girish Lade — Founder & Software Architect',
      description:
        'Learn about Girish Lade, UI/UX developer and Lead Software Architect behind Lade Stack. Discover our engineering principles and product roadmap.',
      keywords:
        'Girish Lade, Lade Stack founder, software architect, UI/UX developer, Generative AI developer, cloud architecture, engineering principles',
      ogTitle: 'About Girish Lade — Founder & Lead Software Architect',
      ogDescription:
        'Engineering principles, technical background, and product philosophy behind Lade Stack and its founder Girish Lade.',
      breadcrumbName: 'About',
    },
    apps: {
      title: 'Apps Gallery — Free AI Developer Utilities',
      description:
        'Explore Lade Stack’s suite of free developer tools: CodeEnhance AI, LS PDF Tools, LS Image Studio, Swift Resume, and upcoming API testing tools.',
      keywords:
        'AI developer tools suite, developer tools gallery, free web utilities, CodeEnhance AI, PDF tools, image compressor, developer resume builder',
      ogTitle: 'Apps Gallery — Free AI Developer Utilities | Lade Stack',
      ogDescription:
        'Browse and launch fast, privacy-first developer tools directly in your browser. Free forever without registration.',
      breadcrumbName: 'Apps Gallery',
    },
    products: {
      title: 'Flagship AI Developer Products',
      description:
        'Discover Lade Stack flagship developer products: CodeEnhance AI, API Testing Platform, Website Builder AI, and Secure File Hub.',
      keywords:
        'flagship AI developer tools, CodeEnhance AI, API testing platform, website builder AI, secure file sharing, developer tools ecosystem',
      ogTitle: 'Flagship AI Developer Products | Lade Stack',
      ogDescription:
        'Production-grade developer tools designed to automate repetitive coding chores and speed up software delivery.',
      breadcrumbName: 'Products',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — Free Code Review & Linter',
      description:
        'Inspect, debug, and enhance HTML, CSS & JavaScript with instant AI feedback and real-time live preview. Free forever, no signup required.',
      keywords:
        'AI code review tool, CodeEnhance AI, free code linter, HTML CSS JS optimizer, online code refactoring, instant browser code preview',
      ogTitle: 'CodeEnhance AI — Free Code Review & Linter | Lade Stack',
      ogDescription:
        'Real-time frontend code editor and AI enhancer. Paste your code, get instant structural fixes, and view live results.',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: 'Documentation — Guides & API Reference',
      description:
        'Comprehensive technical documentation for Lade Stack tools: quickstarts, API specifications, Git integration, and Vercel deployment guides.',
      keywords:
        'Lade Stack documentation, developer guides, API reference, CodeEnhance AI guide, GitHub export tutorial, Vercel deployment checklist',
      ogTitle: 'Documentation — Guides & API Reference | Lade Stack',
      ogDescription:
        'Step-by-step developer tutorials, architecture guides, and API integration specifications for all Lade Stack products.',
      breadcrumbName: 'Documentation',
    },
    support: {
      title: 'Support Center — FAQs & Troubleshooting',
      description:
        'Find answers, troubleshoot tool issues, and get in touch with the Lade Stack engineering team. 24-hour response time guaranteed.',
      keywords:
        'Lade Stack support, developer troubleshooting, CodeEnhance AI help, browser tool FAQ, client-side processing support, developer help desk',
      ogTitle: 'Support Center — FAQs & Troubleshooting | Lade Stack',
      ogDescription:
        'Get technical assistance, report issues, or browse verified answers about Lade Stack browser utilities and AI tools.',
      breadcrumbName: 'Support',
    },
    contact: {
      title: 'Contact Engineering — Inquiries & Feedback',
      description:
        'Contact Girish Lade and the core engineering team. Submit feature requests, report bugs, or discuss technical collaborations.',
      keywords:
        'contact Lade Stack, Girish Lade contact, developer inquiries, report bug, suggest feature, technical collaboration',
      ogTitle: 'Contact Engineering — Inquiries & Feedback | Lade Stack',
      ogDescription:
        'Reach out directly to the founder and engineering team. Fast replies for feature suggestions, bug reports, and partnerships.',
      breadcrumbName: 'Contact',
    },
    privacy: {
      title: 'Privacy Policy — In-Browser Data Safety',
      description:
        'Read Lade Stack’s privacy policy. Learn about our client-side processing architecture, zero-retention policy, and user rights.',
      keywords:
        'Lade Stack privacy policy, client-side data privacy, zero retention AI tools, in-browser file processing, developer data security',
      breadcrumbName: 'Privacy Policy',
    },
    terms: {
      title: 'Terms of Service — Free-Use License',
      description:
        'Review the terms of service for Lade Stack. Understand our free personal and commercial use license, fair-use policies, and guidelines.',
      keywords:
        'Lade Stack terms of service, developer tools license, free commercial use, acceptable use policy, API fair use',
      breadcrumbName: 'Terms of Service',
    },
  },

  // =========================================================================
  // RUSSIAN (Русский) — Native Technical Terminology
  // =========================================================================
  ru: {
    home: {
      title: 'Инструменты разработки и ИИ-сервисы',
      description:
        'Экосистема бесплатных инструментов для веб-разработчиков от Girish Lade: аудит кода с ИИ, тестирование REST и GraphQL API, работа с файлами в браузере.',
      keywords:
        'инструменты разработчика, ИИ инструменты для программистов, аудит кода онлайн, тестирование API, веб-утилиты для разработчиков, бесплатные сервисы для кодинга',
      ogTitle: 'Lade Stack — Инструменты разработки и ИИ-сервисы',
      ogDescription:
        'Быстрые приватные утилиты для программистов: инспекция кода с ИИ, тесты API и работа с PDF без регистрации.',
      breadcrumbName: 'Главная',
    },
    about: {
      title: 'О Гирише Ладе — Основатель и архитектор ПО',
      description:
        'Girish Lade — UI/UX инженер, разработчик программного обеспечения и основатель Lade Stack. Инженерные принципы и философия создания инструментов.',
      keywords:
        'Girish Lade, основатель Lade Stack, архитектор ПО, UI/UX инженер, генеративный ИИ, облачные технологии, архитектура программного обеспечения',
      ogTitle: 'О Гирише Ладе — Основатель и архитектор ПО | Lade Stack',
      ogDescription:
        'История основателя, системная архитектура и ценности платформы Lade Stack.',
      breadcrumbName: 'О нас',
    },
    apps: {
      title: 'Каталог приложений — Инструменты для разработчиков',
      description:
        'Каталог бесплатных сервисов Lade Stack: CodeEnhance AI, утилиты для работы с PDF, студия сжатия изображений и генератор резюме для инженеров.',
      keywords:
        'каталог инструментов разработчика, утилиты для программистов, CodeEnhance AI, сжатие изображений онлайн, конвертер PDF в браузере, сервисы без регистрации',
      ogTitle: 'Каталог приложений — Инструменты для разработчиков | Lade Stack',
      ogDescription:
        'Исследуйте и запускайте быстрые инструменты для разработчиков прямо в браузере. Бесплатно и конфиденциально.',
      breadcrumbName: 'Каталог приложений',
    },
    products: {
      title: 'Флагманские продукты для разработки с ИИ',
      description:
        'Флагманские решения Lade Stack: CodeEnhance AI, среда тестирования API, конструктор лендингов и защищенный файловый хаб.',
      keywords:
        'флагманские продукты Lade Stack, проверка кода с ИИ, платформа тестирования API, генератор веб-страниц, защищенный обмен конфигурациями',
      ogTitle: 'Флагманские продукты для разработки с ИИ | Lade Stack',
      ogDescription:
        'Профессиональные инструменты автоматизации рутинных задач программирования и ускорения релизов.',
      breadcrumbName: 'Продукты',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — Проверка и оптимизация кода',
      description:
        'Анализируйте, форматируйте и улучшайте HTML, CSS и JavaScript с помощью ИИ. Мгновенный интерактивный предпросмотр в браузере без регистрации.',
      keywords:
        'ИИ проверка кода, CodeEnhance AI, онлайн линтер HTML CSS JS, рефакторинг кода с ИИ, оптимизация фронтенда, песочница кода с предпросмотром',
      ogTitle: 'CodeEnhance AI — Проверка и оптимизация кода | Lade Stack',
      ogDescription:
        'Интеллектуальный редактор фронтенд-кода с живым предпросмотром и поддержкой ИИ. Бесплатно навсегда.',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: 'Документация — Руководства и справочник API',
      description:
        'Подробная техническая документация: быстрый старт, архитектурные гайды, экспорт в Git и развертывание проектов на Vercel.',
      keywords:
        'документация Lade Stack, руководства для разработчиков, справочник API, инструкция CodeEnhance AI, развертывание на Vercel, экспорт в GitHub',
      ogTitle: 'Документация — Руководства и справочник API | Lade Stack',
      ogDescription:
        'Инженерные руководства, технические спецификации и интеграция инструментов экосистемы Lade Stack.',
      breadcrumbName: 'Документация',
    },
    support: {
      title: 'Центр поддержки — Помощь и ответы на вопросы',
      description:
        'Ответы на частые вопросы, решение технических проблем и связь с инженерами Lade Stack. Отвечаем в течение 24 часов.',
      keywords:
        'поддержка Lade Stack, устранение неполадок, помощь по CodeEnhance AI, частые вопросы разработчиков, клиентская обработка файлов',
      ogTitle: 'Центр поддержки — Помощь и ответы на вопросы | Lade Stack',
      ogDescription:
        'Решение технических проблем и ответы на популярные вопросы по инструментам Lade Stack.',
      breadcrumbName: 'Поддержка',
    },
    contact: {
      title: 'Контакты — Связаться с инженерами',
      description:
        'Свяжитесь с основателем Girish Lade и командой Lade Stack. Предлагайте новые функции, сообщайте об ошибках или обсуждайте сотрудничество.',
      keywords:
        'контакты Lade Stack, написать Girish Lade, обратная связь от разработчиков, сообщить об ошибке, предложить функцию',
      ogTitle: 'Контакты — Связаться с инженерами | Lade Stack',
      ogDescription:
        'Прямая связь с разработчиками платформы. Быстрый ответ по вопросам сотрудничества и предложений.',
      breadcrumbName: 'Контакты',
    },
    privacy: {
      title: 'Политика конфиденциальности — Защита данных',
      description:
        'Политика конфиденциальности Lade Stack: локальная обработка файлов в браузере, нулевое хранение сниппетов кода и права пользователей.',
      keywords:
        'политика конфиденциальности Lade Stack, безопасность данных разработчиков, клиентская обработка в браузере, защита данных',
      breadcrumbName: 'Конфиденциальность',
    },
    terms: {
      title: 'Условия использования — Бесплатная лицензия',
      description:
        'Правила и условия сервисов Lade Stack: бессрочная бесплатная лицензия для личных и коммерческих проектов, правила добросовестного использования.',
      keywords:
        'условия использования Lade Stack, бесплатная лицензия разработчика, коммерческое использование, правила платформы',
      breadcrumbName: 'Условия использования',
    },
  },

  // =========================================================================
  // KOREAN (한국어) — Native Korean Tech Terminology
  // =========================================================================
  ko: {
    home: {
      title: '무료 AI 개발자 도구 및 코딩 유틸리티',
      description:
        'Girish Lade가 구축한 프라이버시 중심의 무료 개발자 플랫폼. 실시간 AI 코드 리뷰, REST & GraphQL API 테스트, 브라우저 파일 도구를 제공합니다.',
      keywords:
        'AI 개발자 도구, 무료 코딩 도구, 개발자 생산성 툴, API 테스트 도구, 브라우저 개발 툴, 클라이언트 PDF 도구, AI 코드 검토, Lade Stack',
      ogTitle: 'Lade Stack — 무료 AI 개발자 도구 및 코딩 유틸리티',
      ogDescription:
        '회원가입 없이 브라우저에서 즉시 실행되는 초고속 AI 코드 검토 및 API 테스트 개발자 플랫폼.',
      breadcrumbName: '홈',
    },
    about: {
      title: 'Girish Lade 소개 — 설립자 및 소프트웨어 아키텍트',
      description:
        'Lade Stack을 설립한 UI/UX 개발자이자 수석 소프트웨어 아키텍트 Girish Lade의 엔지니어링 철학, 경력 및 비전을 확인하세요.',
      keywords:
        'Girish Lade, Lade Stack 설립자, 소프트웨어 아키텍트, UI/UX 엔지니어, 생성형 AI 시스템, 클라우드 아키텍처, 개발자 철학',
      ogTitle: 'Girish Lade 소개 — 설립자 및 소프트웨어 아키텍트 | Lade Stack',
      ogDescription:
        '디자인, 소프트웨어 엔지니어링, 인공지능의 융합을 추구하는 Girish Lade의 개발 여정.',
      breadcrumbName: '소개',
    },
    apps: {
      title: '앱 갤러리 — 무료 AI 개발자 유틸리티 모음',
      description:
        'Lade Stack의 무료 개발자 툴킷을 살펴보세요: CodeEnhance AI, LS PDF 도구, 이미지 스튜디오, 이력서 빌더 및 API 테스트 유틸리티.',
      keywords:
        '개발자 도구 갤러리, 무료 개발 툴 모음, CodeEnhance AI, 온라인 PDF 도구, 이미지 압축 도구, 개발자 이력서 생성기, 무료 웹 유틸리티',
      ogTitle: '앱 갤러리 — 무료 AI 개발자 유틸리티 모음 | Lade Stack',
      ogDescription:
        '설치나 로그인 없이 웹 브라우저에서 바로 사용하는 실용적인 고성능 개발 도구 컬렉션.',
      breadcrumbName: '앱 갤러리',
    },
    products: {
      title: '핵심 AI 개발자 제품 라인업',
      description:
        'Lade Stack 핵심 개발 도구: CodeEnhance AI, API 테스트 플랫폼, AI 웹사이트 빌더, 보안 파일 허브를 무료로 이용하세요.',
      keywords:
        '대표 AI 개발 도구, CodeEnhance AI, API 테스트 플랫폼, 웹사이트 빌더 AI, 보안 파일 공유, 개발자 생산성 제품',
      ogTitle: '핵심 AI 개발자 제품 라인업 | Lade Stack',
      ogDescription:
        '반복적인 코딩 작업을 자동화하고 소프트웨어 릴리스 주기를 가속화하는 프로덕션급 도구.',
      breadcrumbName: '제품',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — 무료 코드 리뷰 및 린터',
      description:
        'HTML, CSS, JavaScript 코드를 실시간 AI 지원과 라이브 미리보기로 검사, 디버깅 및 개선하세요. 회원가입 없이 평생 무료.',
      keywords:
        'AI 코드 리뷰 도구, CodeEnhance AI, 무료 코드 린터, 프론트엔드 코드 개선, 온라인 코드 리팩토링, 실시간 코드 미리보기 샌드박스',
      ogTitle: 'CodeEnhance AI — 무료 코드 리뷰 및 린터 | Lade Stack',
      ogDescription:
        '실시간 브라우저 미리보기를 지원하는 지능형 프론트엔드 코드 에디터 및 AI 리팩토링 도구.',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: '개발자 문서 — 가이드 및 API 레퍼런스',
      description:
        'Lade Stack 개발자를 위한 포괄적인 기술 문서: 빠른 시작, API 사양, GitHub 내보내기 및 Vercel 배포 가이드.',
      keywords:
        'Lade Stack 문서, 개발자 가이드, API 레퍼런스, CodeEnhance AI 사용법, GitHub 연동 튜토리얼, Vercel 배포 체크리스트',
      ogTitle: '개발자 문서 — 가이드 및 API 레퍼런스 | Lade Stack',
      ogDescription:
        '엔지니어링 아키텍처 가이드와 API 통합 명세를 통해 손쉽게 프로젝트를 시작하세요.',
      breadcrumbName: '문서',
    },
    support: {
      title: '지원 센터 — 자주 묻는 질문(FAQ) 및 문제 해결',
      description:
        '도구 사용 중 발생하는 문제를 해결하고 자주 묻는 질문을 확인하세요. 엔지니어링 팀이 24시간 이내에 직접 답변합니다.',
      keywords:
        'Lade Stack 지원 센터, 개발 툴 문제 해결, CodeEnhance AI 도움말, 브라우저 툴 FAQ, 클라이언트 파일 처리 문의',
      ogTitle: '지원 센터 — 자주 묻는 질문(FAQ) 및 문제 해결 | Lade Stack',
      ogDescription:
        'Lade Stack 도구의 오류 해결 가이드 및 검증된 기술 답변을 찾아보세요.',
      breadcrumbName: '지원 센터',
    },
    contact: {
      title: '문의하기 — 엔지니어링 팀 피드백 및 제휴',
      description:
        '설립자 Girish Lade 및 핵심 엔지니어링 팀에 문의하세요. 새로운 기능 제안, 버그 제보, 기술 협업을 환영합니다.',
      keywords:
        'Lade Stack 문의, Girish Lade 연락처, 개발자 기능 제안, 버그 신고, 기술 협업 문의',
      ogTitle: '문의하기 — 엔지니어링 팀 피드백 및 제휴 | Lade Stack',
      ogDescription:
        '기능 요청, 이슈 리포트, 파트너십 관련 문의를 엔지니어링 팀에 직접 전달하세요.',
      breadcrumbName: '문의하기',
    },
    privacy: {
      title: '개인정보 처리방침 — 브라우저 내 데이터 보안',
      description:
        'Lade Stack 개인정보 처리방침: 브라우저 내부 파일 처리, AI 입력 데이터 미보관 정책 및 사용자 권리를 확인하세요.',
      keywords:
        'Lade Stack 개인정보 처리방침, 클라이언트 데이터 보안, 노-리텐션 정책, 브라우저 파일 안전성',
      breadcrumbName: '개인정보 처리방침',
    },
    terms: {
      title: '이용약관 — 무료 이용 라이선스 안내',
      description:
        'Lade Stack 서비스 이용약관: 개인 및 상업적 목적의 무료 사용 라이선스, 공정 이용 정책 및 서비스 보증 안내.',
      keywords:
        'Lade Stack 이용약관, 개발자 무료 라이선스, 상업적 무료 사용, 서비스 이용 규칙',
      breadcrumbName: '이용약관',
    },
  },

  // =========================================================================
  // PORTUGUESE (Português do Brasil - pt-BR)
  // =========================================================================
  'pt-BR': {
    home: {
      title: 'Ferramentas de IA Gratuitas para Desenvolvedores',
      description:
        'Plataforma gratuita e focada em privacidade criada por Girish Lade. Revisão de código com IA, testes de API REST e GraphQL, utilitários para PDF e web.',
      keywords:
        'ferramentas para desenvolvedores, ferramentas de IA para programadores, revisão de código IA, teste de API, utilitários web no navegador, ferramentas dev gratuitas, Lade Stack',
      ogTitle: 'Lade Stack — Ferramentas de IA Gratuitas para Desenvolvedores',
      ogDescription:
        'Utilitários de alta velocidade e privacidade: inspeção de código com IA, testes de API e ferramentas sem cadastro.',
      breadcrumbName: 'Início',
    },
    about: {
      title: 'Sobre Girish Lade — Fundador e Arquiteto de Software',
      description:
        'Conheça Girish Lade, desenvolvedor UI/UX e Arquiteto de Software Líder da Lade Stack. Veja nossa filosofia de engenharia e roadmap de produtos.',
      keywords:
        'Girish Lade, fundador da Lade Stack, arquiteto de software, desenvolvedor UI/UX, IA generativa, arquitetura em nuvem, filosofia dev',
      ogTitle: 'Sobre Girish Lade — Fundador e Arquiteto de Software | Lade Stack',
      ogDescription:
        'História do fundador, valores de engenharia e visão por trás da plataforma Lade Stack.',
      breadcrumbName: 'Sobre',
    },
    apps: {
      title: 'Galeria de Apps — Utilitários Gratuitos para Devs',
      description:
        'Explore as ferramentas gratuitas da Lade Stack: CodeEnhance AI, ferramentas de PDF, estúdio de imagens e criador de currículos para desenvolvedores.',
      keywords:
        'galeria de ferramentas dev, utilitários gratuitos para programadores, CodeEnhance AI, ferramentas PDF online, compressor de imagens, criador de currículo dev',
      ogTitle: 'Galeria de Apps — Utilitários Gratuitos para Devs | Lade Stack',
      ogDescription:
        'Inicie utilitários práticos diretamente no navegador com máxima privacidade e zero burocracia.',
      breadcrumbName: 'Galeria de Apps',
    },
    products: {
      title: 'Produtos Principais de IA para Desenvolvimento',
      description:
        'Conheça os produtos emblemáticos da Lade Stack: CodeEnhance AI, Plataforma de Teste de API, Criador de Sites com IA e Hub Seguro de Arquivos.',
      keywords:
        'produtos de IA para desenvolvedores, CodeEnhance AI, teste de API REST, construtor de sites IA, compartilhamento seguro de arquivos',
      ogTitle: 'Produtos Principais de IA para Desenvolvimento | Lade Stack',
      ogDescription:
        'Soluções projetadas para eliminar tarefas repetitivas e acelerar o ciclo de entrega de software.',
      breadcrumbName: 'Produtos',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — Revisão e Otimização de Código',
      description:
        'Inspecione, depure e otimize HTML, CSS e JavaScript com IA em tempo real e pré-visualização ao vivo. Gratuito e sem necessidade de cadastro.',
      keywords:
        'revisão de código com IA, CodeEnhance AI, linter gratuito de código, otimizador HTML CSS JS, refatoração de código online, preview ao vivo',
      ogTitle: 'CodeEnhance AI — Revisão e Otimização de Código | Lade Stack',
      ogDescription:
        'Editor frontend inteligente com sugestões em tempo real e preview interativo direto no navegador.',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: 'Documentação — Guias Técnicos e Referência de API',
      description:
        'Documentação técnica completa para as ferramentas Lade Stack: tutoriais passo a passo, especificações de API, exportação Git e deploy na Vercel.',
      keywords:
        'documentação Lade Stack, guias para desenvolvedores, referência de API, tutorial CodeEnhance AI, exportação GitHub, checklist deploy Vercel',
      ogTitle: 'Documentação — Guias Técnicos e Referência de API | Lade Stack',
      ogDescription:
        'Tutoriais e especificações de integração para acelerar seus projetos com as ferramentas Lade Stack.',
      breadcrumbName: 'Documentação',
    },
    support: {
      title: 'Central de Suporte — Ajuda e Perguntas Frequentes',
      description:
        'Encontre respostas rápidas, solucione dúvidas técnicas e fale com os engenheiros da Lade Stack. Resposta garantida em até 24 horas.',
      keywords:
        'suporte Lade Stack, solução de problemas dev, ajuda CodeEnhance AI, perguntas frequentes FAQ, suporte processamento no navegador',
      ogTitle: 'Central de Suporte — Ajuda e Perguntas Frequentes | Lade Stack',
      ogDescription:
        'Tire dúvidas e consulte soluções para os utilitários de desenvolvimento da Lade Stack.',
      breadcrumbName: 'Suporte',
    },
    contact: {
      title: 'Contato com Engenharia — Dúvidas e Sugestões',
      description:
        'Fale diretamente com Girish Lade e o time de engenharia. Envie sugestões de recursos, relate bugs ou proponha parcerias.',
      keywords:
        'contato Lade Stack, falar com Girish Lade, sugestão de ferramenta, relatar bug, suporte desenvolvedor, parceria técnica',
      ogTitle: 'Contato com Engenharia — Dúvidas e Sugestões | Lade Stack',
      ogDescription:
        'Canal direto com os desenvolvedores da plataforma para feedback, dúvidas e propostas de colaboração.',
      breadcrumbName: 'Contato',
    },
    privacy: {
      title: 'Política de Privacidade — Segurança no Navegador',
      description:
        'Política de privacidade da Lade Stack: processamento local de arquivos, política de não retenção de código e direitos do usuário.',
      keywords:
        'política de privacidade Lade Stack, privacidade de dados dev, processamento no navegador, segurança de código',
      breadcrumbName: 'Privacidade',
    },
    terms: {
      title: 'Termos de Serviço — Licença Gratuita de Uso',
      description:
        'Termos de uso da Lade Stack: licença gratuita para uso pessoal e comercial, diretrizes de uso justo e garantias.',
      keywords:
        'termos de serviço Lade Stack, licença gratuita para programadores, uso comercial permitido, regras de uso da API',
      breadcrumbName: 'Termos de Serviço',
    },
  },

  // =========================================================================
  // CHINESE (简体中文 - zh)
  // =========================================================================
  zh: {
    home: {
      title: '免费 AI 开发者工具与实用编程辅助套件',
      description:
        '由 Girish Lade 创建的免费纯浏览器开发者平台。提供实时 AI 前端代码审查、REST 与 GraphQL API 接口测试、本地文档与图像工具，免注册即用。',
      keywords:
        'AI 开发者工具, 免费编程工具, 开发者生产力工具, API 测试工具, 浏览器端开发工具, 本地 PDF 处理, 代码审查 AI, Lade Stack',
      ogTitle: 'Lade Stack — 免费 AI 开发者工具与实用编程辅助套件',
      ogDescription:
        '极速、注重隐私的现代开发者平台：AI 代码审查、接口调试与纯客户端文件工具，全站永久免费且无需注册。',
      breadcrumbName: '首页',
    },
    about: {
      title: '关于 Girish Lade — 创始人与首席软件架构师',
      description:
        '了解 Lade Stack 创始人 Girish Lade 的技术历程、UI/UX 与系统工程理念，探索专注于解决实际工程痛点的开发初衷。',
      keywords:
        'Girish Lade, Lade Stack 创始人, 软件架构师, UI/UX 开发者, 生成式 AI 工程师, 云原生架构, 工程师理念',
      ogTitle: '关于 Girish Lade — 创始人与首席软件架构师 | Lade Stack',
      ogDescription:
        '探索融合设计直觉、严密架构与生成式 AI 的独立全栈工程实践之路。',
      breadcrumbName: '关于我们',
    },
    apps: {
      title: '应用工具库 — 免费 AI 开发者实用工具箱',
      description:
        '探索 Lade Stack 旗下免费开发工具：CodeEnhance AI、LS PDF 工具箱、LS 图像工坊、Swift 简历生成器以及即将推出的 API 测试平台。',
      keywords:
        '开发者应用库, 免费开发工具集合, CodeEnhance AI, 在线 PDF 处理, 图像无损压缩, 程序员简历制作, 免安装工具',
      ogTitle: '应用工具库 — 免费 AI 开发者实用工具箱 | Lade Stack',
      ogDescription:
        '在浏览器沙箱内即时运行各类实用开发工具，隐私绝对安全，永久免费开放。',
      breadcrumbName: '应用库',
    },
    products: {
      title: '核心旗舰级 AI 开发者工具产品矩阵',
      description:
        '探索 Lade Stack 核心产品：CodeEnhance AI 代码增强器、API 自动化测试平台、AI 网页构建器与安全配置共享工具。',
      keywords:
        '核心 AI 开发者工具, CodeEnhance AI, API 测试平台, AI 网站构建器, 安全配置文件共享, 研发效率工具',
      ogTitle: '核心旗舰级 AI 开发者工具产品矩阵 | Lade Stack',
      ogDescription:
        '消除繁琐重复劳动，全方位加速软件工程落地交付的专业级工具。',
      breadcrumbName: '产品',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — 免费代码审查与优化利器',
      description:
        '借助实时 AI 建议和即时浏览器沙箱预览，快速审查、修复并重构 HTML、CSS 和 JavaScript 代码。永久免费免注册。',
      keywords:
        'AI 代码审查工具, CodeEnhance AI, 免费前端语法检查, HTML CSS JS 优化器, 在线代码重构, 实时前端预览沙箱',
      ogTitle: 'CodeEnhance AI — 免费代码审查与优化利器 | Lade Stack',
      ogDescription:
        '支持浏览器即时预览的智能前端代码编辑器，提供精准的 AST 结构重构与优化建议。',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: '开发者文档 — 技术指南与 API 接口参考',
      description:
        'Lade Stack 详尽技术文档：工具快速入门、API 数据契约、GitHub 导出教程以及 Vercel 部署验证清单。',
      keywords:
        'Lade Stack 文档, 开发者指南, API 规范, CodeEnhance AI 教程, GitHub 导出指南, Vercel 部署流程',
      ogTitle: '开发者文档 — 技术指南与 API 接口参考 | Lade Stack',
      ogDescription:
        '清晰详尽的架构设计指南与工程操作手册，助您快速搭建高效开发工作流。',
      breadcrumbName: '文档',
    },
    support: {
      title: '技术支持中心 — 常见问题与故障排查指南',
      description:
        '查找技术解答、排查工具使用问题并直接联系 Lade Stack 工程团队。所有咨询均在 24 小时内由工程师亲自回复。',
      keywords:
        'Lade Stack 支持中心, 开发者故障排查, CodeEnhance AI 帮助, 浏览器工具常见问题, 客户端数据处理咨询',
      ogTitle: '技术支持中心 — 常见问题与故障排查指南 | Lade Stack',
      ogDescription:
        '获取权威技术支持，解答关于纯前端文件处理与 AI 辅助工具的常见疑问。',
      breadcrumbName: '支持中心',
    },
    contact: {
      title: '联系工程团队 — 需求建议与技术合作',
      description:
        '直接联系创始人 Girish Lade 与核心团队。提交功能建议、反馈系统问题或商讨技术整合合作。',
      keywords:
        '联系 Lade Stack, 联系 Girish Lade, 开发者需求反馈, Bug 提交, 技术合作咨询',
      ogTitle: '联系工程团队 — 需求建议与技术合作 | Lade Stack',
      ogDescription:
        '直接对话核心开发人员，快速响应您的功能建议、缺陷报告与项目集成需求。',
      breadcrumbName: '联系我们',
    },
    privacy: {
      title: '隐私政策 — 浏览器端数据安全与不保留原则',
      description:
        'Lade Stack 隐私政策：所有文件均在本地浏览器处理，零外部存储，严格保护您的源代码与机密数据。',
      keywords:
        'Lade Stack 隐私政策, 开发者数据安全, 浏览器端离线处理, 零存储原则, 用户数据权益',
      breadcrumbName: '隐私政策',
    },
    terms: {
      title: '服务条款 — 免费个人与商业使用许可',
      description:
        'Lade Stack 平台服务条款：允许个人及商业项目完全免费使用，公平资源调用规则与责任声明。',
      keywords:
        'Lade Stack 服务条款, 开发者免费许可, 商业免费使用协议, 接口公平使用规范',
      breadcrumbName: '服务条款',
    },
  },

  // =========================================================================
  // JAPANESE (日本語 - ja)
  // =========================================================================
  ja: {
    home: {
      title: '無料のAI開発者ツール・コーディング支援環境',
      description:
        'Girish Ladeが構築したプライバシー重視の無料開発者プラットフォーム。リアルタイムAIコードレビュー、REST/GraphQL APIテスト、ブラウザ内PDF処理を提供。',
      keywords:
        'AI開発者ツール, 無料コーディングツール, エンジニア生産性向上, APIテストツール, ブラウザ開発ツール, クライアントサイドPDF処理, AIコードレビュー, Lade Stack',
      ogTitle: 'Lade Stack — 無料のAI開発者ツール・コーディング支援環境',
      ogDescription:
        '登録不要・完全無料で使える高速エンジニア向けWebツール群。AIコード検証やAPIテストをブラウザ上で即座に実行。',
      breadcrumbName: 'ホーム',
    },
    about: {
      title: 'Girish Lade について — 創業者・ソフトウェアアーキテクト',
      description:
        'Lade Stackの創業者でありUI/UX開発者・リードソフトウェアアーキテクトであるGirish Ladeのエンジニアリング理念と開発方針。',
      keywords:
        'Girish Lade, Lade Stack創業者, ソフトウェアアーキテクト, UI/UXエンジニア, 生成AIシステム, クラウドアーキテクチャ, 開発哲学',
      ogTitle: 'Girish Lade について — 創業者・ソフトウェアアーキテクト | Lade Stack',
      ogDescription:
        'デザイン、堅牢なシステム設計、実用的AI技術の融合を目指すエンジニアリングへの情熱。',
      breadcrumbName: '概要',
    },
    apps: {
      title: 'アプリギャラリー — 開発者向け無料便利ツール集',
      description:
        'Lade Stackの無料開発ツール一覧：CodeEnhance AI、LS PDFツール、画像最適化スタジオ、エンジニア履歴書ビルダー、APIテストツール。',
      keywords:
        '開発者向けツール一覧, 無料Webユーティリティ集, CodeEnhance AI, オンラインPDFツール, 画像圧縮ツール, エンジニア向けレジュメ作成',
      ogTitle: 'アプリギャラリー — 開発者向け無料便利ツール集 | Lade Stack',
      ogDescription:
        'インストールやアカウント登録不要でブラウザから即座に起動できる実用的な開発者ツール群。',
      breadcrumbName: 'アプリギャラリー',
    },
    products: {
      title: '主要AI開発者プロダクトラインナップ',
      description:
        'Lade Stackの主力開発製品：CodeEnhance AI、APIテストプラットフォーム、AIウェブサイトビルダー、セキュアファイルハブ。',
      keywords:
        '主要AI開発ツール, CodeEnhance AI, APIテストツール, WebサイトビルダーAI, セキュアファイル共有, 開発者向け生産性製品',
      ogTitle: '主要AI開発者プロダクトラインナップ | Lade Stack',
      ogDescription:
        '定型的な開発作業を自動化し、リリースのスピードと品質を両立させるプロフェッショナル向けツール。',
      breadcrumbName: 'プロダクト',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — 無料コードレビュー・改善ツール',
      description:
        'HTML、CSS、JavaScriptコードをリアルタイムAI解析とライブプレビューで瞬時に最適化・リファクタリング。登録不要で完全無料。',
      keywords:
        'AIコードレビューツール, CodeEnhance AI, 無料コード静的解析, フロントエンドコード最適化, オンラインリファクタリング, ライブプレビューエディタ',
      ogTitle: 'CodeEnhance AI — 無料コードレビュー・改善ツール | Lade Stack',
      ogDescription:
        'リアルタイムプレビューを備えたインテリジェントなフロントエンドコード編集・改善エディタ。',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: '技術ドキュメント — 開発ガイド・APIリファレンス',
      description:
        'Lade Stack製品の総合ドキュメント：クイックスタート、API仕様、GitHubコード出力、Vercelデプロイ手順書。',
      keywords:
        'Lade Stackドキュメント, 開発者ガイド, API仕様書, CodeEnhance AI使い方, GitHub連携チュートリアル, Vercelデプロイ手順',
      ogTitle: '技術ドキュメント — 開発ガイド・APIリファレンス | Lade Stack',
      ogDescription:
        'ステップバイステップで理解できる設計ガイドとAPI仕様で、スムーズな開発フローを実現します。',
      breadcrumbName: 'ドキュメント',
    },
    support: {
      title: 'サポートセンター — よくある質問とトラブルシューティング',
      description:
        'ツールの使い方やエラー対処法、FAQをご確認いただけます。開発チームが24時間以内に直接回答します。',
      keywords:
        'Lade Stackサポート, 開発ツールトラブルシューティング, CodeEnhance AIヘルプ, ブラウザツールFAQ, クライアント側処理の質問',
      ogTitle: 'サポートセンター — よくある質問とトラブルシューティング | Lade Stack',
      ogDescription:
        'ツールの疑問や不具合を迅速に解決するためのサポート窓口とFAQ一覧。',
      breadcrumbName: 'サポート',
    },
    contact: {
      title: 'お問い合わせ — 開発チームへのフィードバック',
      description:
        '創業者Girish Ladeおよび開発チームへのお問い合わせ。機能リクエスト、バグ報告、技術提携のご相談はこちらから。',
      keywords:
        'Lade Stack問い合わせ, Girish Lade連絡先, 開発者機能リクエスト, 不具合報告, 技術連携相談',
      ogTitle: 'お問い合わせ — 開発チームへのフィードバック | Lade Stack',
      ogDescription:
        '製品の改善要望や協業のご相談など、エンジニアリングチームが直接ご対応します。',
      breadcrumbName: 'お問い合わせ',
    },
    privacy: {
      title: 'プライバシーポリシー — ブラウザ完結のデータ保護',
      description:
        'Lade Stackのプライバシーポリシー：ブラウザ内での完全ローカル処理、コード保持ゼロ方針、ユーザーの権利について。',
      keywords:
        'Lade Stackプライバシーポリシー, 開発者データ保護, ブラウザ内処理, データ非保持ポリシー',
      breadcrumbName: 'プライバシーポリシー',
    },
    terms: {
      title: '利用規約 — 無料商用・個人利用ライセンス',
      description:
        'Lade Stack利用規約：個人および商用プロジェクトでの完全無料ライセンス、利用ガイドライン、免責事項。',
      keywords:
        'Lade Stack利用規約, 開発者無料ライセンス, 商用無料利用, API利用規定',
      breadcrumbName: '利用規約',
    },
  },

  // =========================================================================
  // TURKISH (Türkçe - tr) — Supporting Existing Config
  // =========================================================================
  tr: {
    home: {
      title: 'Ücretsiz Yapay Zeka Geliştirici Araçları',
      description:
        'Girish Lade tarafından geliştirilen gizlilik odaklı ücretsiz geliştirici platformu. Yapay zeka ile kod inceleme, REST & GraphQL API testleri ve web araçları.',
      keywords:
        'yapay zeka geliştirici araçları, ücretsiz kodlama araçları, geliştirici verimliliği, API test aracı, tarayıcı geliştirici araçları, Lade Stack',
      ogTitle: 'Lade Stack — Ücretsiz Yapay Zeka Geliştirici Araçları',
      ogDescription:
        'Kayıt gerektirmeyen, tarayıcıda çalışan hızlı ve güvenli geliştirici platformu.',
      breadcrumbName: 'Ana Sayfa',
    },
    about: {
      title: 'Girish Lade Hakkında — Kurucu ve Yazılım Mimarı',
      description:
        'Lade Stack kurucusu, UI/UX geliştiricisi ve Yazılım Mimarı Girish Lade hakkında bilgi edinin. Mühendislik ilkelerimiz ve vizyonumuz.',
      keywords:
        'Girish Lade, Lade Stack kurucusu, yazılım mimarı, UI/UX geliştirici, üretken yapay zeka, bulut mimarisi',
      ogTitle: 'Girish Lade Hakkında — Kurucu ve Yazılım Mimarı | Lade Stack',
      ogDescription:
        'Tasarım ve yapay zeka mühendisliğini birleştiren Girish Lade’in geliştirme yolculuğu.',
      breadcrumbName: 'Hakkında',
    },
    apps: {
      title: 'Uygulama Galerisi — Ücretsiz Geliştirici Araçları',
      description:
        'Lade Stack ücretsiz araç setini keşfedin: CodeEnhance AI, PDF araçları, görsel sıkıştırma ve özgeçmiş oluşturucu.',
      keywords:
        'geliştirici araç galerisi, ücretsiz kodlama araçları, CodeEnhance AI, online PDF araçları, resim sıkıştırma',
      ogTitle: 'Uygulama Galerisi — Ücretsiz Geliştirici Araçları | Lade Stack',
      ogDescription:
        'Tarayıcınızda doğrudan çalışan, gizlilik odaklı pratik geliştirici araçları.',
      breadcrumbName: 'Uygulama Galerisi',
    },
    products: {
      title: 'Öncü Yapay Zeka Geliştirici Ürünleri',
      description:
        'Lade Stack amiral gemisi geliştirici ürünleri: CodeEnhance AI, API Test Platformu, Web Sitesi Oluşturucu ve Güvenli Dosya Merkezi.',
      keywords:
        'yapay zeka geliştirici ürünleri, CodeEnhance AI, API test platformu, web sitesi kurucu, güvenli dosya paylaşımı',
      ogTitle: 'Öncü Yapay Zeka Geliştirici Ürünleri | Lade Stack',
      ogDescription:
        'Tekrarlayan işleri otomatikleştiren ve yazılım teslimatını hızlandıran profesyonel araçlar.',
      breadcrumbName: 'Ürünler',
    },
    aiCodeViewer: {
      title: 'CodeEnhance AI — Kod İnceleme ve İyileştirme',
      description:
        'HTML, CSS ve JavaScript kodlarınızı yapay zeka desteği ve canlı önizleme ile anında inceleyin ve optimize edin.',
      keywords:
        'yapay zeka kod inceleme, CodeEnhance AI, kod optimize edici, HTML CSS JS düzenleyici, anlık kod önizleme',
      ogTitle: 'CodeEnhance AI — Kod İnceleme ve İyileştirme | Lade Stack',
      ogDescription:
        'Canlı önizlemeli akıllı frontend kod editörü ve yapay zeka refactoring aracı.',
      breadcrumbName: 'CodeEnhance AI',
    },
    docs: {
      title: 'Dokümantasyon — Kılavuzlar ve API Referansı',
      description:
        'Lade Stack araçları için teknik belgeler: hızlı başlangıç, API özellikleri, GitHub aktarımı ve Vercel yayınlama rehberi.',
      keywords:
        'Lade Stack belgeleri, geliştirici kılavuzu, API referansı, CodeEnhance AI kullanımı, Vercel dağıtım kılavuzu',
      ogTitle: 'Dokümantasyon — Kılavuzlar ve API Referansı | Lade Stack',
      ogDescription:
        'Projelerinizi hızla hayata geçirmeniz için adım adım teknik rehberler.',
      breadcrumbName: 'Dokümantasyon',
    },
    support: {
      title: 'Destek Merkezi — Sıkça Sorulan Sorular',
      description:
        'Sorun giderme rehberi ve sıkça sorulan sorular. 24 saat içinde mühendislik ekibimizden doğrudan yanıt alın.',
      keywords:
        'Lade Stack destek, hata giderme, CodeEnhance AI yardım, tarayıcı araçları FAQ',
      ogTitle: 'Destek Merkezi — Sıkça Sorulan Sorular | Lade Stack',
      ogDescription:
        'Lade Stack araçlarıyla ilgili teknik destek ve doğrulanmış yanıtlar.',
      breadcrumbName: 'Destek',
    },
    contact: {
      title: 'İletişim — Mühendislik Ekibine Ulaşın',
      description:
        'Girish Lade ve çekirdek mühendislik ekibiyle iletişime geçin. Özellik önerin veya iş birliği fırsatlarını tartışın.',
      keywords:
        'Lade Stack iletişim, Girish Lade iletişim, özellik önerisi, hata bildirimi, teknik iş birliği',
      ogTitle: 'İletişim — Mühendislik Ekibine Ulaşın | Lade Stack',
      ogDescription:
        'Geliştiricilerle doğrudan iletişim kurun, geri bildirimlerinizi anında iletin.',
      breadcrumbName: 'İletişim',
    },
    privacy: {
      title: 'Gizlilik Politikası — Tarayıcı İçi Güvenlik',
      description:
        'Lade Stack gizlilik politikası: yerel tarayıcı içi işlem, veri saklamama prensibi ve kullanıcı hakları.',
      keywords:
        'Lade Stack gizlilik politikası, geliştirici veri güvenliği, tarayıcıda işleme, veri gizliliği',
      breadcrumbName: 'Gizlilik Politikası',
    },
    terms: {
      title: 'Kullanım Koşulları — Ücretsiz Kullanım Lisansı',
      description:
        'Lade Stack kullanım şartları: kişisel ve ticari projeler için ücretsiz lisans ve adil kullanım politikaları.',
      keywords:
        'Lade Stack kullanım koşulları, ücretsiz geliştirici lisansı, ticari kullanım şartları',
      breadcrumbName: 'Kullanım Koşulları',
    },
  },
};

/**
 * Retrieve SEO metadata for a page and locale, falling back to English.
 */
export function getPageSEO(page: SEOPageKey, lang: SupportedLocale): PageSEO {
  return seoData[lang]?.[page] ?? seoData['en'][page];
}

/**
 * Helper to generate valid Schema.org BreadcrumbList structured data.
 */
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
