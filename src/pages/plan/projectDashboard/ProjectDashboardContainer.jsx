import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockActions = [
    { id: 1, title: '운동복과 물을 자기 전에 미리 준비하기', status: 'success', memo: '', failAction: '' },
    { id: 2, title: '아침 10분 스트레칭', status: 'fail', memo: '', failAction: '' },
    { id: 3, title: '녀울 긷기', status: null, memo: '', failAction: '' },
];

const recentLogs = [
    { date: '03.13', result: '실패' },
    { date: '03.12', result: '실패' },
    { date: '03.11', result: '성공' },
];

const requirements = [
    { label: '프로젝트 수정 방법' },
    { label: '실패 일수 초기화' },
    { label: '성장 연대기 이동' },
];

const nextActions = [
    { label: '대담한 관련 행동하기' },
    { label: '실내 대체 활동 추진' },
    { label: '주말 일과 변화' },
];

const ProjectDashboardContainer = () => {
    const navigate = useNavigate();
    const [actions, setActions] = useState(mockActions);
    const [expandedId, setExpandedId] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleStatus = (id, status) => {
        setActions(actions.map(a => a.id === id ? { ...a, status } : a));
    };

    const visibleActions = showAll ? actions : actions.slice(0, 3);

    return (
        <div>
            <h1>PROJECT DASHBOARD</h1>

            {/* 프로젝트 카드 */}
            <section>
                <small>AI 추천 프로젝트</small>
                <h2>매일 아침 20분 루틴 만들기</h2>

                <div>
                    <span>오늘 한 일: 3개</span>
                    <span>최근 성공율: 72%</span>
                </div>

                <progress value={80} max={100} />
                <span>80%</span>

                <div>
                    <div>
                        <p>연속 실패</p>
                        <strong>3회</strong>
                    </div>
                    <p>늦잠으로 인한 시간 조...</p>
                </div>
            </section>

            {/* 성공하기 액션 리스트 */}
            <section>
                <h3>성공하기 액션 리스트</h3>

                {visibleActions.map(action => (
                    <div key={action.id}>
                        <div>
                            <strong>{action.title}</strong>
                            {action.status === 'success' && <span>완료 달성</span>}
                            {action.status === 'fail' && <span>완료 실패</span>}
                        </div>

                        <div>
                            <span>한 줄 메모: {action.memo || '아직 작성되지 않았습니다.'}</span>
                            <span>실패 시 대체 행동: {action.failAction || '아직 작성되지 않았습니다.'}</span>
                        </div>

                        <button onClick={() => toggleExpand(action.id)}>
                            {expandedId === action.id ? '▲' : '▼'}
                        </button>

                        {expandedId === action.id && (
                            <div>
                                <textarea
                                    placeholder="한 줄 메모"
                                    onChange={(e) => setActions(actions.map(a => a.id === action.id ? { ...a, memo: e.target.value } : a))}
                                />
                                <textarea
                                    placeholder="실패 시 대체 행동"
                                    onChange={(e) => setActions(actions.map(a => a.id === action.id ? { ...a, failAction: e.target.value } : a))}
                                />
                            </div>
                        )}

                        <div>
                            <button onClick={() => handleStatus(action.id, 'success')}>완료 달성</button>
                            <button onClick={() => handleStatus(action.id, 'fail')}>완료 실패</button>
                        </div>
                    </div>
                ))}

                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? '접기' : '전체 액션 보이기'}
                </button>
            </section>

            {/* 하단 3단 */}
            <section>
                <div>
                    <h4>최근 기록</h4>
                    <ul>
                        {recentLogs.map((log, i) => (
                            <li key={i}>{log.date} {log.result} 기록</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>필요 사항</h4>
                    <ul>
                        {requirements.map((r, i) => (
                            <li key={i}>
                                <button>{r.label}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>다음 추진</h4>
                    <ul>
                        {nextActions.map((n, i) => (
                            <li key={i}>{n.label} ⓘ</li>
                        ))}
                    </ul>
                </div>
            </section>

            <button onClick={() => navigate('/growth')}>성장 연대기 이동하기</button>
        </div>
    );
};

export default ProjectDashboardContainer;
