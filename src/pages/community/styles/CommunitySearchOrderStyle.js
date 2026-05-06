import styled from "styled-components"
import { colorCSS } from "../style"
import { flexBetweenRow } from "../../../styles/common"

const S = {}

S.Wrapper = styled.div`
  position: relative;
  width: 200px;
  user-select: none;
`

S.Trigger = styled.div`
  width: 200px;
  height: 48px;
  padding: 0 11px 0px 26px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;
  ${flexBetweenRow}
`

S.ChevronImg = styled.img`
  display: inline-block;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 200ms ease;
  flex-shrink: 0;
`

S.OptionBox = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 200px;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${colorCSS["faillog_gray9"]};
  background-color: ${colorCSS["faillog_white"]};
`

S.OptionItem = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 26px 0 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${({ $selected }) => $selected ? colorCSS['faillog_light_purple'] : 'transparent'};
  border-top: ${({ $selected, $isfirst }) => $selected && !$isfirst ? `1px solid ${colorCSS['faillog_purple']}` : 'none'};
  border-bottom: ${({ $selected }) => $selected ? `1px solid ${colorCSS['faillog_purple']}` : 'none'};

  &:hover {
    background-color: ${({ $selected }) => $selected ? colorCSS['faillog_light_purple'] : colorCSS['faillog_gray1']};
  }
`

export default S
