/**
 * 네트워크 연동
 *  - 서버로부터 가져온 데이터를 훅을 이용하여 변수로 저장
 *      - $ npm i axios --save
 *      - 네트워크용 라이브러리로 axios or fetch()  사용 가능함
 *  - 이 과정에서 최적화
 *      - 메모이제이션 => 캐싱 => 1회성으로 세팅되면, 화면갱신시 재구성 x, 변하지 않는 고연산 데이터/함수 등 대체
 *  - 확장 
 *      - 환전 => 환율계산기 응용, 물타기계산기
 */
// 1. 모듈가져오기
import './App.css';
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
} from 'react';
import axios from 'axios';
import {
  Avatar,
  Chip  //상품 목록중 제목과 가격만 DP 하는 용도 + 클릭 이벤트 추가
} from '@mui/material'

// async function  getAllProducts ( url ) {
//   console.log('모든 상품 정보를 가져온다');
//   const res = await axios.get( url );
//   //console.log( res.data ); // 실제 응답 데이터, json 형태, {}
//   // 제품사진, 가격 => JSX 생성 => 목록 표시(특정 가격이상 필터링, 카테고리 선택으로 필터링 )
//   return res.data.map( (product, idx) => {
//     const { image, price } = product;
//     return (<li key={idx}>
//       <img src={ image } width='30px'/>
//       <b>{ price }</b>
//     </li>);
//   } );
// }

// 상품 정보 입력  => 상숨 DP용 JSX 생성 함수
// const makeProductJSX = (p, idx)=><li key={idx}><img src={ p.image } width='30px'/><b>{ p.price }</b></li>;
const makeProductJSX = (p, idx, handleClick)=>{
  const {title, price} = p;
  return(
    // https://mui.com/material-ui/react-chip/
    <div style={{margin:"2px"}} key={idx}>
      <Chip label={`${title} - $${price}`} variant="outlined" onClick={handleClick}/>  
    </div>
  );
};

// 2. 대표모듈로 함수형 컴포넌트 정의
export default function App3 ( { name, url, pid } ) {
  // url을 직접 사용, pid는 useRef로 사용
  const productID   = useRef( parseInt(pid) ); // Number(pid) );
  const [productAll, setProductAll]  = useState( null ); // 모든 상품 정보
  const [product, setProduct]  = useState( null ); // 1개 상품 정보 jsx
  
  

  // 1회성에서는 상태변수 초기화 주의!
  useEffect(()=>{
    console.log('1회 초기화', url, productID.current);
    // const res = getAllProducts( url );
    // res.then( data=>{
    //   //console.log( data );
    //   // 상품 데이터중 이미지와 가격 정보를 추출한 JSX를 상태변수에 세팅
    //   console.log(data[0]);
    //   // setProductAll( data );
    // } );        
  });

  // 메모이제이션 함수 캐싱 = 함수 로드를 1회만 수행하라 => 사용할 때는 캐싱된 함수를 사용
  const pdtClickHandler = useCallback( async ()=>{
    // 최종 요청 페이지는 : 'https://fakestoreapi.com/products'+'/'+1
    console.log('useCallback()에 캐싱된 함수 콜');
    const res = await axios.get( `${url}/${pid}` );
    const {title, description, price, category, image } = res.data; // 필요한만큼 객제 구조 분해로 정보 추출
    // 상태변수에 JSX 세팅
    setProduct(
      <>
        <Avatar
          alt={title}
          src={image}
          sx={{ width: 100, height: 100 }}
          />
        <p>{title}</p>
        <p>{price}</p>
        <p>{category}</p>
        <p>{description}</p>
      </>
    );
  }, [url, pid] );


  // 메모이제이션 데이터 캐싱 구현
  // 1. 인수를 받지 않는 뭔가를 계산해서 반환하는 함수 : 1번 인자
  // 2. 함수 내부에서 계산시 사용할 재료(인수(자))를 포함하는 종속성 목록(배열) : 2번 인자
  // (*)화면이 갱신되도 해당 코드는 작동 x
  const pdtAllMemo = useMemo( async ()=>{
    console.log('useMemo 1회 호출')
    const res = await axios.get( url );
    const arr = res.data.map( (p, idx)=>makeProductJSX( p, idx, pdtClickHandler) );
    setProductAll(arr); // 상태변수에 세팅
    return arr;
  }, [ url ] );
  console.log(pdtAllMemo);  // 여기서는 Promise 객체(통신을 수행해서 나온 결과)로 데이터가 캐싱되어 있다.

  // 제목, 이미지, 가격, 상세보기 버튼 추가


  return (
    <div className="App">
      <p><span style={{ color:'red' }}>기본</span><b>페이지</b></p>
      <div>
          상세 상품 정보
          { product }
      </div>
      <div>
          { productAll }
      </div>
      {/* 수평선 */}
      <hr width = "100%" color = "blue" size = "1"/>
    </div>
  );
}

