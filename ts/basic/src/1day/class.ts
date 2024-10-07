/**
 * class 관련된 키워드(아래 참조)은 타언어(java, c#)와 동일하다
 *  - class
 *  - private, public, protected
 *  - implements
 *  - extends
 * 
 * 문법
 *  class 클레스명 {
 *      [private|public|protected|(생략)] 속성명[?]:속성타입
 *  }
 */

// 1. JS 스타일
// 아래 같은 표현은 일반적으로 배제
// @ts-nocheck
class Person1 {
    name: string;
    age?: number;
}
let obj1: Person1 = new Person1();
obj1.name = '이름';
obj1.age  = 20;
console.log( obj1 );

// 2. 생성자에서 속성 선언 -> 가장 간결한 표현
//    접근 제어자를 생략(자바에서는 default) ts에서는 pulic으로 간주
class Person2 {
    constructor(public name:string, public age?: number) {} 
}
let obj2:Person2 = new Person2('점심', 30);
// Person2 { name: '점심', age: undefined } <= 옵션 속성 초기화 생략시
let obj3:Person2 = new Person2('점심');
console.log( obj2, obj3 );

// 3. 풀버전 형태로 구현
//    내부에서 커스터마이즈 할 사항이 없다면 2번 유형으로 사용
class Person3 {
    name:string;
    age?:number;
    constructor(public name:string, public age?: number) {
        this.name = name;
        this.age  = age;
    } 
}
let obj4:Person3 = new Person3('점심', 1);
console.log( obj4 );

// 4. 인터페이스를 구현할 크레스
//    다른 클레스에서도 사용하겠다
interface IPerson4 {
    name: string;
    age?: number;
}
class Person4 implements IPerson4 {
    constructor(public name:string, public age?: number) {} 
}
let obj5:Person4 = new Person4('점심', 1);
console.log( obj5 );

// 5. 추상 클레스(abstract)
//    직접 객체를 만들수 없고, 상속을 받아서 구현하여 객체를 생성한다
//    추상 클레스 내부에는 구현된것 도 존재, 선언된것도 존재한다
abstract class AbstractPerson {
    // 추상화된 변수
    abstract name: string
    constructor (public age?:number) {}
    // 추상화된 함수
    abstract getName(): void;
    getAge () {
        console.log( this.age )
    }
}

// 6. 상속
class Person5 extends AbstractPerson {
    // 추상화된 변수를 생성자를 통해서 초기화 처리됨
    constructor(public name:string, age?:number) {
        super( age )
    }
    // 추상 함수를 구현
    getName () {
        console.log( this.name, this.age )
    }
}
let obj6:Person5 = new Person5('오송', 10);
console.log( obj6 );

// 7. 정적요소를 가진 클레스 -> 객체 생성 않해도 static 요소 사용 가능함
class Util {
    static value = 10;
    static age () {
        console.log('정적함수')
    }
}
console.log( Util.value )
Util.age()