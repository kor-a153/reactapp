import styled, { css } from "styled-components"
import { colorCSS } from "../style";
import { flexCenterRow } from "../../../styles/common";

const S = {}

const selectedStyle = css`
    background-color: ${colorCSS.faillog_purple};
    border: none;
`

const unSelectedStyle = css`
    background-color: ${colorCSS.faillog_white};
    border: solid 1px ${colorCSS.faillog_gray4};
`

S.button = styled.button`
  width: 88px;
  height: 40px;
  border-radius: 10px;

  ${flexCenterRow}

  ${({selected}) => selected ? selectedStyle : unSelectedStyle }

`

export default S;