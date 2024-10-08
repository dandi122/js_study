/**
 * JSX.Element 타입사용
 *  - 컴포넌트가 리턴하는 값의 타입, 명확해서 생략 가능하다
 *  - 명시적 표기, 생략하던가 모두 처리 가능
 */

const JSXComponent = ():JSX.Element => {
    return(
        <>
            JSX.Element 타입의 JSX 반환하는 것이 컴포넌트이다
        </>
    )
}

export default JSXComponent;