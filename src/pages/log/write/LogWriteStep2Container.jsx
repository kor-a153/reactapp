import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import LogAnalyzeModal from './LogAnalyzeModal';

const LogWriteStep2Container = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    navigate("/logs/new/step1");
  };

  const handleTempSave = () => {
    // 임시저장 로직
    alert("임시저장 되었습니다.");
  };

  const handleAnalyze = () => {
    setIsModalOpen(true);
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>
          <S.Title>Write Fail Log</S.Title>
          <S.SubTitle>로그 작성 가이드에 맞게 페일 로그 작성</S.SubTitle>
        </S.Header>
        <S.TopArea>
          <S.StepInfo>
            <S.StepBadge>Step 2</S.StepBadge>
            <S.StepTitle>목표 달성을 위해 지나온 실패 과정</S.StepTitle>
            <S.StepDesc>목표를 달성하기 위한 여정을 일기 작성하듯 편하게 작성해주세요.</S.StepDesc>
          </S.StepInfo>
          <S.PrevButton onClick={handlePrev}>이전</S.PrevButton>
        </S.TopArea>

        <S.FormContainer>
          <S.LogHeader>
            <S.LogTitleRow>
              <S.Badges>
                <S.BadgeOrange>● 작성 중</S.BadgeOrange>
                <S.BadgeBlue>공부/취업</S.BadgeBlue>
              </S.Badges>
              <S.Date>2024.04.23</S.Date>
            </S.LogTitleRow>
            <S.LogTitle>빅데이터분석기사 자격증 실기 도전기</S.LogTitle>
          </S.LogHeader>

          <S.TextArea 
            placeholder={`목표를 이루기 위해서 지금까지 어떤 일이 있었나요?\n\n예시) 기출문제만 계속 풀면서 패턴을 외우면 될 거라 생각했다. 처음 두 달은 순조로웠고, 정답률도 올라가는 것 같아서 자신감이 생겼다.\n그런데 실제 시험 날, 응용 문제들이 생각보다 많이 나왔고 나는 완전히 막혀버렸다. 아는 개념인데 조금만 비틀면 풀지 못했다.\n왜 그랬을까 생각해보니, 나는 '이해'가 아니라 '암기'를 하고 있었던 것 같다.\n시간이 없다는 불안감 때문에 개념을 깊이 파고드는 것을 포기하고 빠른 길을 택했던 것이 결국 발목을 잡았다. 다음엔 기출보다 개념서부터 시작해야겠다고 느꼈다.`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <S.TipBox>
            <S.TipTitle>🎁 작성 팁!</S.TipTitle>
            <S.TipDesc>과정 속에서 어떤 감정을 느꼈는지, 그때 상황은 어땠는지, 그때 작성자의 감정을 파악할 수 있게 솔직하고 구체적으로 적어주시면 AI가 더 나은 분석결과를 제공해 줄 수 있습니다.</S.TipDesc>
          </S.TipBox>

          <S.ButtonContainer>
            <S.TempSaveButton onClick={handleTempSave}>임시저장</S.TempSaveButton>
            <S.AnalyzeButton onClick={handleAnalyze}>분석하기</S.AnalyzeButton>
          </S.ButtonContainer>

        </S.FormContainer>
      </S.ContentWrapper>

      {isModalOpen && <LogAnalyzeModal onClose={() => setIsModalOpen(false)} />}
    </S.Wrapper>
  );
};

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

S.Header = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

S.Title = styled.h1`
  font-size: ${theme.FONT_SIZE.h2};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.SubTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.GRAYSCALE[6]};
`;

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

S.TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
  }
`;

S.StepInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

S.StepBadge = styled.span`
  color: ${theme.PALETTE.primary.main}; /* Blue color for step 2 */
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  margin-right: 15px;
`;

S.StepTitle = styled.h2`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  margin-right: 15px;
`;

S.StepDesc = styled.p`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[6]};
`;

S.PrevButton = styled.button`
  padding: 10px 28px;
  background-color: ${theme.PALETTE.white};
  color: ${theme.TEXT_COLOR.basic};
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.PALETTE.primary.main};
    color: ${theme.PALETTE.white};
    border-color: ${theme.PALETTE.primary.main};
  }
`;

S.FormContainer = styled.div`
  width: 100%;
  background-color: #F8FAFF; /* Light blue tint matching the theme */
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.GRAYSCALE[2]};
  border-left: 6px solid ${theme.PALETTE.primary.main};
`;

S.LogHeader = styled.div`
  margin-bottom: 20px;
`;

S.LogTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

S.Badges = styled.div`
  display: flex;
  gap: 10px;
`;

S.BadgeOrange = styled.span`
  background-color: #FFF4E5;
  color: ${theme.PALETTE.warning.main};
  border: 1px solid ${theme.PALETTE.warning.main};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

S.BadgeBlue = styled.span`
  background-color: #EEF1FF;
  color: ${theme.PALETTE.primary.main};
  border: 1px solid ${theme.PALETTE.primary.light};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

S.Date = styled.span`
  color: ${theme.GRAYSCALE[5]};
  font-size: ${theme.FONT_SIZE.h10};
`;

S.LogTitle = styled.h3`
  font-size: ${theme.FONT_SIZE.h6};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.TextArea = styled.textarea`
  width: 100%;
  min-height: 380px;
  padding: 24px;
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-radius: 12px;
  font-size: ${theme.FONT_SIZE.h9};
  line-height: 1.6;
  outline: none;
  background-color: ${theme.PALETTE.white};
  resize: vertical;
  margin-bottom: 24px;

  &::placeholder {
    color: ${theme.GRAYSCALE[5]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

S.TipBox = styled.div`
  background-color: #FCF4FF; /* Very light purple */
  padding: 20px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 30px;
`;

S.TipTitle = styled.div`
  color: ${theme.PALETTE.third.main};
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

S.TipDesc = styled.p`
  color: ${theme.PALETTE.third.main};
  font-size: ${theme.FONT_SIZE.h10};
  line-height: 1.5;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

S.TempSaveButton = styled.button`
  padding: 14px 32px;
  background-color: ${theme.PALETTE.white};
  color: ${theme.PALETTE.primary.main};
  border: 1px solid ${theme.PALETTE.primary.main};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.PALETTE.primary.extraLight};
  }
`;

S.AnalyzeButton = styled.button`
  padding: 14px 40px;
  background-color: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  border: none;
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.PALETTE.primary.dark};
  }
`;

export default LogWriteStep2Container;
