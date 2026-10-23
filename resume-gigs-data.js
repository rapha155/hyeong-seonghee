// 원티드긱스 지원용 이력서 (어드민 대시보드 · B2C React 공고 공용).
// resume-data.js(RESUME)를 먼저 불러온 뒤 공고에 맞춘 부분만 덧씌움.
RESUME.title = "Web Developer · React · Admin & Service";

RESUME.intro = [
  "<b>React로 관리자 시스템과 사용자 서비스를 설계부터 배포까지 맡아 온 3년 7개월 차 웹 개발자 형성희입니다.</b><br>최근에는 Korea Digital에서 사내 주문·견적·정산 관리자 시스템과 스마트팜 운영 대시보드를 만들었고, 직접 출시한 앱 4종을 운영하고 있습니다.",
  "요구사항은 빠르게 반영하고, 판단이 필요한 부분은 선택지와 근거를 정리해 담당자와 먼저 맞춥니다. 주문·정산 시스템은 영업 · 경영 · 공장 등 여러 부서의 요청을 6주 동안 받아 가며 만들었고, PHRI에서는 연구원 제안 28건을 10일 안에 화면에 반영했습니다.",
  "만들기 전에 기획 의도와 화면 흐름, 데이터 구조를 문서로 먼저 정리해 검토합니다. PHRI에서는 UX 문서 15개를 먼저 쓴 뒤 구현했고, 주문·정산 시스템은 흩어진 업무 규칙을 DB 한 곳에 모으는 구조로 설계했습니다.",
  "기다리기보다 먼저 만들어 보여 드리고, 바꾼 결과는 이전과 하나하나 비교해 확인합니다.",
];


// 공고(관리자 대시보드 · 디자인 제공)에 필요하고 이력서 프로젝트에 근거가 있는 것만. Next.js는 근거 프로젝트가 없어 뺌
RESUME.skills = [
  { group: "Frontend", items: [
    "React · TypeScript · Vite · Tailwind CSS",
    "zustand · react-hook-form + zod · orval · Recharts",
  ]},
  { group: "Backend · Infra", items: [
    "Node.js · PostgreSQL · Python · FastAPI",
    "AWS(Lambda · S3 · CloudFront · RDS) · Docker",
  ]},
  { group: "Design · Test", items: [
    "Figma · Vitest · Playwright",
  ]},
];

RESUME.career[0].note = "(프리랜서 · 계약 종료 예정)";
// Comely Labs: 2026 IT News CMS 대신 2023 IT News 기사 서비스로
{
  const b = RESUME.career.find(j => j.org === "Comely Labs").bullets;
  b[b.findIndex(x => x.includes("IT News CMS"))] = "해외 IT 뉴스 기사 서비스(IT News, 2023) 기획 · 디자인 · 웹 배포 1인 전담, AI 학습 서비스(공인중개사 RAG 챗봇) 개발";
}
// Inbiznet 프리랜서 (2023.03~08): Comely Labs 다음, 이전 경력 앞에
RESUME.career.splice(RESUME.career.findIndex(j => j.prior), 0,
  { org: "Inbiznet", period: "2023.03 — 2023.08", note: "(프리랜서 · 6개월)", role: "UX 디자이너 · 관리자 페이지 1인 구축", bullets: [
    "내부 고객 관리 · 회계 처리용 관리자 페이지를 UX 설계와 화면 디자인(Figma)부터 React 프론트엔드 구현까지 혼자 맡아 구축",
  ]});
RESUME.career[0].role = "프리랜서 개발자 · 프로젝트 3건";
// 이전 경력은 한 줄씩 (줄 넘김 없이)
Object.assign(RESUME.career.find(j => j.org === "Cslee"), { role: "IT 교육 프로젝트 매니저", line: "정부지원 교육 과정 기획·운영, 출결 자동화" });
Object.assign(RESUME.career.find(j => j.org === "서울경제진흥원"), { role: "사업 운영", line: "제조업 지원사업 운영, 참여기업 관리 · 전산회계" });
Object.assign(RESUME.career.find(j => j.org === "카페 창업"), { role: "커피전문점 운영", line: "소상공인 지원사업 선정 창업, 매출 기반 메뉴 개선" });
// 기간 · 담당 · 범위 밖은 docs/*.md의 커밋 기준
RESUME.career[0].bullets = [
  "<b>주문·정산 관리자</b> (2026.09 — 2026.10 · 6주 · 1인) — 기획 · 프론트 · 백엔드 API · DB · AWS 배포 · 데이터 이관",
  "<b>Science# 로컬 AI</b> (2026.07 — 2026.09 · 7주 · 1인) — 로컬 LLM 연동 · AI 도구 계층 · 차트 · 보고서 화면 (센서 통신 제외)",
  "<b>PHRI 수직농장</b> (2026.10 — 2026.10 · 10일 · 팀) — 프론트엔드 UX · 공용 UI · 신규 API 연결 (백엔드 제외)",
];

