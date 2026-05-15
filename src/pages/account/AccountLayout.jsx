import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './styles/AccountLayoutStyle';

const AccountLayout = () => {
  return (
    <S.Wrapper>
      <S.LeftPanel>
        <S.Logo>
          <img src="assets\picture\logo.png" alt="FailLog" style={{ height: '211px', width: 'auto' }} />
        </S.Logo>
        <S.Tagline>실패는 성공의 어머니</S.Tagline>
        <S.Description>
          나의 실패를 숨기지 않고 정리할 때, 더 선명한 방향과 다음 선택이<br />
          보입니다. Fail Log에서 당신의 성장 데이터를 다시 시작해 보세요.
        </S.Description>
        <S.BulletList>
          <S.BulletItem>실패 경험 기록 및 복기</S.BulletItem>
          <S.BulletItem>커뮤니티 기반 인사이트 공유</S.BulletItem>
          <S.BulletItem>성장 연대기 포트폴리오 관리</S.BulletItem>
        </S.BulletList>
      </S.LeftPanel>
      <S.RightPanel>
        <S.Card>
          <Outlet />
        </S.Card>
      </S.RightPanel>
    </S.Wrapper>
  );
};

export default AccountLayout;
