import styled from "styled-components";

const S = {};

S.CommunitySection = styled.div` padding: 0 20px 50px; border-top: 1px solid #f5f5f5; margin-top: 40px; `;

S.PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

S.CardWrapper = styled.div`
  border: 1px solid ${props => props.isSelected ? '#8b5cf6' : '#eee'};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: all 0.2s ease;
  &:hover { transform: translateY(-4px); }
`;

S.EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`;

// ✅ 추가: 컨테이너에서 호출하는 EmptyTitle
S.EmptyTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  color: #1e293b;
  margin-bottom: 10px;
  strong {
    color: #5d5fef;
  }
`;

// ✅ 추가: 컨테이너에서 호출하는 EmptySubText
S.EmptySubText = styled.p`
  font-size: 16px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`;

S.StartButton = styled.button`
  background: #5d5fef;
  color: white;
  padding: 12px 40px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  &:hover {
    background: #4a4cd9;
  }
`;

export default S;