/**
 * 체크박스 연습용
 *  - 커스텀 컴포넌트
 *  - props, state, 이벤트 사용
 *  - 써드 파트 모듈중 머터리얼 디자인 적용
 */
// 1. 모듈가져오기
import React, { Component } from 'react';
import {
    Input,
    Checkbox,
    FormControlLabel
} from '@mui/material';

// 2,3. 클레스형 컴포넌트 생성,대표 컴포넌트 설정
export default class MyCheckBox extends Component {
    constructor (props) {
        super( props );
        // 1. 상태변수 초기화 -> 항목을 선택했는지 기억
        this.state = {            
            checked:false
        }
    }
    onChangeHandler ( e ) {
        console.log( '값이 구분이 않됨 사용 X, 호출된 상황만 사용 ', e.target.value );
        // 3. 이벤트가 발생하면(체크박스 클릭) 상태변수를 업데이트함 
        //    => render() 자동호출 => 화면갱신
        this.setState( {checked:!this.state.checked} );
        console.log(this.state.checked);
    }
    render () {
        // this.props : 읽기 전용, 속성(혹은 특성)
        const { label }   = this.props; 
        const { checked } = this.state;
        const onChangeHandler = evt => this.onChangeHandler(evt);
        return (
            <>
                <div>
                    {/* 2. 상태변수 사용 */}
                    <input type    ="checkbox" 
                           checked ={ checked }
                           onChange={ onChangeHandler }/> { label }
                </div>
                <br/>
                <div>
                    <Input type    ="checkbox" 
                           checked ={ checked }
                           onChange={ onChangeHandler }/>{label}
                    <FormControlLabel 
                        control={<Checkbox checked ={ checked }
                        onChange={ onChangeHandler } />} label={label} />
                </div>
            </>
        );
    }
}