// 프리랜서(관리자 페이지 · 대시보드) 지원용 포트폴리오. 특정 공고에 묶이지 않게 일반 표현으로.
// portfolio-v2-data.js(PF)를 먼저 불러온 뒤, 프리랜서용 내용만 여기서 덧씌움. 프로젝트 본문은 PF 그대로.
const GIG = {
  cover: {
    year: "Portfolio 2026 · Freelance",
    role: "Web Developer · Admin & Dashboard",
    tagline: "관리자 페이지와 운영 대시보드를 설계부터 배포까지 맡아 온 웹 개발자",
    now: "Korea Digital 프리랜서 계약 종료 예정 · 즉시 투입 · 상주 근무 가능",
  },

  // 필요한 역량 ↔ 해 본 일 ↔ 근거 프로젝트
  fit: {
    title: "Why Me",
    sub: "관리자 페이지 · 운영 대시보드 프로젝트",
    headline: "관리자 화면과 운영 데이터를 다루는 일을 주로 해 왔습니다.",
    rows: [
      ["기획 ~ 배포 전담", "화면 · API · DB · AWS 배포를 <b>6주</b> 동안 맡아 구축, 현업 피드백을 계속 반영", "주문·정산 관리자"],
      ["운영관리 어드민", "주문 · 견적 · 입금 · 정산 · 거래처 관리 화면, 주문 <b>1,768건 이관</b>(적재 오류 68건 → 0건). 2023년 고객 · 회계 관리자 페이지도 UX부터 React까지 구축", "주문·정산 관리자 · 고객·회계 관리자"],
      ["대시보드", "탭 7개로 흩어진 상태를 <b>한 화면</b>에 모아 예외만 드러나게 재설계. 연구원 제안 28건을 <b>10일</b> 안에 반영", "PHRI 수직농장"],
      ["디자인 제공", "시안과 구현의 차이를 목록으로 정리해 맞추고 공용 UI · 테마로 규칙 통일. <b>접근성 위반 0</b>(23개 화면 자동 검사)", "PHRI 수직농장"],
      ["백엔드 · 인프라", "Node.js Lambda · PostgreSQL(RDS) · S3 · CloudFront 구성, 정산 조회 <b>22.9초 → 0.12초</b>(개선 전후 결과 전수 비교, 차이 0행)", "주문·정산 관리자"],
      ["AI 적용", "LLM은 요청만 하고 계산 · 검증은 앱이 맡는 도구 계층, 법령 <b>하이브리드 RAG</b> 설계 · 개발", "Science# · 공인중개사 AI 챗봇"],
    ],
    terms: [["투입", "즉시 가능"], ["근무", "상주 근무 가능"], ["경력", "3년 7개월 · 2023.03~"], ["형태", "프리랜서 · 1인 전담 가능"], ["현재 · Korea Digital", "프리랜서 계약 종료 예정"]],
  },

  // 프로젝트 이력 표 (경력기술서 형식). 최근 / 이전 두 장으로 나눔.
  // Korea Digital 기간 · 범위는 docs/*.md 커밋 기준, 개인 프로젝트는 resume-data.js · portfolio-data.js 기록 기준
  history: {
    title: "Project History",
    pages: [
      { label: "2025.09 ~ 현재", sub: "Korea Digital 프리랜서 프로젝트 3건", rows: [
        { period: "2026.10.07 ~ 10.16", dur: "10일", name: "PHRI 수직농장 운영 웹앱", client: "Korea Digital", type: "프리랜서 · 팀", scope: "프론트엔드 UX · 공용 UI · 신규 API 연결 · UX 문서", tech: "React · TypeScript · Vite · zustand · orval · Turborepo" },
        { period: "2026.09.03 ~ 10.16", dur: "6주", name: "주문·정산 관리자", client: "Korea Digital", type: "프리랜서 · 1인", scope: "기획 · 프론트 · 백엔드 API · DB · AWS 배포 · 데이터 이관", tech: "React · TypeScript · Node.js Lambda · PostgreSQL · AWS(S3 · CloudFront · RDS)" },
        { period: "2026.07.21 ~ 09.07", dur: "7주", name: "Science# 로컬 AI", client: "Korea Digital", type: "프리랜서 · 1인", scope: "로컬 LLM 연동 · AI 도구 계층 · 차트 분석 · 보고서 화면", tech: "React · TypeScript · Vite · LM Studio · AWS(S3 · CloudFront)" },
        { period: "2026.04 ~ 06", dur: "3개월", name: "SQLD 자격증 앱", client: "Comely Labs", type: "1인", scope: "기획 · 디자인 · 개발, 한국사 앱과 공통 로직을 모노레포로 공유", tech: "Flutter · Dart Pub Workspace" },
        { period: "2025.11 ~ 2026.03", dur: "5개월", name: "공인중개사 AI 챗봇", client: "개인 프로젝트", type: "1인", scope: "기획 · 백엔드 · RAG · 앱", tech: "FastAPI · LangChain · Qdrant · Elasticsearch · Docker · Flutter" },
        { period: "2025.09 ~ 10", dur: "2개월", name: "기출 PDF 파싱 자동화", client: "Comely Labs", type: "1인", scope: "기출 PDF 자동 구조화 파이프라인 · 한국사 앱 업데이트", tech: "Python · PyMuPDF · Flutter" },
      ]},
      { label: "2023.03 ~ 2025.08", sub: "프리랜서 관리자 페이지 · 자체 서비스 기획 · 개발 · 출시 · 운영", rows: [
        { period: "2025.03 ~ 05", dur: "3개월 · 운영 중", name: "한국사 자격증 앱", client: "Comely Labs", type: "1인", scope: "기획 · 디자인 · 개발 · App Store · Google Play 출시", tech: "Flutter · Hive · Python" },
        { period: "2025.01 ~ 03", dur: "3개월 · 운영 중", name: "SAYON 영어 회화 앱", client: "Comely Labs", type: "1인", scope: "기획 · 디자인 · 개발 · 출시, 2026.10 LingoStep IELTS로 리뉴얼", tech: "Flutter · Firebase · GPT-4o · RevenueCat" },
        { period: "2025.01 ~ 03", dur: "3개월 · 운영 중", name: "말씀나무 암송 앱", client: "Comely Labs", type: "1인", scope: "기획 · 디자인 · 개발 · 출시, 홈 화면 위젯 · 복습 일정", tech: "Flutter · Firebase" },
        { period: "2024.06 ~ 09", dur: "4개월 · 운영 중", name: "Noahlog 시간관리 앱", client: "Comely Labs", type: "1인", scope: "기획 · 디자인 · 개발 · 15개국 출시, 오프라인 우선 동기화", tech: "Flutter · sqflite · Firestore" },
        { period: "2024.02 ~ 06", dur: "5개월", name: "운동기록 사이트", client: "팀 프로젝트", type: "팀", scope: "Spring 독학 후 웹 서비스 팀 개발", tech: "Spring" },
        { period: "2023.09 ~ 2024.02", dur: "6개월", name: "서비스 기획 프로젝트", client: "팀 프로젝트", type: "팀", scope: "유튜브 프리미엄 UX 개선 · 이력서 관리 서비스 기획", tech: "Figma" },
        { period: "2023.09 ~ 12", dur: "4개월", name: "IT News · 기사 서비스", client: "개인 프로젝트", type: "1인 전담", scope: "해외 IT 뉴스를 조합한 기사 서비스 기획 · 디자인 · 제작 · 웹 배포", tech: "React · Figma" },
        { period: "2023.03 ~ 08", dur: "6개월", name: "고객 · 회계 관리자 페이지", client: "Inbiznet", type: "프리랜서 · 1인", scope: "내부 고객 관리 · 회계 처리 관리자 페이지 UX 설계 · 화면 디자인 · React 1인 구축", tech: "React · Figma" },
      ]},
    ],
  },

  // 프로젝트 장 위 참여 정보 띠와 왼쪽 담당 / 범위 밖
  engage: {
    "주문·정산 관리자": { client: "Korea Digital", type: "프리랜서 · 1인", period: "2026.09.03 ~ 10.16", dur: "6주", size: "영업 · 경영 · 공장 등 사내 사용",
      tech: "React 19 · TypeScript · Vite · Node.js Lambda · PostgreSQL(RDS) · AWS S3 · CloudFront · SheetJS",
      scope: "기획 · 프론트엔드 · 백엔드 API · DB 스키마 · AWS 배포 · ERP 연동 · 데이터 이관 · 현업 피드백 대응" },
    "PHRI 수직농장": { client: "Korea Digital", type: "프리랜서 · 팀 (프론트엔드 담당)", period: "2026.10.07 ~ 10.16", dur: "10일", size: "연구원 사용",
      tech: "React · TypeScript · Vite · zustand · react-hook-form · zod · react-aria · Tailwind CSS · orval · Vitest · Turborepo",
      scope: "웹앱 프론트엔드 UX · 공용 UI 컴포넌트 · 신규 API 연결 · UX 문서", out: "백엔드 · 브로커 · 디바이스 어댑터 · 제어 로직 (팀장 · 팀)" },
    "Science# 로컬 AI": { client: "Korea Digital", type: "프리랜서 · 1인 (센서 통신 제외)", period: "2026.07.21 ~ 09.07", dur: "7주", size: "학교 과학 수업용",
      tech: "React 19 · TypeScript · Vite · Recharts · LM Studio · Gemma 4 · Playwright · AWS S3 · CloudFront",
      scope: "로컬 LLM 연동 · 채팅 · 도구 파이프라인 · AI 도구 11종 · 차트 분석 · 보고서 화면 · 리팩터링 · 테스트", out: "센서 통신(BLE · Serial) · 센서 코어 (팀장)" },
    "공인중개사 AI 챗봇": { client: "개인 프로젝트", type: "1인", period: "2025.11 ~ 2026.03", dur: "5개월", size: "수험생용 AI 튜터",
      scope: "기획 · 백엔드 · RAG 파이프라인 · 앱" },
  },


  // 프로젝트별 "다음 프로젝트에 가져갈 것". 도메인 추측 없이 일반 어드민 기준으로
  carry: {
    "주문·정산 관리자": ["목록 · 상세 · 업로드 · 정산이 이어지는 운영 화면", "기존 엑셀 데이터의 이관과 전수 검증", "모든 화면이 같은 답을 내도록 업무 규칙을 한곳에"],
    "PHRI 수직농장": ["현황은 한 화면에, 예외만 드러나는 대시보드", "불러오기 실패나 오래된 값을 정상처럼 보이지 않게", "API가 바뀌어도 화면은 그대로인 어댑터 구조"],
  },

  // 일하는 방식 한 장: 어떤 사람인지 한 문장 + 꼭 필요한 원칙 넷 (각각 실제 사례)
  work: {
    title: "일하는 방식",
    lead: "기다리기보다 먼저 만들어 보여 드리고, 결과는 끝까지 확인합니다.",
    items: [
      { h: "범위와 우선순위를 먼저 합의합니다", p: "착수 때 화면 목록과 우선순위를 정리해 확인받고, 바로 할 수 없는 요청은 이유와 함께 따로 정리합니다.", ref: "PHRI · 연구원 제안 28건 10일 안에 반영" },
      { h: "매주 동작하는 화면으로 맞춥니다", p: "목 데이터로 화면을 먼저 만들어 주 단위로 공유하고, 실서버 연결은 한 곳에서 교체해 일정이 막히지 않게 합니다.", ref: "주문·정산 관리자 · 6주 동안 현업 피드백 반영" },
      { h: "바꾼 결과는 이전과 비교해 확인합니다", p: "성능을 바꾸면 이전 결과와 전수 비교하고, 화면을 정리하면 기준 이미지와 맞춰 봅니다. 정상처럼 보이는 틀린 값을 먼저 찾습니다.", ref: "정산 조회 22.9초 → 0.12초, 차이 0행" },
      { h: "끝난 뒤에도 이어갈 수 있게 남깁니다", p: "결정은 바뀐 이유까지 기록하고, 마칠 때 구조와 규칙을 문서로 남겨 다음 사람이 바로 이어받게 합니다.", ref: "PHRI · UX 문서 15개 · 백엔드 요청 목록" },
    ],
  },


  // 출시 앱 4종 장 (portfolio.html과 같은 구성). 기간은 이력 표와 같게, 참여 정보 띠 추가
  apps: {
    engage: { client: "Comely Labs", type: "1인", period: "2024.06 ~ 현재", dur: "4종 운영 중", size: "누적 사용자 약 2,000명" },
    period: { "LingoStep IELTS": "2025.01 ~ 03 개발 · 2026.10 리뉴얼", "한국사": "2025.03 ~ 05 개발 · 운영 중", "Noahlog": "2024.06 ~ 09 개발 · 15개국 운영 중", "말씀나무": "2025.01 ~ 03 개발 · 운영 중" },
  },

  outro: {
    lead: "디자인 시안을 운영자가 매일 쓰는 화면으로.<br>바로 시작할 수 있습니다.",
    sign: "형성희 · Web Developer",
  },
};

// 프로젝트 이름을 이력서와 같게 통일
PF.projects.find(p => p.name === "ERP 연동 주문·정산 관리자").name = "주문·정산 관리자";
