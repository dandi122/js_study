/**
 * 가장 기본형 함수형 컴포넌트 구성
 *  - jsx : <div></div>
 *  - 실습 1분
 */
import HelloComponent from './components/HelloComponent'
import EventComponent from './components/EventComponent'
import PropsComponent from './components/PropsComponent'
import JSXComponent from './components/JSXComponent'
import ContextComponent from './components/ContextComponent'
import UseStateComponent from './components/UseStateComponent'
import UseRefComponent from './components/UseRefComponent'
import UseEffectComponent from './components/UseEffectComponent'
import UseReducerComponent from './components/UseReducerComponent'


const Main = ()=>{
    return (
        <div>
            {/* 훅 */}
            <UseReducerComponent initValue={0}/>
            <UseEffectComponent /> {/** 함수형 컴포넌트의 훅 중 useEffect*/}
            <UseRefComponent />    {/** 함수형 컴포넌트의 훅 중 useRef*/}
            <UseStateComponent value={0}/> {/** 함수형 컴포넌트의 훅:상태변수, 타입 */}

            {/* 기본형 */}
            <ContextComponent />{/** Context 적용 */}
            <JSXComponent /> {/** JSX.Element, 타입사용 */}
            <PropsComponent /> {/** props를 겹겹이 구성된 컴포넌트에서 사용하기 */}
            <EventComponent /> {/** ts에서 이벤트 핸들러를 통해 전달되는 이벤트 객체 타입 */}
            <HelloComponent /> {/** ts의 함수형 컴포넌트의 여러 모습 */}
            ts기반 tsx
        </div>
    );
}
export default Main;