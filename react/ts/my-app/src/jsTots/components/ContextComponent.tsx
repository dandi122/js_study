/**
 * Context 사용, ts사용과 js와 차별점이 없음
 */
import React from "react";

const SubjectContext = React.createContext('');

//ContextComponent 에서 저장한 데이터를
//Tail 컴포넌트에서 사용해 보겠다
const Tail = () => {
    return (
        <SubjectContext.Consumer>
            {
                data=>{
                    return (
                        <h3>
                            {data}
                        </h3>        
                    );
                }
            }
        </SubjectContext.Consumer>
    )
}

const Mid = () => {
    return (
        <div>
            <Tail/>
        </div>
    )
}

const ContextComponent = ()=>{
    const subject ='컨텍스트가 저장하고 있는 값'
    return (
        <>
            <SubjectContext.Provider value={subject}>
                <Mid/>
            </SubjectContext.Provider>
        </>
    );
}

export default ContextComponent;