/**
 * object : 객체
 * interface : 인터페이스 => 객체의 타입을 제약하기 위한 도구
 */

// 1. object 타입
let obj:object = { name:'sg', age:20 };
console.log( obj );

// 객체 타입은 객체로 대체
obj = { name:'sg1', age:40 };
console.log( obj );

// 객체의 구성원이 달라도, 객체이기 때문에 대체가 가능
obj = { name:'sg1', age:40, salary:6000 };
console.log( obj );

/**
 * 2. 인터페이스 -> 객체 맴버들의 타입 제약을 부여하여, "객체 타입을 정의"할 수 있다
 * [] => 생략가능하다라는 의미
 * ? => 옵션이라는 의미, 반드시 있을 필요는 없다, 생략가능하다
 * interface 이름 {
 *  속성이름[?]:속성타입 주석
 * }
 * 속성들은 ;이나 ,로 구분할수 있다
 * 기호 생략으로도 표현 가능하다(제한적임)
 * 
 * // 리액트의 컴포넌트에 제약 부여할때, type | interface 방식으로 나눠진다
 */
interface IPerson {
    // 인터페이스 구성원에 타입 부여
    name: string;
    age: number;
}
// 객체형의 새로운 타입으로 사용
let p1:IPerson = { name:'세종', age:20 };
let p2:IPerson = { name:'오송', age:15 };
console.log( p1, p2 );

// IPerson에 없는 유형이므로 code에서 오류 발생 => 제약
// let p3:IPerson = { name:'오송', age:15, code:1 };
// 필수 요소가 누락되었다 => 제약
// let p3:IPerson = { name:'오송' };
// let p4:IPerson = { age:15};

// 인터페이스 구성시 속성(필수 | 옵션) 구성 가능함
// ?을 변수명뒤에 붙이면 옵션 속성이 됨
interface IPersonEx {
    // 필수 속성
    name: string;
    age: number;
    // 옵션 속성
    etc?:boolean;
}
let p3:IPersonEx = { name:'오송', age:15, etc:true };
let p4:IPersonEx = { name:'오송', age:15 };
// 아래는 필수 속성 누락 => 오류발생
//let p5:IPersonEx = { name:'오송' };
//let p6:IPersonEx = {};

// 1회성으로 사용하는 인터페이스 => 익명 인터페이스 형태로 사용가능
// 익명 인터페이스 (anonymous interface)
//      - interface 키워드 x
//      - 인터페이스명 x
// 함수의 인자로 표현한다면 적절해보임
let p5:{
    name: string
    age: number  
    etc?:boolean
} = { name:'hello', age:100 };

function printObj ( me:{ name:string; age:number; etc?:boolean } ) {
    console.log( me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}` );
}
printObj( p1 );
printObj( p2 );
printObj( p3 );
printObj( p4 );
printObj( p5 );
