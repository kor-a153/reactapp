import styled from "styled-components";

const S = {};

S.MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #ffffff;
  
  /* 반응형 대응: 화면이 작아질 때 좌우 여백 확보 */
  @media (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

S.SectionDivider = styled.div`
  margin-bottom: 60px;
  width: 100%;
`;

export default S;