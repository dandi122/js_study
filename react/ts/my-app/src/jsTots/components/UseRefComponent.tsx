/**
 * usdeRef()를 타입스크립트 기반 테스트
 */
import {
    useState,
    useRef
} from 'react';

// 슬립함수 구현
// 매개변수 => ms => 1000(1초)
const sleep = (ms : number) => { 
    return new Promise( (resolve)=>{
        // ms 시간 후에 자동으로 resolve 함수를 호출한다
        // resolve 함수는 Promise 패턴내에서 특정 업무가 정상적으로 처리되면 호출하여
        // 결과를 돌려주는 함수
        // 여기서는 비동기 처리가 성공했다는 상황만 전달, 데이터 전달 x
        setTimeout(resolve, ms)
    })
}

// <컴포넌트 요구사항>
// "이미지 업로드" 텍스트를 노출 => 클릭
// 이미지 업로드 메뉴 발생(<input type='file' ../), 해당 태그는 숨겨서 표현
// 파일 업로드는 텍스트에서 처리되게 표현(내부적으로는 input를 숨겨서 사용할 것임)
// 업로드 버튼 => 업로드 처리는 시뮬레이션으로 구성 => 타이머 등 활용

const UseRefComponent = () => {
    const [msg, setMsg] = useState<string|null>(null);
    // 실습 useRef에 타입 부여 1분
    // 타입 캐스팅 : <HTMLInputElement | null>
    // 해당값은 랜더링시 참도된 <input/> 요소가 세팅된다
    const inputFileRef = useRef<HTMLInputElement | null>(null);
    // const inputFileRef = useRef(null);  이렇게 사용해도 정상 처리된다

    // 해당 변수는 null값과 file 타입이 모두 적용 가능하다
    const fileUploadRef = useRef<File|null>(null);

    // 실습 1분
    const onClickEvent = ():void => {
        console.log('이미지 업로드 클릭', inputFileRef.current);
        // input 태그에 클릭 이벤트 발생
        // 실습 30초
        inputFileRef.current?.click();
    }

    //실습1분 onChangeUploadFile를 구현하시오, 이벤트 매개변수로 처리
    const onChangeUploadFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);   //첨부파일에 실제 경로 C:\fakepath\dandi122.png
        // 파일 업로드를 위해서 파일 객체가 필요
        const files = e.target.files  // filelist 객체, 내부에 file 객체 존재
        //console.log(files); 
        // 해당 내용 중 1개 file을 객체를 useRef를 이용하여 저장
        if(files !== null && files.length > 0){  // 테이터가 실제 존재한다
            fileUploadRef.current= files[0]  // 업로드할 파일을 저장
            console.log(fileUploadRef, typeof fileUploadRef);
        }
    }

    const onFileUpoad = async () => {
        // 업로드할 파일을 가지고 있다면 => 업로드 시뮬레이션 진행
        if(fileUploadRef.current === null) {
            alert('파일 첨부 후 업로드하세요')
            return;
        } else {
            // 업로드 시뮬레이션 => 차후 확장한다면 스프링 부트에 연동
            // 적당한 시간 대기 후(비동기) 메세지 처리
            await sleep(1000*3);
            // 업로드 버튼 클릭 => 3초 대기(업로드 되었다는 시뮬레이션) => 더미결과를 화면에 출력
            setMsg("업로드 완료") // 상태변수 값을 수정했다(상태변수 업데이트)
        }
    }


    return (
        <>
            <p onClick={ onClickEvent }>
                이미지 업로드
            </p>
            {/* 파일 업로드 타입, 화면에서 숨긴다=> 공간은 차지한다 */}
            {/* 순수 js나 jQurey에서 요소 특정할때 id="" 사용 */}
            {/* react에서 html 요소를 접근(참조/특정) 하는 방법은 ref={} */}
            <input
             type='file'                      // 파일 업로드 타입
             style={{visibility:'hidden'}}    // 화면에서 숨긴다=> 공간은 차지한다
             id="fileUpload"                  // 순수 js나 jQurey에서 요소 특정할때 id="" 사용
             ref={inputFileRef}               // react에서 html 요소를 접근(참조/특정) 하는 방법은 ref={}
             onChange={ onChangeUploadFile }  // 파일 첨부를 하면 input 상태가 변경된다
            /> 
            {/* 아래 표현은 <b></b> 혹은 <b>내용..</b> 둘중 하나만 표기된다 */}
            <b>{msg}</b>
            {/* 아래 표현은  <b>msg</b> 전체를 그리는가? 마는가?*/}
            {
                msg !== null && <b>{msg}</b>
            }
            <button onClick={ onFileUpoad }>업로드</button>
        </>
    )
}

export default UseRefComponent;
