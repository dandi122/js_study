/**
 * 오류상황 처리 -> try ~ catch ~ finally : 자바와 유사
 * 코드 전개시 오류 방지 코드를 삽입
 *  - 옵셔널 체이닝 코드에서 방지 코드를 삽입 : ?.
 *    A.b.c?.d.e....
 *  - 값을 선택적으로 선택할때 방어코드 : Nullish coalescing : ??
 */

// 테이터 샘플
const A ={
    proc:{
        msg:{
            code:10
        },
        check:null
    }
}

// 코드값 출력 : 분해방식이 아닌 옵셔널 체이닝 사용
console.log(A.proc.msg.code);
// 만약 정상적인 데이터라면, check 킽에도 code가 있었다(가정)
//?. 처리하면 코드 셧다운 안되고 undefied를 리턴하여 => 코드는 대응할 수 있다.
console.log(A?.proc?.check?.code);

// 선택적 값 처리, 서버의 포트 설정(커스텀 || 시스템:환경변수)
console.log('a'||'hello');
console.log(''||'hello');  // ''를 의도했는데 || 특성상 false로 간주해서 뒷값을 취하게 되었다
console.log(0||'hello');   // 위와 마찬가지 0 = false로 인식

//의도된 대로 정상 작동한다, 선택적 값 처리 => ??
console.log(''??'hello');
console.log(0??'hello');