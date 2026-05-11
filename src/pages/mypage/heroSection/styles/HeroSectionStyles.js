import styled from "styled-components";

const S = {};

S.HeroSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
  border-radius: 25px;
  padding: 60px 56px; 
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .TextGroup {
    position: relative;
    z-index: 2;
    font-family: 'Pretendard', sans-serif;
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: 24px; font-weight: 400; color: #5D5FEF; line-height: 34px; }
    h2 { font-size: 45px; font-weight: 800; color: #2D3494; line-height: 60px; letter-spacing: -0.02em; }
    p { font-size: 24px; font-weight: 400; color: #4B5563; line-height: 34px; }
  }
    transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px); /* 위로 8px 이동 */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1); /* 더 진한 그림자 */
  }
`;

S.MainGraphic = styled.div`
  position: absolute;
  right: 0px;
  bottom: -155px;
  width: 600px;
  height: 600px;
  z-index: 1;
  img { width: 100%; height: 100%; object-fit: contain; }
  
  `;

S.QuickMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

// 모든 카드의 공통 베이스 스타일
const BaseCard = styled.div`
  width: 424px;
  height: 236px;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: visible; 
  padding: 40px;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px); /* 위로 8px 이동 */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1); /* 더 진한 그림자 */
  }
  
  .CardText {
    position: relative;
    z-index: 2;
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: 20px; font-weight: 400; color: #5D5FEF; }
    h2 { font-size: 36px; font-weight: 700; color: #1E293B; }
    span { font-size: 20px; color: #64748B; }
  }
`;

// 1. 마이 페일로그 카드
S.MyLogCard = styled(BaseCard)`
  background-color: #F0F3FF;
`;

// 2. 좋아요 한 페일로그 카드
S.LikesCard = styled(BaseCard)`
  background-color: #EBF8FF;
  padding-top: 50px;
  padding-right: 45px;
  align-items: flex-end;

  .CardText {
    text-align: right;
    
    & > * {
      white-space: nowrap;
    }
`;

// 3. 방명록 카드
S.GuestBookCard = styled(BaseCard)`
  background-color: #EEF2FF;
`;

// 카드 아이콘 공통 및 개별 위치
S.CardIcon = styled.div`
  position: absolute;
  right: -15px;
  bottom: -10px;
  width: 180px;
  height: 180px;
  z-index: 5;
  img { width: 100%; height: 100%; object-fit: contain; }

  /* 좋아요 카드(LikesCard) 내부 아이콘 전용 수치 */
  ${S.LikesCard} & {
    right: 273px;
    bottom: -22px;
    width: 150px;
  }
`;

export default S;