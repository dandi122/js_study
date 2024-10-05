/**
 * 커스텀 훅 사용
 */
import useWindowInfo from "./useWindowInfo";
import myStyle from "../css";

const CusHook = () => {
    const { width, height }= useWindowInfo();
    return (
        <>
            <div style={ myStyle.styleMargin }>
                <h3>커스텀 훅</h3>
                <p>윈도우의 크기 정보</p>
                <p>{width} px / {height} px </p>
            </div>   
        </>
    );
}

export default CusHook;