import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/theme';

// Mock data
const PAST_LOGS = [
  { id: 1, category: "사업/창업", title: "B 투자사 미팅 거절", date: "2024.03.15 작성" },
  { id: 2, category: "사업/창업", title: "A 투자사 미팅 거절", date: "2023.11.02 작성" },
  { id: 3, category: "사업/창업", title: "C 투자사 미팅 거절", date: "2023.11.02 작성" },
  { id: 4, category: "공부/취업", title: "정보처리기사 실기 불합격", date: "2023.09.10 작성" },
  { id: 5, category: "인간관계", title: "팀 프로젝트 갈등", date: "2023.07.01 작성" },
];

const CATEGORIES = ["사업/창업", "공부/취업", "인간관계", "건강/루틴", "기타"];

const ANALYSIS_STYLES = [
  {
    id: "warm",
    icon: "🫶",
    title: "따뜻한 위로와 공감",
    desc: "지금은 괜찮냐던 다독여주길 원하세요.\n공감적으로 부드럽게 분석과 방향성을 얻을 수 있습니다.",
    badge: "순수형",
    badgeColor: "#22C55E",
    badgeBg: "#F0FDF4",
  },
  {
    id: "objective",
    icon: "📋",
    title: "객관적인 원인 분석가",
    desc: "문제의 본질을 직시해서 분석해주세요.\n논리적이고 명확한 분석과 방향성을 얻을 수 있습니다.",
    badge: "개인 맞춤",
    badgeColor: "#EC4899",
    badgeBg: "#FFF0F7",
  },
  {
    id: "cold",
    icon: "🌋",
    title: "냉철한 팩트 폭격기",
    desc: "변명없이 직계를 지시해요.\n냉철하지만 아프지만 문제를 분석하고 방향성을 얻을 수 있습니다.",
    badge: "혹독한",
    badgeColor: "#EF4444",
    badgeBg: "#FFF5F5",
  },
];

const LogAnalyzeModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: past logs, 2: style, 3: loading, 4: complete
  const [activeCategory, setActiveCategory] = useState("사업/창업");
  const [selectedLogs, setSelectedLogs] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [progress, setProgress] = useState(0);

  const filteredLogs = PAST_LOGS.filter(log => log.category === activeCategory);

  // Loading progress animation
  useEffect(() => {
    if (step === 3) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(4), 300);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Auto navigate to result after step 4
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        navigate('/logs/result/1/detail');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && step < 3) onClose();
  };

  const renderStep1 = () => (
    <>
      <S.ModalHeader>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
      </S.ModalHeader>
      <S.ModalTitle>과거의 비슷한 실패 기록</S.ModalTitle>
      <S.ModalSub>분석하시면 더 깊은 패턴을 찾을 수 있어요.</S.ModalSub>

      <S.SectionRow>
        <S.SectionLabel>함께 분석할까요?</S.SectionLabel>
        <S.SelectedCount>{selectedLogs.length > 0 ? `${selectedLogs.length}개 선택됨` : '0개 선택됨'}</S.SelectedCount>
      </S.SectionRow>

      <S.CategoryTabs>
        {CATEGORIES.map(cat => (
          <S.CategoryTab
            key={cat}
            $active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </S.CategoryTab>
        ))}
      </S.CategoryTabs>

      <S.LogList>
        {filteredLogs.length === 0 ? (
          <S.EmptyList>이 카테고리에는 기록이 없습니다.</S.EmptyList>
        ) : filteredLogs.map(log => (
          <S.LogItem
            key={log.id}
            $selected={selectedLogs.some(l => l.id === log.id)}
            onClick={() => {
              setSelectedLogs(prev =>
                prev.some(l => l.id === log.id)
                  ? prev.filter(l => l.id !== log.id)
                  : [...prev, log]
              );
            }}
          >
            <S.LogItemContent>
              <S.LogItemCategory>{log.category}</S.LogItemCategory>
              <S.LogItemTitle>{log.title}</S.LogItemTitle>
              <S.LogItemDate>{log.date}</S.LogItemDate>
            </S.LogItemContent>
            <S.LogRadio $selected={selectedLogs.some(l => l.id === log.id)}>
              {selectedLogs.some(l => l.id === log.id) && <S.LogRadioCheck>✓</S.LogRadioCheck>}
            </S.LogRadio>
          </S.LogItem>
        ))}
      </S.LogList>

      <S.PrimaryButton onClick={() => setStep(2)}>
        {selectedLogs.length > 0 ? `${selectedLogs.length}개의 로그와 함께 분석하기` : '선택 없이 분석하기'}
      </S.PrimaryButton>
      <S.SkipLink onClick={() => setStep(2)}>건너뛰고 이번 로그만 분석 →</S.SkipLink>
    </>
  );

  const renderStep2 = () => (
    <>
      <S.ModalHeader>
        <S.BackButton onClick={() => setStep(1)}>←</S.BackButton>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
      </S.ModalHeader>
      <S.ModalTitle>분석 스타일 설정</S.ModalTitle>
      <S.ModalSub>나에게 필요한 분석 스타일의 온도를 골라주세요.</S.ModalSub>

      <S.StyleList>
        {ANALYSIS_STYLES.map(style => (
          <S.StyleCard
            key={style.id}
            $selected={selectedStyle === style.id}
            onClick={() => setSelectedStyle(style.id)}
          >
            <S.StyleIcon>{style.icon}</S.StyleIcon>
            <S.StyleContent>
              <S.StyleTitle>{style.title}</S.StyleTitle>
              <S.StyleDesc>{style.desc}</S.StyleDesc>
            </S.StyleContent>
            <S.StyleBadge $color={style.badgeColor} $bg={style.badgeBg}>
              {style.badge}
            </S.StyleBadge>
          </S.StyleCard>
        ))}
      </S.StyleList>

      <S.PrimaryButton
        disabled={!selectedStyle}
        onClick={() => selectedStyle && setStep(3)}
      >
        선택한 스타일로 분석 시작
      </S.PrimaryButton>
    </>
  );

  const renderStep3 = () => (
    <S.LoadingWrapper>
      <S.SpinnerRing />
      <S.LoadingTitle>
        입력하신 데이터를 기반으로<br />패턴을 분석하고 있어요
      </S.LoadingTitle>
      <S.LoadingSub>잠시만 기다려주세요...</S.LoadingSub>
      <S.ProgressBarWrapper>
        <S.ProgressBar $progress={progress} />
      </S.ProgressBarWrapper>
    </S.LoadingWrapper>
  );

  const renderStep4 = () => (
    <S.CompleteWrapper>
      <S.CompleteCircle>
        <S.CompleteCheck>✓</S.CompleteCheck>
      </S.CompleteCircle>
      <S.CompleteTitle>
        분석이 완료되어<br />정상 등록되었습니다.
      </S.CompleteTitle>
      <S.CompleteSub>결과 페이지로 이동합니다.</S.CompleteSub>
    </S.CompleteWrapper>
  );

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal $step={step}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </S.Modal>
    </S.Overlay>
  );
};

/* ─── Animations ─── */
const spin = keyframes`
  to { stroke-dashoffset: -220; }
`;

const progressAnim = keyframes`
  from { opacity: 0.6; }
  to { opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

/* ─── Styled Components ─── */
const S = {};

S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

S.Modal = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: ${({ $step }) => $step >= 3 ? '60px 40px' : '32px 36px'};
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: ${({ $step }) => $step >= 3 ? '20px' : '16px'};
  max-height: 85vh;
  overflow-y: auto;

  ${({ $step }) => $step === 3 && `
    border: 2px solid ${theme.PALETTE.primary.main};
  `}
`;

S.ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

S.CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 18px;
  color: ${theme.GRAYSCALE[5]};
  cursor: pointer;
  padding: 4px;
  &:hover { color: ${theme.TEXT_COLOR.basic}; }
`;

S.BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${theme.GRAYSCALE[5]};
  cursor: pointer;
  padding: 4px;
  &:hover { color: ${theme.TEXT_COLOR.basic}; }
`;

S.ModalTitle = styled.h2`
  font-size: ${theme.FONT_SIZE.h6};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  margin-top: -8px;
`;

S.ModalSub = styled.p`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[6]};
  margin-top: -8px;
`;

S.SectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.SectionLabel = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.SelectedCount = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.PALETTE.third.main};
  font-weight: ${theme.FONT_WEIGHT.medium};
