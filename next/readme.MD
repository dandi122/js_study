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
    ```

# 프로젝트 구동
    - $ cd hello-next
    - $ npm run dev

# 프로젝트 구조
    ├─ src
        ├─ app
            ├─ layout.tsx    : html을 감싸고 있는 react의 index.html 같은 역할
            ├─ page.tsx      : 현재 보이는 대문

# 라우팅 전략
    - next.js는 버전별로 상이, 디렉토리가 곧 url 이다
        - src/app/page.tsx : 홈페이지, URL => / 
        - "*/about" URL을 만들고 싶다면?
            - src/app/about/page.tsx
