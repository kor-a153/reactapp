import styled, { css } from "styled-components"
import { colorCSS } from "../style"
import { flexBetweenRow, flexCenterRow } from "../../../styles/common"

const communityStyle = {}

communityStyle.wrap = styled.div`
  width: 100dvw;
  /* background-color: ${colorCSS["faillog-sector-gray"]}; */
`

communityStyle.headerWrap = styled.div`
  padding-top: 93px;
  ${flexCenterRow}
`

communityStyle.header = styled.div`
  width: 1320px;
`

communityStyle.headerTitle = styled.div`
  width: 1320px;
  padding: 0px 112px;
  ${flexCenterRow}
  gap: 35px;
`

communityStyle.headerSub = styled.div`
  padding-top: 16px;
  width: 1320px;
  ${flexCenterRow}
`

communityStyle.searchWrap = styled.div`
  padding-top: 31px;
  ${flexCenterRow}
  gap: 16px;
`

communityStyle.search = styled.input`
  width: 300px;
  border: none;
`

communityStyle.categoryAndPostOrderWrap = styled.div`
  width: 100dvw;
  padding-top: 56px;
  ${flexCenterRow}
`

communityStyle.categoryAndPostOrder = styled.div`
  width: 1320px;
  ${flexBetweenRow}
`

export default communityStyle