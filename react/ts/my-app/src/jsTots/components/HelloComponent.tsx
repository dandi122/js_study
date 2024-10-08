/**
 * TS로 함수형 컴포넌트 + props를 구성하는 다양한 방식
 *  - 기본형 : JS와 동일함 => FC 생략
 *  - FC *
 *  - ReactElement
 *  - PropsWithChildren
 *  - .... 생략
 */

import {
    FC,
    ReactElement,
    ReactNode,
    PropsWithChildren
} from 'react';

// 1. React.Fc사용
// - TS에서 함수형 컴포넌트 구성시 props 타입을 간결하게 표현하기 위한 방식
// - 18버전에서 암묵적으로 존재하는 children 속송이 제거되었다

interface Props {
    name: string
}

// 1. FC를 사용하여 처리
const Hello1:FC<Props> = ({name})=>{
    return (
        <div>
            {name}
        </div>
    )
};

// 2. FC를 사용하지 않고 처리
const Hello2 = ({name}:Props)=>{
    return (
        <div>
            {name}
        </div>
    )
};

//3. FC + ReactNode 사용
// - children 속성을 타입으로 가장 많이 사용하는 유형
// - ReactNode 대부분 타입을 지원 => 모든 요소를 대응할 수 있다
interface Props2 {
    children:ReactNode
}
const Hello3:FC<Props2> = ({children})=>{
    return (
        <div>
            {children}
        </div>
    )
};

// 4. ReactElement
//  - 원시타입을 포함하지 않으면 jsx 요소만 허용하는 타입
interface Props3 {
    children:ReactElement
}
const Hello4:FC<Props3> = ({children})=>{
    return (
        <div>
            {children}
        </div>
    )
};

// 5. PropsWithChildren
//  children을 별도로 표기할 필요 없다
//      - props => name속성
//      - PropsWithChildren<props> => name속성 
const Hello5:FC<PropsWithChildren<Props>> = ({name, children})=>{
    return (
        <div>
            {name} /{children}
        </div>
    )
};


// 0. 가장 기본형
// 종합
const HelloComponent = ()=>{
    return (
        <div>
            {/** ts에서 props의 타입을 부여하면 jsx상에서 해당 컴포넌트의 속성을 추가할 때 
            *    없는 종류의 속성을 사용할 수 없다 => error   
            *       <Hello1 name="..." age="10"/>
            */}
            <Hello1 name="props의 속성을 타입을 부여하여 규정하였다"/>
            <Hello2 name="노브랜드 햄버거" />
            <Hello3>
                <p>자식요소-ReactNode</p>
            </Hello3>
            <Hello4>
                <p>자식요소-ReactElement</p>
            </Hello4>
            <Hello5 name="속성을 필수로 넣어줘야 한다">
                <span>자식요소-PropsWithChildren</span>
            </Hello5>
        </div>
    )
}

export default HelloComponent;