import type { LocaleContent } from './content-types';

export const ko: LocaleContent = {
  metaDescription: '무료 AI 개발자 도구: 코드 리뷰, PDF 툴킷, 이력서 빌더와 이미지 스튜디오. 가입 없이 평생 무료.',
  testimonials: [
    {
      quote: 'CodeEnhance AI 덕분에 프론트엔드 작업 속도가 두 배가 됐어요. 실시간 AI 제안이 시니어 개발자와 페어 프로그래밍하는 느낌입니다.',
      name: 'Priya Sharma',
      role: '프론트엔드 엔지니어, 뭄바이'
    },
    {
      quote: 'LS PDF Tools 하나로 팀의 유료 구독 세 개를 끊었습니다. 완전 클라이언트 방식에 빠르고 무료라니 믿기 어렵네요.',
      name: 'Daniel Kim',
      role: '인디 해커, 서울'
    },
    {
      quote: 'RAG 아키텍처와 MLOps는 Lade Stack 블로그에서 찾아봅니다. 깊이 있고 실용적이고 군더더기가 없어요.',
      name: 'Ana Souza',
      role: 'ML 엔지니어, 상파울루'
    }
  ],
  products: [
    {
      title: 'CodeEnhance AI',
      tagline: '지능형 코드 뷰어와 개선 도구',
      desc: '실시간 AI 린팅과 제안, 즉시 미리보기로 날것의 코드를 프로덕션 수준으로 바꿔보세요.',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: '인기'
    },
    {
      title: 'API Testing Platform',
      tagline: 'REST·GraphQL 자동 테스트',
      desc: '자동 검증 스위트 생성, API 응답 모킹, 보안 벤치마크를 몇 초 만에 실행하세요.',
      icon: 'lucide:network',
      link: '/apps',
      badge: '초고속'
    },
    {
      title: 'Website Builder AI',
      tagline: '노코드 시맨틱 생성기',
      desc: '시맨틱 마크업의 모던 반응형 웹 인터페이스를 만들고 표준 HTML/CSS로 내보내세요.',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: '노코드'
    },
    {
      title: 'Secure File Hub',
      tagline: '암호화된 개발자 파일 공유',
      desc: '설정 파일, 자격증명, 배포 아카이브를 빠르고 안전하게 임시 공유하세요.',
      icon: 'lucide:shield-check',
      link: '/apps',
      badge: '암호화'
    }
  ],
  supportTopics: [
    { title: '시작하기', text: '갤러리에서 앱을 고르면 1분 안에 바로 씁니다. 가입도 필요 없어요.' },
    { title: '파일 도구', text: 'PDF·이미지 도구는 로컬에서 동작합니다. 큰 파일은 안정적인 연결의 데스크톱을 권장해요.' },
    { title: 'CodeEnhance AI', text: '코드를 붙여넣고 액션을 고른 뒤 제안을 검토하고 복사·다운로드하세요.' },
    { title: '계정과 데이터', text: '계정이 필요 없습니다. 사이트 데이터를 지워도 내보내기로 작업물을 지킬 수 있어요.' }
  ],
  supportFaqs: [
    { q: '도구가 로드되지 않아요. 어떻게 하죠?', a: '페이지를 강력 새로고침하고, ladestack.in에 대한 공격적인 광고 차단기를 끈 뒤 최근 1년 이내 크로미움·파이어폭스로 시도해 보세요.' },
    { q: '제 파일이 어딘가에 업로드되나요?', a: '아니요. 핵심 도구는 완전 클라이언트 방식이라 파일이 기기를 떠나지 않습니다.' },
    { q: '버그를 어떻게 신고하나요?', a: '도구 이름, 브라우저 버전, 재현 단계와 함께 admin@ladestack.in으로 보내주세요. 스크린샷이 있으면 좋아요.' },
    { q: '새 도구를 제안할 수 있나요?', a: '물론이죠. 커뮤니티 제안이 로드맵을 이끕니다. 문의 페이지로 연락해 주세요.' },
    { q: '무료 도구에 SLA가 있나요?', a: '공식 SLA는 없지만 가동 시간을 상시 모니터링하고 장애는 빠르게 고칩니다.' },
    { q: '모범 사례는 어디서 배우죠?', a: '문서와 블로그부터 보세요. AI 개발 A to Z 가이드가 27개 넘게 있습니다.' }
  ],
  contactFaqs: [
    {
      q: 'Lade Stack이란 무엇인가요?',
      a: 'Lade Stack은 인도에서 시작된 독립 소프트웨어 및 기술 플랫폼으로, 실용적인 개발자 도구, AI 기반 소프트웨어, SaaS 제품 및 최신 웹 애플리케이션 구축에 주력하고 있습니다. 세심한 UI/UX 디자인, 탄탄한 엔지니어링, 실용적 자동화를 통해 기술적 워크플로의 마찰을 해소하고자 합니다.'
    },
    {
      q: 'Lade Stack을 만드는 사람은 누구인가요?',
      a: 'Lade Stack은 창립자이자 수석 소프트웨어 아키텍트(Founder & Lead Software Architect)인 Girish Lade가 설립하고 설계했습니다. UI/UX 디자인, 프론트엔드/백엔드 엔지니어링, 클라우드 아키텍처, 생성형 AI를 아우르는 전문성을 바탕으로 제품 방향을 이끌며 실제 엔지니어링 문제를 해결하는 도구를 만듭니다.'
    },
    {
      q: 'Lade Stack이 다른 소프트웨어 플랫폼과 다른 점은 무엇인가요?',
      a: '과장된 마케팅이나 무거운 번들 소프트웨어를 지양하고, 창립자 주도로 디자인과 엔지니어링의 융합을 추구합니다. 불필요한 회원가입 장벽이나 복잡한 설정 없이, 즉시 유용하고 빠른 성능의 도구를 제공합니다.'
    },
    {
      q: 'Lade Stack은 어떤 제품을 만드나요?',
      a: '특화된 개발자 유틸리티, 지능형 코드 개선 도구, 클라이언트 사이드 생산성 앱, 현대적 웹 소프트웨어를 개발합니다. 브라우저 내 코드 편집기 CodeEnhance AI, 완전한 로컬 처리로 개인정보를 보호하는 LS PDF Tools 및 LS Image Studio, Swift Resume, API Testing Platform 등이 포함됩니다.'
    },
    {
      q: 'Lade Stack은 소프트웨어 개발자 전용인가요?',
      a: 'CodeEnhance AI, API Testing Platform, 기술 문서 등 핵심 도구는 개발자 우선으로 설계되어 반복 작업을 줄여줍니다. 반면 LS PDF Tools, LS Image Studio, Swift Resume와 같은 생산성 도구는 학생, 크리에이터 및 다양한 분야의 전문가에게도 직관적이고 유용하게 제작되었습니다.'
    },
    {
      q: 'Lade Stack은 생성형 AI를 어떻게 활용하나요?',
      a: '생성형 AI는 코드 구조 분석, 문맥 기반 개선 제안, 문서 요약 등 머신 인텔리전스가 실질적으로 작업 속도를 높여주는 영역에만 실용적으로 통합됩니다. 단순한 유행성 AI 도입을 피하고, 사람의 감독하에 실질적 시간을 절약해주는 지원에 집중합니다.'
    },
    {
      q: 'Lade Stack 제품은 브라우저 기반인가요?',
      a: '네, 대부분의 Lade Stack 애플리케이션은 최신 웹 브라우저에서 직접 실행되며, 무거운 로컬 설치나 런타임 종속성 없이 즉시 사용할 수 있습니다. 파일 및 이미지 변환 등 다수의 유틸리티는 완벽한 속도와 보안을 위해 사용자 기기에서 로컬로 동작합니다.'
    },
    {
      q: '정말 완전 무료로 이용할 수 있나요?',
      a: '네. Lade Stack의 주요 개발자 도구 및 생산성 유틸리티는 유료 결제벽, 숨겨진 체험 기간, 신용카드 요구 없이 전면 무료로 제공됩니다. 전 세계 개발자와 학습자가 유용한 도구에 쉽게 접근할 수 있도록 돕는 것이 목표입니다.'
    },
    {
      q: '모든 제품이 오픈 소스인가요?',
      a: 'Lade Stack은 개방적이고 커뮤니티 친화적인 철학을 따르며, 선별된 도구, 라이브러리 및 가이드를 GitHub에 공개하고 있습니다. 다만 "무료 이용"이 "모든 내부 서비스의 오픈 소스화"를 의미하지는 않습니다. 공개 저장소는 Girish Lade의 GitHub 프로필에서 확인하실 수 있습니다.'
    },
    {
      q: '사용자 데이터와 개인정보는 어떻게 처리되나요?',
      a: '개인정보 보호는 최우선 아키텍처 원칙입니다. LS PDF Tools 및 LS Image Studio와 같은 핵심 도구는 브라우저 내부에서만 실행되므로 파일이 외부 서버로 전송되지 않습니다. 온라인 서비스와 연동되는 도구의 경우에도 요청 수행에 필요한 최소한의 범위 내에서만 데이터를 처리합니다.'
    },
    {
      q: '문제가 발생했을 때 지원을 받으려면 어떻게 하나요?',
      a: '이 페이지의 문의 양식을 이용하거나 admin@ladestack.in으로 이메일을 보내실 수 있습니다. 모든 문의는 Girish Lade가 직접 확인합니다. 공식 엔터프라이즈 SLA는 없지만, 이슈를 적극적으로 조사하고 건설적인 질문에 신속하게 답변해 드립니다.'
    },
    {
      q: '새로운 기능이나 도구 아이디어를 제안할 수 있나요?',
      a: '네, 커뮤니티의 의견을 언제나 환영합니다. 문의 양식이나 GitHub Issue를 통해 아이디어를 제안해 주세요. 실용성, 기술적 구현 가능성, 플랫폼의 로드맵 방향을 종합적으로 고려하여 반영합니다.'
    },
    {
      q: '버그를 발견했습니다. 어떻게 신고해야 하나요?',
      a: '오류를 발견하셨다면 문의 양식이나 이메일(admin@ladestack.in)로 제보해 주세요. 도구 이름, 사용 중인 브라우저 및 OS, 재현 단계와 에러 메시지/스크린샷을 함께 보내주시면 원인 파악과 수정에 큰 도움이 됩니다.'
    },
    {
      q: '문서와 사용 가이드는 어디서 볼 수 있나요?',
      a: '상세 가이드, 아키텍처 분석 및 시작 방법은 문서 섹션(/docs)과 Lade Stack 블로그에서 확인하실 수 있습니다. 각 제품의 릴리즈와 업데이트에 맞춰 문서는 지속적으로 확충되고 있습니다.'
    },
    {
      q: '엔터프라이즈 솔루션이나 팀 플랜이 제공되나요?',
      a: 'Lade Stack은 현재 창립자가 주도하는 독립 플랫폼으로, 무거운 기업 계약이나 별도 인증 패키지 대신 빠르고 유용한 웹 도구 제작에 집중하고 있습니다. 다만 팀이나 스타트업 단위의 맞춤 연동이나 요구사항이 있으실 경우 문의 양식으로 편하게 논의하실 수 있습니다.'
    },
    {
      q: 'Lade Stack은 다음에 무엇을 만들지 어떻게 결정하나요?',
      a: '개발자들이 겪는 실제 병목 현상, 사용자 피드백, 그리고 웹 기술과 생성형 AI를 통해 비효율을 줄일 수 있는 기회를 바탕으로 결정합니다. 모든 도구는 "이것이 실질적인 시간을 절약하고 핵심 워크플로를 쉽게 만드는가?"라는 질문에서 출발합니다.'
    },
    {
      q: 'Lade Stack과 협력하거나 기여할 수 있나요?',
      a: '기술적인 피드백, 오픈 소스 기여, 프로젝트 관련 논의는 언제나 환영합니다. 오픈 저장소에 기여하고 싶은 엔지니어나 협업에 관심 있는 빌더분들은 admin@ladestack.in 또는 LinkedIn, GitHub을 통해 연락해 주세요.'
    }
  ],
  docsGroups: [
    { id: 'getting-started', title: '시작하기', articles: [
      { title: '퀵스타트: 첫 앱 실행하기', text: '앱 갤러리에서 도구를 고르면 가입 없이 1분 안에 바로 생산적으로 씁니다.' },
      { title: '생태계 둘러보기', text: '홈, 앱, 블로그, 문서, 지원 — 각 화면이 워크플로에 어떻게 맞는지.' }
    ]},
    { id: 'api-reference', title: 'API 레퍼런스', articles: [
      { title: 'CodeEnhance AI 사용법', text: 'HTML·CSS·JS를 붙여넣고 개선·설명을 골라 프로덕션 코드를 내보내세요.' },
      { title: '쿼터와 페어유스', text: '모두가 빠르게 쓰도록 분당 가드를 둔 넉넉한 무료 쿼터.' }
    ]},
    { id: 'integrations', title: '연동', articles: [
      { title: 'GitHub·Vercel로 내보내기', text: '만든 코드를 레포에 바로 복사하고 프리뷰 배포까지 한 번에.' }
    ]},
    { id: 'tutorials', title: '튜토리얼', articles: [
      { title: '5분 만에 랜딩 페이지 만들기', text: '웹사이트 빌더와 이미지 스튜디오로 프롬프트부터 배포까지.' }
    ]},
    { id: 'security', title: '보안', articles: [
      { title: '설계부터 프라이버시', text: '클라이언트 처리라 핵심 도구에서는 파일이 브라우저를 떠나지 않습니다.' }
    ]},
    { id: 'teams', title: '팀', articles: [
      { title: '공유 링크로 협업하기', text: '가져오기 쉬운 JSON 내보내기로 결과물과 템플릿을 팀과 공유하세요.' }
    ]},
    { id: 'data', title: '데이터 관리', articles: [
      { title: '작업물 내보내기', text: '모든 도구가 복사·다운로드·마크다운 내보내기를 지원합니다. 데이터는 당신의 것.' }
    ]},
    { id: 'deployment', title: '배포', articles: [
      { title: '셀프호스팅 체크리스트', text: '정적 우선 아키텍처라 도구를 미러링하기 쉽습니다.' }
    ]}
  ],
  docsChangelog: [
    { v: 'v2.4.0', date: '2026-08-20', text: '7개 언어 지원과 Lighthouse 100점의 Pure Astro 리빌드.' },
    { v: 'v2.3.0', date: '2024-11-30', text: 'Documentation AI 베타와 API Testing 컬렉션.' },
    { v: 'v2.0.0', date: '2024-06-01', text: 'CodeEnhance AI 정식 출시.' }
  ],
  timeline: [
    { year: '2020', title: '툴킷의 시작', text: 'Girish Lade가 PDF·이미지·코드 헬퍼 같은 개인 개발자 유틸리티를 만들기 시작.' },
    { year: '2022', title: 'Lade Stack의 윤곽', text: '공유 디자인 언어와 평생 무료 약속으로 도구를 하나의 브랜드로 묶음.' },
    { year: '2024', title: 'AI 생태계로', text: 'CodeEnhance AI 출시, 블로그·문서 27개 돌파, 커뮤니티 8,000명 돌파.' },
    { year: '2026', title: 'Pure Astro 리빌드', text: '제로 JS 런타임, 7개 언어, Lighthouse 100점의 완전 정적 리빌드.' }
  ],
  aboutStats: ['설립', '프로덕션 도구', '개발자', '평생 무료'],
  storyExtra: 'AI 시스템, 웹 개발, UX에 걸친 멀티 분야 엔지니어 겸 디자이너. 모든 크리에이터에게 스타트업 속도의 슈퍼파워를 공짜로 쥐여주는 도구를 만듭니다.',
  footerLinks: {
    aiCodeViewer: 'AI 코드 뷰어',
    support: '지원 센터',
    privacy: '개인정보처리방침',
    terms: '이용약관'
  },
  aicodeFeatures: [
    { title: '실시간 AI 지원', text: '근거 있는 제안으로 입력과 동시에 설명·리팩터·개선을.' },
    { title: '라이브 미리보기와 컴파일', text: 'HTML·CSS·JS 결과를 에러 하이라이트와 함께 즉시 확인.' },
    { title: '원클릭 개선', text: '거친 스니펫을 깔끔하고 접근성 좋은 프로덕션 코드로.' },
    { title: '어디로든 내보내기', text: '복사·다운로드 자유. 락인도 워터마크도 없습니다.' }
  ],
  privacy: [
    { h: '수집하는 정보', p: '최소한만 모읍니다. 보내주신 문의 메시지, 구독 신청한 뉴스레터 이메일, 그리고 프라이버시를 존중하는 분석(페이지뷰, 크로스사이트 추적 없음). 핵심 도구는 파일을 전부 브라우저에서 처리해서 문서가 저희 서버에 닿지 않습니다.' },
    { h: '정보의 이용', p: '지원 요청 답변, 신청하신 뉴스레터 발송, 성능·안정성 개선에만 씁니다. 개인정보를 팔거나 광고 네트워크와 공유하지 않습니다.' },
    { h: '쿠키와 저장소', p: '테마·언어 설정은 기기의 localStorage에만 둡니다. 분석 쿠키가 있다면 자사 익명 처리된 것만 씁니다.' },
    { h: '이용자의 권리', p: 'admin@ladestack.in으로 언제든 열람·정정·삭제를 요청하세요. 이메일은 원클릭으로 수신 거부됩니다.' },
    { h: '문의', p: '정책 문의: admin@ladestack.in, 인도 뭄바이.' }
  ],
  terms: [
    { h: '허용된 이용', p: '도구를 합법적으로 쓰세요. 레이트 리밋 남용, 서비스 방해 시도, 권리 없는 콘텐츠 처리는 금지입니다.' },
    { h: '무료 라이선스', p: '개인·상용 모두 무료. 만든 결과물은 당신의 것. 플랫폼 자체를 저희 브랜드로 재배포하려면 허가가 필요합니다.' },
    { h: 'API 페어유스', p: '자동 접근은 공개 쿼터를 지켜주세요. 과도한 트래픽은 모두를 위해 제한될 수 있습니다.' },
    { h: '보증 없음', p: '서비스는 "있는 그대로" 제공되며 보증하지 않습니다. 안정성에 최선을 다하지만 무중단을 장담할 순 없습니다.' },
    { h: '책임의 제한', p: '법이 허용하는 최대 범위에서, 서비스 이용으로 인한 간접적·파생적 손해에 책임지지 않습니다.' },
    { h: '문의', p: '약관 문의: admin@ladestack.in, 인도 뭄바이.' }
  ],
  apps: {
    'ai-code-viewer-ai': {
      tagline: 'AI 프론트엔드 코드 에디터',
      description: '실시간 AI 지원으로 HTML·CSS·JS를 편집·컴파일·개선하세요.',
      features: ['실시간 AI 지원', '라이브 미리보기', '원클릭 개선']
    },
    'ls-pdf': {
      tagline: '브라우저에서 쓰는 무료 PDF 툴킷',
      description: '병합·분할·압축·변환을 전부 클라이언트에서. 업로드 없습니다.',
      features: ['병합·분할', '압축', 'PDF를 이미지로']
    },
    'ls-img': {
      tagline: '이미지 압축·변환을 즉시',
      description: '프라이버시 보장 브라우저 처리로 일괄 압축·리사이즈·변환.',
      features: ['일괄 압축', '포맷 변환', '리사이즈']
    },
    'swift-resume': {
      tagline: '몇 분 만에 ATS 이력서',
      description: '라이브 미리보기와 PDF 내보내기로 ATS 최적화 이력서를 뚝딱.',
      features: ['ATS 템플릿', '라이브 미리보기', 'PDF 내보내기']
    },
    'bharat-land': {
      tagline: '인도의 토지대장 인사이트',
      description: '깔끔하고 빠른 인터페이스로 토지대장 데이터를 조회·이해.',
      features: ['빠른 조회', '깔끔한 UI', '모바일 지원']
    },
    'api-testing': {
      tagline: 'REST·GraphQL API를 눈으로 테스트',
      description: '컬렉션·환경으로 API 테스트를 설계·전송·자동화.',
      features: ['컬렉션', '환경', '테스트 스크립트']
    },
    'website-builder': {
      tagline: 'AI로 랜딩 페이지 뚝딱',
      description: '사이트를 설명하면 빠르고 SEO-ready한 랜딩 페이지가 완성.',
      features: ['AI 섹션', 'SEO 기본값', '원클릭 발행']
    },
    'file-management': {
      tagline: '만료 링크로 파일 공유',
      description: '파일을 올리고 안전하고 만료되는 링크를 완전 통제 하에 공유.',
      features: ['만료 링크', '가입 불필요', '빠른 CDN']
    },
    'documentation-ai': {
      tagline: '문서를 즉시 요약',
      description: '문서·코드를 붙여넣으면 명쾌한 요약·가이드·레퍼런스가 완성.',
      features: ['즉시 요약', '코드 설명', '마크다운 내보내기']
    }
  },
  appTime: {
    'Instant': '즉시',
    '1 minute': '1분',
    '2 minutes': '2분',
    '5 minutes': '5분'
  },
  appCategories: {
    'AI Tools': 'AI 도구',
    'Productivity': '생산성',
    'Utilities': '유틸리티'
  },
  blogCategories: {
    'AI Development': 'AI 개발',
    'Generative AI': '생성형 AI',
    'SaaS Architecture': 'SaaS 아키텍처',
    'Backend as a Service': 'BaaS',
    'API Design & Scaling': 'API 설계·확장',
    'Cloud Computing': '클라우드',
    'Virtual Machines': '가상 머신',
    'DevOps & CI/CD': 'DevOps·CI/CD',
    'Security in Web Apps': '웹 보안',
    'AI Production Systems': 'AI 프로덕션'
  },
  blogPosts: {
    'future-of-ai-in-software-development': { title: '2025년 이후 AI 소프트웨어 개발의 미래', description: '생성형 모델, 에이전틱 워크플로, 자동 검증이 현대 소프트웨어 엔지니어링을 어떻게 바꾸는지 살펴봅니다.' },
    'building-ai-powered-code-review-systems': { title: 'AI 코드 리뷰 시스템 만들기', description: 'LLM으로 버그를 잡고 스타일을 강제하고 개발자를 멘토링하는 자동 리뷰 파이프라인 설계법.' },
    'machine-learning-pipelines-for-web-developers': { title: '웹 개발자를 위한 머신러닝 파이프라인', description: '데이터 수집부터 학습, 평가, 서빙까지 — 실무 웹 개발자를 위한 ML 파이프라인 입문.' },
    'generative-ai-for-content-creation': { title: '생성형 AI로 콘텐츠 만들기', description: '자신만의 목소리를 잃지 않으면서 초안, 편집, 확장을 LLM으로 처리하는 법.' },
    'building-rag-applications-vector-databases': { title: '벡터 DB로 RAG 앱 만들기', description: '청킹, 임베딩, 벡터 검색부터 근거 있는 답변까지, RAG end-to-end 가이드.' },
    'fine-tuning-llms-domain-specific-tasks': { title: '도메인 특화 LLM 파인튜닝', description: '프롬프트 vs 파인튜닝 판단 기준, 데이터셋 준비, 저예산 LoRA 워크플로.' },
    'multi-tenant-saas-architecture-patterns': { title: '멀티테넌트 SaaS 아키텍처 패턴', description: '사일로·풀·브리지 테넌시 모델의 격리, 비용, 확장성 트레이드오프 비교.' },
    'building-subscription-billing-systems': { title: '구독 결제 시스템 만들기', description: '트라이얼, 일할 계산, 미수금 회수, 웹훅 — 재무팀이 신뢰하는 빌링 설계.' },
    'scaling-saas-applications-million-users': { title: '100만 사용자를 위한 SaaS 스케일링', description: '캐싱, 큐, 읽기 복제본, 샤딩 — 100만 사용자를 버티는 단계별 플레이북.' },
    'baas-platforms-compared-firebase-supabase-appwrite': { title: 'BaaS 비교: Firebase vs Supabase vs Appwrite', description: '인증, DB, 요금, 탈출 전략까지 세 플랫폼의 솔직 비교.' },
    'building-serverless-backends-with-baas': { title: 'BaaS로 서버리스 백엔드 만들기', description: '서버 없이 프로덕션 백엔드: 스키마 설계, 엣지 함수, 백그라운드 작업.' },
    'real-time-data-sync-backend-services': { title: '백엔드 실시간 데이터 동기화', description: '웹소켓, CRDT, 매니지드 리얼타임으로 프레즌스, 라이브 커서, 협업 편집 구현.' },
    'rest-vs-graphql-choosing-right-api-paradigm': { title: 'REST vs GraphQL: API 패러다임 고르기', description: '버저닝, 캐싱, 페이로드, 팀 속도로 따지는 REST/GraphQL 결정 프레임워크.' },
    'api-rate-limiting-throttling-strategies': { title: 'API 레이트 리밋과 스로틀링 전략', description: '좋은 클라이언트는 아프게 하지 않으면서 API를 지키는 토큰 버킷과 쿼터 설계.' },
    'building-api-gateways-microservices': { title: '마이크로서비스 API 게이트웨이 만들기', description: '인증, 라우팅, 변환, 관측 가능성을 플릿의 엣지에서.' },
    'cloud-cost-optimization-strategies-startups': { title: '스타트업을 위한 클라우드 비용 최적화', description: '라이츠사이징, 약정, 스토리지 수명주기, 태깅 규율로 클라우드 요금 30~50% 절감.' },
    'multi-cloud-architecture-aws-azure-gcp': { title: 'AWS·Azure·GCP 멀티클라우드 아키텍처', description: '멀티클라우드가 이득인 경우와 컨테이너·IaC로 이식성을 지키는 법.' },
    'containers-vs-vms-when-to-use-each': { title: '컨테이너 vs VM: 언제 뭘 쓸까', description: '격리, 오버헤드, 운영 트레이드오프로 확신을 갖고 고르기.' },
    'optimizing-vm-performance-production-workloads': { title: '프로덕션 VM 성능 최적화', description: 'CPU 피닝, NUMA, 스토리지 큐, 노이지 네이버 방어 — 예측 가능한 VM 성능.' },
    'gitops-managing-infrastructure-with-git': { title: 'GitOps: Git으로 인프라 관리하기', description: '선언적 인프라, PR 리뷰, 드리프트 감지, 자동 동기화.' },
    'building-zero-downtime-deployment-pipelines': { title: '무중단 배포 파이프라인 만들기', description: '블루-그린, 카나리, 롤링 전략과 헬스 게이트 — 사용자가 모르는 배포.' },
    'infrastructure-as-code-terraform-pulumi': { title: 'Terraform·Pulumi로 IaC하기', description: 'HCL vs 범용 언어, 상태 관리, 모듈 설계.' },
    'zero-trust-security-web-applications': { title: '웹 앱 제로트러스트 보안', description: '믿지 말고 항상 검증: ID 인식 프록시, 단기 자격증명, 마이크로 세그멘테이션.' },
    'owasp-top-10-complete-mitigation-guide': { title: 'OWASP Top 10 완전 대응 가이드', description: '10대 리스크를 취약 코드 vs 수정 코드로 비교하며 오늘 바로 적용.' },
    'implementing-oauth2-openid-connect': { title: 'OAuth2·OpenID Connect 구현하기', description: 'PKCE 인증 코드, 토큰 저장, 로테이션, 로그아웃 — 처음부터 제대로.' },
    'mlops-deploying-ml-models-production': { title: 'MLOps: ML 모델 프로덕션 배포', description: '레지스트리, 카나리 서빙, 피처 스토어, 롤백 플랜 — 신뢰받는 모델 운영.' },
    'monitoring-ai-systems-in-production': { title: '프로덕션 AI 시스템 모니터링', description: '평가·가드레일을 곁들인 AI 기능의 품질, 드리프트, 비용, 지연시간 추적.' }
  }
};
