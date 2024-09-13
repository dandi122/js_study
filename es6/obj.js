/**
 * 클래스 표현 -> 객체 생성 : 유형체크
 * {}
 */

// 1.(*)객체 리터럴
//   용도 : 데이터를 여러개를 들고 함수(혹은 생성자)의 인자로 전달할때, 또는 1회성 객체 사용시 많이 씀
const obj = {
    //멤버 변수
    name:'세종',
    age:10,
    //멤버 함수
    //표준함수로 구성한 멤버 함수는 this가 의도된대로 작동된다.
    getAge:function(){
        return `${this.name}의 연식은 ${this.age} 입니다.`;
    }
};
console.log(obj);
console.log(obj.name);
console.log(obj.getAge());


// 2.Object 상수 => 생략(사용빈도 낮음) new ~

// 3.생성자 함수 => 생략(사용빈도 낮음) new ~

// 4.(*)생성자 함수 + prototype 확장, new ~
//   js내부의 라이브러리 구성 방식, 함수를 모든 객체가 같이 사용 -> 메모리 이득 발생함
// 생성자함수 : 함수명이 대문자로 시작함, 함수 내부에 this를 사용해서 멤버 구성
//             멤버함수는 prototype으로 확장
// 4-1.정의 => 지칭할 수 있는 클레스 명이 person으로 만들어짐
function Person(nm) {
    this.type = nm ?? '사람';

}

//4-2 확장 => 객체 내부로 세팅 x, 일종의 공용공간으로 배치 => 모든 동일 타입의 객체가 공유
Person.prototype.type2 = '변수확장'; // 비추
Person.prototype.getAge = function() {
    return `${this.type}의 나이는 ?`;
}

//4-3 사용
const obj2 = new Person('세종');
console.log(obj2);
console.log(obj2.type);
console.log(obj2.type2);
console.log(obj2.getAge());


