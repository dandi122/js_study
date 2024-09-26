/**
 * useState, useRef, useEffect 사용
 */

// 1. 모듈 가져오기
import './App.css';
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext
} from 'react';

// 2. 대표 모듈로 함수형 컴포넌트 정의
// []내에 아무것도 존재하지 않으면 return 파트가 호출되지 않음
/**
 * 로딩순서
 *   - 함수 내부 먼저 수행
 *   - useEffect()수행, useEffect 간에는 먼서 기술한 순서대로 호출
 */

export default function App2 ( {name, url, pid} ) {
  
  console.log(`${name} 테스트 APP2`);

  // 요구사항 : 실습 4분
  // 상태변수 count 생성, 초기값 1, 화면상으로는 카운트(count값) 버튼을 만들어서 출력,
  // 버튼 클리하면 +1증가, 화면상에서도 증가되게 보인다 
  const [count, setCount] = useState(1);
  const countJsx = (
    <>
      {/* 버튼 클리하면 +1증가, 화면상에서도 증가되게 보인다 */}
      <button onClick={()=>setCount(count+1)}>
        카운트({count})
      </button>
    </>
  );
  // 조건부 랜더링 => jsx 상에 null인 데이터(값, jsx)를 랜더링 한다면 => 랜더링 안함
  const [pageContent, setPageContent] = useState(null);

  // 랜더링에 관여하지 않는 변수
  const marketKurly = useRef(url);
  // const productId = useRef(Number(pid));
  const productId = useRef(parseInt(pid));
  


  // 배치순서
  // useState, useRef, useMemo, useCallback 먼저기술
  // 일반변수, 함수 기술
  // useEffect는 나중에 기술

  // useEffect => 최초1회 수행되는 코드용, 상태변수를 모니터링해서 값변경시 처리할 작업용
  // 컴포넌트가 최초 생성될때 호출된다
  // [] 내에 아무것도 존재하지 않으면 return 파트가 호출되지 않음
  useEffect(()=>{
    // 1회만 작동하는 위치 => componentDidMount()의 대체제
    console.log("[최초]useEffect 컴포넌트가 생성되었다");
    // 연산 비용이 높지 않은 초기화 작업 수행

    /* 수행 안됨
    return ()=>{
      console.log("[최초]useEffect 뒷정리함수")
    };
    */
  }, []);

  // useEffect()에 특정 상태변수를 n개 등록하면 => 상태변수의 변화에 따라 반응 => componentDidUpdate() 대체제
  useEffect(()=>{
    console.log('count 상태변수용 useEffect()', count);
    return ()=>{
      // 변경되기전 이전값을 이용 뭔가 작업해야하면 구현
      console.log('count 상태변수용 뒷정리함수', count);
    };
  }, [count]);

  // useEffect에 useRef용 변수 등록?v <=사용하지 않는다
  useEffect(()=>{
    console.log('productId 상태변수용 useEffect()', productId.current);
    return ()=>{
      // 변경되기전 이전값을 이용 뭔가 작업해야하면 구현
      console.log('productId 상태변수용 뒷정리함수', productId.current);
    };
  }, [productId.current]);

  const dummyJsx = (
    <>
      <button onClick={()=>{productId.current += 1}}>
        PID({productId.current})
      </button>
    </>
  );

  return (
    <div className="App">
      <p>기본페이지</p>
      {countJsx}
      {dummyJsx}
      {/* 조건부 랜더링, null이면 랜더링 안함, 값이 있으면 랜더링 함
          클릭하면 ref 변수 마켓컬리값으로 세팅 */}
      <div onClick={()=>setPageContent(marketKurly.current)}>
        pageContent = {pageContent}
      </div>
      {/* 수평선 */}
      <hr width ="100%" color ="blue" size="1"/>
    </div>
  );
}

