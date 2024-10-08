/**
 * props 사용, 겹겹이 구성된 컴포넌트내에서
 */
// 실습3분 Text 컴포넌트를 구현하시오, 컴포넌트 내용은 <p>{content}</p>, 타입을 정의하시오(type) typePropsContent
type typePropsContent = {
    content:string
}
const Text = ({content}:typePropsContent) =>{
    return(
        <p>{content}</p>
    );
};


// props:{} => 매개변: 타입, 타입이 object형임, props는 object형이 기본형임
// props:{} 이부분을 생략하던가, 아니면 그대로 표현하던가 처리
const PropsComponent = (props:{})=>{
    const A:string = '내일은 휴일'
    const B = '모래는 수업'
    return(
        <>
            <Text content={A} />
            <Text content={B} />
        </>
    )
}

export default PropsComponent;