---
title: "Terraform·Pulumi로 IaC하기"
description: "HCL vs 범용 언어, 상태 관리, 모듈 설계."
pubDate: 2024-12-01
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["IaC", "Terraform", "Pulumi"]
---

## 소개

전용 선언형 언어 HCL인가, 아니면 TypeScript/Python 등 친숙한 범용 프로그래밍 언어인가? 원격 상태(State) 관리, 상태 파일 잠금 메커니즘, 그리고 모듈화 설계의 모범 사례: Terraform과 Pulumi를 심도 있게 비교하며 견고한 IaC(Infrastructure as Code) 아키텍처를 설계합니다. 본 글에서는 핵심 개념, 아키텍처적 트레이드오프, 그리고 이번 주에 바로 팀에 적용할 수 있는 프로덕션 수준의 워크플로를 다룹니다.

## 왜 중요한가

- **개발자 생산성 향상**: 클라우드 인프라를 코드로 선언하여 복잡한 스테이징 환경을 수 분 만에 완전히 동일하게 복제할 수 있습니다.
- **시스템 신뢰성 확보**: 실제 적용 전 사전 계획(Plan/Preview) 검증을 거쳐 수동 콘솔 조작으로 인한 운영 인재를 방지합니다.
- **비용 통제**: Infracost와 같은 정적 비용 분석 도구를 PR 리뷰 단계에 연동하여 인프라 변경에 따른 클라우드 요금 변동을 미리 파악합니다.

## 핵심 개념

### 1. 가장 작은 동작 단위에서 시작하기

기존의 방대한 레거시 인프라 전체를 한 번에 코드로 역추적(Import)하려 하지 말고, 엔드투엔드로 동작하는 수직 슬라이스 하나를 먼저 완성하십시오. **Terraform·Pulumi로 IaC하기**의 관점에서는 단일 VPC 네트워크나 S3 버킷부터 코드로 관리하고 CI 상에서 자동 Plan 검증을 연결하는 것을 의미합니다.

### 2. 성공의 함정을 넓게 파두기

엔지니어 개개인이 로컬에서 테라폼을 직접 실행하게 두지 말고, 중앙 집중식 원격 백엔드와 사전 승인된 사내 표준 모듈 라이브러리를 기본 경로로 제공하십시오. 프로덕션 환경을 위한 스타터 예시:

```typescript
// Minimal production-ready starter
export const config = {
  retries: 3,
  timeoutMs: 5_000,
  circuitBreaker: { failures: 5, cooldownMs: 30_000 },
};

export async function runWithResilience<T>(fn: () => Promise<T>): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= config.retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, attempt * 250));
    }
  }
  throw lastError;
}
```

### 3. 본질적인 지표 측정하기

| 지표 | 권장 시작 목표치 |
| --- | --- |
| p95 응답 지연 시간 | < 300 ms |
| 에러 버짓 소진율 | < 2% / 30 일 |
| 배포 빈도 | 매일 (Daily) |
| 롤백 소요 시간 | < 10 분 |

## 프로덕션 체크리스트

1. 원격 상태 파일 버전 관리 및 실행자 ID가 기록되는 구조화된 감사 로그를 수집합니다.
2. 기존 리소스를 파괴(Destroy)하는 변경이 감지될 때 자동 적용을 차단하는 가드레일 플래그를 설정합니다.
3. 정식 런칭 전에 정적 보안 분석 도구(tfsec, Checkov)를 CI 파이프라인에 통합합니다.
4. 발생 빈도가 높은 상위 3가지 장애 시나리오(상태 파일 잠금 해제 불가, 리소스 네이밍 충돌, 순환 의존성)에 대한 런북(Runbook)을 작성합니다.

## 흔한 실수와 주의점

> 실제 사용자를 확보하기 전에 플랫폼을 과도하게 설계하지 마십시오. 초기에 선택한 화려한 기술보다 적재적소에 잘 고른 지루하고 검증된 기술이 언제나 승리합니다.

- 단 하나의 거대한 상태 파일에 전사 인프라를 모두 몰아넣어 Plan 한 번에 수십 분이 걸리게 만드는 실수.
- 상태 잠금(DynamoDB Lock 등)을 활성화하지 않아 다수의 작업자가 동시에 적용하다 상태 파일이 손상되는 사고.
- 새벽 3시에 온콜 엔지니어를 깨워야 하는 상태 파일 정합성 불일치 알림 누락.

## 결론

**Terraform·Pulumi로 IaC하기**는 작고 명확하게 관측 가능한 단위로 기민하게 반복하는 엔지니어링 팀에 큰 보상을 안겨줍니다. 위의 체크리스트를 시작점으로 삼아 매주 하나의 병목을 자동화하고 시스템의 완성도를 높여가십시오.
