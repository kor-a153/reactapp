import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogResultContainer = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('result');
    const [analysisView, setAnalysisView] = useState('pattern');

    return (
        <div>
            {/* 탭 */}
            <div>
                <button onClick={() => setActiveTab('write')}>작성 내용</button>
                <button onClick={() => setActiveTab('result')}>분석 결과</button>
            </div>

            {/* 분석 결과 탭 */}
            {activeTab === 'result' && (
                <div>
                    {/* 패턴분석 / 행동계획 선택 버튼 */}
                    <div>
                        <button onClick={() => setAnalysisView('pattern')}>패턴 분석</button>
                        <button onClick={() => setAnalysisView('action')}>행동 계획</button>
                    </div>

                    {/* 패턴 분석 */}
                    {analysisView === 'pattern' && (
                        <section>
                            <h2>패턴 분석</h2>
                            <p>입력하신 실패 경험을 바탕으로 분석된 행동 패턴입니다.</p>
                            <ul>
                                <li>패턴 1: 내부 요인보다 외부 요인에 의존하는 경향</li>
                                <li>패턴 2: 단기 결과에 집중하여 장기 계획이 부족함</li>
                                <li>패턴 3: 결정 시 감정적 요인이 크게 작용함</li>
                            </ul>
                        </section>
                    )}

                    {/* 행동 계획 */}
                    {analysisView === 'action' && (
                        <section>
                            <h2>행동 계획</h2>
                            <p>패턴 분석을 바탕으로 제안하는 행동 계획입니다.</p>
                            <ol>
                                <li>매일 15분 회고 습관 만들기</li>
                                <li>결정 전 내부 요인 체크리스트 작성하기</li>
                                <li>단기/장기 목표를 분리하여 계획 수립하기</li>
                            </ol>
                        </section>
                    )}
                </div>
            )}

            {/* 작성 내용 탭 */}
            {activeTab === 'write' && (
                <div>
                    <p>작성하신 내용이 여기에 표시됩니다.</p>
                </div>
            )}

            {/* 하단 버튼 */}
            <div>
                <button onClick={() => navigate('/log/write')}>새로 작성하기</button>
                <button onClick={() => navigate('/mypage/my-logs')}>나의 연대기</button>
                <button onClick={() => navigate('/plan/write')}>계획서 작성하기</button>
            </div>
        </div>
    );
};

export default LogResultContainer;
