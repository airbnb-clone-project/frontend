# Pinterest 클론코딩 - My App

이 프로젝트는 Next.js, Tailwind CSS 등을 사용하여 핀터레스트의 주요 기능을 클론코딩한 프로젝트입니다. 반응형 및 상호작용 UI를 만드는 데 중점을 두었습니다.

## 프로젝트 설정

### 설치

먼저, 다음 명령어로 필요한 패키지를 설치하세요:

```bash
npm install
```

### 스크립트

- **`npm run dev`**: 개발 서버를 시작합니다. 기본적으로 `http://localhost:3000`에서 실행됩니다.
- **`npm run build`**: 프로덕션용으로 애플리케이션을 빌드합니다.
- **`npm run start`**: 프로덕션 서버를 시작합니다.
- **`npm run lint`**: ESLint를 사용하여 코드 품질을 검사합니다.
- **`npm run test`**: Vitest를 사용하여 테스트를 실행합니다.

## 주요 의존성

### 핵심 라이브러리

- **[`next`](https://nextjs.org/)**: 서버사이드 렌더링과 정적 사이트 생성을 위한 React 프레임워크입니다.
- **[`react`](https://reactjs.org/)**: 사용자 인터페이스를 구축하기 위한 핵심 라이브러리입니다.
- **[`react-dom`](https://reactjs.org/docs/react-dom.html)**: React를 DOM에 렌더링하기 위한 패키지입니다.

### UI/스타일링

- **[`tailwindcss`](https://tailwindcss.com/)**: 커스텀 사용자 인터페이스를 빠르게 구축할 수 있는 유틸리티 우선 CSS 프레임워크입니다.
- **[`lucide-react`](https://lucide.dev/)**: 다양한 아이콘을 제공하는 아이콘 라이브러리입니다.
- **[`@radix-ui/react-popover`](https://www.radix-ui.com/docs/primitives/components/popover)**: 툴팁, 드롭다운 등 팝오버를 만들기 위한 UI 컴포넌트입니다.
- **[`tailwindcss-animate`](https://github.com/vercel/tailwindcss-animate)**: Tailwind CSS를 위한 애니메이션을 제공합니다.
- **[`clsx`](https://github.com/lukeed/clsx)**: 조건에 따라 `className` 문자열을 구성할 수 있는 유틸리티입니다.
- **[`class-variance-authority`](https://github.com/joe-bell/class-variance-authority)**: 클래스 이름과 변형을 타입 안전하게 관리할 수 있는 유틸리티입니다.

### 상태 관리

- **[`zustand`](https://zustand-demo.pmnd.rs/)**: 작고 빠르며 확장 가능한 상태 관리 솔루션입니다.
- **[`@tanstack/react-query`](https://tanstack.com/query/latest/)**: 서버 상태를 관리하기 위한 강력한 데이터 페칭 라이브러리입니다.

### HTTP 클라이언트

- **[`axios`](https://axios-http.com/)**: API 요청을 만들기 위한 프로미스 기반의 HTTP 클라이언트입니다.

### 인증

- **[`next-auth`](https://next-auth.js.org/)**: Next.js 애플리케이션을 위한 완전한 오픈 소스 인증 솔루션입니다.

## 개발 의존성

### 테스트

- **[`vitest`](https://vitest.dev/)**: Vite와 원활하게 작동하는 빠르고 가벼운 테스트 프레임워크입니다.
- **[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/)**: 사용자가 상호작용하는 방식으로 React 컴포넌트를 테스트하기 위한 라이브러리입니다.
- **[`@testing-library/dom`](https://testing-library.com/docs/dom-testing-library/intro/)**: DOM을 테스트하기 위한 유틸리티를 제공합니다.
- **[`jsdom`](https://github.com/jsdom/jsdom)**: Node.js 환경에서 React 컴포넌트를 테스트하기 위한 다양한 웹 표준의 JavaScript 구현입니다.
- **[`msw`](https://mswjs.io/)**: 테스트에서 API 요청을 모킹하는 도구입니다.

### 린팅 및 포매팅

- **[`eslint`](https://eslint.org/)**: JavaScript와 TypeScript 코드에서 린팅을 통해 오류와 스타일 문제를 식별하고 수정하는 도구입니다.
- **[`eslint-config-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next)**: Next.js 프로젝트를 위한 ESLint 설정입니다.
- **[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)**: ESLint와 Prettier의 충돌을 방지하기 위한 설정입니다.

### 빌드 도구 및 설정

- **[`typescript`](https://www.typescriptlang.org/)**: 타입이 있는 JavaScript로, 코드의 안정성과 유지보수성을 향상시킵니다.
- **[`@vitejs/plugin-react`](https://github.com/vitejs/vite/tree/main/packages/plugin-react)**: React와 Vite를 통합하는 플러그인입니다.
