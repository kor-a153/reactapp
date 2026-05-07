import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const LogResultContainer = () => {
  const { id } = useParams();

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>View Fail Log</S.Title>
        <S.SubTitle>다른 사람의 페일로그를 경험해보세요.</S.SubTitle>
      </S.Header>

      <S.ContentWrapper>
        <S.TabBar>
          <S.Tab to={`/logs/result/${id}/detail`}>작성 내용</S.Tab>
          <S.Tab to={`/logs/result/${id}/report/patterns`}>분석 결과</S.Tab>
        </S.TabBar>

        <S.CardWrapper>
          <S.PurpleShadow />
          <S.Card>
            <Outlet />
          </S.Card>
        </S.CardWrapper>
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
  max-width: 1276px;
  margin-bottom: 40px;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.SubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
`;

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 1276px;
`;

S.TabBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 0;
  margin-left: 40px; /* Shifted to the right */
`;

S.Tab = styled(NavLink)`
  padding: 12px 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
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
  width: 100%;
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
  padding: 60px 80px;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 800px;
  box-sizing: border-box;
`;

export default LogResultContainer;