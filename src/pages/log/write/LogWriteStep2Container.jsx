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
        <S.StepInfo>
          <S.StepBadgeRow>
            <S.StepBadge>Step 2</S.StepBadge>
            <S.StepTitle>목표 달성을 위해 지나온 실패 과정</S.StepTitle>
          </S.StepBadgeRow>
          <S.StepDesc>목표를 달성하기 위한 여정을 일기 작성하듯 편하게 작성해주세요.</S.StepDesc>
        </S.StepInfo>
        <S.ButtonRow>
          <S.PrevButton onClick={handlePrev}>이전</S.PrevButton>
        </S.ButtonRow>

        <S.FormContainer>
          <S.LogHeader>
            <S.Badges>
              <S.BadgeOrange>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.08317 5.6875V6.5625M6.99984 5.6875V6.5625M9.9165 5.6875V6.5625M12.8332 1.75H1.1665V10.5H3.7915V11.9583L6.70817 10.5H12.8332V1.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                작성 중
              </S.BadgeOrange>
              <S.BadgeBlue>공부/취업</S.BadgeBlue>
            </S.Badges>
            <S.LogTitleRow>
              <S.LogTitle>빅데이터분석기사 자격증 실기 도전기</S.LogTitle>
              <S.Date>2026.04.23</S.Date>
            </S.LogTitleRow>
          </S.LogHeader>

          <S.TextArea
            placeholder={`목표를 이루기 위해서 지금까지 어떤 일이 있었나요?\n\n예시) 기출문제만 계속 풀면서 패턴을 외우면 될 거라 생각했다. 처음 두 달은 순조로웠고, 정답률도 올라가는 것 같아서 자신감이 생겼다.\n그런데 실제 시험 날, 응용 문제들이 생각보다 많이 나왔고 나는 완전히 막혀버렸다. 아는 개념인데 조금만 비틀면 풀지 못했다.\n왜 그랬을까 생각해보니, 나는 '이해'가 아니라 '암기'를 하고 있었던 것 같다.\n시간이 없다는 불안감 때문에 개념을 깊이 파고드는 것을 포기하고 빠른 길을 택했던 것이 결국 발목을 잡았다. 다음엔 기출보다 개념서부터 시작해야겠다고 느꼈다.`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <S.TipBox>
            <S.TipTitleRow>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.50023 3.6875C9.21669 3.68754 10.6875 4.73619 11.3088 6.22754C11.411 5.87153 11.7077 5.58621 12.0969 5.51758L13.0198 5.35449C13.5636 5.25871 14.0831 5.62218 14.1789 6.16602C14.2748 6.7098 13.9112 7.22821 13.3674 7.32422L12.4436 7.4873C12.1191 7.5444 11.8043 7.43715 11.5823 7.22656C11.6095 7.41803 11.6252 7.61351 11.6252 7.8125V11.8125H13.4377C13.9899 11.8126 14.4377 12.2603 14.4377 12.8125C14.4377 13.3647 13.9899 13.8124 13.4377 13.8125H1.87523C1.32298 13.8125 0.875233 13.3648 0.875233 12.8125C0.875233 12.2602 1.32298 11.8125 1.87523 11.8125H3.37523V7.8125C3.37523 7.6135 3.39096 7.41804 3.4182 7.22656C3.19618 7.43726 2.8814 7.5444 2.55687 7.4873L1.63305 7.32422C1.08928 7.22821 0.726618 6.70983 0.822499 6.16602C0.918459 5.6222 1.43685 5.25861 1.9807 5.35449L2.90355 5.51758C3.29276 5.58627 3.58951 5.87154 3.69164 6.22754C4.31298 4.7362 5.78376 3.6875 7.50023 3.6875ZM7.50023 5.6875C6.32658 5.6875 5.37523 6.63885 5.37523 7.8125V11.8125H9.62523V7.8125C9.62523 6.63888 8.67384 5.68756 7.50023 5.6875ZM10.4504 2.27246C10.8055 1.84954 11.4366 1.79436 11.8596 2.14941C12.2822 2.50445 12.3373 3.13473 11.9827 3.55762L11.3801 4.27637C11.0251 4.69925 10.3939 4.75416 9.97094 4.39941C9.54793 4.04433 9.49281 3.41324 9.84789 2.99023L10.4504 2.27246ZM3.14183 2.14844C3.5649 1.79391 4.19518 1.8496 4.55004 2.27246L5.15258 2.99023C5.50744 3.4133 5.4525 4.04445 5.02953 4.39941C4.60646 4.75423 3.9753 4.69836 3.62035 4.27539L3.01781 3.55762C2.66312 3.13452 2.71884 2.50333 3.14183 2.14844ZM7.50023 0.5625C8.05243 0.562598 8.50023 1.01028 8.50023 1.5625V2.5C8.50023 3.05222 8.05243 3.4999 7.50023 3.5C6.94798 3.49996 6.50023 3.05226 6.50023 2.5V1.5625C6.50023 1.01024 6.94798 0.562542 7.50023 0.5625Z" fill={theme.PALETTE.fourth.main} />
              </svg>
              <S.TipTitle>작성 팁!!</S.TipTitle>
            </S.TipTitleRow>
            <S.TipDesc>과정 속에서 어떤 결정을 하셨는지 왜 그런 결정을 하셨는지 그때 마음속의 감정들 외부 환경이나 환경 변화들, 지금 돌아보면 어떤 생각이 드시는지 등을 자유롭게 써주시면 됩니다.</S.TipDesc>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
`;

S.Header = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

S.Title = styled.h1`
  font-size: 60px;
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
`;

S.SubTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
`;

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 872px;
`;

S.StepInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`;

S.ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

S.StepBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

S.StepBadge = styled.span`
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  white-space: nowrap;
`;

S.StepTitle = styled.h2`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.StepDesc = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
`;

S.PrevButton = styled.button`
  padding: 10px 28px;
  background-color: ${theme.PALETTE.white};
  color: ${theme.GRAYSCALE[9]};
  border: 1px solid ${theme.GRAYSCALE[4]};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
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
  position: relative;
  width: 100%;
  background-color: ${theme.PALETTE.white};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.GRAYSCALE[2]};

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${theme.PALETTE.primary.main};
    border-radius: 0 4px 4px 0;
  }
`;

S.LogHeader = styled.div`
  margin-bottom: 20px;
`;

S.LogTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.Badges = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

S.BadgeOrange = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 67px;
  height: 20px;
  background-color: #FFF8F1;
  color: ${theme.TEXT_COLOR.warning};
  border-radius: 6px;
  font-size: 11px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  box-sizing: border-box;
`;

S.BadgeBlue = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 20px;
  background-color: ${theme.PALETTE.primary.light};
  color: ${theme.PALETTE.primary.main};
  border-radius: 6px;
  font-size: 11px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  box-sizing: border-box;
`;

S.Date = styled.span`
  color: ${theme.GRAYSCALE[5]};
  font-size: ${theme.FONT_SIZE.h9};
`;

S.LogTitle = styled.h3`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.TextArea = styled.textarea`
  width: 100%;
  min-height: 380px;
  padding: 24px;
  border: 1px solid ${theme.GRAYSCALE[4]};
  border-radius: 12px;
  font-family: inherit;
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
  width: 782px;
  min-height: 60px;
  height: auto;
  background-color: ${theme.PALETTE.primary.light}; 
  padding: 12px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-bottom: 24px;
  box-sizing: border-box;
`;

S.TipTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

S.TipTitle = styled.span`
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  white-space: nowrap;
`;

S.TipDesc = styled.p`
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h10}; 
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
  word-wrap: break-word;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

S.TempSaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${theme.PALETTE.white};
  color: ${theme.PALETTE.primary.main};
  border: 1px solid ${theme.PALETTE.primary.main};
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.PALETTE.primary.light};
  }
`;

S.AnalyzeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  border: none;
  border-radius: 8px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default LogWriteStep2Container;
