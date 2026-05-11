<<<<<<< HEAD
// 전역 스타일 — 폰트 선언, CSS 리셋, body 기본값
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

=======
// 전역에 사용되는 스타일을 적용시키기위한 파일
// 폰트, 리셋
import { createGlobalStyle } from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  /* css 스타일 리셋 */
  ${reset}

>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  /*
    100 Thin
    200 Extra Light
    300 Light
    400 Regular
    500 Medium
    600 Semi Bold
    700 Bold
    800 Extra Bold
<<<<<<< HEAD
    900 Black
=======
    900 Black 
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  */

  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Thin.woff2) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  @font-face {
    font-family: 'pretendard';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  body {
<<<<<<< HEAD
    font-family: 'pretendard', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    letter-spacing: -0.02em;
    line-height: 1.3;
    text-decoration: none;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
=======
    font-family: 'pretendard';
    /* font-weight: 900; */
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.2px;
    text-decoration: none;
    color: #131313;
    line-height: 1.3;
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
  }

  button {
    cursor: pointer;
    border: none;
<<<<<<< HEAD
    background: none;
    font-family: 'pretendard', sans-serif;
  }

  a {
    /* text-decoration: none;
    color: inherit; */
  }
`;

export default GlobalStyle;
=======
  }

`
export default GlobalStyle;
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
