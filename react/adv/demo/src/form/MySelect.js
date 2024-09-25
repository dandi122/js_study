/**
 * select 태그에 대한 컴포넌트
 */

import React, { Component } from "react";
import {
    Select,
    MenuItem,
    Input,
    Checkbox,
    FormControlLabel
} from '@mui/material';

export default class MyCheckBox extends Component {
    constructor (props) {
        super( props );
        this.state = {
            selLanguage:this.props.initValue
        };
    };



    render () {
        const onChageHandler = e => {
            console.log('사용자가 선택한 값', e.target.value);
            // 상태변수 업데이트
            this.setState({selLanguage:e.target.value});
        };
        const {selLanguage} = this.state
        const {languages} = this.props;
        //배열 => 작업 > ['<option value="자바">자바</option>, .....]
        //실습 4분 : 배열의 연산(foreach, map, filter, reduce)
        const options = languages.map( (item, idx) => <option key={idx} value={item}>{item}</option>);
        const m_options = languages.map( (item, idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>);
        return(
            <>
                <select value={selLanguage} onChange={onChageHandler}>
                    {/* <option value="자바">자바</option>
                    <option value="자바스크립트">자바스크립트</option> */}
                    {options}
                </select>
                <br/>
                <br/>
                
                <Select label="언어" value={selLanguage} onChange={onChageHandler}>
                    {/* m_options를 생성하여 목록이 나오게 구현 실습 3분  */}
                    {m_options}
                </Select>

            </>
        );
    };
}