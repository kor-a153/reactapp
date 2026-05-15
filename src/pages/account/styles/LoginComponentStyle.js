import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorCSS } from "../style";
import { h5Extrabold, h9Regular, h9Bold, h8Bold, h10Regular, h11Regular } from "../../../styles/common";

const S = {};

S.Title = styled.h2`
  ${h5Extrabold}
  color: ${colorCSS["faillog-black"]};
  margin-bottom: 8px;
`;

S.Subtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 28px;
`;

S.InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({ $error }) => ($error ? colorCSS["faillog-red"] : colorCSS.faillog_gray2)};
  border-radius: 8px;
  ${h9Regular}
  color: ${colorCSS["faillog-black"]};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${colorCSS.faillog_gray4};
  }

  &:focus {
    border-color: ${({ $error }) => ($error ? colorCSS["faillog-red"] : colorCSS.faillog_purple)};
  }
`;

S.ErrorText = styled.p`
  ${h10Regular}
  color: ${colorCSS["faillog-red"]};
  margin-bottom: 6px;
`;

S.CheckRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

S.CheckLabel = styled.label`
  ${h10Regular}
  color: ${colorCSS.faillog_gray10};
  cursor: pointer;
`;

S.PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${colorCSS.faillog_purple};
  color: ${colorCSS.faillog_white};
  ${h8Bold}
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background: #9333ea;
  }
`;

S.LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`;

S.LinkText = styled(Link)`
  ${h10Regular}
  color: ${colorCSS.faillog_gray10};
  text-decoration: none;

  &:hover {
    color: ${colorCSS.faillog_purple};
  }
`;

S.Divider = styled.span`
  ${h10Regular}
  color: ${colorCSS.faillog_gray4};
`;

S.SocialIcons = styled.div`
  display: flex;
  gap: 6px;
`;

S.SocialIcon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: ${({ $border }) => $border || 'none'};
  ${h10Regular}
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.JoinPrompt = styled.p`
  text-align: center;
  ${h10Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 12px;
`;

S.OutlineButton = styled.button`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: ${colorCSS.faillog_purple};
  ${h9Bold}
  border: 1.5px solid #d9a8ff;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: ${colorCSS.faillog_light_purple};
  }
`;

S.Copyright = styled.p`
  text-align: center;
  ${h11Regular}
  color: ${colorCSS.faillog_gray4};
`;

export default S;
