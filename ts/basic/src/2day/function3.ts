/**
 * 다양한 함수 형태
 *  - 콜백함수
 *  - 중첩함수
 *  - 고차함수
 */

// 콜백함수로 사용한 타입을 지정
// - 타입명 callbackType1
// - 매개변수 x, 수치형
// - 리턴 타입 x
// 실습 : 위의 요구사항을 만족하는 타입을 구현하시오 2분(함수 형태의 타입을 만드시오)
type callbackType1 = (x:number)=>void;
// 콜백함수를 매개변수로 활용하는 함수를 구현
//정의
const cbTest = (cb:callbackType1):void =>{
    console.log('-----');
    cb(100);  // 정상 : 수치로 값을 전달 했다
    // cb('hi'); // 오류
    console.log('-----');
}

//-----------------------------------------
// - 실제 콜백함수를 구현할때
// - 표현식, `${x}콜백호출` 값을 콘솔에 출력
//사용
cbTest( (x)=>console.log(`${x} 콜백 호출`));


// 중첩함수
// 함수 내부에서 함수가 중첩적으로 구현되어 있음

const calc = (value:number, cb:callbackType1):void => {
    // 중첩(된) 함수 => 내부함수 => 1회성, 아웃터함수 내부에서만 존재, 사용가능함
    // 내부함수 1
    // 함수의 반환 타입은 컴파일러가 해석시 문제 없다면 오류발생x(생략가능하다)
    let add = (a:number, b:number):number => a+b;
    // 내부함수 2
    // 함수의 반환 타입을 생략 => 컴파일러 기준에서는 명확하게 number이다
    function multiply(a:number, b:number){
        return a * b;
    }
    // 연산 
    let res = multiply(add(1, 2), value)
    // 결과값을 가지고 함수 바깥으로 전달 => 동기적 : return, 비동기적: 콜백함수
    cb(res);
}
// 실습 : 함수 호출 재료값 30을 넣어서 calc 함수를 호출하여 결과(`result is ${result}`) 획득
calc(30, (result:number)=>console.log(`result is ${result}`));

// 고차함수(고급함수 유형중 하나)  => 호출시 형태 : 함수명()()
// high-order function
// 다른 함수를 반환하는 함수 => 중첩함수(내부함수)를 가지고 있다
//                         => 단 해당 함수는 순수함수이어야 한다
// 순수함수(pure function) <-> 불순함수
//  - 함수 구현 내부에 제약 조건
//      - 입출력 관련 코드 x
//      - 매개변수 값을 변경시키지 않는다 => readonly 키워드 추가됨
//      - 연산 결과는 반환
//      - 전역변수, 정적변수 사용 x
//      - 예외 상황 발생 x
//      - 비동기 코드x 
const addX = (a:number):(arg:number)=>number => (b:number):number => a + b;
console.log(addX(1)(2));

// 실습 => 위의 addX 함수를 풀어서 표현, type 정의해서 사용 5분
// 고차함수 이므로 -> 함수를 반환한다
// const addX = (a:number):(함수를 반환하는 형태:타입) => 반환값:함수;
type callbackType2 = (arg:number)=>number;  // 숫자를 넣어서 뭔가 연산을 한 후 수치를 반환
const addX2 = (a:number):callbackType2 =>{
    //내부함수 -> 순수함수에 준해서 구현
    // const 내부함수:callbackType2 = (b:number):number => a + b;
    // return 내부함수
    // _prefix를 붙인다는 것 => 내부용이라는 의미
    const _func:callbackType2 = (b:number):number => a + b;
    return _func
}
console.log(addX2(1)(2));