`;

S.CategoryTabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

S.CategoryTab = styled.button`
  padding: 7px 14px;
  border-radius: 20px;
  font-size: ${theme.FONT_SIZE.h10};
  cursor: pointer;
  border: 1px solid ${({ $active }) => $active ? theme.PALETTE.third.main : theme.GRAYSCALE[2]};
  background-color: ${({ $active }) => $active ? theme.PALETTE.third.main : theme.PALETTE.white};
  color: ${({ $active }) => $active ? theme.PALETTE.white : theme.TEXT_COLOR.basic};
  font-weight: ${({ $active }) => $active ? theme.FONT_WEIGHT.bold : theme.FONT_WEIGHT.regular};
  transition: all 0.2s;
`;

S.LogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 230px;
  overflow-y: auto;
`;

S.EmptyList = styled.div`
  text-align: center;
  color: ${theme.GRAYSCALE[5]};
  font-size: ${theme.FONT_SIZE.h10};
  padding: 30px 0;
`;

S.LogItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-radius: 10px;
  border: 1.5px solid ${({ $selected }) => $selected ? theme.PALETTE.third.main : theme.GRAYSCALE[2]};
  background-color: ${({ $selected }) => $selected ? '#FDF6FF' : theme.PALETTE.white};
  cursor: pointer;
  transition: all 0.2s;
  &:hover { border-color: ${theme.PALETTE.third.light}; }
`;

S.LogItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

S.LogItemCategory = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.third.main};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

S.LogItemTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.LogItemDate = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[5]};
`;

S.LogRadio = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => $selected ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${({ $selected }) => $selected ? theme.PALETTE.third.main : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.2s;
`;

S.LogRadioCheck = styled.span`
  color: white;
  font-size: 13px;
  font-weight: bold;
  line-height: 1;
`;

S.PrimaryButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${({ disabled }) => disabled ? theme.GRAYSCALE[2] : theme.PALETTE.third.main};
  color: ${theme.PALETTE.white};
  border: none;
  border-radius: 10px;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;
  margin-top: 4px;

  &:hover:not(:disabled) {
    background-color: #9E35C0;
  }
`;

S.SkipLink = styled.button`
  background: none;
  border: none;
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[5]};
  cursor: pointer;
  text-align: center;
  &:hover { color: ${theme.TEXT_COLOR.basic}; }
`;

/* ─── Step 2 ─── */
S.StyleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

S.StyleCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 16px;
  border: 1.5px solid ${({ $selected }) => $selected ? theme.PALETTE.third.main : theme.GRAYSCALE[2]};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ $selected }) => $selected ? '#FDF6FF' : theme.PALETTE.white};
  position: relative;
  transition: all 0.2s;
  &:hover { border-color: ${theme.PALETTE.third.light}; }
`;

S.StyleIcon = styled.div`
  font-size: 28px;
  flex-shrink: 0;
  margin-top: 2px;
`;

S.StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

S.StyleTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
`;

S.StyleDesc = styled.p`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[6]};
  line-height: 1.5;
  white-space: pre-line;
`;

S.StyleBadge = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
  padding: 4px 8px;
  border-radius: 4px;
`;

/* ─── Step 3 (Loading) ─── */
S.LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
`;

S.SpinnerRing = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid ${theme.PALETTE.third.light};
  border-top-color: ${theme.PALETTE.third.main};
  animation: ${spin} 1s linear infinite;

  @keyframes ${spin} {
    to { transform: rotate(360deg); }
  }
`;

S.LoadingTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  text-align: center;
  line-height: 1.5;
`;

S.LoadingSub = styled.p`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[5]};
`;

S.ProgressBarWrapper = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${theme.GRAYSCALE[1]};
  border-radius: 99px;
  overflow: hidden;
  margin-top: 8px;
  animation: ${progressAnim} 0.5s ease;
`;

S.ProgressBar = styled.div`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, ${theme.PALETTE.third.light}, ${theme.PALETTE.third.main});
  border-radius: 99px;
  transition: width 0.08s linear;
`;

/* ─── Step 4 (Complete) ─── */
S.CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  animation: ${fadeIn} 0.4s ease;
`;

S.CompleteCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${theme.PALETTE.third.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.CompleteCheck = styled.span`
  font-size: 32px;
  color: ${theme.PALETTE.third.main};
  font-weight: bold;
`;

S.CompleteTitle = styled.p`
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  text-align: center;
  line-height: 1.5;
`;

S.CompleteSub = styled.p`
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[5]};
`;

export default LogAnalyzeModal;
