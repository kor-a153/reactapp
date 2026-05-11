import { useState } from 'react';

const CreateProjectStep1 = ({ onNext, onClose }) => {
    const [selected, setSelected] = useState('ai');

    return (
        <div>
            <div>
                <h2>CREATE PROJECT</h2>
                <button onClick={onClose}>X</button>
            </div>

            <p>새로운 프로젝트를 만들어 드릴게요.<br />아래에서 선택사항에 체크 해주세요</p>

            <div>
                <div onClick={() => setSelected('ai')} style={{ border: selected === 'ai' ? '2px solid purple' : '1px solid #ccc', background: selected === 'ai' ? '#f3e8ff' : '#fff', cursor: 'pointer', padding: '16px', borderRadius: '8px', marginBottom: '12px' }}>
                    <small>AI 기능</small>
                    <p>AI 도움을 받아 프로젝트 작성하기</p>
                    <input type="radio" readOnly checked={selected === 'ai'} />
                </div>

                <div onClick={() => setSelected('manual')} style={{ border: selected === 'manual' ? '2px solid purple' : '1px solid #ccc', background: selected === 'manual' ? '#f3e8ff' : '#fff', cursor: 'pointer', padding: '16px', borderRadius: '8px' }}>
                    <p>직접 프로젝트 작성하기</p>
                    <input type="radio" readOnly checked={selected === 'manual'} />
                </div>
            </div>

            <button onClick={() => onNext(selected)}>프로젝트 작성하기</button>
        </div>
    );
};

export default CreateProjectStep1;
