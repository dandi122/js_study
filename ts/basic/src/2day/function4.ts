/**
 * 매개변수 기본값 지정
 *  - 함수의 기본값 부여
 */

// Person 타입 구성
// - 이름(name), 문자열
// - 나이(age), 수치형
// - 위의 2개를 멤버로 가진 객체형 타입
// 실습1분
type Person = {name:string, age:number};
// makePerson 함수를 구현하시오
//  - 함수의 반환값의 타입은 Person
//  - 인자로 name, age를 받음, 인자의 타입은 Person의 구성원의 타입과 동일
const makePerson = (name:string, age:number = 10):Person => {
    // return {name:name, age:age}
    return {name, age}  // 실행문 스타일
}

console.log(makePerson('철수', 20));
console.log(makePerson('철수'));   // 기본값 부여시, 인자로 전달하지 않으면 기본값으로 대체

// 표현문(식) 스타일로 변형 = > makePerson2, 실습 1분
// 화살표함수에서 => 뒤쪽에 {}를 바로 사용하면 코드블록이됨 => 소괄호로 묶어서 ({}) => 객체반환이라는 의미
const makePerson2 = (name:string, age:number = 10):Person => ({name, age});

// 위의 함수에서 파라미터에 객체 구조분해를 적용한다면, 반환값은 void 처리
// 객체구조분해를 파라미터에 적용시 타입을 반영하여 변수의 타입을 결정해줌
const diplayPerson = ({name, age}:Person):void => console.log(`${name} ${age}`);
diplayPerson({name:'철수', age:5});

// 아래 표현은 큰 의미가 없다. any이므로 표현되지 않는 것도 전달 가능함 => 본질을 벗어남
// const diplayPerson2 = ({name:string, age:number}:any):void => console.log(`${name} ${age}`);

// 객체의 멤버 표시
// 기존 js에서 멤버 접근시 아래처럼 2가지로 접근이 가능함
/*
const obj = {
    title:'hi',
    price:100
};
console.log(obj.title);  // 키값이 고정이면 일반적으로 사용
console.log(obj['title']); // 키를 넣어서 값을 취하는 방식, 키를 동적으로 구성해여 접근
*/

// 만약 위의 스타일을 타입을 지정한다면?
type KeyValue = {
    // 키값으로는 문자열, 키를 통해 획득하는 값도 문자열
    [key:string]:string
} 

const initObject = (key:string, value:string):KeyValue => ({[key]:value});
console.log(initObject("name", "세종"));
// 객체 멤버 접근시 .멤버 혹은 객체['멤버']


