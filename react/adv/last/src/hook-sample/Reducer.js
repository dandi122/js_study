/**
 *  - useReducer
 *      - 상태변수 한개에 대한 업데이트 방식이 현재까지는 단순했음
 *          - 기존값을 새로운 값으로 대체
 *      - 상태변수의 업데이트 방식이 다양하다면? => useReducer 사용!!
 *          - +1, -1, +2, +10, 100을 세팅, .... 다양한 업데이트에 대응하기 복잡하다
 *          - 간결하게 해결할수 있는 방법 => redux을 훅으로 간소화하여 적용(컴포넌트내에서 
 *            상태 관리를 복잡하게 처리하는 니즈를 해결 했음)
 *      - action 값 기획
 *          - 'up' : age+1
 *          - 'down' : age-1
 *          - 'reset' : 100
 *          - 'addLang' : 기존 배열에 'ts' 추가
 */
// 모듈가져오기
import {
    useReducer,
    useState,
    useEffect
} from 'react';
// CSS Modules 가져오기
import myStyle from '../css';

// useReducer()의 1번인자 reducer 함수 
// 규칙 : 반드시 순수함수(pure/original function)형태 
//        -> 전역변수 사용 X, 단독사용, 의존성 x -> 라이브러라화가 됨
function reducer ( state, action ) {
    // action값에 따라서 state(상태변수)를 업데이트 한다!!
    // state : 상태값을 가진다, action:행동값을 가진다
    const { type }       = action; // 구성전이지만 type값으로 액션값을 담아서 전달
    const { age, langs } = state;
    // type에 따른 분기문 구성 -> 1분
    if ( type === 'up' ) {
        // 기존 형태에서 age만 1 증가한 새로운 객체로 반환 
        // -> 내부적으로 상태변수값을 대체해 버림
        return { age:age+1, langs }; 
    }else if (type === 'down') {
        return { age:age-1, langs }; 
    }else if (type === 'reset') {
        return { age:100, langs }; 
    }else if (type === 'addLang') {
        // 원래 langs값에서 'ts'만 추가, 아래 표현은 예시
        return { age, langs:[ 'ts', ...langs ] };
    }
    throw Error('모르는 액션');
}
function add( x, y ) {
    return x+y;
}

// 함수형 컴포넌트 구성
// 컴포넌트명과 실제 사용명을 다르게 구성했음
export default function ReducerTestComponent () {
    // useReducer( 리듀서함수, 리듀서관리초기값(=상태변수의값) )
    // [상태변수, 상태변수의 다양한 업데이트를 위한 함수->호출->상태변수수정->화면갱신됨 ]
    const [ state, dispatch ] = useReducer( reducer, {
        // 리듀서로 관리하는 데이터
        age:100,
        langs:[
            'java','javascript','react','springboot'
        ]
    } );

    return (
        <div style={ myStyle.styleDiv }>
            <h3>useReducer</h3>
            {/* 최적화는 고려 X, 기능만 고려 */}
            <p>{ state.age }</p>
            <div>{ state.langs.map( (lang, idx)=><p key={idx}>{lang}</p> ) }</div>
            {/* 이벤트
                - dispatch()함수를 호출하면서 액션을 전달 
                  -> reducer() 함수가 호출 
                  -> 액션별로 상태변수 업데이트
                  -> 화면경신 <= 단반향으로 작동된다
            */}
            <button onClick={ ()=>dispatch( { type:'up'} ) }>+</button>
            <button onClick={ ()=>dispatch( { type:'down'} ) }>-</button>
            <button onClick={ ()=>dispatch( { type:'reset'} ) }>reset</button>
            <button onClick={ ()=>dispatch( { type:'addLang'} ) }>기술추가</button>
        </div>
    );
}