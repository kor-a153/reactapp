import styled, { css } from "styled-components"
import { flexBetweenColumn, flexBetweenRow, flexCenterRow, h10Bold, h10Extrabold, h10Regular, h11Bold, h11Extrabold, h11Regular, h1Bold, h1Extrabold, h1Regular, h2Bold, h2Extrabold, h2Regular, h3Bold, h3Extrabold, h3Regular, h4Bold, h4Extrabold, h4Regular, h5Bold, h5Extrabold, h5Regular, h6Bold, h6Extrabold, h6Regular, h7Bold, h7Extrabold, h7Regular, h8Bold, h8Extrabold, h8Regular, h9Bold, h9Extrabold, h9Regular } from "../../styles/common"

const S = {}

export const sizeCSS = {

  "h1Regular": h1Regular,
  "h2Regular": h2Regular,
  "h3Regular": h3Regular,
  "h4Regular": h4Regular,
  "h5Regular": h5Regular,
  "h6Regular": h6Regular,
  "h7Regular": h7Regular,
  "h8Regular": h8Regular,
  "h9Regular": h9Regular,
  "h10Regular": h10Regular,
  "h11Regular": h11Regular,

  "h1Bold" : h1Bold,
  "h2Bold" : h2Bold,
  "h3Bold" : h3Bold,
  "h4Bold" : h4Bold,
  "h5Bold" : h5Bold,
  "h6Bold" : h6Bold,
  "h7Bold" : h7Bold,
  "h8Bold" : h8Bold,
  "h9Bold" : h9Bold,
  "h10Bold" : h10Bold,
  "h11Bold" : h11Bold,

  "h1Extrabold" : h1Extrabold,
  "h2Extrabold" : h2Extrabold,
  "h3Extrabold" : h3Extrabold,
  "h4Extrabold" : h4Extrabold,
  "h5Extrabold" : h5Extrabold,
  "h6Extrabold" : h6Extrabold,
  "h7Extrabold" : h7Extrabold,
  "h8Extrabold" : h8Extrabold,
  "h9Extrabold" : h9Extrabold,
  "h10Extrabold" : h10Extrabold,
  "h11Extrabold" : h11Extrabold,

  "h7-regular": css`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,

  "h8-regular": css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,

  "h9-regular": css`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,

    "h10-regular": css`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.03em;
  `,

  "h2-bold": css`
    font-size: 60px;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -0.03em;
  `,

  "h4-bold": css`
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: -0.03em;
  `,

  "h6-bold": css`
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.03em;
  `,

  "h7-bold": css`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,

  "h8-bold": css`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,

  "h9-bold": css`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,

  "h11-bold": css`
    font-size: 10px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.03em;
  `,

  "h7-exBold1" : css`
    font-size: 80px;
    font-weight: 800;
    line-height: 98px;
    letter-spacing: -0.03em;
  `,

  "h7-exBold7" : css`
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,

    "h8-exBold8" : css`
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: -0.03em;
  `

}

export const colorCSS = {
  "faillog-red" : "#F53102",
  "faillog-black" : "#333333",
  "faillog_blue" : "#027DF0",
  "faillog_green" : "#00B53F",
  "faillog_purple" : "#AB47FF",
  "faillog_white" : "#FFFFFF",

  "faillog_light_blue" : "#DBEAFE",
  "faillog_light_green" : "#D1FFE1",
  "faillog_light_purple" : "#F3E8FF",
  "faillog_light_red" : "#FFE4E6",

  "faillog_gray1" : "#F2F2F2",
  "faillog_gray2" : "#E6E6E6",
  "faillog_gray4" : "#CCCCCC",
  "faillog_gray8" : "#999999",
  "faillog_gray9" : "#8D8D8D",
  "faillog_gray10" : "#555555",

  "faillog-sector-gray" : "#F8F9FA"
}

export const boxShadow = {
  "boxBasic" : css`
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
  `
}

S.Span = styled.span`
  ${({size}) => sizeCSS[size]}
  color: ${({color}) => colorCSS[color] ? colorCSS[color] : "#333333"};
  display: ${({display}) => display ? display : "inline"};
  /* overflow: ${({isvisible}) => isvisible ? "visible" : "hidden"}; */
  overflow: visible;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  /* margin-top: ${({marginTop}) => marginTop}; */
`

//일정 글자수 이상 되면 ...보여주기
S.Span2 = styled.span`
  ${({size}) => sizeCSS[size]}
  color: ${({color}) => colorCSS[color] ? colorCSS[color] : "#333333"};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({lineclamp}) => lineclamp ? lineclamp : 2};
  overflow: ${({isvisible}) => isvisible ? "visible" : "hidden"};
  text-overflow: ellipsis;
`

S.Img = styled.img`
  width: ${({width}) => width ? width : "50px"};
  height: ${({height}) => height ? height : "50px"};
`

S.Wrapper = styled.div`
  ${flexCenterRow}

  margin-top: ${({margintop}) => margintop};
`


export default S;