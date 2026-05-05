import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';

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

        <Outlet />
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
`;

S.Header = styled.div`
  text-align: left;
  width: 100%;
  max-width: 1298px;
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
  max-width: 1298px;
`;

S.TabBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 0;
`;

S.Tab = styled(NavLink)`
  padding: 16px 48px;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  text-decoration: none;
  color: ${theme.GRAYSCALE[5]};
  border: 1px solid ${theme.GRAYSCALE[3]};
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  transition: all 0.2s;
  background: ${theme.PALETTE.white};
  position: relative;
  top: 1px;
  z-index: 0;
  margin-right: -1px; /* Overlap borders */

  &.active {
    color: ${theme.PALETTE.white};
    background-color: ${theme.PALETTE.third.main};
    border: 1px solid ${theme.PALETTE.third.main};
    border-bottom: none;
    z-index: 2;
  }

  &:hover:not(.active) {
    color: ${theme.TEXT_COLOR.basic};
  }
`;

export default LogResultContainer;