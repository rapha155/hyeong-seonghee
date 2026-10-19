// 포트폴리오 v2 (프론트엔드 · React · Next.js 지원용). 슬라이드 1장 = 1280×720.
// 첫 줄은 인사담당자용 평문, 아래는 기술 상세. 숫자는 문장 안에서만 굵게.
const PF = {
  cover: {
    name: "형성희",
    latin: "Hyeong Seonghui",
    role: "Software Developer · Frontend & AI",
    tagline: "React·Next.js로 제품을 만들고, LLM과 데이터 파이프라인으로 업무 문제를 푸는 개발자",
    now: "Korea Digital AI 엔지니어 · 개발자  ·  2026.07 ~",
    contacts: ["comely1515@gmail.com", "010-3050-0299", "github.com/rapha155"],
    year: "2026 Portfolio",
  },

  glance: {
    title: "소개",
    intro: [
      "저는 화면을 만들기 전에 그 화면을 쓰는 사람의 하루를 먼저 봅니다. 엑셀을 옮기던 담당자, 탭 7개를 오가던 연구원, 클라우드를 쓸 수 없는 교실처럼, 문제는 늘 업무 흐름 안에 있었습니다.",
      "그래서 기획부터 데이터 구조, 배포까지 직접 맡아 풀어 왔습니다. AI는 판단을 돕게 하고 계산과 검증은 코드가 책임지게 합니다. 바꾼 뒤에는 테스트와 비교로 같은 답임을 확인합니다.",
    ],
    areas: [
      { title: "프론트엔드", desc: "React 19 · Next.js 16 · TypeScript. 상태 관리, 디자인 시스템, 접근성, 시각 회귀 테스트까지 화면 품질을 책임집니다." },
      { title: "백엔드 · 인프라", desc: "Node.js Lambda · FastAPI · PostgreSQL · AWS · Firebase. Docker Compose로 로컬 개발 환경을 구성합니다." },
      { title: "AI · 모바일", desc: "하이브리드 RAG와 로컬 LLM 도구 계층을 설계하고, Flutter 앱 4종을 출시·운영합니다." },
    ],
    principles: [],
    stack: "React 19 · Next.js 16 · TypeScript · Tailwind · Vite · Node.js · FastAPI · PostgreSQL · AWS Lambda · CloudFront · Docker Compose · Firebase · Flutter · LangChain · Qdrant",
  },

  // 프론트엔드 역량 (요약 다음 장)
  frontend: {
    title: "핵심 역량",
    items: [
      { h: "프론트엔드", p: "React 19 · Next.js 16 · TypeScript. zustand · 리듀서로 상태를 정리하고, 디자인 토큰으로 테마와 공용 UI를 관리합니다. 접근성 검사 위반 0, 시각 회귀 테스트로 화면 품질을 지킵니다." },
      { h: "AI 적용", p: "로컬 LLM과 function calling 도구 계층, 하이브리드 RAG를 설계했습니다. 모델은 판단만, 계산과 검증은 앱이 맡는 구조로 신뢰할 수 있는 AI 기능을 만듭니다. 개발에는 AI 코딩 에이전트를 지침과 테스트로 묶어 활용합니다." },
      { h: "백엔드 · 데이터", p: "Node.js Lambda · FastAPI · PostgreSQL · AWS. 조회 API 없는 ERP 연동, 1만 건 단위 데이터 이관, 22.9초 쿼리를 0.12초로 줄인 최적화를 직접 했습니다." },
      { h: "제품 · 운영", p: "앱 4종의 기획부터 스토어 운영까지 전 과정을 전담했습니다. 현업 요청을 문서로 정리해 6주간 운영에 반영하며, 업무 흐름에서 출발해 설계합니다." },
    ],
  },

  // 타임라인. 월 단위 (2023.09 = 0). row: 같은 레인 안에서 겹치는 항목을 아래 줄로
  timeline: {
    start: "2023.09", end: "2026.12",
    table: [
      ["2026.07 — 현재", "Korea Digital", "AI 엔지니어 · 개발자. Science# 로컬 AI(07~09), KD order(09~10), PHRI 수직농장(10)"],
      ["2026.02 — 2026.08", "개인", "자격증 학습 플랫폼 시리즈 (SQLD · 모노레포) · 한국사 앱 업데이트"],
      ["2026.02 — 2026.03", "개인", "공인중개사 학습 AI 챗봇 (하이브리드 RAG · FastAPI · Docker Compose)"],
      ["2025.12 — 현재", "개인 · Next.js", "rapha-studio, IT News CMS(2026.04~), 카드뉴스 미리보기 도구(2026.09~)"],
      ["2025.11 — 2026.01", "패스트캠퍼스", "AI 심화 캠프 (RAG) 수료"],
      ["2025.05 — 현재", "개인 · 출시", "한국사능력검정시험 앱 출시 · 운영"],
      ["2025.03 — 현재", "개인 · 출시", "SAYON 영어회화 앱 출시 → 2026.10 LingoStep IELTS로 리뉴얼"],
      ["2025.03 — 현재", "개인 · 출시", "말씀나무 출시 → 운영 중"],
      ["2024.09 — 현재", "새싹아카데미 · 개인", "Flutter 과정 수료 · Noahlog 15개국 출시 → 운영 중"],
      ["2024.02 — 2024.08", "구름아카데미 · 팀", "풀스택 과정 수료 · 팀 프로젝트: 운동기록 사이트 (06~08, React · Spring)"],
      ["2023.09 — 2024.02", "팀", "서비스 기획 팀 프로젝트 · 유튜브 프리미엄 UX 개선, 이력서 관리 서비스 기획 (Figma)"],
    ],
    lanes: [
      { name: "회사", color: "ink", items: [
        { label: "Korea Digital", from: "2026.07", to: "2026.12", row: 0 },
      ]},
      { name: "출시 앱 · 운영", color: "accent", items: [
        { label: "Noahlog 출시 → 운영 중", from: "2024.09", to: "2026.12", row: 0 },
        { label: "SAYON → LingoStep IELTS", from: "2025.03", to: "2026.12", row: 1 },
        { label: "말씀나무 출시 → 운영 중", from: "2025.03", to: "2026.12", row: 2 },
        { label: "한국사", from: "2025.05", to: "2026.12", row: 3 },
      ]},
      { name: "개인 프로젝트", color: "accent", items: [
        { label: "기획 팀 프로젝트", from: "2023.09", to: "2024.02", row: 0 },
        { label: "운동기록 사이트 (팀)", from: "2024.06", to: "2024.09", row: 0 },
        { label: "Next.js 사이드 (rapha-studio · IT News CMS · 카드뉴스)", from: "2025.12", to: "2026.12", row: 0 },
        { label: "자격증 시리즈 (SQLD)", from: "2026.02", to: "2026.09", row: 1 },
        { label: "RAG 챗봇", from: "2026.02", to: "2026.04", row: 2 },
      ]},
      { name: "교육", color: "muted", items: [
        { label: "풀스택 (구름)", from: "2024.02", to: "2024.08", row: 0 },
        { label: "Flutter (새싹)", from: "2024.09", to: "2025.02", row: 0 },
        { label: "AI 심화 RAG (패스트캠퍼스)", from: "2025.11", to: "2026.01", row: 0 },
      ]},
    ],
  },

  index: {
    title: "프로젝트",
    items: [
      { name: "KD order", line: "주문·견적·정산 사내 시스템을 React + AWS로 재구축", tag: "회사 · 프론트·백엔드 단독", period: "2026.09 ~ 10", thumb: "7-kd-order/admin-commission.png" },
      { name: "PHRI 수직농장", line: "연구원이 쓰는 스마트팜 운영 화면 UX", tag: "회사 · 프론트 1인 담당", period: "2026.10", thumb: "8-kd-vertical-farm/dashboard-overview.png" },
      { name: "Science# 로컬 AI", line: "로컬 LLM이 과학 실험 차트를 다루는 학습 도우미", tag: "회사 · 단독 개발", period: "2026.07 ~ 09", thumb: "6-kd-local-ai/dark-theme.png" },
      { name: "IT News CMS", line: "Next.js App Router로 만든 기사 운영 CMS", tag: "개인 · Next.js", period: "2026.04 ~ 10", thumb: "9-it-news-cms/articles.png" },
      { name: "공인중개사 AI 챗봇", line: "법령 조항을 정확히 찾는 하이브리드 RAG", tag: "개인 · 전담 개발", period: "2026.02 ~ 03", thumb: "1-rag-tutor/lawa1.png", phone: true, bare: true },
      { name: "LingoStep IELTS", line: "오늘 할 IELTS를 정해 주는 매일 학습 앱", tag: "출시 · 운영 중", period: "2025.03 ~ · 2026.10 리뉴얼", thumb: "2-lingostep-ielts/search-1920x1280.png" },
      { name: "한국사", line: "기출 PDF를 자동 구조화한 문제 풀이 앱", tag: "출시 · 운영 중", period: "2025.05 ~", thumb: "3-hanguksa/hanguksa.png", phone: true },
      { name: "Noahlog", line: "15개 언어로 배포한 시간 관리 앱", tag: "출시 · 운영 중", period: "2024.09 ~", thumb: "4-noahlog/search-1920x1280.png" },
    ],
  },

  projects: [
    {
      name: "KD order",
      org: "Korea Digital",
      plain: "Google Sheets와 Apps Script로 운영하던 사내 주문·견적·정산 업무를 React + AWS 웹 시스템으로 재구축했습니다.",
      background: "주문 원천인 ERP에서 담당자가 매번 엑셀을 내려받아 옮겼고, 같은 업무 규칙이 화면마다 다른 답을 냈습니다.",
      problem: "조회 API가 없는 ERP에서 데이터를 자동으로 가져오고, 흩어진 업무 규칙을 한 곳으로 모으는 것.",
      role: "프론트엔드 · 백엔드 · 배포 단독",
      hero: "7-kd-order/admin-commission.png",
      caption: "관리자 › 대리점 정산. 조회 22.9초 → 0.12초로 개선한 화면",
      meta: [["기간", "2026.09 ~ 10 · 6주 · 커밋 126건"], ["기술", "React 19 · TypeScript · Node.js Lambda · PostgreSQL · CloudFront"]],
      results: [
        { lead: "엑셀 수작업을 자동 수집으로", sub: "조회 API 없는 ERP의 웹 프로토콜 분석" },
        { lead: "정산 조회 22.9초 → 0.12초", sub: "결과 동일성은 양방향 EXCEPT로 검증" },
        { lead: "현업 요청 번호제로 6주 운영", sub: "결정 요청서로 확인 후 반영" },
      ],
      tasks: [
        { title: "화면과 업무 규칙의 분리",
          problem: "발송상태처럼 같은 질문에 화면마다 다른 답을 내던 규칙이 시트 수식과 스크립트에 흩어져 있었다.",
          solution: "업무 규칙은 PostgreSQL 뷰·함수 한 곳에 두고 화면은 받아서 보여주기만 하도록 설계. 프론트는 presentation → application → domain ← infrastructure 4계층, 목 데이터와 실서버 교체는 컨테이너 한 파일. 스타일은 플레인 CSS 디자인 토큰 단일 원본으로 화면·인쇄물 통일.",
          result: "같은 규칙이 모든 화면에서 같은 답. 목 데이터 빌드가 운영에 배포된 사고 후 데이터 원본 미지정 시 빌드 실패로 차단." },
        { title: "1년치 주문 적재와 키 재설계",
          problem: "주문번호가 중복 17건·공백 1건이라 키로 쓸 수 없었고, 건별 쓰기는 Lambda 30초 제한에 닿았다.",
          solution: "키를 유일한 전표번호로 바꾸고 표시 번호를 분리. 500행 upsert, 1,000행 INSERT 일괄 쓰기로 바인드 파라미터 상한 안에서 분할.",
          result: "적재 오류 68건 → 0건. 주문 1,768건 누락 없이 적재." },
        { title: "현장에서 쓰이는 화면 품질",
          problem: "공장·배송 담당자는 휴대폰으로 확인한다. 데스크톱 표가 390px에서 가로로 넘쳤고, 견적서 부가세가 이중으로 붙었다.",
          solution: "1023px 이하에서 핵심 열만 남기고 터치 컨트롤 44px 토큰 적용. 견적서는 VAT 포함 단가에서 공급가액·부가세를 역산. 출하번호 자연 정렬.",
          result: "모바일 주문 목록 운영 투입. 정렬 역전 108건 → 0건, 금액 오류 0건." },
      ],
    },
    {
      name: "PHRI 수직농장 웹앱",
      org: "Korea Digital",
      plain: "연구원이 수직농장 챔버 상태를 한 화면에서 확인하고 재배 일정과 알람을 다루는 운영 웹앱의 화면을 다시 설계했습니다.",
      background: "세 번째 챔버가 스크롤 아래로 잘리고 상세 정보는 탭 7개로 나뉘어, 지금 전체가 정상인지 한눈에 볼 수 없었습니다.",
      problem: "보는 화면과 조작 화면을 나누고, 정상은 조용히 예외만 드러나도록 정보 구조를 다시 짜는 것.",
      role: "프론트엔드 1인 담당 · 팀 프로젝트",
      hero: "8-kd-vertical-farm/dashboard-overview.png",
      caption: "현황. 모든 챔버를 한 줄에, 예외만 표시. 탭 7개를 다이얼로그로 대체",
      meta: [["기간", "2026.10 · 커밋 56건"], ["기술", "React · TypeScript · zustand · react-hook-form · react-aria · orval"]],
      results: [
        { lead: "챔버 상세 탭 7개 → 한 화면", sub: "1440×900에서 스크롤 없이 전체 확인" },
        { lead: "접근성 검사 위반 0", sub: "23개 화면 axe, 다크 테마 대비 포함" },
        { lead: "연구원 UI 제안 28건 반영", sub: "백엔드 필요 항목은 BR-1~13으로 분리" },
      ],
      tasks: [
        { title: "계약이 다른 두 백엔드를 화면 수정 없이 연결",
          problem: "화면은 v0 계약(mock) 기준인데 새 서비스는 도메인 모델이 달랐다. 일부 경로는 이름까지 같아 경로로 구분할 수 없었다.",
          solution: "orval에 stub 타깃을 추가하고 mock을 우회하는 mutator 작성. DTO 변환은 순수 함수 어댑터로 분리하고 출처 분기는 한 함수에서.",
          result: "겹치는 4개 화면을 컴포넌트 수정 없이 연결. 개념이 다른 3개 화면은 사유를 문서화하고 보류." },
        { title: "'정상처럼 보이는 오류' 제거",
          problem: "불러오기 실패가 0건으로, 끊긴 연결의 지난 값이 현재 값으로, 일부 선택이 전체 해제로 보였다.",
          solution: "마지막 수신 시각을 함께 받아 \"서버 응답 없음 · 시각 기준\" 경고와 흐림 처리. 모르는 개수는 숨김. 공용 Checkbox에 중간 상태 추가.",
          result: "오래된 값과 현재 값이 구분됨. 공용 UI 수정 6건은 다른 앱에도 적용." },
        { title: "UX 문서를 먼저 쓰고 구현",
          problem: "시안과 구현의 차이, 내부 용어가 섞인 화면 문구, 휴대폰에서 넘치는 표 5개.",
          solution: "docs/ux 문서 15개로 버튼 위계·입력 오류 시점(onTouched)·화면 상태·문구 규칙을 정리한 뒤 구현. zustand 전역 상태와 react-hook-form + zod 검증으로 폼 상태를 통일하고, 같은 규칙을 AI 코딩 에이전트 지침에도 반영.",
          result: "화면 문구 1,619개 말투 점검, 행동 열 있는 표는 휴대폰에서 행 카드로." },
      ],
    },
    {
      name: "Science# 로컬 AI",
      org: "Korea Digital",
      plain: "학생이 센서로 실험을 측정하고, 차트를 분석하고, 로컬 LLM과 대화하며 보고서까지 쓰는 과학 수업용 웹앱입니다.",
      background: "학교망과 개인정보 제약으로 실험 데이터를 외부 클라우드 LLM에 보낼 수 없었습니다.",
      problem: "작은 로컬 모델이 계산을 틀리고 도구 호출을 망가뜨려도 측정 데이터와 화면이 손상되지 않게 하는 것.",
      role: "단독 개발",
      hero: "6-kd-local-ai/dark-theme.png",
      caption: "다크 테마. 왼쪽 AI 채팅, 오른쪽 실험 차트 탭과 구간 선택",
      meta: [["기간", "2026.07 ~ 09 · 7주 · 커밋 235건"], ["기술", "React 19 · TypeScript · Vite · Recharts · LM Studio · Playwright"]],
      results: [
        { lead: "차트 컴포넌트 855 → 402줄", sub: "시각 회귀 12장 diff 0, 화면 변화 없이" },
        { lead: "LLM 계산 오류를 구조로 차단", sub: "모델이 답한 R² 0.85, 검산은 −1.48" },
        { lead: "계층 경계를 lint로 강제", sub: "계산·판단은 domain, UI는 그리기만" },
      ],
      tasks: [
        { title: "안전망을 먼저 만들고 리팩터링",
          problem: "855줄 ChartPanel, 807줄 LineChartView에 상태·계산·렌더가 섞여 있었고 개편 전에 손봐야 했지만 화면이 바뀌면 안 됐다.",
          solution: "Playwright 기준 이미지 12장(픽스처 3 × 테마 2 × 뷰포트 2)과 합성 데이터 주입 후크를 먼저 구축. 도구·선택·뷰포트·호버 상태를 리듀서 하나로 모으고 플롯 모델은 도메인으로, rAF 코얼레싱과 memo로 렌더 비용 절감. 하드코딩 스타일은 디자인 토큰으로 이관.",
          result: "diff 0으로 855 → 402줄, 807 → 362줄. 이어진 개편은 기준 이미지 16장으로 검증." },
        { title: "LLM이 데이터를 직접 바꾸지 못하게",
          problem: "모델이 계산한 수치가 그대로 화면에 올라갔고, 편집 도구가 원본 측정값까지 덮어썼다.",
          solution: "도구 11종을 function calling으로 노출하고 실행·검증은 앱이 담당. 첫 편집 전 원본을 보관하고 편집 사실을 범례·보고서에 표시.",
          result: "검산에 실패한 LLM 계수 제거. 원본 복원 도구로 언제든 되돌림." },
        { title: "차트 탭 상호작용 재설계",
          problem: "도구줄이 플롯을 가리고, 툴팁이 데이터를 덮고, 구간 선택과 분석 결과가 어디 있는지 알기 어려웠다.",
          solution: "도구줄을 플롯 밖으로, 툴팁 대신 크로스헤어와 읽기 줄, 플롯 아래 분석 결과줄, 드래그 기본값을 구간 선택으로. 키보드 조작과 표 가상 스크롤 추가.",
          result: "화면 문자열 157개 i18n, 스타일 금지 규칙 lint, 기준 이미지 16장으로 회귀 관리." },
      ],
    },
  ],

  // Next.js 단독 슬라이드
  cms: {
    name: "IT News CMS",
    org: "개인 프로젝트",
    plain: "해외 IT 기사를 수집해 한국어 초안을 만들고, 검수해서 발행하는 편집자용 운영 도구입니다.",
    hero: "9-it-news-cms/articles.png",
    caption: "기사 관리. 상태 탭(수집 → 초안 → 검토 → 예약 발행 → 발행/보류)과 운영 큐, 담당자·우선순위 필터",
    meta: [["기간", "2026.04 ~ 10"], ["스택", "Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4"]],
    points: [
      { h: "App Router 구조", p: "(auth)·(protected) 라우트 그룹으로 보호 영역을 나누고, Route Handler로 mock 인증(cookie + proxy)과 상태 전환 API 구성." },
      { h: "교체 가능한 데이터 계층", p: "in-memory repository와 seed 데이터로 시작해 FastAPI·PostgreSQL로 바꾸기 쉽게 Entity / ListItem / Detail / UpdateRequest 모델 분리." },
      { h: "운영 워크플로우 UI", p: "수집 → 초안 → 검토 → 예약 발행 → 발행/보류 상태 머신. 3단 편집 화면, 검수 체크리스트, 미저장 변경 표시와 이탈 경고." },
    ],
    routes: [
      ["app/(auth)/login", "로그인"],
      ["app/(protected)/dashboard", "운영 지표 · 리뷰 큐 · 기한 초과"],
      ["app/(protected)/articles/[id]", "원문 근거 | AI 초안·편집본 | 체크리스트·예약"],
      ["app/(protected)/research/[id]", "후보 글 3단 · 초안 참고 세트 구성"],
      ["app/api/{auth,articles,sources,research}", "Route Handlers"],
      ["features/{articles,dashboard,research,sources}", "기능별 컴포넌트"],
    ],
    other: "그 밖의 Next.js 작업: 카드뉴스 미리보기·PNG 내보내기 도구(Next.js 16 · Vitest · Playwright), 개인 스튜디오 사이트 rapha-studio(Next.js 16 · Firebase), 한국사 앱 웹 버전(Next.js 16 · 정적 내보내기).",
  },

  rag: {
    name: "공인중개사 AI 챗봇",
    org: "개인 프로젝트",
    plain: "공인중개사 수험생이 법령 조항을 물으면 정확한 조문을 근거로 답하는 AI 튜터입니다.",
    diagram: "1-rag-tutor/rag-diagram.png",
    phone: "1-rag-tutor/lawa1.png",
    meta: [["기간", "2026.02 ~ 2026.03 · AI 심화 캠프 수료 직후"], ["스택", "Python · FastAPI · LangChain · Qdrant · Elasticsearch · OpenAI · Flutter"], ["환경", "Docker Compose로 PostgreSQL 16 · Qdrant · FastAPI 서버 구성, healthcheck · 볼륨"]],
    results: [
      { lead: "조항 번호 질의의 오검색 최소화", sub: "Qdrant 의미 검색 + BM25 키워드 검색을 RRF로 재정렬" },
      { lead: "임베딩 연산 3,000ms를 50ms로", sub: "사전 인덱싱과 Parent-Document Retrieval" },
      { lead: "같은 질문은 LLM 호출 없이 응답", sub: "Semantic Caching 유사도 0.93, 동일 질문 ~10ms" },
    ],
  },

  apps: {
    title: "스토어에 출시한 앱 4종",
    sub: "App Store · Google Play에 배포해 운영 중인 앱입니다. 기획 · Figma 디자인 · Flutter 개발 · 배포 · 운영을 전담했습니다.",
    items: [
      { name: "LingoStep IELTS", link: "apps.apple.com/kr/app/id6755953148", period: "2025.03 SAYON 출시 → 2026.10 리뉴얼", img: "2-lingostep-ielts/raw-01_오늘.png", bare: true, line: "실력과 시간에 맞춘 오늘의 계획, 간격 복습, 화면 꺼도 이어지는 반복 듣기", tech: "audio_service 백그라운드 재생 · TTS 음원 파이프라인 · Firestore 동기화" },
      { name: "한국사", link: "apps.apple.com/kr/app/id6759428228 · Google Play", period: "2025.05 출시 → 운영 중", img: "3-hanguksa/hanguksa.png", line: "기출 PDF를 자동 구조화한 문제 풀이와 오답 재도전", tech: "PyMuPDF 파싱 파이프라인 · 이미지 캐싱 · 관계형 오답 테이블" },
      { name: "Noahlog", link: "apps.apple.com/kr/app/id6751936256", period: "2024.09 출시 → 운영 중", img: "4-noahlog/light-01_오늘.png", bare: true, line: "15개 언어와 RTL을 지원하는 시간 관리 플래너", tech: "SQLite·Firestore Offline-First · Isolate 통계 · CustomPainter 히트맵" },
      { name: "말씀나무", link: "apps.apple.com/kr/app/id6751865581", period: "2025.03 출시 → 운영 중", img: "5-malsseum/raw-today_light.png", bare: true, line: "성경 말씀을 담고 매일 외우고, 암송한 날이 쌓이는 앱. 홈 화면 위젯", tech: "장절 → 첫 글자 → 정답 암송 세션 · 복습 일정 · 손님 계정 → 소셜 연결 · WidgetKit 브릿지" },
    ],
  },

  work: {
    title: "일하는 방식",
    items: [
      { h: "문서로 먼저 합의한다", p: "화면 작업 전에 흐름과 규칙을 UX 문서로 정리하고 그 문서를 기준으로 구현합니다. 같은 기준을 AI 코딩 에이전트 지침에도 넣어 사람과 도구가 같은 규칙으로 일합니다." },
      { h: "현업 결정은 요청서로", p: "요청을 번호로 받아 원인과 계획을 정리하고, 판단이 필요한 건은 결정 요청서로 담당 팀 회신을 받아 반영합니다. 되돌린 결정도 기록으로 남깁니다." },
      { h: "같은 답을 증명하고 바꾼다", p: "성능 개선 뒤에는 옛 결과와 양방향 비교, 규칙 변경은 과거 데이터로 회귀 검증, 리팩터링은 시각 회귀 기준 이미지로 확인합니다." },
      { h: "조용한 실패를 드러낸다", p: "잘못된 설정의 빌드는 실패시키고, 위험한 상태는 사용자 언어로 알리며 확인 없이는 진행하지 않습니다. 정상처럼 보이는 오류를 가장 먼저 없앱니다." },
    ],
  },

  outro: {
    title: "감사합니다.",
    lead: "사용자의 업무를 이해하고, 화면부터 데이터와 AI까지 끝까지 책임지는 개발자로 함께하겠습니다.",
    contacts: ["comely1515@gmail.com", "010-3050-0299", "github.com/rapha155", "comelylabs.com"],
  },
};
