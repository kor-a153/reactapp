import styled from "styled-components"
import { flexCenterRow } from "../../../styles/common"
import { colorCSS } from "../style"

const CommunityMainHeaderStyle = {}

CommunityMainHeaderStyle.WriteButton = styled.button`
  border-radius: 10px;
  width: 200px;
  height: 60px;
  background-color: ${colorCSS["faillog_purple"]};
`

CommunityMainHeaderStyle.MainHeaderWrap = styled.div`
  margin-top: 65px;
  width: 100dvw;
  ${flexCenterRow}  
  /* background-color: red; */
`

CommunityMainHeaderStyle.MainHeader = styled.div`
  width: 1320px;
  /* background-color: blue; */

  display: flex;
  justify-content: space-between;
`

CommunityMainHeaderStyle.MainHeaderLeftDiv = styled.div`
  /* background-color: yellow; */
`
CommunityMainHeaderStyle.MainHeaderLeftTextTopDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

CommunityMainHeaderStyle.headerImg = styled.img`
  width: 60px;
  height: 60px;
`

CommunityMainHeaderStyle.MainHeaderLeftTextBottomDiv = styled.div`
  margin-top: 13px;
`

CommunityMainHeaderStyle.MainHeaderRightButtonDiv = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
`

export default CommunityMainHeaderStyle;