// 1. 모듈가져오기
import './App.css';
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import axios from 'axios';
import {
  Avatar,
  Chip,
  Table,         // 테이블 테그
  TableHead,     // 테이블 헤더 => 컬럼명
  TableBody,     // 테이블 바디 => 데이터
  TableRow,      // 데이터 한줄
  TableCell,     // 데이터 한줄당 컬럼별 데이터
  TableContainer,// 테이블을 포함할 수 있는 컨테이너, 가장 바깥쪽에 사용
  Paper,         // 페이저는 컨테이너에 적용한 컴포넌트 유형값 사용
  Button,               // 버튼, 닫기용
  Dialog,               // 팝업으로 뜨는 다이얼로그 저넻를 대변
  DialogActions,        // 팝업에서 이벤트 등록, 구성
  DialogContent,        // 팝업에서 내용 => 상품 상세정보
  DialogContentText,    // 상새 내용이 텍스트만 존재한다면
  DialogTitle,          // 팝업의 제목
  Card,                 // 특정 장면을 위한 큰 단위
  CardActions,          // 카드상에 이벤트
  CardContent,          // 카드상에 내용
  CardMedia,            // 카드사에 멀티미디어(사진, 음악, 동영상....)
  Typography,           // 텍스트 처리
} from '@mui/material'


async function  getAllProducts ( url ) {
  const res = await axios.get( url );
  return res.data.map( (product, idx) => {
    const { image, price } = product;
    return (<li key={idx}>
      <img src={ image } width='30px'/>
      <b>{ price }</b>
    </li>);
  } );
}

const makeProductJSX = (p, idx, handleClick)=>{
  const {title, price} = p;
  return(
    // https://mui.com/material-ui/react-chip/
    <div style={{margin:"2px"}} key={idx}>
      <Chip label={`${title} - $${price}`} variant="outlined" onClick={handleClick}/>  
    </div>
  );
};

export default function App5 ( { name, url, pid } ) {    // props를 객체분해해서 {name, ...}을 바로 적용

  const productID                    = useRef( parseInt(pid) ); // 현재 클릭한 제품의 고유 ID
  const [productAll, setProductAll]  = useState( null ); // 모든 상품 정보
  const [product, setProduct]        = useState( null ); // 1개 상품 정보 jsx
  
  useEffect(()=>{
    console.log('1회 초기화', url, productID.current);
  });

  const pdtClickHandler = useCallback( async ()=>{
    const res = await axios.get( `${url}/${productID.current}` );
    const {title, description, price, category, image } = res.data; // 필요한만큼 객제 구조 분해로 정보 추출
    // 상태변수에 JSX 세팅
    setProduct(
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300, objectFit : "cover" }}   // 미디어 스타일 지정
        image={image}
        title="green iguana"
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} / {price} $ / {category}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      // <>
      //   <Avatar
      //     alt={title}
      //     src={image}
      //     sx={{ width: 100, height: 100 }}
      //     />
      //   <p>{title}</p>
      //   <p>{price}</p>
      //   <p>{category}</p>
      //   <p>{description}</p>
      // </>
    );
  }, [url, productID.current] );

  function detailProduct (pdt_id) {
    // pid : 제품의 고유 아이디 값, 클릭 이벤트가 발새한 셀에 등록된 제품의 고유 id값
    console.log(pdt_id);
    productID.current = pdt_id; // 현재 클릭한 제품 번호 세팅
    pdtClickHandler();
    handleClickOpen();
  };

  const pdtAllMemo = useMemo( async ()=>{
    const res = await axios.get( url );
    const arr = res.data.map( (product, idx)=>{
      //makeProductJSX( p, idx, pdtClickHandler) 
      // 1.상품 정보별로 게시판에 표시할 저오 추출
      const {id, title, price, description} = product;
      // 2.자체적인 필터링을 통해 가격이 150달러 이상(>=)인 제품만 포함시키겠다
      if(price >= 150) {
        return (
          <TableRow
            key={idx}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={()=> detailProduct(id)}
          >
            <TableCell align="right">{id}</TableCell>
            <TableCell align="right">{title.substring(0,25)+" .."}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">{description.substring(0,50)+" .."}</TableCell>
          </TableRow>
        );  
      }
      return null;  // jsx값이 null이면 화면 처리 안함 => 조건부 랜더링
    });
    setProductAll(arr); // 상태변수에 세팅
    return arr;
  }, [ url ] );
  console.log(pdtAllMemo);  // 여기서는 Promise 객체(통신을 수행해서 나온 결과)로 데이터가 캐싱되어 있다.

  // 다이얼로그 팝업을 보이는가? 안보이게하는가? => 상태변수
  const [open, setOpen] = useState(false);
  // 팝업을 보이게 처리하는 이벤트 핸들러 함수
  const handleClickOpen = () => {
    setOpen(true);
  };
  // 팝업을 안보이게 처리하는 이벤트 핸들러 함수
  const handleClose = () => {
    setOpen(false);
    setProduct(null);
  };

  return (
    <div className="App">
      <p><span style={{ color:'red' }}>기본</span><b>페이지</b></p>
      {/* 상품 정보를 게시판 형태로 노출, 테이블, 헤더(컬럼배치), 바디(데이터는 비어있음), 페이징? */}
      <center>
        <TableContainer component={Paper}>
        {/* sx: 스타일시트 인라인 직접 적용 css속성 */}
        
          <Table sx={{ maxWidth: "80%" }} aria-label="상품 목록">
            <TableHead>
              <TableRow>
                {/* 컬럼 4개 */}
                <TableCell>No(100g serving)</TableCell>
                <TableCell align="right">제품명</TableCell>
                <TableCell align="right">가격($)</TableCell>
                <TableCell align="right">제품설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productAll}
            </TableBody>
          </Table>
        </TableContainer>
      </center>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"제품 상세 정보"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {product}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

