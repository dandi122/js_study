/**
 * 객체 비구조화 할당
 */
import {
    IPerson,
    ICompany
} from './IPerson_ICompany';

let obj:IPerson = { name:'커피', age:300 }, 
    obj2:IPerson = { name:'우유', age:1000 }
console.log( obj, obj2 )

// 비구조화 처리
const { name, age } = obj
console.log( name, age )

// 직접 객체
// 기존 방식 그대로 사용해도 문제없이 작동
let addr:any = {
    country:'korea',
    language:'한글',
    address:'sj 10 street'
}
console.log( addr )
const { language, ...rest } = addr;
console.log( 'language =>', language, rest )

// deep 카피 -> 이상 없음
let temp = {...addr, ...obj}
console.log( temp )