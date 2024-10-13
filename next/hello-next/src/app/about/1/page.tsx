"use client"   // 이 표시를 삽입하면 클라이언트 컴포넌트임을 알려준다
// 없으면 서버사이드 컴포넌트로 인식 => 리액트를 서버사이드용으로 사용하는 의미(next.js)
/**
 * CSR OR SSR?
 * NEXTJS의 페이지 유형 : CSR, SSR, ISR, SSG
 *  - CSR
 *      - 전형적인 리액트 패턴
 *      - 화면에 필요한 정보를, 나중에 얻어와서 화면에 반영
 *      - 경우에 따라 다른 유형과 조합하여 사용
 *  - SSR
 *      - 페이지 요청 => 매번 새로 생성(서버측, HTML을 완성) => 클라이언트에게 전탈
 *      - 실시간으로 변화되는 최신 정보를 표현할때 (최신가격, 실시간 트렌드,...)
 *  - SSG
 *  - ISR
 */
import {
    useState
} from 'react'

const About = ()=> {
    const [count, setCount] = useState(0)
    return (
        <>
            about
        </>
    )
}

export default About;