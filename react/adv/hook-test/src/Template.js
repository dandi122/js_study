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

export default function App3 ( {name, url, pid} ) {
  
  useEffect(()=>{
    console.log("1회 초기화");
  });

  return (
    <div className="App">
      <p><span style={{color:"red"}}>기본</span><b>페</b>이지</p>

      {/* 수평선 */}
      <hr width ="100%" color ="blue" size="1"/>
    </div>
  );
}

