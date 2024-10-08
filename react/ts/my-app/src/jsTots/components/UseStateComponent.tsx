/**
 * 훅, 상태변수, 타입
 */

import {
    useState
} from 'react'

/**
 * 화면에는 count 값 출력 => count : 0
 * 하단에는 버튼 2개 존재함
 * - + 클릭하면 count값 1 증가 => 화면갱신
 * - - 클릭하면 count값 1 감소 => 화면갱신
 * - 이벤트 처리함수는 inline으로 구성
 * 최초 count값은 UseStateComponent의 속성값을 사용 <= 타입부여
 * - 상태변수 : 선언 및 초기화, 화면표시, 상태변수 업데이트
 */
type MyPropsType = {
    value:number;
}
const UseStateComponent = ({value}:MyPropsType) => {
    // 상태변수 생성, 타입을 number지정, 수치값만 세팅되게 구성, 초기값은 props를 타고 넘어온 속성값을 사용
    const [count, setCount] = useState<number>(value);
    console.log(value)
    return (
        <>
            <p>count : {count}</p>
            <button onClick={ () => { setCount(count+1) } }>+</button>
            <button onClick={ () => { setCount(count-1) } }>-</button>
        </>
    )
}

export default UseStateComponent;