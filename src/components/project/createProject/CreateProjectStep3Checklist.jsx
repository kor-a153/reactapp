import { useState } from 'react';

const CreateProjectStep3Checklist = ({ onComplete, onClose }) => {
    const [items, setItems] = useState(['']);

    const handleChange = (index, value) => {
        const updated = [...items];
        updated[index] = value;
        setItems(updated);
    };

    const addItem = () => {
        setItems([...items, '']);
    };

    return (
        <div>
            <div>
                <h2>CREATE PROJECT</h2>
                <button onClick={onClose}>X</button>
            </div>

            <p>이제 거의 다 됐어요 😁<br />프로젝트 기간동안 수행할 체크리스트를 작성해주세요</p>

            <label>체크리스트 작성</label>
            {items.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="내용을 입력해 주세요"
                    value={item}
                    onChange={(e) => handleChange(index, e.target.value)}
                />
            ))}

            <button onClick={addItem}>+</button>

            <button onClick={() => onComplete(items)}>체크리스트 생성하기</button>
        </div>
    );
};

export default CreateProjectStep3Checklist;
