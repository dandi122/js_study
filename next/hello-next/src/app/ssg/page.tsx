/**
 * SSG 페이지 
 *  - 10초 주기로 재생성(정적 페이지 갱신)
 *      - 통신 후 파싱하여 화면 표기
 *          - https://jsonplaceholder.typicode.com/posts
 *      - 시간 로그 표기
 */
// 1. 모듈가져오기

// 2. 타입(옵션) + 통신함수
interface IPost {
    userId:number,
    id:number,
    title:string,
    body:string,
}
// 데이티 패칭 함수
async function fetchPosts():Promise<IPost[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('데이터 새로 획득', new Date());
    return res.json();
}
// 3. 서버 컴포넌트 구성
const SSGPage = async () => {
    const posts = await fetchPosts(); // 리턴값을 배열, 맴버는 객체
    //console.log( posts );
    return (
        <div>
            SSGPage
            <div>
                <h2>블로그 더미 목록</h2>
                <ul>
                    {
                        posts.map( post=>(
                            <li key={post.id}>
                                <h4>{post.title}</h4>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

// 4. 재생성 주기 설정
export const revalidate = 10; //10초마다 페이지 정적 구성 진행

// 5. 컴포넌트 대표 모듈화
export default SSGPage;