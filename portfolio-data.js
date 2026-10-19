// 포트폴리오 내용. 여기만 고치면 portfolio.html에 반영됨.
// 이미지는 screenshots/<프로젝트폴더>/ 에 넣고 "폴더/파일명"으로 적으면 됨.
// 한 장(1280×720)에 들어가야 하므로 문장은 짧게. <b>로 강조.
const PORTFOLIO = {
  cover: {
    eyebrow: "2026 PORTFOLIO",
    role: "App & AI Solution Developer",
    name: "HYEONG SEONG HUI",
    keywords: ["ARCHITECTURE", "AI OPTIMIZATION", "UX-Driven"],
    email: "comely1515@gmail.com",
  },

  about: {
    name: "형성희",
    role: "App & AI Solution Developer",
    intro: [
      "기획부터 디자인, 개발, 배포까지 앱 4종의 출시 전 과정을 직접 수행한 <b>AI 기반 모바일·웹 서비스 개발자</b>입니다. 사용자 경험과 비즈니스 목적을 함께 보며, 복잡한 요구사항에서 <b>문제의 본질</b>을 빠르게 찾아 <b>유지보수와 확장</b>이 쉬운 구조로 구현합니다.",
      "현재 Korea Digital에서 로컬 LLM 학습 도우미, 사내 업무 시스템, 스마트팜 웹앱을 개발하며 AI와 웹 기술로 <b>실질적인 해결 방향</b>을 만드는 일을 하고 있습니다.",
    ],
    links: [
      { label: "GITHUB", value: "github.com/rapha155", href: "https://github.com/rapha155" },
      { label: "WEB", value: "comelylabs.com", href: "https://comelylabs.com" },
      { label: "Email", value: "comely1515@gmail.com", href: "mailto:comely1515@gmail.com" },
      { label: "Phone", value: "010-3050-0299" },
    ],
    competencies: [
      { title: "Full-Cycle Development", desc: "아이디어 기획, UI/UX 디자인, 프론트·백엔드 개발, 앱스토어 배포까지 <b>1인 수행</b>" },
      { title: "AI-Driven Solutions", desc: "RAG 챗봇, 로컬 LLM + MCP 도구 계층, 소형 모델의 실패를 견디는 안전장치 설계" },
      { title: "Scalable Architecture", desc: "클린 아키텍처 계층 분리, 업무 규칙의 단일 원본화, 테스트로 지키는 리팩터링" },
    ],
    stack: [
      { label: "Mobile", value: "Flutter, Dart, Riverpod, Freezed, In-App Purchase" },
      { label: "Web", value: "React 19, TypeScript, Vite, 클린 아키텍처" },
      { label: "AI / BE", value: "Python, FastAPI, Node.js, LLM(RAG · MCP · function calling), Qdrant" },
      { label: "Infra", value: "AWS Lambda · CloudFront · RDS PostgreSQL, Firebase" },
    ],
    projectSummary: [
      { label: "Work · Korea Digital (2026.07 ~)", value: "Science# 로컬 AI, KD order, PHRI 수직농장 웹앱" },
      { label: "Published · 앱스토어 운영 중", value: "LingoStep IELTS(구 SAYON), 한국사 자격증, Noahlog, 말씀나무" },
      { label: "AI 프로젝트", value: "공인중개사 AI 튜터(RAG), SQLD 자격증 앱" },
    ],
  },

  overview: {
    work: [
      { name: "PHRI 수직농장 웹앱", desc: "스마트팜 운영 화면 UX · 백엔드 계약 연결", period: "2026. 10" },
      { name: "KD order", desc: "주문·견적·정산 사내 웹앱 재구축", period: "2026. 09 ~ 10" },
      { name: "Science# 로컬 AI", desc: "로컬 LLM 과학 실험 학습 도우미 (AI·MCP)", period: "2026. 07 ~ 09" },
    ],
    upcoming: [
      { name: "공인중개사 AI 튜터", desc: "법령 특화 RAG 파이프라인", period: "2025. 12 ~ 2026. 04" },
    ],
    stats: ["App Store · Google Play 출시 4개"],
    published: [
      { name: "LingoStep IELTS", desc: "IELTS 매일 학습 · 반복 듣기 (SAYON 리뉴얼)", period: "2026. 05 ~ 운영 중" },
      { name: "한국사능력검정시험", desc: "기출 데이터 구조화 · 오답노트", period: "2025. 05 ~ 07" },
      { name: "말씀나무", desc: "iOS 홈 화면 위젯", period: "2025. 03 ~ 04" },
      { name: "Noahlog", desc: "캘린더 시간관리 · 시간 통계", period: "2024. 09 ~ 2025. 02" },
    ],
  },

  // 프로젝트 하나 = 슬라이드 2장(개요 + 핵심 기술 구현)
  projects: [
    {
      name: "Science# 로컬 AI",
      badge: "Korea Digital · 팀",
      role: "AI · MCP 파트 담당",
      period: "2026. 07 ~ 2026. 09",
      desktop: true,
      images: ["6-kd-local-ai/chat-tool-call-stub.png", "6-kd-local-ai/chart-range-selection.png"],
      overview: [
        { label: "서비스 정의", value: "학생이 무선 센서로 실험을 측정하고 차트 분석 → <b>로컬 LLM 대화</b> → 보고서까지 브라우저 안에서 끝내는 <b>서버 없는 웹앱</b>. 데이터는 외부로 나가지 않음" },
        { label: "핵심 역할", value: "LM Studio(Gemma 4 12B) 연동, 채팅 파이프라인, <b>브라우저 내 MCP 도구 11종</b>, 차트 분석·보고서·수업 자료 화면. 센서 통신은 팀장 담당" },
        { label: "주요 기능", value: "AI에게 차트 작업 요청, 구간 선택 분석 12종, 7섹션 보고서 초안, 수업 자료 근거 답변" },
      ],
      stack: [
        { label: "Frontend", value: "React 19, TypeScript, Vite, Recharts" },
        { label: "AI", value: "LM Studio OpenAI 호환 API, SSE 스트리밍, function calling" },
        { label: "Test · Deploy", value: "node:test, Playwright 시각 회귀, S3 + CloudFront" },
      ],
      outcomes: [
        "LLM이 답한 R² 0.85 → 검산 −1.48. 분석 수치는 앱 엔진이 계산하도록 전환",
        "망가진 도구 호출 차단: 라운드당 3개 상한, 허용 외 이름·인자 제거",
        "차트 탭 컴포넌트 855 → 402줄, 시각 회귀 12장 diff 0",
      ],
      details: [
        { title: "01. 브라우저 내 MCP 도구 계층", blocks: [
          { p: ["서버 없는 SPA라 도구가 다룰 상태(차트·실험 데이터)가 브라우저 메모리에 있음."] },
          { h: "Problem", p: ["LLM이 직접 계산한 수치를 그대로 표시했고, 편집 도구가 원본 측정값까지 덮어써 흔적이 남지 않음."] },
          { h: "Solution", p: ["도구 11종을 function calling 스키마로 노출하고 <b>LLM은 요청만, 실행·검증은 앱</b>으로 분리. 분석 수치는 앱이 계산.", "첫 편집 전 원본 보관(스키마 v6), 편집 사실을 범례·보고서에 공개, 원본 복원 도구 추가."] },
        ]},
        { title: "02. 소형 모델의 도구 호출 붕괴 대응", blocks: [
          { p: ["Gemma 4 12B는 <code>tool_calls</code> 대신 본문 마크업을 내보내고, 같은 편집을 10번 반복하기도 함."] },
          { h: "Problem", p: ["앱이 이를 그대로 실행·표시. 도구를 부르지 않고 \"변경했습니다\"라고 답하는 허위 완료도 발생."] },
          { h: "Solution", p: ["마크업 파서로 호출 복구, 라운드당 상한·필터, 중복 조회는 캐시로 차단.", "쓰기 도구가 돌지 않은 완료 답변을 잡는 <b>changeClaimGuard</b>와 도구 루프 메트릭 추가."] },
        ]},
        { title: "03. 로컬 추론 비용 · 안전한 리팩터링", blocks: [
          { p: ["매 요청이 로컬 GPU에서 처음부터 계산되어 프롬프트 재사용이 속도를 좌우."] },
          { h: "Solution", p: ["고정 정책은 앞, 매 턴 바뀌는 컨텍스트는 뒤에 두어 프리픽스 KV 캐시 유지. 의도별 라우팅으로 노출 도구와 라운드 예산 축소.", "Playwright 기준 이미지 12장을 먼저 만든 뒤 대형 컴포넌트를 diff 0으로 분해(855 → 402줄)."] },
        ]},
      ],
    },
    {
      name: "KD order",
      badge: "Korea Digital · 단독",
      role: "프론트 · API · DB · 배포 · ERP 연동",
      period: "2026. 09 ~ 2026. 10",
      desktop: true,
      images: ["7-kd-order/orders-list.png", "7-kd-order/admin-order-upload.png"],
      overview: [
        { label: "서비스 정의", value: "Apps Script + 스프레드시트로 운영하던 사내 <b>주문·견적·정산·입금</b> 도구를 React + AWS Lambda + PostgreSQL로 재구축" },
        { label: "핵심 역할", value: "<b>단독 개발</b>. 현업 요청은 번호로 받아 원인·계획을 정리하고, 판단이 필요한 건은 결정 요청서로 확인 후 반영" },
        { label: "주요 기능", value: "주문 목록(상태 칩·긴급 고정 정렬·중복 검사), 견적서·비교견적 PDF, 입금관리, 관리자(ERP 불러오기·배송처 확인·대리점 정산)" },
      ],
      stack: [
        { label: "Frontend", value: "React 19, TypeScript, Vite, 플레인 CSS 토큰, 클린 아키텍처" },
        { label: "Backend", value: "Node.js Lambda, PostgreSQL 뷰·함수·트리거, SQL 마이그레이션 00~52" },
        { label: "Infra", value: "CloudFront OAC, S3, SSM Parameter Store" },
      ],
      outcomes: [
        "대리점 정산 조회 22.9초 → 0.12초 (결과 차이 0행)",
        "1년치 주문서 적재 오류 68건 → 0건, 1,768건 누락 없음",
        "배송처 미확인 731 → 487건, 변경이력 이관 65 → 5,588건",
      ],
      details: [
        { title: "01. 조회 API 없는 ERP 자동 수집", blocks: [
          { p: ["주문 원천은 이카운트 ERP. 사람이 엑셀을 내려받아 올려야 했음."] },
          { h: "Problem", p: ["경로 후보 139개가 모두 404. 명세서에도 조회 API가 없음을 실측으로 확정."] },
          { h: "Solution", p: ["HAR 분석으로 웹 로그인과 전송 형식을 재현한 <b>조회 전용 클라이언트</b> 구현.", "결과를 엑셀 적재와 같은 미리보기 → 적재 경로에 연결. 관리자 화면에서 기간만 고르면 수집."] },
        ]},
        { title: "02. 정산 조회 22.9초 → 0.12초", blocks: [
          { h: "Problem", p: ["거래처 1만 행을 부분 일치로 훑는 함수(1회 9.2ms)를 뷰가 행마다 두 번 호출."] },
          { h: "Solution", p: ["학교 거래처는 호출 생략, CTE로 1회 호출, 트리거로 갱신되는 이름 → 주소 캐시 테이블.", "옛 뷰와 양방향 EXCEPT 비교로 결과 차이 0행을 확인한 뒤 교체."] },
        ]},
        { title: "03. 키 재설계와 일괄 적재", blocks: [
          { h: "Problem", p: ["주문No.가 중복 17건·공백 1건이라 키로 쓸 수 없었고, 건별 쓰기(왕복 1.5만 회)는 Lambda 30초 제한에 닿음."] },
          { h: "Solution", p: ["키를 유일한 전표번호로 교체하고 표시 번호 분리. 검증은 오류 → 경고로.", "500행 upsert · 1,000행 INSERT 일괄 쓰기, 바인드 파라미터 상한(65,535) 내 분할."] },
          { h: "Outcome", list: ["오류 68 → 0건", "목 데이터가 운영에 배포된 사고 후, 데이터 원본 미지정 시 빌드 실패로 차단"] },
        ]},
      ],
    },
    {
      name: "PHRI 수직농장 웹앱",
      badge: "Korea Digital · 팀",
      role: "프론트엔드 UX · 공용 UI",
      period: "2026. 10",
      desktop: true,
      images: ["8-kd-vertical-farm/dashboard-overview.png", "8-kd-vertical-farm/recipe-editor.png"],
      overview: [
        { label: "서비스 정의", value: "엣지 스마트팜 플랫폼의 수직농장 웹앱. 챔버 환경 모니터링, 재배 일정·레시피, 직접 조작, 알람·기록·추세를 <b>연구원이 쓰는 화면</b>" },
        { label: "핵심 역할", value: "운영 화면 UX 재정비, 연구원 UI 제안서 검토·반영, <b>신규 백엔드 계약 어댑터 연결</b>, 공용 UI 컴포넌트 6건. 브로커·제어 로직은 팀 담당" },
        { label: "주요 기능", value: "현황 대시보드, 재배·레시피 편집기, 오늘 운전·직접 조작, 알람·기록·추세, 시스템 상태" },
      ],
      stack: [
        { label: "Frontend", value: "React, TypeScript, Vite, zustand, react-hook-form + zod, react-aria, Tailwind" },
        { label: "API · Test", value: "orval + 커스텀 mutator, Vitest, pnpm workspace" },
      ],
      outcomes: [
        "챔버 상세 탭 7개 → 개요 한 화면 + 다이얼로그. 1440×900에서 스크롤 없이 전체 확인",
        "접근성 axe 위반 2종 → 0 (23개 화면), 다크 테마 대비 위반 0",
        "UI 제안 28건 반영, 백엔드가 필요한 항목은 BR-1~13으로 분리",
      ],
      details: [
        { title: "01. 계약이 다른 두 백엔드 연결", blocks: [
          { h: "Problem", p: ["화면은 v0 계약(mock) 기준인데 새 서비스(stub)는 도메인 모델이 다름. 일부 경로는 이름까지 같아 경로로 구분 불가."] },
          { h: "Solution", p: ["orval stub 타깃과 mock 우회 mutator 추가. DTO 변환은 순수 함수 어댑터, 출처 분기는 <code>isStubApi()</code> 한 곳.", "겹치는 4개 화면은 컴포넌트 수정 없이 연결. 개념이 다른 3개 화면은 사유를 문서화하고 보류."] },
        ]},
        { title: "02. '정상처럼 보이는 오류' 제거", blocks: [
          { h: "Problem", p: ["불러오기 실패가 0건으로, 끊긴 연결의 지난 값이 현재 값으로, 일부 선택이 전체 해제로 보임."] },
          { h: "Solution", p: ["마지막 수신 시각을 함께 받아 \"서버 응답 없음 · 시각 기준\" 경고와 흐림 처리. 모르는 개수는 숨김.", "공용 Checkbox에 중간 상태 추가, 스켈레톤 바탕을 반투명 토큰으로 교체."] },
        ]},
        { title: "03. UX 선행 정리 · 접근성 · 반응형", blocks: [
          { h: "Problem", p: ["챔버 3번이 스크롤 아래로 잘리고 상세는 탭 7개. 휴대폰에서 표 5개가 가로로 넘침."] },
          { h: "Solution", p: ["docs/ux 문서 15개로 규칙을 먼저 정리하고 구현. 같은 규칙을 AI 코딩 에이전트 지침에도 반영.", "카드 줄 상단 배치, 예외만 표시, 표는 행 카드로 쌓기. 색만으로 알리던 알람에 아이콘·숨은 문구 추가."] },
        ]},
      ],
    },
    {
      name: "공인중개사 AI 챗봇",
      role: "1인 기획 · AI 파이프라인 설계 · 개발",
      period: "2025. 12 ~ 2026. 04",
      images: ["1-rag-tutor/rag-1.png"],
      diagram: "1-rag-tutor/rag-diagram.png",
      definition: "공인중개사 수험생을 위한 법령 특화 AI 챗봇. 방대한 법령 조문과 회차별 기출문제를 RAG 파이프라인으로 구조화해 조항 단위의 정확한 답변과 오답 관리를 제공. 단순 검색이 아닌 <b>법령 문맥을 이해하는 답변</b>이 핵심.",
      roles: [
        "<b>법령 조항 기반 질의응답</b> (환각 최소화)",
        "회차별 기출문제 풀이 및 오답 노트",
        "<b>연도·과목·중요도 메타데이터 필터 검색</b>",
        "자주 묻는 질문 즉답 (시맨틱 캐싱)",
      ],
      details: [
        { title: "RAG System Architecture", blocks: [
          { h: "Hybrid Retrieval", p: ["<b>Qdrant(의미 유사도)와 Elasticsearch BM25(키워드)를 결합</b>해 법령 번호·조항·고유명사 검색 오류 최소화"] },
          { h: "Re-ranking", p: ["두 엔진의 결과를 <b>RRF(Reciprocal Rank Fusion)</b>로 재정렬해 관련도 높은 Top-K만 LLM에 전달"] },
          { h: "Semantic Caching", p: ["동일·유사 질문은 LLM 호출 없이 캐시 응답을 반환해 비용과 응답 시간 절감"] },
        ]},
        { title: "01. 법령 검색 정확도 개선", blocks: [
          { h: "Problem", p: ["공인중개사법·민법·중개업법 사이에 유사 조항이 반복되어 벡터 검색만으로는 \"제26조 제1항\" 같은 특정 조항을 식별하지 못하고 환각 발생."] },
          { h: "Solution", p: ["Hybrid Retrieval + RRF 파이프라인으로 조항 오검색을 줄이고 LLM 입력 데이터의 신뢰도 확보."] },
          { h: "Outcome", list: ["법령·조항 번호가 포함된 질의에서 정확한 본문 검색", "유사 법령 혼선으로 인한 오답 감소", "답변 내 조항 인용 정확도 향상"] },
        ]},
        { title: "02. 인덱싱 · 시맨틱 캐싱", blocks: [
          { h: "Problem", p: ["수만 건의 조문과 기출 지문을 실시간 벡터 연산하면 임베딩 호출이 급증하고 검색 지연과 비용 증가."] },
          { h: "Solution", list: ["Parent-Document Retrieval로 계층 구조를 보존한 청크 인덱싱", "메타데이터 필터링 검색", "임베딩 사전 인덱싱으로 실시간 연산 제거", "<b>Semantic Caching</b>: 유사도 0.93 이상, k=60 / Top-2"] },
          { h: "Outcome", list: ["임베딩 연산 3,000ms → 50ms (98% 단축)", "동일 질문 ~10ms, 유사 질문 ~50ms 응답 (LLM 생성 대비 3초 절감)"] },
        ]},
      ],
    },
    {
      name: "LingoStep IELTS",
      badge: "AppStore · Play",
      period: "2026. 05 ~ 운영 중",
      images: ["2-lingostep-ielts/light-01_오늘의IELTS.png", "2-lingostep-ielts/light-03_모범답안.png"],
      overview: [
        { label: "서비스 정의", value: "실력과 하루 학습 시간에 맞춰 오늘의 계획을 만들어 주는 <b>IELTS 매일 학습 앱</b> (SAYON 리뉴얼)" },
        { label: "핵심 역할", value: "기획, UI/UX 디자인, 콘텐츠·음원 파이프라인, 배포·운영, <b>1인 개발</b>" },
        { label: "주요 기능", value: "오늘의 계획, Speaking 모범 답안·해설, Reading·Listening 근거 해설, 화면 꺼도 이어지는 반복 듣기, 간격 복습" },
      ],
      stack: [
        { label: "Frontend", value: "Flutter, just_audio · audio_service, RevenueCat" },
        { label: "Backend", value: "Firebase (Auth · Firestore · Storage), Python TTS 파이프라인" },
      ],
      design: [
        { label: "Design Concept", value: "'오늘 할 게 정해져 있다'를 첫 화면에서 바로 보여주는 계획 중심 홈" },
        { label: "UX Strategy", value: "로그인 없이 시작, 재생 한 번으로 반복 듣기, 하루 복습 상한으로 부담 최소화" },
      ],
      details: [
        { title: "01. 하루 계획 생성과 간격 복습", blocks: [
          { h: "Problem", p: ["고정 커리큘럼은 시간이 부족한 날 이탈을 부르고, 밀린 복습이 쌓이면 앱을 다시 열지 않음."] },
          { h: "Solution", p: ["요일별 템플릿 × 학습 시간(30~120분)으로 오늘의 계획을 생성하고 하루 동안 고정.", "3 → 7 → 14일 간격 복습, 결과에 따른 재일정, 하루 15개 상한. 정답률·자기평가가 안정되면 레벨 0.5 자동 상승."] },
        ]},
        { title: "02. 백그라운드 반복 듣기", blocks: [
          { h: "Problem", p: ["화면을 끄거나 이어폰을 빼는 실제 환경에서 재생이 끊기거나 큐가 꼬임."] },
          { h: "Solution", p: ["audio_service 기반 백그라운드 재생으로 잠금화면·이어폰 제어 대응. 최근 학습 → 복습 → 덜 들은 유닛 순으로 큐를 채워 정한 시간 동안 반복.", "집중 → 따라 말하기 → 몰입 단계별 재생, 문장 시각 기반 스크립트 하이라이트."] },
        ]},
        { title: "03. 콘텐츠·음원 파이프라인", blocks: [
          { h: "Problem", p: ["음원을 앱에 넣으면 용량이 커지고, 빌드마다 전체를 다시 만들면 비용이 급증."] },
          { h: "Solution", p: ["JSON 파일 1개 = 레슨 1개, 검증 테스트로 형식 보장. TTS 생성 → 강제 정렬로 문장 시각 추출 → 해시가 바뀐 항목만 Storage 업로드.", "앱은 인덱스만 받고 음원은 첫 재생 때 기기에 저장. 기록은 기기 우선 저장 후 Firestore 동기화."] },
        ]},
      ],
    },
    {
      name: "한국사",
      badge: "AppStore",
      period: "2025. 05 ~ 2025. 07",
      images: ["3-hanguksa/hanguksa-1.png", "3-hanguksa/hanguksa-2.png"],
      overview: [
        { label: "서비스 정의", value: "한국사능력검정시험 기출 기반의 맞춤형 문제 풀이·오답 관리 앱" },
        { label: "핵심 역할", value: "기획, UI/UX 디자인(Figma), 배포·운영, <b>1인 개발</b>" },
        { label: "주요 기능", value: "회차별·유형별 문제 풀이, 이미지 포함 문항 렌더링, 학습 통계" },
      ],
      stack: [
        { label: "Frontend", value: "Flutter, Riverpod" },
        { label: "Backend", value: "Python(데이터 파싱), SQLite · Firestore(문제 로컬 캐싱)" },
      ],
      design: [
        { label: "Design Concept", value: "방대한 학습 자료에도 피로가 적은 가독성 높은 타이포그래피" },
        { label: "UX Strategy", value: "모바일에 맞춘 '한 눈에 들어오는 문제 배치'" },
      ],
      details: [
        { title: "01. 대규모 기출 데이터 자동 구조화", blocks: [
          { h: "Problem", p: ["PDF 기출문제를 수작업으로 옮기면 오류가 잦고, 문제·선지·해설·이미지 관계를 맞추는 데 시간이 많이 듦."] },
          { h: "Solution", p: ["PyMuPDF와 정규표현식으로 텍스트와 <b>이미지 위치를 자동 추출</b>하는 파이프라인 구축.", "JSON으로 구조화해 일괄 적재. 데이터 구축 시간 90% 이상 단축."] },
        ]},
        { title: "02. 문제 이미지 렌더링과 가독성", blocks: [
          { h: "Problem", p: ["사료 이미지 문항이 50% 이상. 해상도에 따라 이미지가 잘리거나 겹치고, 저사양 기기에서 스크롤이 끊김."] },
          { h: "Solution", p: ["CachedNetworkImage와 로컬 캐싱으로 중복 다운로드를 막고 비율을 유지하는 위젯 설계.", "탭하면 확대되는 이미지 뷰어와 글자 크기 조절 옵션 제공."] },
        ]},
        { title: "03. 오답 관리 아키텍처", blocks: [
          { h: "Problem", p: ["오답을 단순 리스트로 관리하면 반복 학습 때 중복이 쌓여 쿼리 성능이 떨어짐."] },
          { h: "Solution", p: ["학습 이력을 관계형 테이블로 정규화해 오답만 실시간 필터링.", "오답만 다시 푸는 <b>'재도전 모드'</b>로 개인화된 학습 순환 완성."] },
        ]},
      ],
    },
    {
      name: "Noahlog",
      badge: "AppStore",
      period: "2024. 09 ~ 2025. 02",
      images: ["4-noahlog/noahlog-1.png", "4-noahlog/noahlog-2.png"],
      overview: [
        { label: "서비스 정의", value: "일정을 시각화하고 통계를 제공하는 시간 관리 솔루션. 15개 언어·RTL 지원" },
        { label: "핵심 역할", value: "기획, UI/UX 디자인(Figma), 배포·운영, <b>1인 개발</b>" },
        { label: "주요 기능", value: "일정 관리, 시간 측정 타이머, 일·주·월간 사용 시간 통계" },
      ],
      stack: [
        { label: "Frontend", value: "Flutter, Riverpod, fl_chart, CustomPainter" },
        { label: "Backend", value: "SQLite · Firestore (Offline-First 동기화)" },
      ],
      design: [
        { label: "Design Concept", value: "시간의 흐름이 한눈에 보이는 'Round & Soft' 테마" },
        { label: "UX Strategy", value: "최소한의 터치로 일정 등록, 그래프로 성취감 고취" },
      ],
      details: [
        { title: "01. 시계열 데이터 통계 시각화", blocks: [
          { h: "Problem", p: ["나열식 데이터는 직관적이지 않고, 데이터가 늘수록 차트 렌더링에서 프레임 드랍 발생."] },
          { h: "Solution", p: ["fl_chart를 커스텀한 시간대별 히트맵과 파이 차트 구현.", "통계 계산을 Isolate로 분리해 연산 중에도 UI가 끊기지 않게 최적화."] },
        ]},
        { title: "02. 다중 조건 일정 로직", blocks: [
          { h: "Problem", p: ["반복·종일·시간제 일정과 공휴일, 예외 처리가 얽혀 초기 캘린더 로딩이 느림."] },
          { h: "Solution", p: ["반복 일정 생성 로직을 모듈화하고 로컬 DB 인덱싱으로 조회 성능 개선.", "필요한 범위만 Lazy Loading해 초기 메모리 점유 감소."] },
        ]},
        { title: "03. 시간 측정 백그라운드", blocks: [
          { h: "Problem", p: ["OS 정책으로 백그라운드 앱이 종료되면 측정 데이터가 유실."] },
          { h: "Solution", p: ["Foreground Service를 연동해 앱 상태와 무관하게 안정적인 타이머 제공.", "종료 시각을 저장하고 재진입 시 차이를 계산하는 Timestamp 복구 알고리즘 적용."] },
        ]},
      ],
    },
    {
      name: "말씀나무",
      badge: "AppStore",
      period: "2025. 03 ~ 2025. 04",
      images: ["5-malsseum/malsseum-1.png", "5-malsseum/malsseum-2.png"],
      overview: [
        { label: "서비스 정의", value: "직접 분류한 성경 구절 폴더를 스마트폰 홈 화면 위젯으로 제공" },
        { label: "핵심 역할", value: "기획, UI/UX 디자인(Figma), 배포·운영, <b>1인 개발</b>" },
        { label: "주요 기능", value: "구절 저장·폴더 분류, 홈 화면 위젯 연동, 랜덤 구절 알고리즘" },
      ],
      stack: [
        { label: "Frontend", value: "Flutter, Riverpod, home_widget" },
        { label: "Backend", value: "SQLite · Firestore (로컬 캐싱)" },
      ],
      design: [
        { label: "Design Concept", value: "가독성과 심미성을 함께 잡는 '감성 맞춤형' 디자인" },
        { label: "UX Strategy", value: "5가지 감성 폰트와 파스텔톤 위젯 커스텀 디자인 시스템" },
      ],
      details: [
        { title: "01. 네이티브 위젯 동기화", blocks: [
          { h: "Problem", p: ["앱과 위젯은 프로세스가 분리되어 메모리 상태 관리만으로는 위젯 갱신 불가."] },
          { h: "Solution", p: ["App Group(iOS)으로 앱과 위젯이 공유하는 영구 저장소 구축.", "데이터 변경 시 HomeWidget.updateWidget으로 OS에 갱신을 요청하는 브릿지 구현."] },
        ]},
        { title: "02. 다중 폴더 · 랜덤 노출", blocks: [
          { h: "Problem", p: ["데이터가 늘면 위젯 갱신마다 도는 DB 쿼리가 렌더링 성능을 떨어뜨림."] },
          { h: "Solution", p: ["위젯용 스냅샷 데이터를 따로 관리해 쿼리 복잡도 최소화, 중복 노출을 막는 Shuffle 알고리즘 적용.", "폴더 ID를 위젯 설정값에 바인딩해 폴더별 위젯 배치 지원."] },
        ]},
        { title: "03. 커스텀 테마 (폰트 · 색상)", blocks: [
          { h: "Problem", p: ["Flutter의 TextStyle·Color는 네이티브 위젯(WidgetKit · RemoteViews)이 직접 읽지 못함."] },
          { h: "Solution", p: ["테마 변경 시 선택값을 UserDefaults · SharedPreferences에 실시간 동기화.", "네이티브에서 테마 ID로 폰트·색상을 불러와 앱을 열지 않아도 위젯 테마가 최신 상태 유지."] },
        ]},
      ],
    },
  ],

  outro: {
    title: "Thank you for your time.",
    lead: "사용자의 일상을 바꾸는 기술의 힘을 믿습니다.",
    body: ["단순히 코드를 작성하는 것을 넘어,<br>비즈니스 문제를 정의하고 AI 기술로 최적의 솔루션을 찾아내는 과정을 즐깁니다.", "감사합니다."],
    email: "comely1515@gmail.com",
  },
};
