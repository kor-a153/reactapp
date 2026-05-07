import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AccountLayout = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <Logo>
          <LogoBox>&gt;_</LogoBox>
          <LogoText><LogoFail>Fail</LogoFail>Log</LogoText>
        </Logo>
        <Tagline>실패는 성공의 어머니</Tagline>
        <Description>
          나의 실패를 숨기지 않고 정리할 때, 더 선명한 방향과 다음 선택이<br />
          보입니다. Fail Log에서 당신의 성장 데이터를 다시 시작해 보세요.
        </Description>
        <BulletList>
          <BulletItem>실패 경험 기록 및 복기</BulletItem>
          <BulletItem>커뮤니티 기반 인사이트 공유</BulletItem>
          <BulletItem>성장 연대기 포트폴리오 관리</BulletItem>
        </BulletList>
      </LeftPanel>
      <RightPanel>
        <Card>
          <Outlet />
        </Card>
      </RightPanel>
    </Wrapper>
  );
};

export default AccountLayout;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #e8ecff 0%, #f3e8ff 100%);
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 60px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`;

const LogoBox = styled.div`
  background: linear-gradient(135deg, #7c6ff7 0%, #4359fc 100%);
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 6px;
`;

const LogoText = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: #333;
`;

const LogoFail = styled.span`
  font-style: italic;
  color: #4359fc;
`;

const Tagline = styled.h1`
  font-size: 42px;
  font-weight: 800;
  color: #222;
  margin-bottom: 24px;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.9;
  margin-bottom: 40px;
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #333;

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #ab47ff;
    flex-shrink: 0;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
  padding: 48px 44px;
  width: 100%;
  max-width: 440px;
`;
