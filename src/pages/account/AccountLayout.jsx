import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AccountLayout = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <Logo>
          <img src="/logo.png" alt="FailLog" style={{ height: '48px', width: 'auto' }} />
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
  background: #f0f4ff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -120px;
    left: -120px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 179, 255, 0.45) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -120px;
    right: -80px;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, transparent 70%);
    pointer-events: none;
  }
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
