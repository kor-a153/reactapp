import styled from "styled-components";
import { colorCSS, shadowCSS } from "../style";
import { h2Bold, h8Regular } from "../../../styles/common";

const S = {};

S.Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`;

S.LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
  padding: 80px 60px;
`;

S.Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`;

S.Tagline = styled.h1`
  ${h2Bold}
  color: ${colorCSS["faillog-black"]};
  margin-bottom: 24px;
`;

S.Description = styled.p`
  ${h8Regular}
  color: ${colorCSS.faillog_gray10};
  margin-bottom: 40px;
`;

S.BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

S.BulletItem = styled.li`
  ${h8Regular}
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${colorCSS["faillog-black"]};

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${colorCSS.faillog_purple};
    flex-shrink: 0;
  }
`;

S.RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px;
`;

S.Card = styled.div`
  background: ${colorCSS.faillog_white};
  border-radius: 16px;
  ${shadowCSS.card}
  padding: 48px 44px;
  width: 100%;
  max-width: 440px;
`;

export default S;
