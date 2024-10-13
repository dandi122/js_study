/**
 * 본 페이지 진입시, 세션이 없으면 /login으로 자동이동(포워딩)한다
 *  - 세션을 어디서 체크할것인가?
 *    - sessionStorage를 사용 / html5에서 추가되었다
 *      - 세션획득, 세션제거, 세션추가/설정(업데이트) => 함수, 모든페이지에서 사용가능
 *  - 로그아웃
 */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// UI 컴포넌트에 사용되는 타입 
import type { Router, Navigation } from "@toolpad/core";
// TODO 세션관련 내용 획득
import {
  getSession,     // 세션 체크용
  removeSession   // 로그아웃용
} from '../util';
// TODO 페이지 이동 관련
import { useNavigate } from 'react-router-dom';

// 타입가져오기
// import type : 오직 타입만 가져온다는 명시적인 표현
import type {
    DemoProps,
    IPage
} from '../types';
// 커스텀 컴포넌트 가져오기
import Main from '../jsTots';

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "로그인 정보",
  },
  {
    segment: "logout",
    title: "logout",
    icon: <DashboardIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// 컴포넌트의 인자 => props인데 아래와 같은 표현은 => props를 바로 객체 구조분해 처리하여 받기
// { pathname: string }이 타입이다, 1회성으로 사용하기 위해 타입의 본체를 직접 타입자리에 배치한 것임
/*
function DemoPageContent(props: { pathname: string }) {
function DemoPageContent(props: 타입) {
*/
function DemoPageContent({ pathname }: IPage) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
      {
        pathname === '/dashboard' && <Main/>
      }
    </Box>
  );
}

export default function DashboardLayoutBasic(props: DemoProps) {
  // TODO 페이지 이동 관련 
  const navigate = useNavigate();
  // TODO 세션체크 <- 컴포넌트가 보일려고 한다!!
  React.useEffect( ()=>{
    // 1. 세션 획득
    const { uid } = getSession();
    // 2. 세션 판단 (세션이 없다면)
    if( uid === '') {
      // 3. 로그인 페이지 이동 -> react-route-dom에서 제공(프로그램적으로 페이지이동)
      navigate('/login');
    }      
  }, [navigate])

  const { window } = props;
  // 명확한 타입이라, 타입추론이가능하므로 타입주석 생략 가능하다
  //const [pathname, setPathname] = React.useState<string>("/dashboard");
  
  // 상태변수, 최초 로드된 페이지 주소 설정
  const [pathname, setPathname] = React.useState("/orders");
  React.useEffect(()=>{
    // pathname이 변경되면 호출된다, 이부분이 수행된다
    if( pathname === '/logout' ) {
      // 사용자가 로그아웃을 클릭했다 -> 이벤트 감지 -> useEffect() 호출됨
      // 1. 세션 삭제
      removeSession();
      // 2. 알림창
      alert('로그아웃 되었습니다.');
      // 3. 로그인 화면이동
      navigate('/login');
    }
  }, [pathname])

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
