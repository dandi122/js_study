/**
 * 타입 변환 : TYPE CONVERSION
 *  - 변수의 타입을 다른 유형으로 변환시켜서 값을 변환하는 것
 *  - 종류
 *      - 명시적 변환, type casting
 *          - 자바
 *              - long a = 10; int b = (int)a;
 *          - ts
 *              - 하위 2가지 모두 사용 가능
 *              - Angle-bracket
 *                  - <타입>변수
 *              - as 키워드
 *                  - 변수 as 타입
 *      - 암묵적 변환, type coercion
 *          - 별다른 표현없이 컴파일러가 해석(적용)한다
 *          - 정보 손실만 주의!!
 */

// 원본
let tmp:object = { name:'Kim' }
console.log( tmp )

// object 타입은 단지 {} 이것뿐이다 => 속성 없음
// let { name } = tmp;
//console.log( tmp.name );

// 해결 => 타입 캐스팅 진행 => 속성에 접근할수 있게 조정
interface INameProps {
    name: string
}
// 해결 1. 타입 변환 -> 명시적 변환 혹은 타입단언
let name_obj1 = (<INameProps>tmp).name
let name_obj2 = (tmp as INameProps).name
console.log( name_obj1, name_obj2 );

// 해결 2. 처음부터 타입 직접 부여하여 구성, 1회성, 부분 적용 가능함
let per:object = { name:'Kim', age:100 }
console.log( (<{ name:string }>per).name )

// 타입을 잘 모를때, unknown
let c10:unknown = 'hello world'
// 문장의 길이를 변수로 받고 싶다
let len:number = (<string>c10).length
console.log( '개별값(primitive 타입) 형변환, unknown 사용', len )