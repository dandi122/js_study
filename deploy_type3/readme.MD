# springboot 빌트인 react(by ts)
    - client
        - 프로젝트 생성
            - ts 기준
                - npx create-react-app client --template typescript
            - js 기준
                - npx create-react-app client
        - cd client
        - npm install (자동처리)
        - npm i --save-dev react-app-rewired
            - react-app-rewired : react를 빌드할때 타겟 위치를 커스텀할 수 있다 (원하는 위치로 빌드 결과를 설정할수 있다)
            - springboot의 resources/static/하위로 배치하기 위함
        - config-overrides.js 파일 생성 및 편집 
            - 결과물이 저장될 위치 설정
        - package.json
            ```
                "scripts": {
                    ...
                    "rebuild": "react-app-rewired build",
                    ...
                },
            ```
        - npm run rebuild
    - server
        - 새로고침
        - static/index.html => templates/index.html 1회만 이동
    