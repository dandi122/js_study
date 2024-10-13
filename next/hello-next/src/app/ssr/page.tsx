/**
 * SSR 표기
 * 현재 시간으로 표기
 * 서버 컴포넌트로 구성
 * - npm run dev로 작동시키면 페이지 요청때마다 새로 그린다
 * - npm run build => npm run start로 작동하면 요청할때마다 시간의 변동이 없다 
 *                   (현재상태는 ssg 상태이다. 즉 정적페이지가 완성되어 있는 단계 )
 */
// 0. ssr을 위한 코드 추가
/**
 * 특정 페이지나 컴포넌트를 항상 동적으로 렌더링하도록 설정
 * - 기능
 *      - 동적 렌더링
 *      - 캐싱 방지
 */
export const dynamic = "force-dynamic";

// 1. 모듈가져오기

// 2. 컴포넌트 구성
const SSRPage = () => {
    const timestamp = new Date().toLocaleString();
    const msg       = `페이지 생성 시간 ${timestamp}`;
    console.log( msg );
    return (
        <>
            SSR 페이지 / {msg}
        </>
    );
}

// 3. 대표 모듈화
export default SSRPage;