# 이력서 · 포트폴리오 웹

- `resume.html` 이력서 화면 — 내용은 `resume-data.js`에서 수정
- `portfolio.html` 포트폴리오 (현재 버전). 내용은 `portfolio-v2-data.js`, 스타일은 `slides-v2.css`
- `portfolio-old.html` 이전 포트폴리오 화면 — 내용은 `portfolio-data.js`, 이미지는 `img/`
- `style.css` 공통 스타일(이력서) — 색/폰트는 `:root` 변수
- `slides.css` 포트폴리오 슬라이드(1280×720) 스타일. 인쇄하면 16:9 한 장씩 PDF

빌드 없음. 파일을 브라우저로 열면 끝. PDF는 브라우저 인쇄(⌘P)로 저장.

## 스크린샷
- `screenshots/<번호-프로젝트>/` 후보 이미지 모아두는 곳. 여기 넣고 고른 뒤
- `portfolio-data.js`의 해당 프로젝트 `images: [...]`에 파일명 적으면 됨 (경로는 `screenshots/` 기준 자동)
- `docs/` Korea Digital 프로젝트 원본 문서(rapha155/portfolio에서 복사). 포트폴리오 문구 수정 시 참고
- `docs/디자인기획.md` 포트폴리오 재설계 기획안

## 다른 컴퓨터에서 이어서 작업
```bash
git clone https://github.com/rapha155/hyeong-seonghee.git
open hyeong-seonghee/resume.html      # 이력서 (A4, PDF로 저장 버튼)
open hyeong-seonghee/portfolio.html   # 포트폴리오 (16:9, PDF로 저장 버튼)
```
빌드 없음. 내용 수정은 `resume-data.js`, `portfolio-v2-data.js`만. 이미지는 `screenshots/`.
PDF로 저장할 때 인쇄 창에서 "머리글과 바닥글"을 끈다.
