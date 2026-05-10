import React from 'react';
import LogS from '../styles/MyFailLogStyles';

const DraftLogsComponent = ({ draftLogs }) => {
  return (
    <LogS.DraftSection>
      <h2>아직 <span>작성 중인 페일로그</span>가 있어요.</h2>
      <LogS.DraftGrid>
        {draftLogs.map((log) => (
          <LogS.DraftCard key={log.id} bgColor={log.color}>
            <div className="CardHeader">
              <h3>{log.title}</h3>
              <p>{log.content}</p>
            </div>
            <div className="CardImage">
              <div style={{width: '120px', height: '120px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px'}} />
            </div>
            <div className="CardFooter">
              <div className="InfoText">
                <div>진행도: {log.progress}%</div>
                <div>마지막 수정: {log.date}</div>
              </div>
              <div className="StatusTag">미완성</div>
            </div>
          </LogS.DraftCard>
        ))}
      </LogS.DraftGrid>
    </LogS.DraftSection>
  );
};

export default DraftLogsComponent;