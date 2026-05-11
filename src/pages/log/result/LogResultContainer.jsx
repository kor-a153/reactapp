import React from 'react';
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LogResultContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isMyLog = id === "my";

  // Mock data for the carousel
  const relatedPeople = [
    { id: 1, category: "건강/취업", date: "2026.03.03", title: "정보처리기사 실기 합격하기!", sub: "금연 성공해서 제 건강 회복하기", author: "필기마스터", views: 45, likes: 38 },
    { id: 2, category: "건강/취업", date: "2026.03.03", title: "정보처리기사 실기 합격하기!", sub: "금연 성공해서 제 건강 회복하기", author: "필기마스터", views: 45, likes: 38 },
    { id: 3, category: "건강/취업", date: "2026.03.03", title: "정보처리기사 실기 합격하기!", sub: "금연 성공해서 제 건강 회복하기", author: "필기마스터", views: 45, likes: 38 },
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{isMyLog ? "My Fail Log" : "View Fail Log"}</S.Title>
        <S.SubTitle>
          {isMyLog
            ? "내가 작성한 페일로그를 확인해보세요."
            : "다른 사람의 페일로그를 경험해보세요."}
        </S.SubTitle>
      </S.Header>

      <S.ContentWrapper>
        <S.TabBar>
          <S.Tab to={`/logs/result/${id}/detail`}>작성 내용</S.Tab>
          <S.Tab 
            to={`/logs/result/${id}/report/patterns`}
            className={location.pathname.includes('/report') ? 'active' : ''}
          >
            분석 결과
          </S.Tab>
        </S.TabBar>

        <S.CardWrapper>
          <S.PurpleShadow />
          <S.Card>
            <Outlet context={{ isMyLog }} />
          </S.Card>
        </S.CardWrapper>

        {/* Carousel Section */}
        <S.CarouselSection>
          <S.CarouselTitle>나와 같은 목표를 달성하기 위해 도전하는 사람들</S.CarouselTitle>
          <S.CarouselSubTitle>다른 사람들의 생생한 노력/복기 사례를 통해 인사이트를 얻어보세요.</S.CarouselSubTitle>

          <S.CarouselContainer>
            <S.NavButton className="left">〈</S.NavButton>
            <S.CardList>
              {relatedPeople.map((person) => (
                <S.RelatedCard key={person.id} onClick={() => navigate(`/logs/result/${person.id}/detail`)}>
                  <S.RelatedBadge>{person.category}</S.RelatedBadge>
                  <S.RelatedDate>{person.date}</S.RelatedDate>
                  <S.RelatedTitle>{person.title}</S.RelatedTitle>
                  <S.RelatedSub>{person.sub}</S.RelatedSub>
                  <S.RelatedFooter>
                    <S.RelatedAuthor>{person.author}</S.RelatedAuthor>
                    <S.RelatedStats>
                      <span>👁️ {person.views}</span>
                      <span>🤍 {person.likes}</span>
                    </S.RelatedStats>
                  </S.RelatedFooter>
                </S.RelatedCard>
              ))}
            </S.CardList>
            <S.NavButton className="right">〉</S.NavButton>
          </S.CarouselContainer>
        </S.CarouselSection>

      </S.ContentWrapper>
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
  background-color: #F8F9FA;
  min-height: 100vh;
`;

S.Header = styled.div`
  text-align: left;
  width: 100%;
  width: 1298px;
  margin-bottom: 100px;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.SubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentWrapper = styled.div`
  width: 100%;
  width: 1320px;
`;

S.TabBar = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 0;
  width: 1320px;
  margin: 0 auto;
  padding-left: 101px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

S.Tab = styled(NavLink)`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.PALETTE.third.main};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.third.main}; /* Default bottom border to match card */
  border-radius: 12px 12px 0 0;
  transition: all 0.2s;
  background: ${({ theme }) => theme.PALETTE.white};
  position: relative;
  top: 1px;
  z-index: 5;

  &.active {
    color: ${({ theme }) => theme.PALETTE.white};
    background-color: ${({ theme }) => theme.PALETTE.third.main};
    border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    border-bottom: 1px solid ${({ theme }) => theme.PALETTE.third.main}; /* Same as background to look merged */
    z-index: 10;
  }

  &:hover:not(.active) {
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    background-color: ${({ theme }) => theme.GRAYSCALE[1]};
  }
`;

S.CardWrapper = styled.div`
  position: relative;
  width: 1320px;
  padding-right: 22px;
  z-index: 1;
`;

S.PurpleShadow = styled.div`
  position: absolute;
  top: 0;
  left: 22px;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px;
  z-index: 0;
`;

S.Card = styled.div`
  background: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px;
  padding: 83px 80px 80px;
  position: relative;
  z-index: 1;
  width: 1298px;
  box-sizing: border-box;
`;

S.VisionLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-top: 24px;
  padding-right: 22px;
`;

S.VisionLinkText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  text-align: right;
  line-height: 1.4;
`;

S.VisionLink = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

S.CarouselSection = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.CarouselTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.CarouselSubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
  margin-bottom: 60px;
`;

S.CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  justify-content: center;
`;

S.CardList = styled.div`
  display: flex;
  gap: 20px;
`;

S.RelatedCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 16px;
  padding: 32px 24px;
  width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

S.RelatedBadge = styled.span`
  background: #E6FFF1;
  color: #00B53F;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 16px;
`;

S.RelatedDate = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  position: absolute;
  right: 24px;
  top: 36px;
`;

S.RelatedTitle = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-bottom: 12px;
  line-height: 1.4;
`;

S.RelatedSub = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.GRAYSCALE[7]};
  margin-bottom: 32px;
  flex: 1;
`;

S.RelatedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

S.RelatedAuthor = styled.span`
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.GRAYSCALE[2]};
    border-radius: 50%;
    display: inline-block;
  }
`;

S.RelatedStats = styled.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.GRAYSCALE[6]};
`;

S.NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${({ theme }) => theme.GRAYSCALE[4]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.GRAYSCALE[8]};
  }
`;

export default LogResultContainer;