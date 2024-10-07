/**
 * 함수 코드 블럭 내에 표현
 *  - execution satements : 실행문 => return을 명확하게 표현
 *  - expression satements : 표현식문 => return을 사용하지 않아도 된다
 * 
 * ES5
 *  - 실행문 중심 지향 언어
 * ESNext, typescript
 *  - 실행문, 표현식문 동시 지원
 *  - 이런 유형의 언어를 "다중 패러다임 언어" 표현
 */

// 실습
// 함수명 isHigh
// - 매개변수 수치형으로 a, b
// - a가 b 보다 큰지 판단(boolean)하여 반환
// - 위의 요구사항을 만족하는 함수를 만드시요

//JS버전
// function isHigh(a, b) {
//     return a > b;
// }
//TS버전
function isHigh2(a:number, b:number):boolean {
    return a > b;
}

//, 화살표함수, 표현식문 스타일로 구현하시오
const isHigh3 = (a:number, b:number):boolean => {return a > b;}

// 함수 표현식(화살표 함수, 표현식문)
const isHigh4 = (a:number, b:number):boolean => a > b;

//확인
console.log(isHigh2(1, 2),isHigh3(1, 2),isHigh4(1, 2))