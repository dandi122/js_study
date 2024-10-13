/**
 * rest api용, 더미데이터 사용 
 *  - 빌드 후 작동 테스트
 *      - 새로고침 -=> 정적페이지는 그대로 구성 => 나중에 데이터 패칭 => 화면갱신 작동
 */
// 1. 요청과 응답 타입 모듈 가져오기
import type {
    NextApiRequest,
    NextApiResponse
} from 'next';

// 2. 통신에 필요한 타입 구성 => 스프링부터에 비유하면 DTO
type DummyResponse = {
    name:string
}
// 3. 요청시 작동한 api 함수 구현
//    URL => /api/hello
export default ( req:NextApiRequest, res:NextApiResponse<DummyResponse> ) => {
    // 더미응답
    res.status(200).json( {name:'api/hello 메세지'} )
}