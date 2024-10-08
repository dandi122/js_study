# 리액트 개념, 개발환경 구축

# BASIC
    - 구동원리
    - 컴포넌트 특징
        - porps
        - state
        - 이벤트
        - 종류
            - 클레스형
            - 함수형
        - 컴포넌트 조합
# ADVANCE
    - demo
        - 컴포넌트 심화 (클레스형)
            - 라이브사이클 함수
            - CheckBox, Input, Select등 Form 요소를 직접 구성
    - hook-test
        - 함수형 컴포넌트
        - 어플리케이션 제작, 훅 연습
            - 기타 : useEffect, useState, useRef 연습
            - useContext 테스트
            - 레이아웃 적용(material-UI 기반 대시보드)            
                - 대시보드 구조 이해, 라우팅(url 적용)
                - 네트워크 + material-UI + useEffect, useState, useRef => 게시판, 상세보기            
                - 환율 계산기 -> 더미데이터, 이벤트, 상태변수, UI:material-UI
    
    - last
        - 리액트 개발 도구 설치 (크럼 브라우저) 익스텐션
            - 리액트 가동
            - 개발자 모드 > Console > https://reactjs.org/link/react-devtools
                - 링크 진입 
                - 크롬용
                    - 진입후 설치
                    - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
                - 브라우저 재가동후 사용
                    - 개발자도구
                        - 컴포넌트
                            - 개별 컴포넌트의 구성 및 트리구조 확인
                        - 프로파일러
                            - 개별 씬에 대한 상세 분석
                            - 렌더링이 오래 걸리는 부분 체크 -> 개선등 할수 있다 
                            - 최적화에 대한 도구

        - (*)기타훅
            - useReducer (리덕스 스타일)            
        - (*) 전역 상태 관리 
            -> 여러개의 페이지, 여러개의 컴포넌트를 넘나 들면서 공통의 데이터 수정/사용 가능
            - 1세대: redux 
            - 2세대: mobX, ..
            - 3세대: Recoil, ```Zustand```, Jotai,...
                - ``` $ npm i zustand --save ```
        - (*)커스텀훅
            - 사용자 정의 훅
        - 스타일 적용
            - (*)css 직접 적용
                - <style> ... </style>
                - <태그명 style={{ css... }}>
            - (*)css Modules 적용
            - 써드 파트 라이브러리
                - Styled-components (CSS-in-JS 라이브러리)
                    - 특정 스타일을 가진 컴포넌트를 정의해서 JSX에서 바로 사용가능함
                    - ``` $ npm i styled-components --save ```
                - Emotion (material-ui 사용시 설치했음)
                    - ``` $ npm i @emotion/react @emotion/styled --save ```
                    - Syyled-components와 유사
                    - CSS-in-JS 라이브러리
                - Tailwind CSS
                    - 다른 스타일을 모두 무시한다
                    - 단독으로 사용 추천
                    - 반응형 디자인, 커스터마이징 방식 유리
                    - ``` $ npm i tailwindcss postcss autoprefixer --save ```
                - Sass | LESS
                    - CSS 전처리기를 이용하여 변수를 정의
                    - 정의된 변수를 이용하여 CSS 구성
                    - ``` $ npm i sass --save ```
    - 기타
        - 빌드
            - react -> 빌드 -> 배포버전준비 -> 스프링부트에 배포
        - ESLint, Prettier
            - 코딩 스타일, 유효성 검사(코드에 관련된) => 팀별 통일
        - Next.js
            - SSR, ...
        - AWS 배포, github, ci/cd

# TypeScript 적용
    - react 개발 언어를 js|ts로 구성 가능
        - 자바스크립트기반 : *.js(유틸, 로직 등), *.jsx(jsx 생성반환하는 내용)
        - 타입스크립트기반 : *.ts(유틸, 로직 등), *.tsx(jsx 생성반환하는 내용)
            -tsconfig.json 파일이 추가로 필요(각종 설정 추가)
    - 프로젝트 생성
        - create-react-app + ts 설정 추가하는 방식
        - https://create-react-app.dev/docs/adding-typescript
        ```
         # my-app은 앱의 이름, 커스텀하게 수정가능함
         $ npx create-react-app my-app --template typescript

         # 구동
         $ cd my-app
         $ npm run
        ```
        - ui 라이브러리 설치
        - https://mui.com/toolpad/core/introduction/installation/
        ```
         $ npm i --save @toolpad/core @mui/material @mui/icons-material @emotion/react @emotion/styled
        ```

# AWS
    - 3-tier
        - Web Server : 리눅스1
            - Nginx, Apache, .... + 인증서 => https 사용
            - Web Server <-> proxy <-> Was Server
        - Was Server : 리눅스2
            - tomcat, 엔터프라이즈급 was
                - SpringBoot => war/jar 배포
            - Was server <-> Jpa <-> DB Server
        - DB Server : 리눅스3
            - Oracle, mySql, maria, postgre, ...
        

