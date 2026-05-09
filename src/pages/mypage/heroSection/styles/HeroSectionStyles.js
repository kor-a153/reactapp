import styled from "styled-components";

const S = {};

// 1. 최상위 섹션
S.HeroSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// 2. 시안의 핵심인 1.5 : 1 그리드
S.HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr; 
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr; // 모바일/태블릿에선 한 줄로
  }
`;

// 3. 왼쪽 메인 배너 (큰 영역)
S.HeroBanner = styled.div`
  background-color: #E8EBFD; // 시안의 연보라색 배경
  border-radius: 30px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  position: relative;
  cursor: pointer;

  .TextGroup {
    h3 {
      font-size: 18px;
      color: #5D5FEF; // 상단 작은 텍스트 컬러
      margin-bottom: 8px;
      font-weight: 600;
    }
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #2D3494; // 메인 타이틀 컬러
      margin-bottom: 12px;
    }
    p {
      font-size: 18px;
      color: #4B5563;
      font-weight: 500;
    }
  }

  /* 하단 아이콘들이 들어갈 그래픽 영역 (모습만 잡기) */
  .GraphicPlaceholder {
    margin-top: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    
    .Box {
      aspect-ratio: 1;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }
  }
`;

// 4. 오른쪽 카드 3개를 담는 바구니
S.QuickMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// 5. 오른쪽 개별 카드 (세로로 쌓임)
S.QuickCard = styled.div`
  flex: 1;
  background-color: ${(props) => props.bgColor || "#F1F5F9"};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 153px; // 3개가 모여 메인 배너와 높이가 맞도록 조절
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  .CardText {
    h3 {
      font-size: 14px;
      color: #4B5563;
      margin-bottom: 4px;
    }
    h2 {
      font-size: 22px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 8px;
    }
    span {
      font-size: 14px;
      color: #64748B;
    }
  }

  /* 카드 우측 아이콘 영역 (모습만 잡기) */
  .IconCircle {
    position: absolute;
    right: 25px;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }
`;

export default S;