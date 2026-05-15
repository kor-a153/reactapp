import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorCSS } from "../style";
import {
  h5Extrabold, h7Bold, h8Bold, h9Regular, h9Bold,
  h10Regular, h11Regular, flexCenterColumn,
} from "../../../styles/common";

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

S.AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

S.AgreementAll = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  ${h8Bold}
  color: ${colorCSS["faillog-black"]};
  cursor: pointer;
`;

S.Separator = styled.hr`
  border: none;
  border-top: 1px solid ${colorCSS.faillog_gray1};
`;

S.AgreementRow = styled.div`
  display: flex;
  align-items: ${({ $column }) => ($column ? 'flex-start' : 'center')};
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  gap: 4px;
`;

S.AgreementRowInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

S.AgreementLabel = styled.span`
  flex: 1;
  ${h9Regular}
  color: #444;
`;

S.Required = styled.span`
  ${h10Regular}
  color: ${colorCSS.faillog_purple};
`;

S.Optional = styled.span`
  ${h10Regular}
  color: ${colorCSS.faillog_gray8};
`;

S.Arrow = styled.span`
  color: ${colorCSS.faillog_gray4};
  font-size: 18px;
  cursor: pointer;
  padding: 2px 4px;

  &:hover {
    color: ${colorCSS.faillog_purple};
  }
`;

S.AgreementDesc = styled.p`
  ${h11Regular}
  color: ${colorCSS.faillog_gray8};
  padding-left: 28px;
`;

S.Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: ${colorCSS.faillog_purple};
  cursor: pointer;
  flex-shrink: 0;
`;

S.OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
`;

S.OrLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${colorCSS.faillog_gray1};
`;

S.OrText = styled.span`
  ${h10Regular}
  color: ${colorCSS.faillog_gray8};
`;

S.SocialButton = styled.button`
  width: 100%;
  padding: 13px 16px;
  background: ${colorCSS.faillog_white};
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 8px;
  ${h9Regular}
  color: ${colorCSS["faillog-black"]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  &:hover {
    background: ${colorCSS.faillog_gray1};
  }
`;

S.SocialIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: ${({ $border }) => $border || 'none'};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 16px;
  margin-bottom: 16px;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : '#9333ea')};
  }
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

  &:disabled {
    background: ${colorCSS.faillog_gray1};
    color: ${colorCSS.faillog_gray8};
  }
`;

S.InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
`;

S.InputWithTimer = styled.div`
  flex: 1;
  position: relative;
`;

S.Timer = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  ${h9Bold}
  color: ${colorCSS.faillog_purple};
`;

S.SmallButton = styled.button`
  padding: 13px 14px;
  background: ${({ $verified }) => ($verified ? colorCSS.faillog_gray2 : colorCSS.faillog_purple)};
  color: ${({ $verified }) => ($verified ? colorCSS.faillog_gray8 : colorCSS.faillog_white)};
  border: none;
  border-radius: 8px;
  ${h9Bold}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
`;

S.ValidationMsg = styled.p`
  ${h10Regular}
  color: ${colorCSS["faillog-red"]};
  margin-top: 4px;
`;

S.HintMsg = styled.p`
  ${h10Regular}
  color: ${colorCSS.faillog_gray8};
  margin-top: 4px;
`;

S.BottomLink = styled.p`
  text-align: center;
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 12px;
`;

S.PurpleLink = styled(Link)`
  color: ${colorCSS.faillog_purple};
  font-weight: 600;
  text-decoration: none;
`;

S.Copyright = styled.p`
  text-align: center;
  ${h11Regular}
  color: ${colorCSS.faillog_gray4};
`;

S.SuccessBox = styled.div`
  ${flexCenterColumn}
  gap: 32px;
  padding: 20px 0;
`;

S.SuccessText = styled.p`
  ${h7Bold}
  color: ${colorCSS["faillog-black"]};
  text-align: center;
`;

export default S;
