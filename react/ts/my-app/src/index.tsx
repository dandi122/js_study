import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Dashboard from './layout/Dashboard';
import Main from './pages/Main'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Dashboard /> */}
    {/* Main 컴포넌트는 개별 페이지를 구성한 최상위 라우팅 적용 jsx
        - 로그인
        - 대시보드
          - 장바구니
          - 게시판
          - ... */}
    <Main/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
