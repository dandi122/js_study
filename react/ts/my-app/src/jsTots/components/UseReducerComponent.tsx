/**
 * useReducer
 * - 여러가지 상태 정보를 한개의 변수에서 다양하게 변화시킨다면?
 * - 수치값 => +1, -1, *2, 0(초기화)
 * - 재료 : 상태변수, 액션, 액션에 따른 상태변수 업데이트
 */
import {
    useState,
    useReducer,
} from 'react'

// union 스타일에 상수값을 가진 문자열로 타입 설정
type Action = 'INCRE'|'DECRE'|'DOUBLE'|'RESET'   
// const reducer = (현재상태변수값, 액션)=>{
const reducer = (curCount:number, action:Action)=>{
    // 액션에 다라 상태변수 값을 어떻게 변경시킬지 => 대체값 연산
    switch(action) {
        case 'INCRE' : return curCount + 1
        case 'DECRE' : return curCount - 1
        case 'DOUBLE' : return curCount * 2
        case 'RESET' : return 0
        default : return curCount
    }
}

type CountProps = {
    initValue:number
}

const UseReducerComponent = (props:CountProps)=>{
    // 상태변수의 초기값 : props로 받겠다. initValue
    const {initValue} = props;
    // 상태변수, count
    // const [count, setCount] = useState(initValue);
    const [count, dispatch] = useReducer(reducer, initValue);
    
    return (
        <>
            <p>{count}</p>
            <button onClick={()=>dispatch('INCRE')}>+1</button>
            <button onClick={()=>dispatch('DECRE')}>-1</button>
            <button onClick={()=>dispatch('DOUBLE')}>*1</button>
            <button onClick={()=>dispatch('RESET')}>reset</button>
        </>
    )
}

export default UseReducerComponent;