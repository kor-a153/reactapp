import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockItems = [
    { id: 1, title: '운동복과 물을 자기 전에 미리 준비하기', priority: '우선순위 높음', memo: '', failCause: '', failAction: '', status: null },
    { id: 2, title: '운동복과 물을 자기 전에 미리 준비하기', priority: '우선순위 높음', memo: '', failCause: '', failAction: '', status: null },
];

const DailyCheckListContainer = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState(mockItems);
    const [expandedId, setExpandedId] = useState(null);

    const handleStatusChange = (id, status) => {
        setItems(items.map(item => item.id === id ? { ...item, status } : item));
    };

    const handleFieldChange = (id, field, value) => {
        setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div>
            <h1>DAILY CHECK LIST</h1>
            <p>AI가 만든 액션을 그대로 쓰거나, 삭제/추가/수정해서 내 계획으로 확정할 수 있습니다.</p>

            {items.map(item => (
                <div key={item.id}>
                    <div>
                        <strong>{item.title}</strong>
                        <span>{item.priority}</span>
                        {item.status === 'success' ? <span>✅</span> : item.status === 'fail' ? <span>❗</span> : null}
                    </div>

                    <div>
                        <span>한 줄 메모 : {item.memo || '아직 작성되지 않았습니다.'}</span>
                        {item.status === 'fail' && (
                            <span>실패 원인 : {item.failCause || '아직 작성되지 않았습니다.'}</span>
                        )}
                        <span>실패 시 대체 행동 : {item.failAction || '아직 작성되지 않았습니다.'}</span>
                    </div>

                    <button onClick={() => toggleExpand(item.id)}>
                        {expandedId === item.id ? '▲' : '▼'}
                    </button>

                    {expandedId === item.id && (
                        <div>
                            <div>
                                <label>한 줄 메모</label>
                                <textarea
                                    placeholder="내용을 입력하세요"
                                    value={item.memo}
                                    onChange={(e) => handleFieldChange(item.id, 'memo', e.target.value)}
                                />
                            </div>
                            <div>
                                <label>실패 원인</label>
                                <textarea
                                    placeholder="내용을 입력하세요"
                                    value={item.failCause}
                                    onChange={(e) => handleFieldChange(item.id, 'failCause', e.target.value)}
                                />
                            </div>
                            <div>
                                <label>실패 시 대체 행동</label>
                                <textarea
                                    placeholder="내용을 입력하세요"
                                    value={item.failAction}
                                    onChange={(e) => handleFieldChange(item.id, 'failAction', e.target.value)}
                                />
                            </div>
                            <button onClick={() => toggleExpand(item.id)}>수정하기</button>
                        </div>
                    )}

                    <div>
                        <button onClick={() => handleStatusChange(item.id, 'success')}>목표 달성</button>
                        <button onClick={() => handleStatusChange(item.id, 'fail')}>목표 실패</button>
                    </div>
                </div>
            ))}

            <button onClick={() => navigate('/growth')}>대시보드로 이동</button>
        </div>
    );
};

export default DailyCheckListContainer;
