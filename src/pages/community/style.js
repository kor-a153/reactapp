import styled, { css } from "styled-components"
import { flexBetweenColumn, flexBetweenRow, flexCenterRow } from "../../styles/common"

const S = {}

const sizeCSS = {
  "h2-bold": css`
    font-size: 60px;
    font-weight: 700;
    line-height: 78px;
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
  `
}

const colorCSS = {
  "faillog-red" : "#F53102",
  "faillog-black" : "#333333",
  "faillog_blue" : "#027DF0",
  "faillog_purple" : "#AB47FF",
  "faillog_white" : "#FFFFFF",

  "faillog_light_purple" : "#F3E8FF",

  "faillog_gray9" : "#8D8D8D"
}

const boxShadow = {
  "boxBasic" : css`
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
  `
}

S.Span = styled.span`
  ${({size}) => sizeCSS[size]}
  color: ${({color}) => colorCSS[color] ? colorCSS[color] : "#333333"};
  display: ${({display}) => display};
  /* margin-top: ${({marginTop}) => marginTop}; */
`

S.WriteButton = styled.button`
  border-radius: 10px;
  width: 200px;
  height: 60px;
  background-color: ${colorCSS["faillog_purple"]};
`

S.MainHeaderWrap = styled.div`
  margin-top: 65px;
  width: 100dvw;
  ${flexCenterRow}  
  /* background-color: red; */
`

S.MainHeader = styled.div`
  width: 1320px;
  /* background-color: blue; */

  display: flex;
  justify-content: space-between;
`

S.MainHeaderLeftDiv = styled.div`
  /* background-color: yellow; */
`

S.MainHeaderLeftTextOneDiv = styled.div`
  margin-top: 13px;
`

S.MainHeaderRightButtonDiv = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
`

// best글

S.BestPostWrap = styled.div`
  margin-top: 95px;
  width: 100dvw;
  ${flexCenterRow}
`

S.BestPost = styled.div`
  position: relative;
  width: 1320px;
  height: 608px;
  border: 1px, solid, ${colorCSS["faillog_light_purple"]};
  border-radius: 10px;
  ${flexBetweenRow}
  ${boxShadow["boxBasic"]}
`

S.BestPostLeftLine = styled.div`
  position: absolute;
  left: 0px;
  bottom: 93px;
  width: 6px;
  height: 420px;
  border-radius: 100px;
  background-color: ${colorCSS["faillog_purple"]};
`

S.BestPostMainWrapDiv = styled.div`
  width: 788px;
  height: 606px;
  background-color: yellow;
`

S.BestPostImgWrapDiv = styled.div`
  width: 530px;
  height: 606px;
`

S.BestPostMainDiv = styled.div`
  margin-left: 110px;
  margin-top: 91px;
  width: 536px;
  height: 420px;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  gap: 32px;
`

S.BestPostMainHeader = styled.div`
  height: 40px;
  /* background-color: green; */
`

S.BestPostMainTitle = styled.div`
  height: 92px;
  /* background-color: green; */
`

S.BestPostMainContent = styled.div`
  height: 60px;
  /* background-color: green; */
`

S.BestPostMainInfo = styled.div`
  height: 22px;
  /* background-color: green; */
`

S.BestPostMainButton = styled.div`
  height: 44px;
  /* background-color: green; */
`

S.BestPostMainHr = styled.hr`
  width: 536px;
  background-color: ${colorCSS["faillog-black"]};
`


export default S;