// 환율 정보 가져오기
// http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json
// 요구사항 -> 통화기준을 변경(왼쪽) => 입력창 모두 초기화, 왼쪽 기준 통화에 따라 환율 계산
//             오른쪽은 krw로 고정
// 리뷰때 => 실시간 환율 가져와서 적용 혹은 새로고칭 기능 추가, crossDomain 문제 발생할 수 있음(스프링부트 릴레이)
// 1. 모듈가져오기
import "./App.css";
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
} from "react";
import axios from "axios";
import {
  TextField, // 원화, 달러|엔화|유로화 => 2개
  Select, // 2개
  MenuItem,
} from "@mui/material";

// 입력값 => 수치만 처리되게 정규식 처리
function nonNumberFiltering(str) {
  return str.replace(/[^0-9]/g, "");
}
const nonNumberFiltering2 = (str) => str.replace(/[^0-9]/g, "");

// 2. 대표모듈로 함수형 컴포넌트 정의
export default function App4({ name, url, pid }) {
  // 컴포넌트가 화면에 보이면 1회 환율정보 가져오기,
  // 새로고침 같은 버튼을 누르면 현시점의 환율정보 갱신 => 상태정보로 저장, 1회성
  const [exchange, setExchange] = useState({
    JPY: 9.08926637837689,
    USD: 1317.88,
    EUR: 1472.82074206527,
  });
  const dummyExchangeRef = useRef( [
    {
      date: "2024-09-27 14:09:02",
      name: "KRWKRW=X",
      rate: 1,
      timestamp: "1727413742",
    },
    {
      date: "2024-09-27 14:09:02",
      name: "JPYKRW=X",
      rate: 9.03363156561681,
      timestamp: "1727413742",
    },
    {
      date: "2024-09-27 14:00:14",
      name: "USDKRW=X",
      rate: 1319.66,
      timestamp: "1727413214",
    },
    {
      date: "2024-09-27 14:08:24",
      name: "EURKRW=X",
      rate: 1473.9863732827,
      timestamp: "1727413704",
    },
  ]);

  const [curCode, setCurCode] =useState('USD');

  // 왼쪽   입력창 상태변수 leftInput
  const [leftInput, setLeftInput] = useState("");
  // 오른쪽 입력창 상태변수 rightInput
  const [rightInput, setRightInput] = useState("");
  // 실습 2분

  function onChangeHander1(e) {
    setLeftInput(nonNumberFiltering(e.target.value));
  }
  function onChangeHander2(e) {
    setRightInput(nonNumberFiltering(e.target.value));
  }

  // leftInput,rightInput 각각에 대한 useEffect를 사용 => 변경 타이밍 체크 => 환율계산
  // 실습 1분 leftInput,rightInput 각각에 대한 useEffect 형태 구성
  useEffect(() => {
    // 최초 | 변경된값
    console.log(`leftInput값이 변경되었다 ${leftInput}`);
    // 달러(엔,유로)기준 => 원화계산
    // 1달러 => 1$ * 1317.88(달러당 원화기준)
    setRightInput(leftInput * exchange[curCode]);
    return () => {
      // 뒷정리, 이전값
    };
  }, [leftInput]);
  useEffect(() => {
    // 최초 | 변경된값
    console.log(`계산된 원화값 ${rightInput}`);
    // 원화 => 달러 계산
    // JS에서 : 객체.멤버 == 객체['멤버명']
    setLeftInput(rightInput / exchange[curCode]);
    return () => {
      // 뒷정리, 이전값
    };
  }, [rightInput]);

  // 통화 코드 목록이 바뀌지 않는다면 => 캐싱 => useMemo
  const exchangeCode = useMemo(() => {
    // 통화목록 가져오기(환율 정보)
    // 통신(생략) => 파싱(생략) => JSX 구성
    // 더미 데이터 <- 파싱결과
    return dummyExchangeRef.current.map( (exchange, idx)=>{
        let code = exchange.name.substring(0,3);
        return (
            <MenuItem value={ code } key={ idx }>
                { code }
            </MenuItem>
        );
    });

  });

  function exchangeHandler(e) {
    // 왼쪽 통화코드를 변경하면 호출된다
    // 1. 이전에 계산한 값들(화면상에 노출됨) 초기화
    setLeftInput(0);
    setRightInput(0);

    // 2. 선택한 통화코드를 현재 통화코드로 세팅
    setCurCode(e.target.value);
  }

  return (
    <div className="App" style={{ margin: "5px" }}>
      <h2>환율 계산기</h2>
      <fieldset>
        <div>
          <Select style={{ width: "45%" }}
                  onChange={ exchangeHandler}
                  value={curCode}>
            {exchangeCode}
          </Select>=
          {/* KRW로 고정 */}
          <Select style={{ width: "45%" }}
                  value={'KRW'}
                  disabled>
            {exchangeCode}
          </Select>
        </div>
        <br />
        <div>
          <TextField
            value={leftInput}
            onChange={onChangeHander1}
            label="exchange"
            variant="outlined"
            placeholder="숫자만 입력하세요"
          />
          =
          <TextField
            value={rightInput}
            onChange={onChangeHander2}
            label="exchange"
            variant="outlined"
            placeholder="숫자만 입력하세요"
          />
        </div>
      </fieldset>
    </div>
  );
}

