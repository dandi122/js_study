/**
 * 페이지 이동 예시
 * - 현재 화면은 서버 컴포넌트 화면
 */
import Link from "next/link";
import { redirect } from 'next/navigation';

export default function Page () {
    // 타이머 내부에서 직접가는 행위는 문제가 있는듯, 우회하던지 함수로 감싸서 처리하는등 시도
    // setTimeout(()=>{
    //     // 3번 유형
    //     // 2초후 /ssg로 이동한다
    //     console.log('타이머 작동');
    //     redirect('/ssg');
    // }, 1000*2)
    redirect('/ssg');

    // 1번 유형
    // 화면에 링크를 노출하여 사용자가 클릭하면 이동
    return <Link href="/csr">csr</Link>
}