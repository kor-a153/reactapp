import { useState } from 'react';

const ProjectCreateStep1Modal = ({ onClose, onNext }) => {
  const [projectName, setProjectName] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleNext = () => {
    onNext({ projectName, isActive });
  };

  return (
    <div>
      <div>
        <button onClick={onClose}>✕</button>
        <h2>CREATE PROJECT</h2>
        <p>AI로 프로젝트를 생성합니다.<br />원할한 프로젝트 생성을 위해 프로젝트의 이름을 기입해 주세요</p>

        <div>
          <label>프로젝트 이름</label>
          <input
            type="text"
            placeholder="프로젝트 이름을 입력해주세요."
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        <div>
          <label>활성화 상태</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>

        <button onClick={handleNext}>다음</button>
      </div>
    </div>
  );
};

export default ProjectCreateStep1Modal;
