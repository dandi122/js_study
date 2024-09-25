// esm방식 모듈 가져오기
// 1. 리액트 모듈
import React from 'react';
// 2. 리액트 돔/client 모 ( 17버전이상)
import ReactDOM from 'react-dom/client';
// 3. 필요한 모듈 가져오기 (css, 컴포넌트 등등)
import './index.css';   // 전체 스타일
// 컴포넌트 모듈 가져오기, APP이라는 이름은 컴포넌트명과 다를 수 있다(대표모듈 가져오기시)
import App from './App'; 

import reportWebVitals from './reportWebVitals';

// 4. 리액트로 만들어진 jsx가 동적으로 추가될 html 상의 최상위 엘리먼트를 복제한 dom을 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
// 5. v-dom에 jsx를 추가하여 화면을 구성
//       React.StrictMode : 잠재된 오류까지 체크하는 모드
root.render(
  <div>
    {/* React.StricMode : 잠재된 오류를 체크 : 개발단계에서 사용 => 2번 호출됨 */}
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
