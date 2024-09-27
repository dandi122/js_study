/**
 * useContext(하위), creatContext(전역공간) -> 상위에서 jsx에서 표현 사용
 * 상위 컴포넌트의 데이터를 하위 컴포넌트로 전달시(상위 -> 하위)
 *  - 기본 방벙  props
 *  - useContext는 props를 사용하지 않고 간단하게 전달하는 방법 젯
 */

// 실습 기본형 함수혀 컴포넌트 구성 실습 2

import './App.css';
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  createContext,
  useContext,
} from 'react';

// 컴텍스트는 글로벌하게 관리 가능
const TexContext = createContext("징검다리 황금연휴 Start!! 공부~!");

function End() {
    // 저 위에 있는 컴포넌트의 데이터를 사용하겠다.
    const conText= useContext(TexContext);
    return(
        <>
            가장 하위 컴포넌트
            {conText}
        </>
    )
}

function Mid() {
    return(
        <>
            <End/>
        </>
    )
}

export default function App7(props) {

    const [sendText, setSendTex] = useState("연휴");

    return (
        <>
           <h2>useContext Test</h2>
           {/* 전달하는 데이터는 어떤식이던 변경 가능함 
               TextContext.Provider 가 공급하는 value가 중요!!
           */}
           <TexContext.Provider value={sendText}>
            <Mid/>
           </TexContext.Provider>
           <input onChange={e => setSendTex(e.target.value)} value={sendText}/>
        </>
    )
}