// 어드민 · 대시보드 프로젝트를 앞으로. 제목 앞부분으로 찾아 순서를 정함
{
  // 고객 · 회계 관리자 페이지(2023.03~08, 경력란과 같은 내용)를 프로젝트로도 추가. 회사명은 경력란에만
  RESUME.projects.push({ title: "고객 · 회계 관리자 페이지 — 사내 운영 시스템", badge: "프리랜서 · 1인", period: "2023.03 — 2023.08 · 6개월",
    summary: "내부 고객 관리와 회계 처리를 위한 관리자 페이지를 UX 설계부터 React 구현까지 1인 구축",
    bullets: ["Figma로 관리자 화면 UX 설계 · 화면 디자인 후 React로 직접 구현"],
    tags: ["React", "Figma"] });
  // 시작일 기준 최근순 (포트폴리오 이력 표와 같은 기준)
  const order = ["PHRI", "KD order", "Science#", "공인중개사", "한국사", "LingoStep", "Noahlog", "고객 · 회계"];
  const pick = k => RESUME.projects.find(p => p.title.startsWith(k));
  RESUME.projects = order.map(pick).filter(Boolean);
  // 이름은 포트폴리오와 같게, 기술은 docs/*.md의 기술 표 기준
  Object.assign(pick("KD order"), { title: "주문·정산 관리자 — 주문·견적·정산 사내 웹 시스템", badge: "Korea Digital · 프리랜서 · 1인", period: "2026.09 — 2026.10 · 6주",
    tags: ["React 19", "TypeScript", "Vite", "Node.js Lambda", "PostgreSQL(RDS)", "AWS S3 · CloudFront"] });
  pick("주문·정산").bullets[1] = "정산 조회 22.9초 → 0.12초(개선 전후 결과 전수 비교, 차이 0행), 업무 규칙을 DB 한 곳으로 단일화";
  Object.assign(pick("PHRI"), { badge: "Korea Digital · 프리랜서 · 프론트엔드 담당", period: "2026.10 — 2026.10 · 10일",
    tags: ["React", "TypeScript", "Vite", "zustand", "react-hook-form · zod", "orval", "Turborepo"] });
  pick("PHRI").bullets[0] = "상세 탭 7개를 한 화면으로 통합, 접근성 위반 0(23개 화면 자동 검사)";
  Object.assign(pick("Science#"), { badge: "Korea Digital · 프리랜서 · 1인 (센서 통신 제외)", period: "2026.07 — 2026.09 · 7주",
    tags: ["React 19", "TypeScript", "Vite", "LM Studio", "Playwright", "AWS S3 · CloudFront"] });
  // 한국사 · SQLD 항목은 한국사 앱만, 기간은 포트폴리오 이력 표와 같게
  Object.assign(pick("한국사"), { title: "한국사 자격증 앱 — 기출 문제 풀이 · 오답 복습", period: "2025.03 — 2025.05 · 3개월",
    summary: "한국사능력검정시험 기출을 자동 구조화해 문제 풀이와 오답 복습을 제공하는 앱", tags: ["Flutter", "Hive", "Python", "PyMuPDF"] });
  // 기간 형식 통일: "YYYY.MM — YYYY.MM · 기간". 출시 · 리뉴얼 이력은 요약 문장으로
  Object.assign(pick("LingoStep"), { period: "2025.01 — 2025.03 · 3개월",
    summary: "2025.03 SAYON으로 출시해 2026.10 IELTS 학습 앱으로 리뉴얼, 오늘의 계획 · 반복 듣기 · 간격 복습 제공" });
  Object.assign(pick("Noahlog"), { period: "2024.06 — 2024.09 · 4개월",
    summary: "15개 언어와 RTL을 지원하는 Offline-First 시간관리 플래너, 2024.09 15개국 출시 후 운영 중" });
  Object.assign(pick("공인중개사"), { badge: "개인 · 1인", period: "2025.11 — 2026.03 · 5개월", tags: ["Python", "FastAPI", "LangChain", "Qdrant", "Elasticsearch", "Docker Compose"] });
  // 프로젝트마다 불릿은 대표 한 줄만 (숫자 · 검증이 있는 문장 우선)
  const one = { "PHRI": 0, "주문·정산": 1, "Science#": 0, "공인중개사": 0, "한국사": 0, "LingoStep": 1, "Noahlog": 0, "고객 · 회계": 0 };
  for (const [k, i] of Object.entries(one)) { const p = pick(k); p.bullets = [p.bullets[i]]; }
}
RESUME.projectsIntro = "화면과 문제 해결 과정은 포트폴리오에 정리했습니다.";
