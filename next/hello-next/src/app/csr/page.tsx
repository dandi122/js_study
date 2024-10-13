"use client"  // 1. 표식(맨위에 표기)
/**
 * CSR 예시
 * 클라이언트 컴포넌트를 이용하여 구성
 */

// 2. 모듈가져오기
import { useState, useEffect } from 'react';

// 3. 컴포넌트 정의
function CSRComponent () {
    // 상태변수 정의, 
    const [data, setData] = useState( {name:''} )
    // 컴포넌트가 마운트될때->데이터패칭(fetch())->상태변수 업데이트->화면갱신
    useEffect( ()=>{
        fetch('api/hello')
        .then( res=>res.json() )
        .then( nm=>setData(nm) )
        .catch( e=>setData({name:'더미 유저'}) )
    }, [])
    // 통신의 대상 api 필요
    return (
        <>
            <div>
                - [CSR 일반적인 워크플로우]<br/>
                - 기본페이지 로딩후<br/>
                - 데이터 획득<br/>
                - 화면구성 마무리
            </div>
            <div>CSR 페이지 / { data.name }</div>
        </>
    );
}

// 4. 컴포넌트를 대표 모듈화
export default CSRComponent
