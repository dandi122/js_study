/**
 * 타입 확인 
 */
/*
- 기본 분류
    - primitive(기본형) type
    - reference(참조형) type
- ts
    - 기본타입
        - number(ts) vs Number(js) : 수치
        - string(ts) vs String(js) : 문자(열)
        - boolean(ts) vs Boolean(js) : true, false
        - void : 반환값이 없다라는 함수의 타입, ts에서만 추가
        - null : ts/js 공통 : 값이 없다, 변수는 메모리에 할당되어 있다
        - undefined : ts/js 공통 : 값이 정의되지 않았다, 변수는 메모리에 할당 x
        - any : 모든 타입을 허용, 타입 검사 x, ts에서만 추가
    - 복합타입
        - array(ts) vs Array(js) : 배열 타입
        - tuple : 고정된 요소수를 가진 배열, 튜플 타입, ts만 추가
        - object(타입) vs Object(js의 수퍼클레스: {} ) : 객체 타입, ts만 추가
        - enum : 열거형, ts만 추가
    - 고급타입
        - union : 여러 타입중에에 하나를 값을 가질수 있다 (ex) string|number|boolean|...
        - intersection : 여러 타입을 결합하여, 하나의 타입을 만든다
            - 예시
            ```
                type Person = { name:string } & { age:number }
            ```
        - type 별칭 : 사용자 정의 타입
            - 리액트에서 컴포넌트 만들때 자주 등장
            ```
                type ID = string|number

                // pid라는 변수는 값으로 문자열 혹은 수치형을 가질수 있다
                pid:ID

                // 자바 정수형 변수 => int a
                // JS 변수(타입추론형) => var|let a
                // ts 정수형 변수   => a:number
                // ts 같은 스타일 언어 : swift, kotlin, scalar, ts, ...
            ```
    - 함수 타입
*/

// 1. ES5
var type_a = "ES5";
console.log( type_a );

// 2. ESNext
let type_b = 1;
const TYPE_C = 3.14;
console.log(type_b, TYPE_C); 

// 3. ts
// 변수명:타입주석(Type Annotation)
let t1:number  = 1;
let t2:string  = "hello ts";
let t3:boolean = true;
let t4:object  = {};
console.log( t1, t2, t3, t4);

// 4. 다른 타입의 값을 대입한다면?
// 자바처럼 실행하기 전에 오류를 표기
// Type 'string' is not assignable to type 'number'
// t1 = "hi";
// es5, esnext 문제가 없다(*.js에서만) => *.ts에서는 체크한다!!
// type_a = 1;
// type_b = "hi";
// 동일 타입이므로 => 특정 변수에 들어갈 값을 타입으로 제약 => 올바른값만 세팅되게 처리
t1 = 100; 

// 5. 타입 주석을 항상 표시해야 하는가?
//    JS와 호환을 위해서 생략가능하다 => TS 본질 훼손 => 가급적 사용
//    TS에서 타입 주석 생략해도 오류를 내지 않는다
let i1 = 1;
let i2 = 'hello';
console.log('타입 추론(type inference) 지원', i1, i2);

// 6. any
// 변수의 초기 타입에 무관하게 어떤 종류의 값도 지정 할수 있다
let type_x:any = 0;
// typeof 변수  => 해당 변수의 타입을 반환하는 키워드(JS, TS에서 모두 사용가능)
console.log( 'type_x:any', typeof type_x );
type_x = "hello";
console.log( 'type_x:any', typeof type_x );
type_x = true;
console.log( 'type_x:any', typeof type_x );
// any 타입 => 초기값의 타입을 변수가 따라가는 구조(타입 추론형)

// 7. undefined 
let u1:undefined = undefined;
// 변수 선언만 진행, 초기화 수행 X
let u2:undefined;
let u3:number;
let u4:object;
let u5:any;
// undefined, any 타입을 제외하고는 변수는 선언후 초기화를 반드시 해야한다
// 변수의 사용은 초기화 이후 진행
console.log( u1, u2, /*u3, u4,*/ u5);
// 변수는 초기화후 사용하는것으로 루틴을 정하는게 유리

/*
타입 계층도
any
│           ┌── number, void, ...
│           ┌── boolean
│           ┌── string
├── primitive──────────┐
│                      undefined (모든 타입의 최하위계층, 일종의 자식으로 간주)
└── reference──────────┘
            └── object
                     └── interface
                     └── class
                     └── array, tuple, ...

*/