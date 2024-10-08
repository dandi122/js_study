/**
 * js의 배열은 여러 타입의 구성원을 가질 수 있다
 * ts의 배열은 동일 타입의 구서원만 가질 수 있다
 * ts에서 여러 타입의 구성원을 가지고 싶다면? => tuple
 * 방식
 *  - type을 생성하여 배열에 적용
 */

type multiTypeTuple = [boolean, string];

const res = ():multiTypeTuple => [true, 'hello'];
console.log(res());

// 에러, 타입을 위배함
// const res = ():multiTypeTuple => [true, 'hello', 10];
