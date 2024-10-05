/**
 * 커스텀 훅
 * 필요시 특정 기능을 가진 훅을 자체적으로 만들수 있다
 *  - 내부적으로는 기존 훅을 활용
 *  - 기본적인 훅 useState, ..을 활용 + 기능부여 => 새로운 훅을 생성
 */
import {
    useState,
    useEffect
} from 'react';

const useWindowInfo = () => {
    // 현재 보여지는 화면(그중 JS의 윈도우(브라우저의 윈도우) 내장객체:window)의 정보 제공
    // 윈도우의 너비, 높이 => 브라우저를 조정하면 변경됨 => 상태변수로 관리
    const [windowSize, setWindowSize]= useState({
        // 리액트 => 브라우저에서 작동 => 윈도우객체자동생성 => 정보접근가능
        width : window.innerWidth, 
        height: window.innerHeight
    });

    useEffect( ()=>{
        // 브라우저의 크기가 변경(이벤트명 resize) => 이벤트가 발생 => 사이즈를 다시 획득하여 상태변수 업데이트
        const 이벤트핸들러 = () => {
            // 브라우저크기변경->resize 이벤트 발생 -> 이벤트핸들러 호출 -> 상태 변수 갱신
            setWindowSize({
                width : window.innerWidth, 
                height: window.innerHeight
            });
        };
        // 순수 JS
        //  window 이벤트 등록 1회만 
        window.addEventListener('resize', 이벤트핸들러);
        return ()=>{
            // window에 등록된 이벤트 해제(반드시), useWindowInfo가 삭제될때
            window.removeEventListener('resize', 이벤트핸들러);
        };
    }, []);

    // 컴포넌트 대비 차이점 반환값의 차이
    // 상태변수 반환(윈도우 정보 탑재되어 있음)
    return windowSize;
}

export default useWindowInfo;