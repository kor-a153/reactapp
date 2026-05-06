import styled from "styled-components"
import { colorCSS, sizeCSS } from "../style"
import { flexCenterRow } from "../../../styles/common"

const searchStyle = {}
searchStyle.component = styled.div`
  width: 958px;
  height: 62px;
background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, ${colorCSS["faillog_blue"]}, ${colorCSS["faillog_purple"]}) border-box;
border: 1.78px solid transparent;
border-radius: 15px;

display: flex;
justify-content: space-between;
align-items: center;

padding-left: 26px;
padding-right: 23px;
`

searchStyle.contentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

searchStyle.image1 = styled.img`
  width: 20px;
  height: 20px;
`

searchStyle.buttonImage = styled.img`
  width: 20px;
  height: 20px;
`

searchStyle.search = styled.input`
  width: 812px;
  height: 32px;
  border: none;
  ${sizeCSS["h7-regular"]}

    &:focus {
    outline: none;
  }
`

searchStyle.searchButton = styled.button`
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, ${colorCSS["faillog_blue"]}, ${colorCSS["faillog_purple"]});
  border-radius: 999px;

  ${flexCenterRow}
`

export default searchStyle