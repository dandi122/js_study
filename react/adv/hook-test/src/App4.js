/**
 * 환율정보 가져오기
 * http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json
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
import axios from 'axios';
import {
  TextField, // 원화, 달러|엔화|유로화 => 2개필요
  Select     // 2개
} from '@mui/material'

export default function App4 ( {name, url, pid} ) {
  
  return (
    <div className="App" style={{margin:"5px"}}>
      <h2>환율 계산기</h2>
      <fieldset>
        <div>
          <Select style={{width:"45%"}}></Select>
           = 
          <Select style={{width:"45%"}}></Select>
        </div>
        <br/>
        <div>
          <TextField/> = <TextField/>
        </div>

      </fieldset>
    </div>
  );
}

