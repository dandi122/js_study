// this => ts 기준에 class 내부에서 this 가 잘 작동하는지 확인
class A {
    // 실습 3분, 아래 코드가 잘 작동되게 클레스 내부 완성
    // 생성자 -> 멤버변수 초기화
    constructor(public v:number){}
    // 멤버함수
    print():void{
        console.log(`value = ${this.v}`)
    }
}
let objA:A = new A(2);
objA.print(); // 출력값이 : "value = 2" 되겠금 내부를 구성하시오

// 함수(메소드) 체인
// 함수().함수().함수()... => this를 활용 => 항상 this를 반환
class Calculator{
    // 생성자의 매개변수에 초기값 부여 => 객체 생성시 값 전달 안해도 문제 없음
    constructor(public v:number=0){}
    // add(값)
    add(v:number) {
        this.v += v; // 기존값에 새로운값 더하기
        return this; // 체이닝을 위한 중요 코드
    }
    // mul(값)
    mul(v:number) {
        this.v *= v;
        return this;
    }
    // sub(값)
    sub(v:number) {
        this.v -= v;
        return this;
    }
    // div(값)
    div(v:number) {
        this.v /= v;
        return this;
    }
    print() {
        console.log(this.v)
    }
}
const calculator = new Calculator();
console.log(calculator.add(10).mul(2).div(4).sub(3));  // 결과물은 Calculator { v: 2 }
calculator.add(10).mul(2).div(4).sub(3).print(); //??? 나중에 연구해보기

 