/**
 * 배열에 타입을 부여
 *  - ts 스타일
 */
// 1. 배열의 타입
//   타입[] => 멤버들은 모두 같은 타입만 추가(구성)될 수 있다

let numberArray:number[] = [1,2,3,4]; // 수치형 배열만 추가될 수 있다
//error
// let numberArray2:number[] = ['hi',2,3,4]; // 타입이 달라서 오류

//멤버가 객체인 경우
//아래 코드를 기반으로 personArray에 타입을 부여하시오 실습 1분
// 자바의 참조형 배열과 형태가 유사하다
type PersonType = {
    name:string
    weight?:number
}
let personArray:PersonType[] = [{name:'kim'},{name:'Lee', weight:70}];

// 특정 기능을 가진 함수를 TS 기반으로 변수, 함수, 타입, 배열을 활용하여 구현
// split 함수 : 문자열, 구분자 => 문자열 배열 리턴

const mySplit = (source:string, sep:string=""):string[]=>  source.split(sep);

console.log(mySplit('hello'));   // => ['h','e', 'l'....]
console.log(mySplit('h_e_l_l_o', "_")); // => ['h','e', 'l'....]

//join 함수 : 배열, 구분자 => 문자열
const myJoin = (arr:string[], sep:string=''):string => arr.join(sep);
console.log(myJoin(['h', 'e', 'l', 'l', 'o']));
console.log(myJoin(['h', 'e', 'l', 'l', 'o'], '_'));

// 배열값 추출 => 인덱싱 => 배열변수[인덱스] <= 이 방식은 js와 동일
// 배열의 비구조화 할당 => const [a, b, c, ...rest] = 배열  <= js와 동일
// 배열을 반복문에서 사용 => for ~ in, for ~ of, while, do ~ while 모두 js와 동일

// 제네릭 방식 타입 => T
// T : 자바에서 사용한 방식 그대로 차용, 여러 타입을 한꺼번에 표현한다
// 문자열 배열, 수치형 배열, 객체형 배열 => 배열 크기를 가지고 있다(공통) => T로 표현
// 함수에 적용
//  - 함수적용 => 함수명<T>(매개변수)
//  - 매개변수, 함수반환타입 => T

// 데이터 2개
let nArr:number[] = [1, 2, 3];
let sArr:string[] = ['a', 'b', 'c'];
// 정의, 매개변수의 타입에 상관없이 처리 가능한 함수를 만든다면 => 제네릭 적용
const myArrayLengthCheck = <T>(array:T[]):number=>array.length;

// 사용
console.log( myArrayLengthCheck(nArr));
console.log( myArrayLengthCheck(sArr));

// 실습 -> 배열이 비어있는가? 체크하는 함수를 구현하시오
//                          단, myArrayLengthCheck 함수를 이용하시오
// 함수 호출시 <T>는 생략 가능함 => 체크하면서 사용
// const myEmptyCheck = <T>(array:T[]):boolean=>myArrayLengthCheck<T>(array)==0;
const myEmptyCheck = <T>(array:T[]):boolean=>myArrayLengthCheck(array)==0;
console.log(myEmptyCheck([]));   // true
console.log(myEmptyCheck(nArr)); // false

// 연속수(간격은 무조건 1)를 생성하는 함수
// range 함수 => range(1, 10) => [1, 2, 3, ..... , 9] => 1<=x <10
// 단 수치의 간격은 정수형 1을 간격(step)으로 고정한다
// 실습2분
// 재귀적 함수 호출 적용
// const range = (from:number, to:number):number[] => 조건식 ? 참일때 값 : 거짓일때 값
const range = (from:number, to:number):number[] => from<to ? [from, ...range(from+1,to)] : []

const range2 = (from:number, to:number):number[] => {
    console.log(from, to);
    return from<to ? [from, ...range2(from+1,to)] : []
} 

console.log(range(1, 10)); // [1,2,3,....,9]
console.log(range(10, 1)); // []

console.log(range2(1, 10)); // [1,2,3,....,9]








