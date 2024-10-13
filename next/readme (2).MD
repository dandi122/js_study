# Next.js
    - The React Framework for the Web
    - 컴포넌트는 클라이언트용/서버용 존재
    - 리액트기반 개발시 편의성제공, 최적화(화면 랜더링)부분, 라우팅,...등 지원
    - 13버전(현재 14.x)부터 API가 간소화되서 간결하게 기능 구현

# Next.js 프로젝트 구성을 위한 패키지 설치
    - npm i -g create-next-app

# 프로젝트 생성
    - npx create-next-app hello-next --ts
    ```
        √ Would you like to use ESLint? ... [No] / Yes
        √ Would you like to use Tailwind CSS? ... [No] / Yes
        √ Would you like to use `src/` directory? ... No / [Yes]
        √ Would you like to use App Router? (recommended) ... No / [Yes]
        √ Would you like to customize the default import alias (@/*)? ... [No] / Yes
        Creating a new Next.js app in C:\Users\user\Documents\projects\next\hello-next.
        ...
    ```

# 프로젝트 구동
    - $ cd hello-next
    - $ npm run dev
    ```
        # package.json
        ...
        "scripts": {
            "dev": "next dev",      # 개발시 사용 => npm run dev
            "build": "next build",  # 빌드시 사용, .next/하위에생성 => CSR, SSR, SSG, ISR 테스트를 할수 있다
                                      => npm run build
            "start": "next start",  # 빌드된 정적자원을 바라보고 서비스 가동(최종)
            "lint": "next lint"     
        },
        ...
    ```

# 프로젝트 구조
    ├─ src
        ├─ app
            ├─ layout.tsx    : html을 감싸도 있는 react의 index.html 같은 역활 
            ├─ page.tsx      : 현재 보이는 대문(홈페이지)

# 라우팅 전략
    - next.js는 버전별로 상이, 디렉토리가 곧 url이다
        - src/app/page.tsx  : 홈페이지, URL => /
        - "/about" URL을 만들고 싶다면?
            - src/app/about/page.tsx
        - /about/1/page.tsx
            - URL은 동적파라미터를 URL path에 전달하는 느낌
            - URL /about/1
            - 도메인별, 비즈니스별 폴더별로 기능 구현 가능

# rest API 구성
    - src/pages/api/*.ts
    - 스프링부트 없이 restapi 구현할수 있다

# 페이지 유형
    - CSR
        - ~/src/app/csr/page.tsx
        - 전통적인 SPA 계열의 흐름과 동일하다
        - 기본 페이지 랜더링하고, 필요한 데이터는 나중에 얻어서 화면에 반영 스타일
        - 필요시 SSR, SSG, ISR과 조합하여 사용할수 있다
        - 실시간 콘텐츠에 적합하지 않다(통상 표현한다, 아닐수도 있음(만들기나름))
    - SSR
        - ~/src/app/ssr/page.tsx
        - 페이지에 접근할때마다 페이지를 새로 서버측에서 랜더링해서 클라이언트에게 전송
        - 최신 데이터 기반으로 페이지 초기 화면을 만들수 있다(가격표기, 실시간 검색어)
        - 단점, 서버 상황에 따라 지연될수 있다
        - SEO(검색엔진최적화)에 유효성 기대할수 있다
    - SSG
        - ~/src/app/ssg/page.tsx
        - 빌드후 정적 페이를 미리 만들어둔다
            - 정적 페이지 구성시, 통신할 사항이 존재하면 미리다 통신해서 데이터 세팅 진행해둠
            - 현재시간, 실시간적인것 => 적절하지 않다(과거 데이터가 세팅됨)
        - 장점
            - 초기페이지를 빠르게 로딩할수 있다
        - 특징
            - 실시간에는 적합하지 않음
    
    - ISR
        - SSG의 응용, 시간을 주기로 정적 페이지 갱신
            - 특정 시간 주기로 재생성할수 있다 
                => export const revalidate = 10; //10초마다 페이지 정적 구성 진행
        - 복합적인 형태, SSR의 특징도 가진다, 요청시 새로 그린다(설정하기 나름)

# 링크 및 라우트
    - ~/src/app/link/page.tsx
    - 페이지이동
        - 정적으로 페이지 이동 링크 제공
            - JSX 내부에 표기
            - <Link> 컴포넌트 사용
        - 프로그램에서 동적으로 페이지 이동시
            - useRouter 라는 클라이언트 컴포넌트 훅 사용
                - csr
            - redirect 함수이용 서버 컴포넌트
                - ssr, ssg, isr
        - history 관리를 통한 이동 (생략)
    
        
