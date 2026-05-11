import React from 'react';
import styled from 'styled-components';

// 스타닌 정규분포 데이터
const STANINE = [
  { stanine: 1, percent: 4, percentile: 4 },
  { stanine: 2, percent: 7, percentile: 11 },
  { stanine: 3, percent: 12, percentile: 23 },
  { stanine: 4, percent: 17, percentile: 40 },
  { stanine: 5, percent: 20, percentile: 60 },
  { stanine: 6, percent: 17, percentile: 77 },
  { stanine: 7, percent: 12, percentile: 89 },
  { stanine: 8, percent: 7, percentile: 96 },
  { stanine: 9, percent: 4, percentile: 100 },
];

// 정규분포 벨커브 SVG path 생성
const BellCurvePath = () => {
  const width = 540;
  const height = 120;
  const points = [];
  for (let x = 0; x <= width; x += 2) {
    const z = ((x / width) * 6) - 3;
    const y = Math.exp(-0.5 * z * z);
    points.push(`${x},${height - y * height * 0.9}`);
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke="#333"
        strokeWidth="2"
      />
      {/* 스타닌 구분선 */}
      {[72, 144, 216, 288, 360, 432, 504].map((x, i) => (
        <line key={i} x1={x} y1={0} x2={x} y2={height} stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
      ))}
    </svg>
  );
};

const ChronologyAnalysisResult = ({ vision, analysis, onBack }) => {
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

      {/* 랭크 타이틀 */}
      <RankTitle>
        <Nickname>{analysis.nickname}</Nickname> 님의 목표 달성률은 상위{' '}
        <Highlight>{analysis.percentile}%</Highlight> 에 해당합니다 !
      </RankTitle>
      <RankSubtitle>
        아주 탁월합니다. 목표를 위해 망설이고 달려왔군요. 그간 자신을 위해 오늘하루를 투자하는건 어떨까요 ?
      </RankSubtitle>

      {/* 정규분포 벨커브 */}
      <BellCurveBox>
        <BellCurvePath />
        <StanineTable>
          <StanineRow>
            {STANINE.map((s) => (
              <StanineCell key={s.stanine}>{s.percent}%</StanineCell>
            ))}
          </StanineRow>
          <StanineRow $label>
            <StanineHeader colSpan={9}>Stanine</StanineHeader>
          </StanineRow>
          <StanineRow>
            {STANINE.map((s) => (
              <StanineCell key={s.stanine} $bold>{s.stanine}</StanineCell>
            ))}
          </StanineRow>
          <StanineRow $label>
            <StanineHeader colSpan={9}>Percentile</StanineHeader>
          </StanineRow>
          <StanineRow>
            {STANINE.map((s) => (
              <StanineCell key={s.stanine}>{s.percentile}</StanineCell>
            ))}
          </StanineRow>
        </StanineTable>
      </BellCurveBox>

      {/* 체크리스트 달성 수 */}
      <ChecklistSummary>
        이 비전을 달성하면서 총 <CountHighlight>{analysis.totalChecklists}</CountHighlight> 개의 체크리스트를 달성 했습니다
      </ChecklistSummary>
      <ChecklistCompare>
        <Nickname>{analysis.nickname}</Nickname> 님은 평균 이용자들에 비해{' '}
        <CountHighlight>{analysis.totalChecklists - analysis.avgUserChecklists}</CountHighlight>개 많은 체크리스트를 달성 했습니다.
      </ChecklistCompare>

      {/* 상세 통계 카드 */}
      <StatsCard>
        <StatsSection>
          <StatsSectionTitle>🔔 최다 달성 체크리스트</StatsSectionTitle>
          <StatsLabel>Top 3</StatsLabel>
          {analysis.top3Checklists.map((item, i) => (
            <Top3Item key={i}>
              <Top3Bullet />
              <Top3Text>{item.text}</Top3Text>
              <Top3Count>{item.count}회</Top3Count>
            </Top3Item>
          ))}
        </StatsSection>

        <StatsDivider />

        <StatsSection>
          <StatsSectionTitle>평균 목표달성 기간</StatsSectionTitle>
          <StatItem>
            <StatBullet />
            <span>이용자들은 평균적으로 <StatHighlight>{analysis.avgDays}일</StatHighlight> 만에 목표를 달성 했습니다.</span>
          </StatItem>
        </StatsSection>

        <StatsDivider />

        <StatsSection>
          <StatsSectionTitle>AI 사용 여부</StatsSectionTitle>
          <StatItem>
            <StatBullet />
            <span>이용자들은 평균적으로 <StatHighlight>{analysis.aiUsageRate}%</StatHighlight> 가 직접 프로젝트를 작성 했습니다.</span>
          </StatItem>
        </StatsSection>

        <StatsDivider />

        <StatsSection>
          <StatsSectionTitle>프로젝트 개수</StatsSectionTitle>
          <StatItem>
            <StatBullet />
            <span>이용자들은 평균적으로 <StatHighlight>{analysis.projectCount}개</StatHighlight> 의 프로젝트를 작성 했습니다.</span>
          </StatItem>
        </StatsSection>
      </StatsCard>

      <BackButton onClick={onBack}>← 타임라인으로 돌아가기</BackButton>
    </Wrapper>
  );
};

export default ChronologyAnalysisResult;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px 80px;
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

const RankTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
`;

const Nickname = styled.span`
  color: #4359fc;
  font-weight: 800;
`;

const Highlight = styled.span`
  color: #f53102;
  font-weight: 800;
`;

const RankSubtitle = styled.p`
  font-size: 13px;
  color: #888;
  text-align: center;
  margin-bottom: 36px;
`;

const BellCurveBox = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StanineTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`;

const StanineRow = styled.tr`
  background: ${({ $label }) => ($label ? '#f8f8f8' : 'transparent')};
`;

const StanineHeader = styled.td`
  text-align: left;
  font-weight: 700;
  color: #333;
  padding: 6px 4px;
  font-size: 13px;
`;

const StanineCell = styled.td`
  text-align: center;
  padding: 5px 2px;
  color: #555;
  font-weight: ${({ $bold }) => ($bold ? '700' : '400')};
`;

const ChecklistSummary = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 10px;
`;

const CountHighlight = styled.span`
  color: #f53102;
  font-weight: 800;
  font-size: 20px;
`;

const ChecklistCompare = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

const StatsCard = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 32px;
`;

const StatsSection = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatsSectionTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #333;
`;

const StatsLabel = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #888;
`;

const Top3Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Top3Bullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ab47ff;
  flex-shrink: 0;
`;

const Top3Text = styled.p`
  flex: 1;
  font-size: 14px;
  color: #333;
`;

const Top3Count = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #f53102;
`;

const StatsDivider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

const StatBullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ab47ff;
  flex-shrink: 0;
  margin-top: 5px;
`;

const StatHighlight = styled.span`
  color: #f53102;
  font-weight: 700;
`;

const BackButton = styled.button`
  background: none;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: #ab47ff;
    color: #ab47ff;
  }
`;
