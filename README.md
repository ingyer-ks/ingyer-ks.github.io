# Ingyerlog Astro migration starter

기존 Gatsby 사이트의 MDX와 frontmatter를 그대로 읽는 Astro 7 기반 전환 골격입니다.

## 현재 구현 범위

- `content/answers`, `content/posts`를 Astro Content Collections로 로드
- 기존 폴더명을 URL slug로 유지
- 기존 frontmatter 필드 유지
- `remark-math` + `rehype-katex` 수식 렌더링
- 연도/기관/급수/과목/기타 분류 페이지 생성
- 문제 PDF와 해설의 좌우 병렬 뷰
- PDF 파일명은 기존대로 `frontmatter.title + ".pdf"`
- Adobe PDF Embed API 키가 없으면 브라우저 기본 iframe으로 표시
- GitHub Pages 배포 Workflow 및 `CNAME` 포함

## 1. 실행

Node.js 22.12 이상을 사용합니다.

```bash
npm install
cp .env.example .env
npm run dev
```

기본 접속 주소는 `http://localhost:4321/`입니다.

## 2. PDF 저장소 주소

`.env`에서 설정합니다.

```dotenv
PUBLIC_PROBLEMS_BASE_URL=https://ingyerlog.kr/problems
```

PDF URL은 다음과 같이 생성됩니다.

```text
{PUBLIC_PROBLEMS_BASE_URL}/{encodeURIComponent(title)}.pdf
```

예: `title: 2011 7급 국가직 전기자기학`

## 3. Adobe PDF Embed API

키 없이도 PDF가 iframe으로 표시됩니다. Adobe 뷰어를 사용하려면 `.env`에 키를 넣습니다.

```dotenv
PUBLIC_ADOBE_CLIENT_ID_LOCAL=localhost용 키
PUBLIC_ADOBE_CLIENT_ID_PROD=ingyerlog.kr용 키
```

GitHub에서는 Repository Settings → Secrets and variables → Actions → Variables에 같은 이름으로 등록합니다.

## 4. GitHub Pages

1. 저장소 Settings → Pages에서 Source를 **GitHub Actions**로 설정
2. `main` 브랜치에 push
3. `public/CNAME`의 `ingyerlog.kr` 확인

## 5. 우선 확인할 페이지

- `/2011-7-national-em/`
- `/nyquist_isi_criterion/`
- `/year/`
- `/subject/`

## 아직 일부러 옮기지 않은 것

- Google Analytics / Clarity / AdSense
- 기존 Tailwind 설정과 세부 디자인
- 이전/다음 글 링크
- 검색 결과 페이지 커스터마이징

먼저 콘텐츠와 PDF 뷰어의 기능 동등성을 확인한 뒤 추가하는 편이 안전합니다.
