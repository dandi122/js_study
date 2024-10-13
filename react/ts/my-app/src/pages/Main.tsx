/**
 * 최상위 페이지를 라우트로 배치
 *  - 최상위 페이지간에는 동시에 공존할 수 없다
 *  - 한개의 페이지가 전체 화면을 점유한다
 * - 패키지 설치
 *  - 서버중단후
 *  - npm i --save react-router-dom
 *  - 서버가동
 */
import Dashboard from "../layout/Dashboard";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Main = () => {
  return (
    <Router>
      <Routes>
        {/* path는 url, path="/"이 기본페이지임, element는 jsx */}
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Main;
