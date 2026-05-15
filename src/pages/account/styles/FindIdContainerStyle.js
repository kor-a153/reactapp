import styled from "styled-components";
import { colorCSS } from "../style";
import { h5Extrabold, h9Regular, h9Bold, h8Bold, h8Regular, h11Regular } from "../../../styles/common";

const S = {};

S.Title = styled.h2`
  ${h5Extrabold}
  color: ${colorCSS["faillog-black"]};
  margin-bottom: 8px;
`;

S.Subtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 24px;
`;

S.FieldLabel = styled.p`
  ${h9Bold}
  color: #444;
  margin-bottom: 6px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 8px;
  ${h9Regular}
  color: ${colorCSS["faillog-black"]};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${colorCSS.faillog_gray4};
  }

  &:focus {
    border-color: ${colorCSS.faillog_purple};
  }
`;

S.ResultBox = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: ${colorCSS.faillog_light_purple};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

S.ResultLabel = styled.span`
  ${h9Regular}
  color: ${colorCSS.faillog_gray10};
`;

S.ResultValue = styled.span`
  ${h8Bold}
  color: ${colorCSS.faillog_purple};
`;

S.PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : colorCSS.faillog_purple)};
  color: ${colorCSS.faillog_white};
  ${h8Bold}
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 16px;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : '#9333ea')};
  }
`;

S.Copyright = styled.p`
  text-align: center;
  ${h11Regular}
  color: ${colorCSS.faillog_gray4};
  margin-top: 8px;
`;

export default S;
