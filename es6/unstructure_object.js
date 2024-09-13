/**
 * 객체 구조 분해, 객체 비구조화 할당
 * - {...}, json으로 받은 데이터를 메모리에 로드하면 => 객체
 * - 멤버의 이름으로 분해, 이름이 틀리면 처리 x => undefined 처리됨
 */

// 0. 객체 준비, 기존방식 (5가지 방식 존재함)
const nm = 'SPA developer';
const pay = 6000;
const obj = {     
    // 객체 리터럴 방식, 1회성 객체, 이름x, 함수(혹은 생성자)의 파라미터로 주로 사용
    nm,
    pay
}

console.log(obj);
/*
  함수의 피라미터로 여러 데이터를 1회성으로 객체를 생성해서 전달하는 유형
$.ajax({
    url:'',
    data:'',
    dataType:'',
    success:()=>{}
})
 */

// 데이터 접근
//js에서는 와이드한 표현이다, 간소화되어 있지 않다
console.log(obj.nm, obj.pay); 


//1. 객체에 맴버명으로 추출
const { nm1, pay1} = obj;
console.log(nm1, pay1); // 이름이 다르다면?

var station = {
    s1:'다정동',
    s2:'나성동',
    s3:['정부종합청사북측', '정부종합청사남측']
}

console.log(station);
//2. 멩버명과 동일하게 변수를 생성하여 분해, 순서에 상관없이
let {s2, s1, s3} = station;
console.log(s1, s2, s3);

//3. 분해되서 생성된 변수값을 수정하면, 원본이 유지되는가?
s1 = '오송역';
console.log(station, s1);

// 4. 중첩구조 제시
const objs = {
    name: '세종',
    data: {
        year:2015,
        month:5
    },
    //객체내 표준함수 표기 => function만제거
    info() {
        return "웰컴";
    }
}

console.log(objs);
//분해
const {name, data:{year, month}, info} = objs;
console.log(year, month, info());
