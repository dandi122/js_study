/**
 * emotion을 적용한 컴포넌트
 */
// 아래 주석 표현도 같이 사용해야함
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import myStyle from '.';
import './Avata.css'; // css는 바로 가져온다(리소스)

export default function Avata( { user } ) {
    const { name, url, size } = user;
    return (
        <div style={ myStyle.styleMargin }>
            <img
                src={ url }
                alt={ `이미지 로드 실패 : ${name}` }
                style={{
                    width:size,
                    heigth:size,
                }}
                className='avata' // 클레스 직접 적용 (css에서 가져와서)
            />
            <div css={ css`
                color:red;
            `}>
                emotion
            </div>
        </div>
    );
}
