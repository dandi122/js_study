import MultiButton from "./MultiButton";
import View from "./View";
import myStyle from '../css';

export default function Counter () {
    return (
        <div style={ myStyle.styleDiv }>
            <h3>카운터 + 전역상태관리 - justand</h3>
            <View />
            <MultiButton />
        </div>
    );
}