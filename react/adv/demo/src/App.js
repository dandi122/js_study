// ESM 방식으로 모듈 가져오기
import logo from './logo.svg';
import './App.css';

// 2. 함수형 컴포넌트 구성
function App() {
  // JSX 리턴 => render()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 3. ESM 방식에서 모듈화
export default App;
