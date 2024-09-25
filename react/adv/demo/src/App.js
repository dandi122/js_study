// ESM 방식으로 모듈 가져오기
import logo from './logo.svg';
import './App.css';
// import LifeCycle from './form/LifeCycle'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
// import MyInput from './form/MyInput';
// import MyCheckBox from './form/MyCheckBox';
// import MySelect from './form/MySelect';

import {
  LifeCycle,
  MyInput,
  MyCheckBox,
  MySelect
} from './form'

// 2. 함수형 컴포넌트 구성
function App() {
  // JSX 리턴 => render()
  return (
    <div className="App">
      <header className="App-header">
        <LifeCycle/>
        <MyInput/>
        <MyCheckBox label="여행지선택"/>
        {/* 언어를 선택할 수 있고, 기본 선택은 리액트 */}
        <MySelect languages={['자바','자바스크립트','리액트']} initValue="리액트"/>
      </header>
    </div>
  );
}

// 3. ESM 방식에서 모듈화
export default App;
