import { useState } from 'react';

const CreateProjectStep2AI = ({ onNext, onClose }) => {
    const [projectName, setProjectName] = useState('');

    return (
        <div>
            <div>
                <h2>CREATE PROJECT</h2>
                <button onClick={onClose}>X</button>
            </div>

            <p>AI로 프로젝트를 생성합니다.<br />원활한 프로젝트 생성을 위해 프로젝트의 이름을 기입해 주세요</p>

            <label>프로젝트 이름</label>
            <input
                type="text"
                placeholder="이름을 입력해 주세요"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />

            <button onClick={() => onNext(projectName)}>프로젝트 생성하기</button>
        </div>
    );
};

export default CreateProjectStep2AI;
