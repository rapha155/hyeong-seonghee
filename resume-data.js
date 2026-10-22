// 이력서 내용. 여기만 고치면 resume.html에 반영됨.
const RESUME = {
  name: "형성희",
  birth: "1992.02.10",
  title: "Software Developer · Frontend & AI",
  contacts: [
    { label: "010-3050-0299", href: "tel:01030500299" },
    { label: "comely1515@gmail.com", href: "mailto:comely1515@gmail.com" },
    { label: "github.com/rapha155", href: "https://github.com/rapha155" },
    { label: "comelylabs.com", href: "https://comelylabs.com" },
  ],

  // <b> 태그로 강조 가능
  intro: [
    "<b>React·Next.js로 제품을 만들고, LLM과 데이터 파이프라인으로 업무 문제를 푸는 개발자 형성희입니다.</b><br>Korea Digital에서 사내 주문·정산 시스템과 로컬 LLM 학습 도구의 설계부터 배포까지 전담하고, 스마트팜 운영 웹앱의 프론트엔드를 맡고 있습니다.",
    "그 전에는 개인사업자로 Flutter 앱 4종의 기획·디자인·개발·배포·운영을 전담해 App Store와 Google Play에 출시했습니다. 서비스 운영과 교육 기획 경험을 바탕으로 현업의 흐름에서 출발해 설계하고, 상태 관리와 디자인 시스템으로 유지보수하기 쉬운 화면을 만듭니다.",
  ],

  skills: [
    { group: "Frontend", items: [
      "React · Next.js · TypeScript",
      "zustand · Tailwind CSS · 디자인 시스템",
    ]},
    { group: "Backend / AI / Mobile", items: [
      "Node.js · FastAPI · PostgreSQL · AWS · Docker",
      "LLM · RAG · Flutter (앱 4종 출시)",
    ]},
  ],

  // 개발 경력 타임라인 (2023.09 ~ 현재, 빈 구간 없이). type: work | edu | project
  timeline: [
    { period: "2026.07 — 현재", type: "work", title: "Korea Digital · AI 엔지니어 / 개발자", desc: "Science# 로컬 AI(07~09) · KD order(09~10) · PHRI 수직농장(10~)" },
    { period: "2025.12 — 현재", type: "project", title: "Next.js 사이드 프로젝트", desc: "rapha-studio, IT News CMS(2026.04~), 카드뉴스 미리보기 도구(2026.09~) · Next.js 16 App Router" },
    { period: "2025.11 — 2026.03", type: "project", title: "공인중개사 학습 AI 챗봇 (RAG)", desc: "RAG 학습 후 LangChain · Qdrant 하이브리드 검색, 시맨틱 캐싱, Docker Compose" },
    { period: "2025.09 — 2026.08", type: "project", title: "자격증 학습 플랫폼 시리즈 (모노레포 · SQLD)", desc: "Dart Pub Workspace 모노레포, PDF 파싱 자동화, 한국사 앱 업데이트" },
    { period: "2025.03 — 현재", type: "project", title: "한국사능력검정시험 앱 기획·출시·운영", desc: "2025.05 출시, 대량 기출 데이터 구조화, 오답 관리" },
    { period: "2025.01 — 현재", type: "project", title: "SAYON → 2026.10 LingoStep IELTS로 리뉴얼", desc: "2025.03 출시, GPT-4o 롤플레이 → IELTS 매일 학습 앱" },
    { period: "2025.01 — 현재", type: "project", title: "말씀나무 기획·출시·운영", desc: "2025.03 출시, 홈 화면 위젯, 암송 세션 · 복습 일정" },
    { period: "2024.06 — 현재", type: "project", title: "Noahlog 기획·출시·운영", desc: "Flutter 독학 후 2024.09 15개국 출시, Offline-First 동기화" },
    { period: "2024.02 — 2024.06", type: "project", title: "운동기록 사이트 팀 프로젝트", desc: "React · Spring 독학 후 팀 개발" },
    { period: "2023.09 — 2024.02", type: "project", title: "서비스 기획 팀 프로젝트", desc: "유튜브 프리미엄 UX 개선, 이력서 관리 서비스 기획 (Figma)" },
  ],


  education: [],


  projectsIntro: "상세한 기획 배경과 문제 해결 과정은 포트폴리오에 정리했습니다.",
  projects: [
    { title: "KD order — 주문·견적·정산 사내 웹 시스템", badge: "Korea Digital · 전담", period: "2026.09 — 2026.10",
      summary: "스프레드시트로 운영하던 사내 주문·정산 업무를 React + AWS 웹 시스템으로 재구축",
      bullets: ["조회 API 없는 ERP 데이터 자동 수집으로 엑셀 수작업 제거", "정산 조회 22.9초 → 0.12초, 업무 규칙을 DB 한 곳으로 단일화"],
      tags: ["React 19", "Node.js Lambda", "PostgreSQL"] },
    { title: "Science# 로컬 AI — 과학 실험 AI 학습 도우미", badge: "Korea Digital · 전담", period: "2026.07 — 2026.09",
      summary: "로컬 LLM과 함께 실험 데이터를 분석하고 보고서까지 쓰는 과학 수업용 웹앱",
      bullets: ["LLM은 요청만, 계산·검증은 앱이 맡는 도구 계층으로 AI 오답에도 데이터 무결성 유지", "시각 회귀 테스트로 화면 변화 없이 차트 컴포넌트를 절반으로 분해한 뒤 개편"],
      tags: ["React 19", "TypeScript", "LM Studio"] },
    { title: "PHRI 수직농장 웹앱 — 스마트팜 운영 화면", badge: "Korea Digital · 프론트엔드 1인", period: "2026.10 — 현재",
      summary: "연구원이 챔버 상태·재배 일정·알람을 한 화면에서 다루도록 운영 화면 재설계",
      bullets: ["상세 탭 7개를 한 화면으로 통합, 접근성 검사 위반 0", "도메인이 다른 신규 백엔드 계약을 화면 수정 없이 어댑터로 연결"],
      tags: ["React", "zustand", "orval"] },
    { title: "IT News CMS — 기사 운영 CMS", badge: "개인 · Next.js", period: "2026.04 — 2026.10",
      summary: "해외 IT 기사를 수집해 한국어 초안을 만들고 검수·발행하는 편집자용 도구",
      bullets: ["App Router 라우트 그룹과 Route Handler로 보호 영역·상태 전환 API 구성", "수집 → 초안 → 검토 → 예약 발행 상태 머신과 3단 편집 화면"],
      tags: ["Next.js 16", "React 19", "Tailwind v4"] },
    { title: "공인중개사 AI 챗봇 — 법령 RAG 튜터", badge: "개인", period: "2025.11 — 2026.03",
      summary: "법령 조항을 근거로 답하는 공인중개사 수험생용 AI 튜터",
      bullets: ["의미 검색 + 키워드 검색 하이브리드 RAG로 조항 오검색 최소화", "시맨틱 캐싱으로 반복 질문은 LLM 호출 없이 응답"],
      tags: ["FastAPI", "LangChain", "Qdrant"] },
    { title: "LingoStep IELTS — IELTS 매일 학습 앱", links: [["App Store","https://apps.apple.com/kr/app/id6755953148"]], badge: "App Store · Google Play", period: "2025.03 SAYON 출시 → 2026.10 리뉴얼",
      summary: "실력과 학습 시간에 맞춘 오늘의 계획, 반복 듣기, 간격 복습을 제공하는 학습 앱",
      bullets: ["화면을 꺼도 이어지는 백그라운드 반복 듣기와 간격 복습 로직", "TTS 음원 생성 → 문장 시각 정렬 → 변경분만 업로드하는 콘텐츠 파이프라인"],
      tags: ["Flutter", "Firebase", "RevenueCat"] },
    { title: "한국사 · SQLD 자격증 학습 앱", links: [["App Store","https://apps.apple.com/kr/app/id6759428228"],["Google Play","https://play.google.com/store/apps/details?id=com.seonghee.korean_history_app"]], badge: "App Store · Google Play", period: "2025.05 출시 · 2026.02 — 2026.08 시리즈 확장",
      summary: "기출 PDF를 자동 구조화해 문제 풀이와 오답 복습을 제공하는 자격증 앱 시리즈",
      bullets: ["PDF 파싱 자동화로 기출 데이터 구축 시간 90% 이상 단축", "모노레포로 앱 간 공통 로직 재사용"],
      tags: ["Flutter", "Python", "Hive"] },
    { title: "Noahlog — 글로벌 시간관리 앱", links: [["App Store","https://apps.apple.com/kr/app/id6751936256"]], badge: "App Store", period: "2024.09 출시 → 운영 중",
      summary: "15개 언어와 RTL을 지원하는 Offline-First 시간관리 플래너",
      bullets: ["네트워크와 무관한 로컬 우선 저장 + Firestore 동기화", "15개국 다국어 배포와 시간 통계 시각화"],
      tags: ["Flutter", "sqflite", "Firestore"] },
  ],

  degrees: [
    { title: "학사", desc: "경영학 · 심리학 전공" },
  ],

  career: [
    { org: "Korea Digital", period: "2026.07 — 현재", note: "", role: "AI 엔지니어 · 개발자", bullets: [
      "사내 주문·정산 시스템(KD order)과 로컬 LLM 학습 도구(Science# 로컬 AI) 설계·개발·배포 전담",
      "스마트팜 운영 웹앱(PHRI 수직농장) 프론트엔드 1인 담당 — 상세 내용은 아래 프로젝트 참고",
    ]},
    { org: "Comely Labs", period: "2023.09 — 2026.06", note: "(개인사업자 · 2년 10개월)", role: "앱·웹 서비스 기획 및 개발 운영", bullets: [
      "모바일 앱 4종(LingoStep IELTS · 한국사 · Noahlog · 말씀나무) 기획·디자인·개발·배포·운영 전담, App Store · Google Play 출시",
      "AI 학습 서비스(공인중개사 RAG 챗봇)와 Next.js 웹 서비스(IT News CMS · comelylabs.com) 개발",
      "구독 결제(RevenueCat), 스토어 운영, 사용자 문의 대응까지 서비스 운영 전반 수행",
    ]},
    { org: "Cslee", period: "2022.06 — 2022.08", note: "프리랜서", role: "IT 교육 프로젝트 매니저", line: "정부지원 IT 교육 과정의 기획·운영·성과관리 전담, 출결 자동화와 Excel 대시보드 구축", prior: true },
    { org: "서울경제진흥원", period: "2020.04 — 2021.12", note: "사원", role: "도시제조업활성화팀 사업 운영", line: "제조업 지원사업 운영, 참여기업 관리와 전산회계, 산업 동향 뉴스레터 발행", prior: true },
    { org: "카페 창업", period: "2019.11 — 2020.04", note: "1인 창업", role: "팝업스토어 커피전문점 운영", line: "소상공인 지원사업 선정으로 창업, 매출 데이터 기반 메뉴 최적화와 SNS 마케팅", prior: true },
  ],
};
