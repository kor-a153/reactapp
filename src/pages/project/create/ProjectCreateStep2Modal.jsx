import { useState } from 'react';

const ProjectCreateStep2Modal = ({ onClose, onSubmit, projectName: initialName, isActive: initialActive }) => {
  const [projectName, setProjectName] = useState(initialName || '');
  const [isActive, setIsActive] = useState(initialActive ?? true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    onSubmit({ projectName, isActive, startDate, endDate });
    onClose();
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
          <label>시작일</label>
          <input
            type="date"
            placeholder="시작 날짜를 선택해주세요."
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>종료일</label>
          <input
            type="date"
            placeholder="종료 날짜를 선택해주세요."
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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

        <button onClick={handleSubmit}>생성하기</button>
      </div>
    </div>
  );
};

export default ProjectCreateStep2Modal;
