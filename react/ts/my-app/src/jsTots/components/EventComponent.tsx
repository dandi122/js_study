/**
 * 이벤트 등록 처리
 *  - 이벤트 핸들러를 통해 전달되는 이벤트의 타입을 명확하게 설정해줘야함
 *  - 예시 : e:React.ChangeEvent<HTMLInputElement>
 *          https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
 *  
 */

import React from "react"

export default function EventComponent () {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
    }
    return (
        <>
            <input type="text" onChange={onChange}/>
        </>
    )
}
