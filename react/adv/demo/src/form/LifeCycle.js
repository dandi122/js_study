/**
 * 사용자 정의 클레스형 컴포넌트
 */

//1. 모듈 가져오기
import React, {Component} from 'react';


//2. 컴포넌트 정의
//   파일명과 컴포넌트명은 반드시 같을 필요 없다
//   컴포넌트의 생애주기에 맞춰서 함수들이 호출되고, 이 타이밍 맞춰서 작업 가능!!
//   VUE에서는 컴포넌트 훅이라고 부르고, 리액트는 생애주기 함수라고 부른다
//   생애주기 함수 => 호출 타이밍에 맞춰 작업을 진행할때 사용, 클레스형에서만 지원
//   함수형은 훅으로 대체처리
class LifeCycle extends Component {
    // 생성자
    constructor(props) {
        super(props); 
        console.log("생성자 call")
    }
    // 랜더함수
    render() {
        console.log("render() call")
        return (
            <>
                오늘 점심?
                {/**shouldComponentUpdate => render() => cmoponentDidUpdate */}
                <button onClick={() => this.setState({r:Math.random()})}>상태 변경 이벤트 발생</button>
            </>
        );
    };

    // 컴포넌트가 마운트 되기전 => 화면에 컴포넌트가 보이기 직전 타이밍때 자동호출
    // UNSAFE_componentWillMount() {}  // 해당 함수는 안전하지 않아서 제거될 예저, 사용X
    componentDidMount() {
        // 화면이 보이기 직전
        console.log('컴포넌트가 마운트 되었다')
    }
    // 컴포넌트가 마운트 된후 화면 갱신
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //컴포넌트의 구성원들중 props, state, constxt e등등)
        console.log('shouldComponentUpdate call');
        return true;
    }
    componentDidUpdate() {
        // 변경 완료 되었음을 인지할때 호출됨
        console.log("componentDidUpdate call, 업데이트 완료되면 호출")
    }

    // 컴포넌트가 마운트 해제되기전
    componentWillUnmount() {
        // 튓정리 코드를 발동시킬때 활용, 로그정리, 자원정리, 파일저장, ... 필요하면
        console.log("화면에서 사라질려고 한다")
    }
};

//3. 컴포넌트 대표 모듈로 구성
export default LifeCycle;