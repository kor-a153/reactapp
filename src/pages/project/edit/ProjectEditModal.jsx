import { useState } from 'react';

const ProjectEditModal = ({ onClose, onSubmit, initialData = {} }) => {
  const [projectName, setProjectName] = useState(initialData.projectName || '');
  const [isActive, setIsActive] = useState(initialData.isActive ?? true);
  const [startDate, setStartDate] = useState(initialData.startDate || '');
  const [endDate, setEndDate] = useState(initialData.endDate || '');

  const handleSubmit = () => {
    onSubmit({ projectName, isActive, startDate, endDate });
    onClose();
  };

  return (
    <div>
      <div>
        <button onClick={onClose}>✕</button>
        <h2>EDIT PROJECT</h2>
        <p>프로젝트를 수정합니다.<br />수정할 내용을 입력해 주세요</p>

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

        <button onClick={handleSubmit}>수정하기</button>
      </div>
    </div>
  );
};

export default ProjectEditModal;
