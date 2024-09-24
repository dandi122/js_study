/**
 * 커스텀 컴포넌트
 * 숫자만 입력 받을수 있는 입력폼 컴포넌트
 * input의 type을 number로 구성 => 모바일에서는 가상키보드가 숫자 패드로만 나옴
 * PC용을 위한 수치입력 전용 컴포넌트
 */
// 1. 모듈가져오기
import React, { Component } from 'react';
import { 
    Button,
    Input 
} from "@material-tailwind/react";

// 2. 컴포넌트 구현
class MyInput extends Component {
    constructor (props) {
        super( props );
        // 1. 상태변수 초기화
        this.state = {
            inputValue:''
        }
    }
    onChangeHander (evt) {
        /*
            - 이벤트를 직접 연결한 맴버 함수내에서 this를 사용하면 인식을 못함!!
            - 처리 방법
                - render() 내에서 내부함수 내부에서 호출하여 연결
                - 생성자에서 this를 재정의 하면 (나중에 확인)
        */
        // 입력창에서 입력을 하면 => 값이 변한다 => 이벤트 발생 
        // => 내부함수 onChangeHander 호출 => this.onChangeHander 호출
        console.log( "입력값이 변하고 있다" , evt.target.value);
        // 1. 입력값 획득
        let ori_text = evt.target.value;
        // 2. 입력값중 숫자가 아니면 무시 => 정규식 처리
        //    /[^0-9]/g => 숫자가 아닌 모든 문자
        const value  = ori_text.replace( /[^0-9]/g, '' ); // 숫자가 아니면 모두 ''로 대체
        // 3. 숫자만 반영 => 입력값을 들고 있는 상태변수를 갱신
        this.setState( { inputValue:value } );
    }
    onSubmitHandler (evt) {
        evt.preventDefault(); // submit 이벤트 무효화
        // 값 추출
        console.log( this.state.inputValue );
        // 향후, 로그인, 검색등 입력창 기반 작업시 참고, 
        // ex) 서버와 통신
        
        // 입력값 초기화
        this.setState( { inputValue:'' } );
    }
    render () {
        // 2-1. 상태변수 추출
        let { inputValue }   = this.state;
        const onChangeHander = evt => this.onChangeHander(evt)
        const onSubmitHandler= evt => this.onSubmitHandler(evt)
        return (
            <div style={{ margin:20 }}> 
                <form onSubmit={ onSubmitHandler }>
                    {/* 2-2. 상태변수 사용 */}
                    <input type="text" onChange={ onChangeHander } value={inputValue} placeholder='숫자만 입력하세요'/>
                    <input type="submit" value="전송"/>
                </form>
                {/* <form>
                    <Input type="text" placeholder='숫자만 입력하세요'/>
                    <Button>전송</Button>
                </form>                */}
            </div>
        );
    }
}
// 3. 대표 모듈화 처리
export default MyInput;