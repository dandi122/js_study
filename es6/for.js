/**
 * 기존
 *  - for ~
 *  - for ~ > i 값을 증가해서 처리
 *  = for ~ in => 데이터에서 인덱스값이 나와서 처리
 *  - for ~ or => 다ㅔ이터를 한개씩 추출되어 처리 
 */

let datas = [10, 20, 30, 40];
// 테이터를 직접 추출해서 사용시
for(let data of datas) {
    console.log(data);
};
// 데이터의 인덱스가 나와서 데이터 추츨을 별도 로 진행함
for(let idx in datas) {
    console.log(idx, datas[idx]);
};
