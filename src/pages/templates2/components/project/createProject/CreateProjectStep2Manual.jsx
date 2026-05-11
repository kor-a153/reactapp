import { useState } from 'react';

const CreateProjectStep2Manual = ({ onNext, onClose }) => {
    const [form, setForm] = useState({ name: '', startDate: '', endDate: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div>
                <h2>CREATE PROJECT</h2>
                <button onClick={onClose}>X</button>
            </div>

            <p>직접 프로젝트를 작성합니다.<br />프로젝트의 이름 ,기간과 체크리스트를 설정해 주세요</p>

            <label>프로젝트 이름</label>
            <input
                type="text"
                name="name"
                placeholder="이름을 입력해 주세요"
                value={form.name}
                onChange={handleChange}
            />

            <label>시작일</label>
            <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
            />

            <label>종료일</label>
            <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
            />

            <button onClick={() => onNext(form)}>다음</button>
        </div>
    );
};

export default CreateProjectStep2Manual;
