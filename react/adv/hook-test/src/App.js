/**
 * 함수형 컴포넌트
 *  - react 16에서 추가
 *  - 함수형 컴포넌트는 hook이라는 개념을 도입함으로써, 
 *    클레스형 컴포넌트와 비슷하게 사용 가능해졌다 
 *  - hook : 기존의 기능에 붙여서 그럴싸하게 그런 기능을 대체한것
 *  - 함수형은 state x, 생애주기함수 x, ... => 훅을 통해서 대체제로 제공
 */
import './App.css';
// 훅 가져오기
import {
  useState,   // 상태 변수 대체체 state
  useEffect,  // 중요 생애 주기 함수 통합 대체 : 
              // componentDidMount() componentDidUpdate() componentWillUnMount() 
  //----------
  useMemo,    // 메모이제이션 기능 제공, 연산비용이 높은 작업 결과물(데이터)를 저장하고 사용
  useCallback,// 메모이제이션 기능 제공, 연산비용이 높은 작업 결과물(함수)를 저장하고 사용
  useRef,     // 데이터를 가지고 있다. 데이터가 변경되도 랜더링 되지 않는다(필요하지 않다)
  // ---------
  useContext, // 
  // ---------
  // ...
} from 'react';

// App에서만 사용하는 컴포넌트
const App2 = ( props ) => {
  return (
    <>내부용 컴포넌트</>
  );
}
/**
 * 함수형 컴포넌트에서 상태변수를 변경하면 => return위의 모든 코드가 다 다시 작동됨!!
 * 필요시 고연산을 수행하는 코드는 최적화(메모이제이션등) 동반해야한다 -> 갱신 속도 유지
 */
function App ( props ) {
  console.log('App 컴포넌트 호출');
  // 1. 상태변수 생성 및 초기화, 화면갱신시 영향을 받지 않는다
  //    (다시 코드가 수행되지 않음, 수행되더라고 값은 보전된다)
  // const [ 변수명, set변수명(카멜표기법) ] = useState( 초기값 or null );
  // set변수명이 필요없으면 미정의 가능
  // 최초 컴포넌트 생성시에만 작동한다
  const [ cnt, setCnt ] = useState( 0 );
  const [ check, setCheck ] = useState( false ); // 상태변수 + 블린형 => 조건부 랜더링

  // useRef내의 값이 변경되더라고, 랜더링 하지 않는다
  // 최초 컴포넌트 생성시에만 작동한다
  const score = useRef(10);

  // props 접근 => 함수 갱신시 매번 작동
  let { name } = props; // 화면 갱신때마다 원값으로 세팅
  console.log( name );
  // 컴포넌트 속성 => 추출 => 상태변수세팅
  const [ myName, setMyName ] = useState( name ); 

  // 화면갱신시 매번 할당 => 최적화 대상 => 화면갱신이 느려짐
  function checkUseRef () {
    console.log("checkUseRef 호출");
    // useRef값 증가
    score.current += 1;
    console.log( score.current );
    // props 값 수정
    name += " 수정"; 
    console.log( name );
    // 상태변수 수정
    setMyName( myName + " 수정" );
  }

  // 화면갱신 속업 => 반복작업 제거 
  // => 해결방법 : 메모이제이션(useMemo, useCallback)
  // useMemo : 값(데이터, jsx)를 캐싱
  // useCallback : 함수 캐싱 => 화면갱신시 매번 함수 할당 x

  return (
    <div className="App">
      <div>
        {/* 통상 화면에 출력하지 않는다 */}
        <p> useRef의 값 { score.current } / { name } / { myName } </p>
        <button onClick={ checkUseRef }> useRef 값증가 </button>
      </div>
      <div>
        <p>체크 { check ? "ON" : "OFF" } </p>
        {/* "체크" 버튼을 클릭하면 ON->OFF->ON->.... */}
        <button onClick={ ()=>setCheck( !check ) }> 체크 </button>
      </div>
      <div>
        <App2/>
        {/* 2. 상태변수 사용 */}
        <p>카운트 { cnt } </p>
        {/* 버튼을 클릭(이벤트 인라인으로구현) => cnt 증가 
            => 내부적으로 reder() 호출 => 화면갱신됨 */}
        <button onClick={ ()=>setCnt( cnt+1) }> 상태변수 + </button>
        {/* 상태변수 - 버튼 만들어서 값을 감소시키시오 */}
        <button onClick={ ()=>setCnt( cnt-1) }> 상태변수 - </button>
      </div>
    </div>
  );
}

// 대표는 1개만 지정 가능
export default App;
