/**
 * 배열 데이터 엑세스, 연산, 변형, 필터링
 */

let arr = [10, 20, 30, 40, 50];

//1.멤버들을 하나씩 접근해서, 뭔가 작업을 수행한다
//  for문 보다 압도적으로 빠름
arr.forEach((data, idx)=>{
    console.log(data, idx);
})

// 2. 배열의 모든 멤벋르을 3배 증가 시키시오
const arr_3x = arr.map(data => data*3);
// 위나 아래나 같은 표현
const arr_3x_2 = arr.map(function(data) {
    return data*3;
})
console.log(arr_3x_2);

// 3. 필터링 => 조건을 만족하는 멤버만 추출할때 사용
console.log(arr.map(data => data/10).filter(data => data % 2));

// 4. 배열 멤버들을 이용한 연산
//    멤버들의 총합 획득
console.log(arr.reduce((pv, cv)=>pv+cv));