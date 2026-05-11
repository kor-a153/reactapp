import React from 'react';
import { Form, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';
import CommS from '../profile/styles/CommunityStyles';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import DraftLogsComponent from './components/DraftLogsComponent';

const MyFailLogsContainer = () => {
  const navigate = useNavigate();

  // 1. 작성 중인 로그 임시 데이터
  const draftLogs = [
    { id: 1, title: "작성중인 페일로그 1", content: '"신기시험 실패의 원인을 찾아서" 역시 술을 마시면 안됐던 걸까?', progress: 80, date: "3일 전", color: "#A5B4C3" },
    { id: 2, title: "작성중인 페일로그 2", content: '"신기시험 실패의 원인을 찾아서" 역시 술을 마시면 안됐던 걸까?', progress: 60, date: "3월 전", color: "#94A3B8" },
    { id: 3, title: "작성중인 페일로그 3", content: '"신기시험 실패의 원인을 찾아서" 역시 술을 마시면 안됐던 걸까?', progress: 80, date: "3월 전", color: "#8E9EB1" },
  ];

  // 2. 완료된 로그 리스트 데이터
  const logs = [
    { id: 1, title: "당신의 가장 빛났던 실패 이야기", content: "실패는 성공의 어머니라는 말이 있듯이...", createdAt: "2026-05-10" },
    { id: 2, title: "리액트 경로 에러 해결기", content: "파일을 분리하면서 겪었던 수많은 에러들...", createdAt: "2026-05-09" },
  ];

  return (
    <PageS.MainWrapper>
      {/* 순환형 히어로 섹션 */}
      <HeroRotationComponent />

      {/* 작성 중인 페일로그 섹션 (이미지 f79b26 부분) */}
      <DraftLogsComponent draftLogs={draftLogs} />

      {/* 나의 페일로그 섹션 */}
      <div style={{ padding: '40px 0' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>
          나의 <span style={{ color: '#5D5FEF' }}>페일로그</span>
        </h2>

        {logs.length === 0 ? (
          <CommS.EmptyStateWrapper>
            <CommS.EmptyTitle>
              아직 기록된 실패가 없네요.<br/>
              <strong>첫 번째 페일로그</strong>를 적어볼까요?
            </CommS.EmptyTitle>
            <CommS.EmptySubText>
              실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다.
            </CommS.EmptySubText>
            <CommS.StartButton onClick={() => navigate('/fail-logs')}>시작하기</CommS.StartButton>
          </CommS.EmptyStateWrapper>
        ) : (
          <CommS.PostGrid>
            {logs.map((log) => (
              <CommS.CardWrapper key={log.id} onClick={() => navigate(`/fail-logs/${log.id}`)}>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{log.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{log.content}</p>
                  <div style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>{log.createdAt}</div>
                </div>
              </CommS.CardWrapper>
            ))}
          </CommS.PostGrid>
        )}
      </div>
    </PageS.MainWrapper>
  );
};

export default MyFailLogsContainer;