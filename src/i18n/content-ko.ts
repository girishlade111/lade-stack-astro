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
    {
      id: 'getting-started',
      title: '시작하기',
      articles: [
        {
          title: 'Lade Stack이란 무엇인가요?',
          text: 'Lade Stack은 Girish Lade(설립자 겸 수석 소프트웨어 아키텍트)가 구축한 독립 개발자 도구 생태계이자 기술 지식 플랫폼입니다. 깔끔한 구현, 높은 런타임 성능, 실용적인 자동화에 중점을 두고 웹 유틸리티, 생성형 AI 개발 보조 도구, 프라이버시 우선 문서 처리 도구를 제공합니다. 모든 도구는 필수 회원가입이나 숨겨진 구독 없이 현대 웹 브라우저에서 바로 실행됩니다.'
        },
        {
          title: '생태계 아키텍처의 이해',
          text: 'Lade Stack 생태계는 개발자의 전체 라이프사이클을 지원하는 5대 핵심 영역으로 구성됩니다: 홈(Home)은 플랫폼의 기술적 방향성을 제시하고, 앱 갤러리(/apps)는 즉시 사용 가능한 프로덕션 도구를 제공하며, 엔지니어링 블로그(/blog)는 심층 아키텍처 가이드를 공유합니다. 문서(/docs)는 신뢰할 수 있는 기술 레퍼런스 역할을 하며, 지원 센터(/support)는 엔지니어링 지원과 종합 FAQ를 제공합니다.'
        },
        {
          title: '퀵스타트: 첫 앱 실행하기',
          text: 'Lade Stack을 시작하는 데는 30초도 걸리지 않습니다. 앱 갤러리로 이동하여 CodeEnhance AI나 LS PDF Tools 같은 도구를 선택하면 즉시 작업을 시작할 수 있습니다. 핵심 유틸리티는 웹 표준 기술을 사용하여 브라우저 샌드박스 내에서 클라이언트 사이드로 실행되므로, 설치나 로컬 환경 설정, 결제 정보 등록이 전혀 필요하지 않습니다.'
        },
        {
          title: '앱 갤러리와 작업 공간 탐색',
          text: '앱 갤러리는 도구를 기능별 영역으로 체계화합니다: AI 도구(CodeEnhance AI, 시각적 API 테스터, 문서 지능화 도구), 생산성 도구(LS PDF Tools, LS Image Studio, Swift Resume), 유틸리티(Bharat Land Records 등). 각 도구 카드에는 즉각적인 효용 시간, 지원 연동 환경, 직접 실행 URL이 명확히 안내되어 있습니다.'
        },
        {
          title: '생태계 제품 및 도구 상세',
          text: 'Lade Stack은 특정 개발 워크플로에 최적화된 웹 애플리케이션을 제공합니다: CodeEnhance AI(code.ladestack.in)는 AST 기반 실시간 HTML/CSS/JS 편집 및 지능형 리팩터링을 지원하고, LS PDF Tools(pdf.ladestack.in)는 서버 파일 업로드 없이 브라우저에서 PDF 병합·분할·압축을 처리합니다. LS Image Studio(img.ladestack.in)는 WebP·AVIF 등 현대적 이미지 포맷 일괄 변환 및 압축을 수행하며, Swift Resume(resume.ladestack.in)는 ATS 최적화 엔지니어링 이력서를 제작합니다.'
        },
        {
          title: '핵심 빌더 워크플로',
          text: '권장 빌더 워크플로는 4단계로 구성됩니다: 1. 입력(Input): 초안 코드, 문서 파일 또는 설정값을 브라우저에 직접 붙여넣거나 로드합니다. 2. 처리(Process): 실시간 클라이언트 컴파일 또는 AI 지원 엔진을 활용해 코드를 개선합니다. 3. 미리보기(Preview): 격리된 DOM 샌드박스 또는 실시간 뷰포트에서 상호작용 결과를 즉시 검증합니다. 4. 내보내기(Export): 정리된 코드를 복사하거나 표준 파일로 다운로드하여 로컬 프로젝트에 통합합니다.'
        },
        {
          title: '첫 번째 프로젝트 성공적으로 완성하기',
          text: 'Lade Stack에서 첫 개발 성과를 거두는 방법: CodeEnhance AI를 열고 스타일이 적용되지 않은 HTML 버튼이나 내비게이션 스니펫을 붙여넣은 뒤, \'개선(Enhance)\'을 클릭하여 접근성(ARIA) 속성과 반응형 CSS 레이아웃이 적용된 코드를 생성합니다. 실시간 샌드박스에서 렌더링을 확인한 후 \'복사\'를 눌러 프로덕션 코드베이스에 바로 적용하세요.'
        },
        {
          title: '다음 단계 및 커뮤니티 피드백',
          text: '첫 도구를 경험한 후에는 블로그(/blog)에 게재된 생성형 AI 결합, 순수 정적 Astro 아키텍처, 프론트엔드 성능 최적화에 관한 심층 아티클을 살펴보세요. 맞춤 기능 제안, 버그 제보, 기술 논의는 admin@ladestack.in 또는 GitHub를 통해 설립자 Girish Lade에게 직접 문의할 수 있습니다.'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API 레퍼런스',
      articles: [
        {
          title: 'API 개요 및 설계 규약',
          text: 'Lade Stack의 API와 마이크로서비스는 표준 HTTP/REST 패턴과 무상태(stateless) 실행 모델을 기반으로 구축되었습니다. 엔드포인트는 예측 가능한 웹 규칙을 따릅니다: UTF-8 인코딩 JSON 데이터, 표준 HTTP 메서드(GET, POST), 명확한 에러 구조, 엄격한 헤더 요구사항(Content-Type: application/json)을 준수하여 가벼운 페이로드와 극소화된 지연 시간을 보장합니다.'
        },
        {
          title: '공개 접근 모델과 인증 체계',
          text: '평생 무료 개발자 서약에 따라, Lade Stack의 대화형 웹 유틸리티와 코드 검토 서비스는 마찰 없는 공개 접근 방식으로 운영됩니다. 일반적인 브라우저 내 작업에는 전용 API 키, Bearer 토큰, 사용자 세션 인증이 필요하지 않습니다. 서비스 요청은 오리진 검증과 공정 사용 비율 제한을 통해 네트워크 경계에서 보호됩니다.'
        },
        {
          title: '요청 및 응답 포맷 규격',
          text: '모든 기계 판독 가능 인터페이스는 UTF-8 JSON 형식으로 통신합니다. 성공적인 호출은 200 OK 상태 코드와 구조화된 데이터 필드를 반환합니다. 처리 예외가 발생할 경우 표준 HTTP 에러 코드(400 Bad Request, 429 Too Many Requests, 500 Internal Error)와 함께 에러 코드, 상세 메시지, 해결 지침이 포함된 JSON 객체가 응답됩니다.'
        },
        {
          title: 'CodeEnhance AI 요청 워크플로',
          text: 'CodeEnhance AI에서 코드 개선이나 설명을 요청하면 결정론적 절차로 처리됩니다: 1. 클라이언트가 입력 코드와 활성 언어 모드(HTML, CSS, JS)를 캡처합니다. 2. 프론트엔드에서 기본 구문 검증 및 길이 확인을 거칩니다. 3. TLS 보안 연결을 통해 엔진으로 전송됩니다. 4. 엔진이 AST 구문 트리를 파싱하여 리팩터링 및 접근성 보정을 수행합니다. 5. 개선된 코드가 에디터로 반환되며 실시간 코드 diff가 하이라이트됩니다.'
        },
        {
          title: '입력 형식 및 출력 품질 규격',
          text: 'CodeEnhance AI는 표준 준수 HTML5 마크업, 최신 CSS3(CSS 변수, Flexbox, Grid 포함), ES6+ JavaScript를 완벽히 지원합니다. 원활한 처리를 위해 입력 코드는 바이너리가 없는 일반 텍스트여야 합니다. 출력 코드는 가독성, 웹 접근성, 런타임 성능을 극대화한 표준 시맨틱 코드로 제공되며 불필요한 프레임워크 래퍼를 주입하지 않습니다.'
        },
        {
          title: '에러 상태 코드 및 예외 진단',
          text: '서비스 응답은 의미론적 HTTP 상태 코드를 따릅니다: 400은 잘못된 JSON 형식이나 파싱 불가 코드를 의미하고, 413은 단일 요청 허용 크기 초과, 429는 단시간 내 호출 빈도 초과, 504는 업스트림 처리 시간 초과를 나타냅니다. 에러 발생 시 난해한 스택 트레이스 대신 명확한 원인 설명과 해결 조치 가이드를 UI에 표시합니다.'
        },
        {
          title: '호출 제한 및 공정 사용(Fair-use) 원칙',
          text: '전 세계 개발자들에게 1초 미만의 빠른 응답 속도를 균등하게 보장하기 위해, Lade Stack은 분 단위 롤링 윈도우 기반 공정 사용 버스트 보호 장치를 가동합니다. 클라이언트 오리진별로 할당된 쿼터는 악의적 자동화 스크립트와 DoS 공격을 효과적으로 차단하면서도, 실제 개발 및 테스트 작업에는 충분한 여유 대역폭을 제공합니다.'
        },
        {
          title: 'API 네트워크 연결 문제 해결',
          text: '요청이 실패하거나 타임아웃이 발생할 경우 다음 단계를 확인하세요: 1. 네트워크 연결 상태를 확인하고 방화벽이 ladestack.in 도메인으로의 아웃바운드 HTTPS 통신을 허용하는지 점검합니다. 2. 브라우저 확장 프로그램이나 광고 차단기가 Fetch 통신을 차단하고 있지 않은지 확인합니다. 3. 입력 코드가 글자 수 한도를 초과하지 않았는지 확인합니다. 4. 429 응답을 받은 경우 60초 후 재시도하세요.'
        }
      ]
    },
    {
      id: 'integrations',
      title: '연동',
      articles: [
        {
          title: 'GitHub 내보내기 및 버전 관리 워크플로',
          text: 'Lade Stack 도구는 Git 버전 관리 워크플로와 자연스럽게 결합됩니다. CodeEnhance AI나 다른 도구에서 생성된 소스 코드는 로컬 Git 저장소로 바로 복사하거나 다운로드할 수 있습니다. 작업 브랜치에서 바로 커밋(git add . && git commit -m "feat: add enhanced component")하여 전체 변경 이력을 투명하게 유지하세요.'
        },
        {
          title: '종속성 없는 순수 소스 코드 내보내기',
          text: '독점 런타임에 사용자를 묶어두는 여타 플랫폼과 달리, Lade Stack은 엄격한 \'벤더 락인 제로\' 철학을 고수합니다. 내보낸 모든 코드는 표준 HTML5, 모던 CSS, 모듈형 TypeScript/JavaScript로 구성됩니다. 빌드 설정을 변경할 필요 없이 Astro, Next.js, Vite 등 모든 프레임워크 프로젝트에 즉시 드롭인하여 사용할 수 있습니다.'
        },
        {
          title: 'Vercel 프리뷰 및 프로덕션 배포',
          text: 'Lade Stack에서 제작한 프로젝트를 Vercel에 배포하는 과정은 매우 간단합니다: 1. 내보낸 코드를 GitHub 저장소로 푸시합니다. 2. Vercel 대시보드에서 해당 저장소를 연결합니다. 3. Vercel이 프레임워크 유형(Astro 또는 Vite 등)을 자동 감지하여 빌드 명령(npm run build)과 출력 폴더(dist)를 구성합니다. 4. 배포를 클릭하면 글로벌 엣지 CDN 기반 프로덕션 URL과 프리뷰 링크가 생성됩니다.'
        },
        {
          title: '프론트엔드 IDE 작업 환경 연결',
          text: '내보낸 컴포넌트와 템플릿은 기존 IDE 환경에 매끄럽게 연결됩니다. VS Code, Cursor, WebStorm 등에서 폴더를 열고 Prettier 등의 포매터를 적용한 뒤 로컬 개발 서버(npm run dev)를 시작하세요. 표준 규격 코드로 작성되어 있으므로 IDE의 기본 코드 완성, 타입 검사, 린팅이 즉각 동작합니다.'
        },
        {
          title: '통합 시 자주 발생하는 문제 해결',
          text: '내보낸 코드를 기존 프로젝트에 통합할 때 문제가 발생한다면: 1. 이미지, 폰트 등 정적 에셋의 상대 경로가 프로젝트의 public 디렉터리 구조와 일치하는지 확인하세요. 2. 생성된 CSS 커스텀 속성이 전역 스타일시트와 충돌하지 않는지 점검하세요. 3. 타깃 브라우저 지원 범위가 생성된 최신 CSS 문법과 호환되는지 확인하세요.'
        }
      ]
    },
    {
      id: 'tutorials',
      title: '튜토리얼',
      articles: [
        {
          title: '5분 만에 반응형 고성능 랜딩 페이지 구축하기',
          text: '5단계로 완성하는 모던 랜딩 페이지: 1단계: CodeEnhance AI를 열고 시맨틱 페이지 구조(히어로 섹션, 기능 그리드, CTA 영역)를 작성합니다. 2단계: \'개선\'을 클릭하여 미려하고 반응성이 뛰어난 Flexbox CSS 레이아웃을 생성합니다. 3단계: LS Image Studio(img.ladestack.in)를 열어 메인 그래픽 이미지를 최신 WebP 포맷으로 일괄 압축합니다. 4단계: 최적화된 이미지 경로를 HTML 마크업에 반영합니다. 5단계: 최종 소스를 복사하여 호스팅 플랫폼에 배포합니다.'
        },
        {
          title: 'CodeEnhance AI로 레거시 프론트엔드 코드 리팩터링',
          text: '유지보수가 어려운 오래된 코드를 현대화하기: 1단계: 기존 프로젝트에서 float 기반의 오래된 HTML/CSS 스니펫을 복사합니다. 2단계: CodeEnhance AI 편집기에 붙여넣고 언어 탭을 지정합니다. 3단계: 개선 엔진을 실행하여 제안된 개선 사항(Flexbox 레이아웃 전환, CSS 변수 추출, ARIA 태그 보강)을 확인합니다. 4단계: 실시간 샌드박스 뷰에서 레이아웃 렌더링을 검증합니다. 5단계: 정리된 코드를 원래 프로젝트로 내보냅니다.'
        },
        {
          title: 'LS PDF Tools로 안전한 클라이언트 전용 문서 처리',
          text: '데이터 유출 걱정 없는 프라이버시 중심 PDF 작업: 1단계: LS PDF Tools(pdf.ladestack.in)에 접속합니다. 2단계: 다중 PDF 병합, 특정 페이지 추출, 파일 크기 압축 중 원하는 기능을 선택합니다. 3단계: 처리할 PDF 파일을 브라우저 창으로 직접 드래그합니다. 4단계: 페이지 순서나 압축 화질 옵션을 조정합니다. 5단계: 처리를 클릭하면 WebAssembly가 브라우저 내에서 즉시 연산을 완료합니다. 6단계: 완성된 문서를 다운로드합니다. 파일은 컴퓨터 외부로 나가지 않습니다.'
        },
        {
          title: 'LS Image Studio로 웹 미디어 에셋 일괄 최적화',
          text: '웹사이트 로딩 성능을 극대화하기 위한 이미지 경량화: 1단계: LS Image Studio(img.ladestack.in)를 엽니다. 2단계: PNG, JPEG, WebP 이미지를 일괄 드롭존에 업로드합니다. 3단계: 웹에 최적화된 출력 포맷(WebP 또는 AVIF 권장)과 압축 품질을 지정합니다. 4단계: \'모두 압축\'을 클릭하여 브라우저 내 캔버스 및 WebAssembly 엔진으로 병렬 처리합니다. 5단계: 고화질을 유지하면서 용량이 대폭 줄어든 결과물을 다운로드합니다.'
        },
        {
          title: 'Swift Resume으로 ATS 통과율 높은 엔지니어 이력서 작성',
          text: '채용 관리 시스템의 기계 파싱을 완벽 지원하는 이력서 제작: 1단계: Swift Resume(resume.ladestack.in)를 실행합니다. 2단계: 연락처 정보, 보유 기술 스택, 프로젝트 및 엔지니어링 경력, 학력을 입력합니다. 3단계: 기계 판독성이 검증된 ATS 최적화 타이포그래피 레이아웃 프리셋을 선택합니다. 4단계: 실시간 미리보기를 통해 페이지 분량을 조율합니다. 5단계: 입사 지원용 고해상도 벡터 PDF를 즉시 내보냅니다.'
        },
        {
          title: '웹 프로토타입에서 Git 저장소 및 라이브 배포까지',
          text: '아이디어를 실제 동작하는 온라인 프로덕션 URL로 전환하기: 1단계: Lade Stack 도구에서 컴포넌트와 에셋을 다듬습니다. 2단계: 생성된 파일들을 로컬 작업 폴더로 다운로드합니다. 3단계: 로컬 Git 저장소를 초기화합니다(git init && git add . && git commit -m "Initial commit"). 4단계: GitHub에 새 원격 저장소를 생성하고 푸시합니다. 5단계: Vercel이나 Cloudflare Pages에 연결하여 자동 CI/CD 배포를 완료합니다.'
        }
      ]
    },
    {
      id: 'security',
      title: '보안',
      articles: [
        {
          title: '설계 단계부터 고려된 프라이버시: 브라우저 내부 연산',
          text: 'Lade Stack의 가장 강력한 아키텍처적 차별점은 \'설계부터 프라이버시(Privacy by Design)\'입니다. LS PDF Tools, LS Image Studio 등의 핵심 도구는 브라우저의 WebAssembly, HTML5 File API, Canvas 렌더링 파이프라인을 활용하여 전 과정을 사용자 기기 메모리 내에서 처리합니다. 기밀 문서, 개인 정보, 민감한 이미지는 외부 서버로 전송되거나 저장되지 않습니다.'
        },
        {
          title: '데이터 처리 및 무보관(Zero-retention) 정책',
          text: 'CodeEnhance AI 등 클라우드 협업이 필요한 도구의 경우, 모든 데이터 전송은 전송 구간 TLS 1.3 암호화로 보호됩니다. Lade Stack은 엄격한 데이터 무보관 원칙을 준수합니다: 분석을 위해 제출된 코드 스니펫은 메모리 상에서 즉시 처리되어 반환되며 디스크에 저장되지 않습니다. 사용자 코드 데이터베이스를 구축하거나 제3자 사이트 추적을 수행하지 않습니다.'
        },
        {
          title: 'AI 프롬프트 프라이버시 및 코드 자산 보호',
          text: '우리는 개발자의 지적 재산권을 존중합니다. Lade Stack의 AI 보조 도구에 입력된 코드 스니펫과 프롬프트는 어떠한 기초 머신러닝 모델의 사전 학습, 파인튜닝, 성능 강화에도 활용되지 않습니다. 모든 상호작용은 일회성(ephemeral)으로 처리되며 응답 완료 즉시 파기됩니다.'
        },
        {
          title: '클라이언트 코드 실행 격리와 DOM 샌드박싱',
          text: 'CodeEnhance AI 내부의 실시간 DOM 프리뷰는 엄격한 보안 제한이 걸린 샌드박스형 iframe 내부에서 실행됩니다. 샌드박스 정책은 실행된 스크립트가 상위 창의 쿠키, localStorage, 세션 토큰, 최상위 내비게이션에 접근하는 것을 완벽히 차단합니다. 모든 사용자 입력은 XSS(크로스 사이트 스크립팅) 방지를 위해 엄격히 살균 소독됩니다.'
        },
        {
          title: '사용자 보안 수칙 및 환경 관리 권장사항',
          text: '플랫폼 차원에서 철저한 방어 설계를 적용하고 있지만, 개발자 역시 올바른 보안 수칙을 유지해야 합니다: 실제 운영 환경의 데이터베이스 접속 비밀번호나 비공개 API 비밀키를 브라우저 도구에 붙여넣지 마세요. 신뢰할 수 없는 브라우저 확장 프로그램을 점검하고 운영체제와 웹 브라우저를 항상 최신 상태로 유지하세요.'
        },
        {
          title: '보안 취약점 신고 및 신속 조치 프로세스',
          text: 'Lade Stack은 플랫폼과 사용자의 보안을 최우선으로 생각합니다. 도구 사용 중 잠재적인 보안 취약점이나 메모리 누수, 데이터 노출 가능성을 발견하셨다면 admin@ladestack.in으로 즉시 알려주시기 바랍니다. 상세한 재현 단계를 제공해 주시면 신속하게 검토하고 패치를 진행하겠습니다.'
        }
      ]
    },
    {
      id: 'teams',
      title: '팀',
      articles: [
        {
          title: '무상태 공유 링크를 활용한 가벼운 협업',
          text: 'Lade Stack은 무상태(stateless) URL 파라미터 인코딩 방식을 통해 팀원 간 군더더기 없는 협업을 지원합니다. 도구의 세부 설정값과 템플릿 정보는 공유 가능한 URL에 직접 직렬화됩니다. 팀원이 링크를 열면 별도의 공유 데이터베이스나 계정 로그인 없이도 동일한 작업 환경이 브라우저에 복원됩니다.'
        },
        {
          title: '이식성 높은 JSON 프로젝트 데이터 교환',
          text: '복잡한 구성과 멀티 컴포넌트 설정을 위해 Lade Stack 도구는 표준 JSON 내보내기/가져오기를 지원합니다. 프로젝트 상태를 .json 파일로 저장하여 팀 Git 저장소에 커밋하거나 사내 메신저로 공유하세요. 동료가 해당 파일을 로드하면 오차 없이 완벽하게 동일한 작업 상태를 이어갈 수 있습니다.'
        },
        {
          title: 'Git 중심의 코드 리뷰 및 통합 워크플로',
          text: '우리는 폐쇄적인 클라우드 협업 공간보다 버전 관리가 지원되는 비동기식 코드 리뷰를 지향합니다. Lade Stack에서 생성한 코드는 팀의 Pull Request에 통합되어 CI/CD 자동화 빌드, 단위 테스트, 피어 리뷰를 거쳐야 합니다. 이를 통해 소프트웨어 전 주기에 걸쳐 코드 품질과 유지보수성을 확보할 수 있습니다.'
        },
        {
          title: '프론트엔드 코드 일관성 및 팀 표준 정립',
          text: 'Lade Stack 도구가 출력하는 코드는 최신 프론트엔드 표준을 충실히 따릅니다: 표준 시맨틱 HTML5 태그, 모듈형 CSS 명명 규칙, ARIA 웹 접근성 속성, 엄격한 TypeScript 타입 선언이 기본 적용됩니다. 팀은 이를 아키텍처 베이스라인으로 채택하여 PR 리뷰 시의 소모적인 코드 스타일 논쟁을 줄일 수 있습니다.'
        }
      ]
    },
    {
      id: 'data',
      title: '데이터 관리',
      articles: [
        {
          title: '작업물 내보내기 및 100% 데이터 소유권',
          text: 'Lade Stack에서 제작한 모든 산출물에 대한 소유권은 온전히 사용자에게 있습니다. 모든 도구는 즉각적인 내보내기를 지원합니다: 시스템 클립보드 원클릭 복사, 원본 파일 다운로드, 마크다운(Markdown) 문서 생성이 가능합니다. 워터마크, 라이선스 제약, 플랫폼 귀속 조항은 일절 존재하지 않습니다.'
        },
        {
          title: 'LocalStorage 기반 로컬 브라우저 영속성',
          text: '사용자 추적 없이 개인 설정을 기억하기 위해, Lade Stack은 기기의 브라우저 localStorage를 활용합니다. 라이트/다크 테마 설정, 기본 언어 선택, 에디터의 임시 작업 초안이 로컬에 저장됩니다. 이 데이터는 기기 내에만 머무르며 외부 서버로 전송되지 않습니다.'
        },
        {
          title: '데이터 라이프사이클과 즉각적인 메모리 해제',
          text: 'Lade Stack 도구는 메모리 누수를 방지하도록 설계되었습니다. 클라이언트 미디어 처리가 완료되면 URL.revokeObjectURL을 즉시 호출하여 객체 URL을 폐기하고 버퍼를 해제합니다. 브라우저 탭을 닫거나 캐시를 지우면 모든 메모리 초안과 임시 데이터가 완전히 삭제됩니다.'
        },
        {
          title: '다양한 개발 환경 간의 손쉬운 프로젝트 이동',
          text: 'Lade Stack에서 만든 결과물을 프로덕션 환경으로 옮기는 작업은 매우 직관적입니다: 원본 HTML, CSS, JS 파일을 내보내어 로컬 프로젝트 폴더(Next.js components/, Astro src/components/, 일반 정적 웹서버 디렉터리 등)에 배치하고 표준 상대 경로로 임포트하여 사용하면 됩니다.'
        },
        {
          title: '정적 에셋 관리 및 웹 미디어 최적화 가이드',
          text: '모던 웹 개발에서 정적 에셋의 체계적 관리는 필수적입니다. 내보낸 미디어를 용도별 폴더(/public/images, /src/styles)로 구조화하고, LS Image Studio를 통해 고용량 PNG/JPEG를 WebP나 AVIF로 일괄 변환하며, 핵심 아이콘을 SVG로 인라인화하여 HTTP 네트워크 오버헤드를 줄이세요.'
        }
      ]
    },
    {
      id: 'deployment',
      title: '배포',
      articles: [
        {
          title: '정적 우선(Static-first) 배포 아키텍처',
          text: 'Lade Stack은 정적 우선 웹 아키텍처를 적극 지향합니다. 페이지를 순수 HTML, 모던 CSS, 최소한의 바닐라 JS로 사전 빌드하면 서버 런타임 취약점을 근본적으로 차단하고, 호스팅 비용을 완전히 없애며, 글로벌 엣지 CDN을 통한 초고속 캐싱을 실현할 수 있습니다. 본 문서 허브와 공식 플랫폼 역시 Astro 5 기반의 순수 정적 구조로 구동됩니다.'
        },
        {
          title: '프로덕션 배포 전 점검 체크리스트',
          text: '웹 프로젝트를 실제 사용자에게 공개하기 전 확인하세요: 1. HTML 시맨틱 구조를 검증하고 모든 <img> 태그에 alt, width, height 속성이 지정되었는지 확인합니다. 2. 색상 대비가 WCAG AA 웹 접근성 기준을 충족하는지 검토합니다. 3. 불필요한 프레임워크 런타임이 포함되지 않았는지 번들 크기를 감사합니다. 4. Lighthouse 테스트를 실행하여 만점 점수를 확인합니다.'
        },
        {
          title: 'Vercel, Cloudflare Pages, Netlify 원클릭 배포',
          text: '모던 도구로 빌드된 정적 웹사이트는 글로벌 클라우드에 쉽게 배포할 수 있습니다. Vercel에서는 Git 저장소를 연결하기만 하면 추가 설정 없이 배포되며, Cloudflare Pages에서는 빌드 명령어(npm run build)와 출력 디렉터리(dist)만 지정하면 됩니다. Netlify 역시 dist 폴더 드래그 앤 드롭을 지원하며 모든 서비스가 무료 자동 SSL을 기본 제공합니다.'
        },
        {
          title: '환경 변수 구성 및 프로덕션 빌드 최적화',
          text: '프로덕션 애플리케이션을 빌드할 때는 .env 파일을 통해 설정값과 비즈니스 로직을 분리하세요. 정적 빌드 환경에서는 공개 환경 변수에 프레임워크 전용 접두사(예: Astro의 PUBLIC_)가 붙어 있는지 확인해야 합니다. 프로덕션 빌드 플래그를 적용하여 HTML/CSS 압축과 XML 사이트맵(sitemap)을 자동 생성하도록 설정하세요.'
        },
        {
          title: 'Core Web Vitals 성능 지표 극대화',
          text: '최고 등급의 Core Web Vitals 점수를 달성하려면 명확한 전략이 필요합니다: 렌더링 차단 리소스를 최소화하여 First Contentful Paint(FCP)를 0.8초 이내로 단축하고, 이미지와 배너에 고정 영역을 예약하여 Cumulative Layout Shift(CLS)를 0.00으로 유지하며, 중요 폰트와 히어로 이미지를 미리 로드하여 LCP를 극소화하세요.'
        },
        {
          title: '배포 환경 트러블슈팅 및 에셋 경로 해결',
          text: '배포 후 흔히 마주치는 오류와 해결책: 1. 스타일시트나 이미지가 404로 깨지는 경우: 호스팅 서브 디렉터리와 빌드 설정의 base 경로가 일치하는지, 에셋이 올바른 상대 경로로 참조되는지 확인합니다. 2. 서브페이지 새로고침 시 404가 뜨는 경우: 호스팅 환경에 단일 페이지 앱(SPA) 라우팅 리디렉션 룰이 구성되어 있는지 확인합니다. 3. 캐시 갱신 지연: Cache-Control 헤더 설정을 점검하세요.'
        }
      ]
    }
  ],
  docsChangelog: [
    {
      v: 'v2.4.0',
      date: '2026-08-20',
      text: 'Astro 5 순수 정적 아키텍처로 전면 리빌드 완료. 6개 공식 언어 정적 지원, 클라이언트 프레임워크 하이드레이션 오버헤드 0 KB 달성 및 전 부문 Lighthouse 100/100 기록.'
    },
    {
      v: 'v2.3.0',
      date: '2024-11-30',
      text: 'Documentation AI 베타 프리뷰 공개 및 시각적 엔드포인트 디버깅을 위한 API Testing Platform 인터랙티브 컬렉션 기능 추가.'
    },
    {
      v: 'v2.0.0',
      date: '2024-06-01',
      text: 'CodeEnhance AI 정식 출시. 실시간 코드 에디터, 노-리프레시 DOM 샌드박스 미리보기, AST 기반 원클릭 코드 지능형 개선 기능 탑재.'
    },
    {
      v: 'v1.5.0',
      date: '2024-03-20',
      text: 'Swift Resume 출시. ATS 최적화 이력서 템플릿, 실시간 편집 뷰포트, 브라우저 기반 고품질 벡터 PDF 즉각 생성 지원.'
    },
    {
      v: 'v1.2.0',
      date: '2023-09-01',
      text: 'LS Image Studio 출시. 프라이버시가 보장되는 로컬 일괄 압축, 모던 포맷 변환(PNG/JPEG/WebP/AVIF) 및 리사이징 기능 제공.'
    },
    {
      v: 'v1.0.0',
      date: '2023-06-10',
      text: 'LS PDF Tools 공식 출시. 서버 업로드 없는 순수 브라우저 클라이언트 연산 기반 문서 생산성 툴킷 통합 릴리스.'
    }
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
