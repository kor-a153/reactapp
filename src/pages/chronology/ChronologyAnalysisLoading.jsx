import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const LOADING_STEPS = [
  '지각 변별 분석 중',
  '유추비교 처리 중',
  '비교추론 계산 중',
  '패턴 학습 완료',
  '성과 데이터 집계 중',
  '랭크 산출 완료',
];

const TOTAL_DURATION = 10000; // 10초

const ChronologyAnalysisLoading = ({ vision, analysis, onDone }) => {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    const startTime = Date.now();
    let lastProgress = 0;

    // 게이지: 비연속적으로 증가 (랜덤 점프)
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const ratio = Math.min(elapsed / TOTAL_DURATION, 1);

      // 비연속 증가: 랜덤 오프셋 추가
      const base = Math.floor(ratio * 100);
      const jitter = Math.floor(Math.random() * 8) - 3;
      const next = Math.min(100, Math.max(lastProgress, base + jitter));
      lastProgress = next;
      setProgress(next);

      if (ratio >= 1) {
        clearInterval(progressInterval);
        setProgress(100);
      }
    }, 200);

    // 로딩 스텝: 순차적으로 완료
    const stepInterval = TOTAL_DURATION / (LOADING_STEPS.length + 1);
    const stepTimers = LOADING_STEPS.map((_, i) =>
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, i]);
      }, stepInterval * (i + 1))
    );

    // 완료 후 결과 화면으로
    const doneTimer = setTimeout(() => {
      onDone();
    }, TOTAL_DURATION + 400);

    return () => {
      clearInterval(progressInterval);
      stepTimers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <Wrapper>
      <Header>
        <PageTitle>TIME LINE</PageTitle>
        <PageSubtitle>목표에 도달하기까지 실패와 성장의 흐름을 한눈에 확인하세요.</PageSubtitle>
      </Header>

      <VisionCard>
        <VisionLabel>VISION</VisionLabel>
        <VisionTitle>{vision.title}</VisionTitle>
      </VisionCard>

      <AnalysisBox>
        <AnalysisTitle>
          <Nickname>{analysis.nickname}</Nickname> 님의 목표 달성률 분석 중...
        </AnalysisTitle>

        {/* 게이지 바 */}
        <GaugeSection>
          <GaugeLabel>
            <span>분석 진행률</span>
            <GaugePercent>{progress}%</GaugePercent>
          </GaugeLabel>
          <GaugeTrack>
            <GaugeFill style={{ width: `${progress}%` }} />
          </GaugeTrack>
        </GaugeSection>

        {/* 순차 로딩 스텝 */}
        <StepList>
          {LOADING_STEPS.map((step, i) => (
            <StepItem key={i} $done={completedSteps.includes(i)}>
              <StepIcon $done={completedSteps.includes(i)}>
                {completedSteps.includes(i) ? '✓' : <Spinner />}
              </StepIcon>
              <StepText $done={completedSteps.includes(i)}>{step}</StepText>
            </StepItem>
          ))}
        </StepList>
      </AnalysisBox>
    </Wrapper>
  );
};

export default ChronologyAnalysisLoading;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  padding: 40px 60px 80px;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const PageTitle = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #222;
  letter-spacing: -0.02em;
`;

const PageSubtitle = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 6px;
`;

const VisionCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 48px;
  display: inline-block;
  min-width: 220px;
`;

const VisionLabel = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #888;
  margin-bottom: 6px;
`;

const VisionTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #ab47ff;
`;

const AnalysisBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const AnalysisTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  text-align: center;
`;

const Nickname = styled.span`
  color: #4359fc;
  font-weight: 800;
`;

const GaugeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GaugeLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`;

const GaugePercent = styled.span`
  font-weight: 700;
  color: #ab47ff;
`;

const GaugeTrack = styled.div`
  width: 100%;
  height: 16px;
  background: #f0f0f0;
  border-radius: 999px;
  overflow: hidden;
`;

const GaugeFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ab47ff, #4359fc);
  border-radius: 999px;
  transition: width 0.15s ease-out;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid #eee;
`;

const StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: ${({ $done }) => ($done ? 1 : 0.45)};
  transition: opacity 0.3s;
`;

const StepIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $done }) => ($done ? '#ab47ff' : 'transparent')};
  border: ${({ $done }) => ($done ? 'none' : '2px solid #ccc')};
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Spinner = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid #ddd;
  border-top-color: #ab47ff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const StepText = styled.p`
  font-size: 14px;
  font-weight: ${({ $done }) => ($done ? '600' : '400')};
  color: ${({ $done }) => ($done ? '#222' : '#999')};
`;
