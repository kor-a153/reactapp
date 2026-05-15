import styled from "styled-components";
import { colorCSS } from "../style";
import { h7Extrabold, h9Regular, h9Bold, h8Bold, h11Regular } from "../../../styles/common";

const S = {};

S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

S.ModalCard = styled.div`
  background: ${colorCSS.faillog_white};
  border-radius: 16px;
  padding: 40px 36px 32px;
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
`;

S.ModalTitle = styled.h2`
  ${h7Extrabold}
  color: ${colorCSS["faillog-black"]};
  margin-bottom: 6px;
`;

S.ModalSubtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 16px;
`;

S.ContentBox = styled.div`
  flex: 1;
  overflow-y: auto;
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  ${h9Regular}
  color: #444;
  line-height: 1.8;

  ol, ul {
    padding-left: 18px;
    margin: 4px 0;
  }

  li {
    margin-bottom: 4px;
  }
`;

S.Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

S.SectionTitle = styled.p`
  ${h9Bold}
  color: ${colorCSS["faillog-black"]};
`;

S.Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

S.ArticleTitle = styled.p`
  ${h9Bold}
  color: ${colorCSS["faillog-black"]};
`;

S.ConfirmButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${colorCSS.faillog_purple};
  color: ${colorCSS.faillog_white};
  ${h8Bold}
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background: #9333ea;
  }
`;

S.Copyright = styled.p`
  text-align: center;
  ${h11Regular}
  color: ${colorCSS.faillog_gray4};
`;

export default S;
