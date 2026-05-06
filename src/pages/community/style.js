import styled, { css } from "styled-components"
import { flexBetweenColumn, flexBetweenRow, flexCenterRow } from "../../styles/common"

const S = {}

export const sizeCSS = {

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
  "faillog_purple" : "#AB47FF",
  "faillog_white" : "#FFFFFF",

  "faillog_light_purple" : "#F3E8FF",

  "faillog_gray1" : "#F2F2F2",
  "faillog_gray4" : "#CCCCCC",
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
  overflow: hidden;
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
  overflow: hidden;
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