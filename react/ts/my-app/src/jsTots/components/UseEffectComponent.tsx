/**
 * useEffect + ts
 *  - ts의 열거형
 *  - 브라우저의 저장소에 특정한 정보를 영속 저장하고 사용하기 - 로컬|세션 스토리지
 *      - 로컬스토리지
 *          - 브라우저를 재가동해도(컴퓨터 재가동 포함) 저장된 정보가 유지됨
 *          - 저장방식은 키 값 세트
 *      - 세션스트리지
 *          - 브라우저를 재가동하면 저장된 정보 손실됨
 *      - 컴포넌트가 로드되면 로케일 정보를 로드(단, 저장되어 있다면) -> 1회성
 *      - 사용자 선택에 의해서 로케일 정보가 수정되면 로케일 정보를 저장
 */
import {
    useState,
    useRef,
    useEffect
} from 'react';

// TS의 열거형 
enum Locale {
    KR = 'ko-KR',
    US = 'en-US',  // 필요시 국가별로 로케일 추가...
}

const getLocaleFromString = (src:string)=>{
    switch(src) {
        case 'ko-KR' : return Locale.KR
        case 'en-US' : return Locale.US
        default : return Locale.KR
    }
}

// 스토리지에 저장시 사용할 키값
const LOCALE_KEY:string = 'Locale'

// 로케일정보(시간대)를 변경하면 현재시간이 변경된다
const UseEffectComponent = () => {
    //상태변수, 시간값 저장
    const [curTime, setCurTime] = useState(new Date());
    const [locale, setLocale] = useState(Locale.KR); //열거형으로 값 목록 준비

    //요구사항 실습 2분, 현재시간이 흘러가도록 구현하시오 -> 1회 성으로 세팅되게 구현
    useEffect( ()=>{
        // 1회성 ( 컴포넌트가 mount될때 호출(대체제) )
        // 1초 마다 시간 갱신되게(반복타이머 => setInterval) 설정
        const clockTimer = setInterval(()=>{
            setCurTime(new Date());
            console.log('시간갱신')
        }, 1000);

        return ()=>{
            // 뒷정리 함수, 컴포넌트가 unmount될때 호출(대체제)
            // 1초 마다 시간 갱신되게 설정을 해제(clearInterval(타이머 객체))
            clearInterval(clockTimer);
            console.log('타이머 종료')
        }
    }, [])

    // 컴포넌트 로드시 1회성 호출되는 코드 한번 더 호출
    useEffect( ()=>{
        // 1. 저장된 데이터 로드 -> html5에서 추가된 js문법
        const tempLocaleValue = localStorage.getItem(LOCALE_KEY)
        console.log(tempLocaleValue);
        // 2. 로드된 데이터가 있다면 -> 상태정보 업데이트
        if(tempLocaleValue !== null)
            setLocale(getLocaleFromString(tempLocaleValue))
    }, []);
    // 실습2분
    // 사용자가 locale 정보를 수정하면 => 로컬스토리지에 값을 업데이트
    useEffect( ()=>{
        // lacale이 변경되면 호출
        localStorage.setItem(LOCALE_KEY, locale)
        // 개발자모드, application > localstorage => http://localhost:3000
    }, [locale])

    return (
        <>
            <div>현재시간</div>
            <div>
                시간대 선택
                <select
                    value={locale}
                    onChange={e=>{
                        //
                        // "ko-KR" => getLocaleFromString("ko-KR") => Locale.KR
                        console.log(getLocaleFromString(e.target.value));
                        setLocale( getLocaleFromString(e.target.value) ) 
                    }}
                >
                    {/* 한국어를 사용하는 대한민국 지역 */}
                    <option value="ko-KR">한국</option>
                    <option value="en-US">미국</option>
                </select>
            </div>
            <div>{curTime.toLocaleString(locale)}</div>
        </>
    )
}

export default UseEffectComponent;