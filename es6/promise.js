/**
 * js 실행환경
 *  - '싱글 쓰레드' 작동
 *  - 넌블러킹 성질을 가진다(코드는 그대로 계속 진행됨)
 *   - 윗 라인의 코드의 결과가 안나왔는데 다음 코드는 그대로 진행됨
 *   - 오류가 발생(위의 결과를 가지고 다음 코드에서 사용한다면)
 * 
 *  - 개발시 자주 발생하는 케이스
 *   - 비동기적 상황을 동기적(순차적)으로 처리하고 싶다면?
 *   - 통신1 -> 응답 -> 받은 내용을 조작 -> 통신 2 -> ....
 *   - 비동기 상황 발생
 *    - i/o bound 작업(db, 네트워크, 파일, ...)
 *   - 해결
 *    - 기존 : 콜백함수
 *    - 추가 : Promise 패턴, async ~ await, 제너레이터 방식 등 
 */

// 파일 I/O를 이용하여 비동기 상황을 발생 => 동기식 처리 수행
// 목표 : 1.txt -> 읽고, 출력 -> 2.txt 읽고, 출력, 3.txt -> 읽고, 출력


// CJS 방식으로 모듈가져오기 수행, 현재 코드는 서버측 방식으로 작동됨
// '모듈명' or '상대경로법 묘사된 다른 js => ./mod/xxx.js'
const fs = require('fs')   // node를 설치하면 자동으로 설치된다.

// 일반구동 => 클래스 구성 및 객체 생성 최신 문법 방식
class Test {
    // 생성자
    constructor () {
        // __dirname : 현재 파일의 디렉토리 경로 획득, 내장 변수
        this.FILE1 = __dirname + '/data/1.txt';
        this.FILE2 = __dirname + '/data/2.txt';
        this.FILE3 = __dirname + '/data/3.txt';
        console.log(this.FILE1);
    }
    // 일반 처리
    sample () {
        // FILE1 -> FILE2 -> FILE3 순으로 코드를 읽었다.
        // 결과는 FILE1, FILE3, FILE2 순으로 출력되었다 => 의도를 벗었났다
        // 왜 => 비동기 코드, 넌블럭킹 특성을 가지므로, FILE2번 출력이 완료되기도 전에 
        // FILE3번이 먼저 진행되고 완료된것임
        // 각각 수행시간이 1초, 10초, 1초라면
        // 동기식 12초
        // 비동기식 10초
        fs.readFile( this.FILE1, (err, data) =>{
            console.log(err, data);
        })
        fs.readFile( this.FILE2, (err, data) =>{
            console.log(err, data);
        })
        fs.readFile( this.FILE3, (err, data) =>{
            console.log(err, data);
        })
    }
    // 콜백함수 처리 : f1 읽고 출력-> f2 읽고 출력-> f3 읽고 출력
    // 코드가 길수록, 로직이 많을수록 => 콜백헬에 빠질 확률이 높다
    normal() {
        fs.readFile( this.FILE1, (err, data) =>{
            console.log(err, data);
            fs.readFile( this.FILE2, (err, data) =>{
                console.log(err, data);
                fs.readFile( this.FILE3, (err, data) =>{
                    console.log(err, data);
                })
            })
        })
    }
    // 해결 => Promise 객체를 이용한 패턴처리, ES6에서 추가,
    // 1. 정의 -> Promise 객체를 반환하는 함수, 내부에서 비동기 코드가 사용되야함
    // 2. 사용 -> 정의된함수().then().then().... catch().finally()
    
    // 1. 정의
    es6_promis_define(filename) {
        //콜백함수의 2개 인자가 모두 콜백함수다
        //resolve : 작업이 선공하면 호출(데이터를 담아서)
        //reject : 작업이 실패하면 호출(데이터를 담아서)
        return new Promise((resolve, reject)=>{
            //실질적 작업 => 파일읽기
            fs.readFile( filename, (err, data) =>{
                if(err) reject(err) // 오류상황 : ex)해당 파일 없다..
                else resolve(data) // 성공 상황
            })
        });
    }
    // 2. 사용
    es6_promise_use() {
        this.es6_promis_define(this.FILE1)
        .then((data)=>{
            console.log(data); // this.FILE1을 읽은 결과
            return this.es6_promis_define(this.FILE2);
        }) //정상
        .then((data)=>{
            console.log(data); // this.FILE2을 읽은 결과
            return this.es6_promis_define(this.FILE3);
        })
        .then((data)=>{
            console.log(data); // this.FILE3을 읽은 결과
        })
        .catch((err)=>{
            console.log(err); // 오류
        })
        .finally(()=>{
            console.log("작업종료"); // 완료
        })
    }

    // Promise 패턴을 활용하여 비동기 처리를 실제 사용할때 코드가 너무 길다!!, depth는 짧지만 -> 좀더 간략하게?
    // async ~ await
    // 1. async는 함수 앞에 붙이면 됨
    // 2. 함수 내부에는 반드시 await를 사용해야 하고, 비동기 코드 앞에 배치해야함
    async promise_test_upgrade() {
        // await : 기다려, 작업 끝날때까지
        console.log(await this.es6_promis_define(this.FILE1));
        console.log(await this.es6_promis_define(this.FILE2));
        console.log(await this.es6_promis_define(this.FILE3));
    }
}
const obj = new Test();
// obj.sample();
// obj.normal();
// obj.es6_promise_use();
obj.promise_test_upgrade();
