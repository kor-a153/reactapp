import React, { useState } from 'react';
import styled from 'styled-components';

const ChronologyTimeline = ({
  vision,
  projects,
  timeline,
  selectedProject,
  onSelectProject,
  onStartAnalysis,
}) => {
  const [showProjectToggle, setShowProjectToggle] = useState(false);
  const [carouselIndexes, setCarouselIndexes] = useState({});

  const getCarouselIndex = (id) => carouselIndexes[id] ?? 0;

  const moveCarousel = (id, dir, length) => {
    setCarouselIndexes((prev) => {
      const cur = prev[id] ?? 0;
      const next = (cur + dir + length) % length;
      return { ...prev, [id]: next };
    });
  };

  // 연도 기준으로 그룹핑
  const groupByYear = () => {
    const groups = [];
    let lastYear = null;
    timeline.forEach((item) => {
      if (item.year !== lastYear) {
        groups.push({ year: item.year, items: [item] });
        lastYear = item.year;
      } else {
        groups[groups.length - 1].items.push(item);
      }
    });
    return groups;
  };

  return (
    <Wrapper>
      <Header>
        <HeaderLeft>
          <PageTitle>TIME LINE</PageTitle>
          <PageSubtitle>목표에 도달하기까지 실패와 성장의 흐름을 한눈에 확인하세요.</PageSubtitle>
        </HeaderLeft>
        <ProjectSelector>
          <select
            value={selectedProject.id}
            onChange={(e) => {
              const p = projects.find((p) => p.id === Number(e.target.value));
              if (p) onSelectProject(p);
            }}
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
        </ProjectSelector>
      </Header>

      <VisionCard>
        <VisionLabel>VISION</VisionLabel>
        <VisionTitle>{vision.title}</VisionTitle>
      </VisionCard>

      <TimelineSection>
        {groupByYear().map((group) => (
          <YearGroup key={group.year}>
            <YearLabel>{group.year}</YearLabel>
            <YearItems>
              {group.items.map((item, idx) => (
                <TimelineRow key={item.id} $isLast={idx === group.items.length - 1 && group === groupByYear()[groupByYear().length - 1]}>
                  <DateCol>
                    {idx === 0 && <YearText>{item.year}</YearText>}
                    <MonthText>{item.month}</MonthText>
                  </DateCol>
                  <DotCol>
                    <Dot />
                    <Line />
                  </DotCol>
                  <CardCol>
                    <TimelineCard>
                      <CarouselWrapper>
                        <CarouselImg
                          src={item.images[getCarouselIndex(item.id)]}
                          alt="timeline"
                        />
                        {item.images.length > 1 && (
                          <>
                            <CarouselBtn $left onClick={() => moveCarousel(item.id, -1, item.images.length)}>‹</CarouselBtn>
                            <CarouselBtn onClick={() => moveCarousel(item.id, 1, item.images.length)}>›</CarouselBtn>
                          </>
                        )}
                        <CloseBtn>×</CloseBtn>
                      </CarouselWrapper>
                      <CardBody>
                        <CardDesc>{item.description}</CardDesc>
                        <BulletGrid>
                          {item.bullets.map((b, i) => (
                            <BulletItem key={i}>{b}</BulletItem>
                          ))}
                        </BulletGrid>
                      </CardBody>
                    </TimelineCard>
                  </CardCol>
                </TimelineRow>
              ))}
            </YearItems>
          </YearGroup>
        ))}
      </TimelineSection>

      {/* 새 항목 추가 */}
      <AddSection>
        <AddButton onClick={() => setShowProjectToggle((v) => !v)}>
          + 새 항목 추가
        </AddButton>

        {showProjectToggle && (
          <ProjectToggleList>
            {projects.map((p) => (
              <ProjectToggleItem
                key={p.id}
                $active={p.id === selectedProject.id}
                onClick={() => { onSelectProject(p); setShowProjectToggle(false); }}
              >
                <ProjectToggleInfo>
                  <ProjectToggleName>{p.title}</ProjectToggleName>
                  <ProjectToggleDate>{p.startDate} ~ {p.endDate}</ProjectToggleDate>
                </ProjectToggleInfo>
                <DDay $active={p.id === selectedProject.id}>D + {p.dDay}</DDay>
              </ProjectToggleItem>
            ))}
          </ProjectToggleList>
        )}
      </AddSection>

      <AnalysisButton onClick={onStartAnalysis}>성과랭크 분석하기</AnalysisButton>
    </Wrapper>
  );
};

export default ChronologyTimeline;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const HeaderLeft = styled.div``;

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

const ProjectSelector = styled.div`
  select {
    padding: 8px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
    background: #fff;
    cursor: pointer;
    outline: none;
  }
`;

const VisionCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
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

const TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const YearGroup = styled.div``;

const YearLabel = styled.div`
  display: none;
`;

const YearItems = styled.div``;

const TimelineRow = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 40px;
`;

const DateCol = styled.div`
  width: 80px;
  text-align: right;
  padding-right: 12px;
  flex-shrink: 0;
`;

const YearText = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #222;
  line-height: 1;
`;

const MonthText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #222;
`;

const DotCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
  flex-shrink: 0;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ab47ff;
  flex-shrink: 0;
  margin-top: 4px;
`;

const Line = styled.div`
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, #ab47ff, #4caf50);
  min-height: 40px;
`;

const CardCol = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const TimelineCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const CarouselBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $left }) => $left ? 'left: 8px;' : 'right: 8px;'}
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBody = styled.div`
  padding: 16px;
  background: #fff;
`;

const CardDesc = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
  line-height: 1.5;
`;

const BulletGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`;

const BulletItem = styled.p`
  font-size: 12px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ab47ff;
    flex-shrink: 0;
  }
`;

const AddSection = styled.div`
  margin-bottom: 32px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #fff;
  border: 1.5px dashed #ccc;
  border-radius: 10px;
  font-size: 15px;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: #ab47ff;
    color: #ab47ff;
  }
`;

const ProjectToggleList = styled.div`
  margin-top: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  max-height: 320px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
`;

const ProjectToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${({ $active }) => ($active ? '#f3e8ff' : '#fff')};
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ $active }) => ($active ? '#f3e8ff' : '#fafafa')};
  }
`;

const ProjectToggleInfo = styled.div``;

const ProjectToggleName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #222;
`;

const ProjectToggleDate = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 3px;
`;

const DDay = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? '#ab47ff' : '#555')};
`;

const AnalysisButton = styled.button`
  width: 100%;
  padding: 20px;
  background: #ab47ff;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #9333ea;
  }
`;
