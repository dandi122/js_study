/**
 * ES6에서는 전통적인 class 생성 문법으로 객체를 표현할 수 있게 지원
 */

class Food {
    //생성자
    constructor(name, age) {
        //멤버변수 생성 및 초기화
        this.name = name;
        this.age = age;
    }
    //멤버변수
    //멤버함수 -> 자동으로 prototype 으로 확장된다, 신경 안써도 됨
    info() {
        console.log(`${this.name} ${this.age}`);
    }
}

const obj = new Food('돈까스', 10);
console.log(obj);
obj.info();

// 상속, 재정의 생략