import styled from "styled-components";

const S = {};

S.HeroSectionContainer = styled.section`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;

S.HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 648px 424px; 
  gap: 20px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`;

S.HeroBanner = styled.div`
  width: 648px;
  height: 730px;
  background-color: #E8EBFD;
  border-radius: 30px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  .TextGroup {
    h3 { font-size: 18px; color: #5D5FEF; margin-bottom: 8px; font-weight: 600; }
    h2 { font-size: 40px; font-weight: 800; color: #2D3494; margin-bottom: 12px; }
    p { font-size: 18px; color: #4B5563; font-weight: 500; }
  }
`;

S.GraphicPlaceholder = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  .Box { aspect-ratio: 1; background: rgba(255, 255, 255, 0.5); border-radius: 15px; }
`;

S.QuickMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

S.QuickCard = styled.div`
  width: 424px;
  height: 236px;
  background-color: ${(props) => props.bgColor || "#F1F5F9"};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
  .CardText {
    h3 { font-size: 14px; color: #4B5563; margin-bottom: 4px; }
    h2 { font-size: 22px; font-weight: 800; color: #1E293B; margin-bottom: 8px; }
    span { font-size: 14px; color: #64748B; line-height: 1.4; }
  }
  .IconCircle {
    position: absolute;
    right: 25px;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }
`;

export default S;