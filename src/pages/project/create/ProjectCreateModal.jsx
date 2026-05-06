import { useState } from 'react';

const ProjectCreateModal = ({ onClose, onNext }) => {
  const [selected, setSelected] = useState('ai');

  const handleSubmit = () => {
    onNext(selected);
  };

  return (
    <div>
      <div>
        <button onClick={onClose}>✕</button>

        <h2>CREATE PROJECT</h2>
        <p>새로운 프로젝트를 만들어 드릴게요.<br />아래에서 선택사항에 체크 해주세요</p>

        <div onClick={() => setSelected('ai')}>
          <p>AI 기능</p>
          <div>
            <p>AI 도움을 받아 프로젝트 작성하기</p>
            <div>{selected === 'ai' && <span>✓</span>}</div>
          </div>
        </div>

        <div onClick={() => setSelected('direct')}>
          <div>
            <p>직접 프로젝트 작성하기</p>
            <div>{selected === 'direct' && <span>✓</span>}</div>
          </div>
        </div>

        <button onClick={handleSubmit}>프로젝트 작성하기</button>
      </div>
    </div>
  );
};

export default ProjectCreateModal;
