/*
  - node 기반에서 모듈 가져오기
    - "써드파트 모듈명", "상대경로법 내가만든 모듈명"
    - 내가 만든 모듈인 경우 확장자 .js 생략 가능함
    - 내가 만든 모듈인 확장자가 없는 경우
        - './form'
            - form을 폴더로 간주하고 하위에 index.js 체크한다
            - 존재하면 해당 내용을 가져온다
        - './form/MyCheckBox'
            - MyCheckBox를 폴더로 간주 => index.js 검사
            - 없으면, MyCheckBox.js로 검사
        - './form/MyCheckBox.js'
            - MyCheckBox.js를 검사
    - index.js를 사용한다는 의미
        - 여러개의 컴포넌트를 묶어서 대표 모듈을 생성할 때 사용
        - 패키지 구성 같은 느낌
 */

// 1. 모듈 가져오기
import LifeCycle from './LifeCycle';
import MyInput from './MyInput';
import MyCheckBox from './MyCheckBox';
import MySelect from './MySelect';

// 2. 개별 모듈화
export {
    LifeCycle,
    MyInput,
    MyCheckBox,
    MySelect
}; 