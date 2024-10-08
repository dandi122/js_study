/**
 * 배열 + 타입스크립트를 이용한 배열의 내부 함수를 만들어 보기
 *  - 타입스크립트 연습
 */

// 1부터 100까지 각 정수의 총합 구하기
// step 1 => [1,2,3 ....100] 배열구하기
// 실습 1분, 배열을 받을 변수는 numArray
console.time('range2');
const range3 = (from:number, to:number):number[] => from<to ? [from, ...range3(from+1,to)] : []
const numArray:number[] = range3(1, 100+1);
console.log(numArray);

console.time('for + sum')
let sum = 0;
for(let i=0; i<numArray.length; i++){
    sum +=numArray[i]; 
}
console.timeEnd('for + sum')
console.log(sum);
//step2 => 1부터 100까지 각 정수의 총합 구하기
//함수 정의 : 실습, 재귀적호출, 타입스크립트 제네릭사용, for, 5분
//연습1. 오류 마크(빨간줄)이 없어지게 형태구성
// const allSum = (array:number[], cb:(result:number, value:number)=>number, initValue:number) => {}
//연습2. 요구사항에 맞게 조정 => 제네릭사용 => 타입에 관계없이 적용되게 업그레이드 =>T
const allSum = <T>(array:T[], cb:(result:T, value:T)=>T, initValue:T):T => {
    //최초 누적 합은 0이다, 전달된 초기값으로 세팅
    let result:T = initValue;
    //반복문에서 하나씩 데이터르 ㄹ추출해서 진행
    for(let i=0; i<array.length; i++){
        //콜백 활용 cb(누적합, 배열의 i번째 멤버값) => 새로운 누적합 => result에 세팅(업그레이드)
        result = cb(result, array[i])
    }
    //누적된 총합 반환
    return result;
}

//함수 사용
//파리미터 = 원본배열데이터, 콜백함수, 합산초기값
//콜백함수 = (누적값, 배열의 개별값) => 누적합+배열의 개별값
//파라미터 세팅 순서(0, 1), (1, 2), (3, 3), (6, 4)......
console.time('cb + sum')
let resultAllSum = allSum(numArray, (result, value)=>result+value, 0);
console.timeEnd('cb + sum')
console.log(resultAllSum);

// 1<= x <=100 까지 모든 수들 중 짝수의 총합 구하기
// 원본 => 필터링 => 총합
const filter = <T>(array:T[], cb:(value:T)=>boolean):T[] => {
    let result:T[] = [];
    // 배열 데이터 하나씩 획득 => 판단 => result에 해당되는 데이터 추가(스프레드연산(push)....)
    for(let i=0; i<array.length; i++){
        //데이터 추출
        let value:T = array[i];
        // 데이터 짝수 여부 체크
        if(cb(value)){
            result = [...result, value];
            // console.log(result);
        }
    }
    return result;
}




// 개별 값이 짝수인지 혹은 홀수인지 체크하는 함수 => 콜백함수
// (값:number):boolean => 판단
const isEven = (value:number):boolean=> value%2 == 0;
//사용 
console.time('cb + filter + sum');
resultAllSum = allSum(filter(numArray, isEven), (result, value)=>result+value, 0);
console.timeEnd('cb + filter + sum');
console.log(resultAllSum);

// map 함수
// 1제곱 + 2제곱 + 3제곱 + 4제곱 + ..... 100제곱
//여기서 T는 재료 중심
//여기서 Q는 연산된 데이터 결과중심 구분하여 표현 -> T와 타입이 같을수도, 다를수도 있다, 다르다면 표현
const map = <T, Q>(array:T[], cb:(v:T)=>Q):Q[]=>{
    let result:Q[] = [];
    for(let i=0; i<array.length; i++){
        result = [...result, cb(array[i])]
    }
    return result
}

const map1 = <T>(array:T[], cb:(v:T)=>T):T[]=>{
    let result:T[] = [];
    for(let i=0; i<array.length; i++){
        result = [...result, cb(array[i])]
    }
    return result
}

// 사용
console.time('cb + map + sum');
resultAllSum = allSum(map(numArray, (v:number)=>v*v), (result, value)=>result+value, 0);
console.timeEnd('cb + map + sum');
console.log(resultAllSum);

// number 배열 => map => string 배열로 나왔다
// <T, Q>, T자리에는 number가 Q자리에는 string이 호출시점에 타입이 결정된다
console.log(map(numArray, (v:number)=>v+"i"))

// 제네릭 범용성
