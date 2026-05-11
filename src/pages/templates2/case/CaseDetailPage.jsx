import React from 'react';
import { useParams } from 'react-router-dom';

const CaseDetailPage = () => {
    const { id } = useParams();

    // 예시 데이터 - 실제로는 API나 데이터베이스에서 가져올 수 있음
    const caseData = {
        1: {
            title: "로그사례 1: 프로젝트 시작",
            content: "이 사례는 새로운 프로젝트를 시작할 때의 경험을 공유합니다. 초기 계획 수립부터 팀 구성까지의 과정을 자세히 설명합니다.",
            date: "2024-01-15",
            author: "개발자 A"
        },
        2: {
            title: "로그사례 2: 기술 스택 선택",
            content: "React와 Node.js를 선택한 이유와 그 과정에서 겪은 고민들을 다룹니다. 기술 선택의 중요성과 고려사항을 설명합니다.",
            date: "2024-02-20",
            author: "개발자 B"
        },
        3: {
            title: "로그사례 3: 배포 및 운영",
            content: "프로젝트를 성공적으로 배포하고 운영하면서 발생한 이슈들과 해결 방법을 공유합니다.",
            date: "2024-03-10",
            author: "개발자 C"
        }
    };

    const caseInfo = caseData[id];

    if (!caseInfo) {
        return (
            <div>
                <h1>사례를 찾을 수 없습니다</h1>
                <p>요청하신 ID({id})에 해당하는 사례가 존재하지 않습니다.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{caseInfo.title}</h1>
            <div style={{ marginBottom: '20px', color: '#666' }}>
                <p>작성자: {caseInfo.author}</p>
                <p>작성일: {caseInfo.date}</p>
            </div>
            <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
                <p>{caseInfo.content}</p>
                <p>더 자세한 내용은 추후 추가될 예정입니다.</p>
            </div>
            <div style={{ marginTop: '30px' }}>
                <button onClick={() => window.history.back()} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    뒤로가기
                </button>
            </div>
        </div>
    );
};

export default CaseDetailPage;