import styled from "styled-components";

const S = {};

// 섹션 전체 컨테이너
S.DraftSection = styled.section`
  padding: 60px 0;
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 40px;
    span { color: #5D5FEF; }
  }
`;

// 3열 그리드
S.DraftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

// 개별 드래프트 카드
S.DraftCard = styled.div`
  background: ${(props) => props.bgColor || "#94A3B8"};
  border-radius: 25px;
  padding: 40px 30px;
  min-height: 450px;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover { transform: translateY(-10px); }

  .CardHeader {
    h3 { font-size: 22px; font-weight: 700; margin-bottom: 20px; }
    p { font-size: 15px; line-height: 1.6; opacity: 0.9; font-weight: 500; }
  }

  .CardImage {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    img { width: 140px; height: auto; } // 3D 아이콘 이미지 영역
  }

  .CardFooter {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    .InfoText {
      font-size: 13px;
      opacity: 0.8;
      div { margin-top: 4px; }
    }

    .StatusTag {
      background: rgba(255, 255, 255, 0.9);
      color: #FF7A7A;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export default S;