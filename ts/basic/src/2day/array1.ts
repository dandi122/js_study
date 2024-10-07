/**
 * 배열기초
 */

// 배열은 객체이다. push를 통해서 멤버 추가 가능함
// 비워있는 배열은 new Array()를 통해서 생성가능함. 혹은 [] 처리 가능
//  - new Array() => 코드가 수행될 때 동적으로 메모리가 할당됨 = 빈 공간에 동적 생성
//  - [] => 컴파일시 배열할당이 되서 메모리에 로드됨 => 메모리를 점유하고 생성

let array = new Array();
console.log(array);
// 데이터 추가
array.push(1);
console.log(array, typeof array);
array.push(2);
array.push('hi');  // 동일 타입이 아니여도 삽입된다 => 기존 js
console.log(array, typeof array);
// 결론, 동적할당은 필요시 배열을 만들고 멤버를 자유롭게 추가/삭제 등등 할때 사용

// 단축표시 방법 => [멤버,....] => 컴파일 후 구동시 바로 공간 확보
let nums = [1,2,3];
let langs = ['JAVA','JAVASCRIPT'];
console.log(nums, langs);
//배열임을 어떻게 확인
console.log(Array.isArray(nums), Array.isArray({}));
