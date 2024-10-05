/**
 * 함수 선언문 구성요소
 *  - paramter : 매개변수, 함수 정의시 표현
 *  - argument : 인자, 함수를 호출할때 전달하는 값을 표현
 * 
 * 함수 표현식
 *  - JS의 함수는 함수형 언어, 객체 지향 언어가 복합적으로 구성
 *  - 함수 => Function 클레스의 객체(인스턴스)이다
 */
// JS의 함수들

// 1. 표준함수, 이름있는 함수
function namedFunc () {
    console.log( 1 )
}
// 2. 이름없는 함수, 익명(무명) 함수
const NonNamedFunc = () => {
    console.log( 2 )
}
namedFunc()
NonNamedFunc()

// TS의 함수 -> JS의 함수 + 타입 주석을 추가
// 3. 매개변수(파라미터)에 타입 주석 적용, ()뒤에 리턴타입 적용
function add (x:number, y:number):number {
    return x+y
}
const add2 = (x:number, y:number):number => {
    return x+y
}
// 입력값에 강한 제한을 받는 함수 => 잠재적오류를 줄일수 있다
// add함수에 인자(argument)로 1, 과 2를 넣어서 호출
console.log( add(1,2) )
console.log( add2(3,4) )

// 특정 변수의 타입이 "함수 타입" 이다
// 함수타입 == 함수 시그니처(function signature)
// ()=>{} OR ()=>() ,.... ()=>void ()=>number
// fVari이라는 변수는 함수를 값으로 가질것이다 그 형태는 매개변수 X, 리턴값 X, 내부는 알아서
let fVari:()=>void = function ():void {
    console.log('함수 타입을 부여하여 함수의 형태를 제한하고, 동일한 형태로 함수를 받은예시')
}
fVari()
// 함수 타입 제거 버전 => 암묵적으로 any
let fVari2 = function ():void {
    console.log('함수 타입을 부여하여 함수의 형태를 제한하고, 동일한 형태로 함수를 받은예시')
}
fVari2()

// type(별 5개, 잘 기억해둠, 리액트에서 많이 사용)
// 타입 키워드를 사용하여 타입 별칭 생성
// 표현이 간결해짐
type myFunc = (arg0:string, arg1?:number)=>void
// 타입을 구성 => 이를 이용하여 함수 정의
let myF:myFunc = function (a1:string, a2?:number):void {}
// 오류, 타입을 위배
//let myF2:myFunc = function (a1:string, a2?:number, a3:boolean):void {}
// 화살표 함수로 표현
let myF3:myFunc = (b1:string, b2?:number):void => {}
// 매개변수 옵션부분은 미구현
let myF4:myFunc = (c1:string):void => {}

myF('hello')
myF3('hello', 10)
myF4('hi')
myF4('hi', 100)

interface INameProps2 {
    name: string
}
// 타입을 여러개 지정 가능
// 인터페이스|값이없다|최하위계층타입(undefined)
function getName ( p:INameProps2|null|undefined ) {
    return (p != undefined || p != null) ? p.name : 'unkown 이름'
}
console.log( getName(null) )
console.log( getName(undefined) )
console.log( getName({name:"hi"}) )