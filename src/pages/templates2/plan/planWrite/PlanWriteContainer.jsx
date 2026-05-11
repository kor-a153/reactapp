import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockActions = [
    { id: 1, title: '운동복과 물을 자기 전에 미리 준비하기', tag: '완료', memo: '한 번 메모:', failAction: '실패 시 대체 행동:', status: null },
    { id: 2, title: '아침 10분 스트레칭', tag: '완료', memo: '', failAction: '', status: null },
];

const mockCases = [
    { id: 1, category: '정보처리', desc: '"AI 시대 "개발"에 대한 열정 가진 분들을 위한 성공 사례입니다."', stars: 5 },
    { id: 2, category: '정보처리', desc: 'AI 관련 전공 없이 관련 경험 쌓으면서 취업한 성공 사례입니다.', stars: 5 },
    { id: 3, category: '정보처리', desc: '"직장인이면서 3개 공부 이상 동시에 공부하는 분들을 위한 사례입니다."', stars: 5 },
];

const PlanWriteContainer = () => {
    const navigate = useNavigate();
    const [expandedId, setExpandedId] = useState(null);
    const [actions, setActions] = useState(mockActions);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleStatus = (id, status) => {
        setActions(actions.map(a => a.id === id ? { ...a, status } : a));
    };

    return (
        <div>
            {/* YOUR VISION */}
            <section>
                <small>YOUR VISION</small>
                <h1>9급공무원 합격하기 ↓</h1>
                <p>2026.03.01 ~ 2027.03.14 ✏️</p>
                <button>목표기간 설정하기</button>
                <div>
                    <span>비전을 이루기까지 D-99999</span>
                </div>
            </section>

            {/* PROJECT */}
            <section>
                <h2>PROJECT</h2>
                <p>AI가 분석한 나의 실패 로그를 바탕으로 목표 달성을 위한 프로젝트를 제시해 드립니다. 해당 프로젝트를 수행하며 목표를 달성해 보세요.</p>

                <div>
                    <small>AI 추천 프로젝트</small>
                    <h3>매일 아침 20분 루틴 만들기</h3>
                    <p>진행도: 70%</p>
                    <progress value={70} max={100} />

                    <div>
                        <div>
                            <strong>AI 행동 피드백 🔗</strong>
                            <p>AI 분석 결과를 바탕으로 현재까지의 행동 패턴에 대한 피드백을 제공합니다.</p>
                            <p>꾸준한 실천이 중요합니다.</p>
                        </div>
                        <div>
                            <strong>현재 프로젝트 요약 🔗</strong>
                            <ul>
                                <li>최근 성공율: 72%</li>
                                <li>남은 일: 14일</li>
                                <li>연속 실패: 10일 이상</li>
                                <li>다음 목표: 작게 시작</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* DAILY ACTION 리스트 */}
            <section>
                <h2>DAILY ACTION 리스트 🔗</h2>

                {actions.map(action => (
                    <div key={action.id}>
                        <div>
                            <strong>{action.title}</strong>
                            <span>{action.tag}</span>
                        </div>
                        <div>
                            <span>{action.memo || '한 줄 메모:'}</span>
                            <span>{action.failAction || '실패 시 대체 행동:'}</span>
                        </div>

                        <button onClick={() => toggleExpand(action.id)}>
                            {expandedId === action.id ? '▲' : '▼'}
                        </button>

                        {expandedId === action.id && (
                            <div>
                                <textarea placeholder="한 줄 메모를 입력하세요" />
                                <textarea placeholder="실패 시 대체 행동을 입력하세요" />
                            </div>
                        )}

                        <div>
                            <button onClick={() => handleStatus(action.id, 'success')}>목표 달성</button>
                            <button onClick={() => handleStatus(action.id, 'fail')}>목표 실패</button>
                        </div>
                    </div>
                ))}

                <div>
                    <button>프로젝트 관리하기</button>
                    <button onClick={() => navigate('/plan/dashboard')}>대시보드 이동</button>
                </div>
            </section>

            {/* 비슷한 목표 성공 사례 */}
            <section>
                <h2>비슷한 목표를 수정해서 성공한 사례</h2>
                <p>다른 사람들과 관련된 노력하기 사례를 통해 새로운 인사이트를 얻어보세요</p>

                <div>
                    {mockCases.map(c => (
                        <div key={c.id}>
                            <span>{c.category}</span>
                            <p>{c.desc}</p>
                            <span>{'★'.repeat(c.stars)}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PlanWriteContainer;
